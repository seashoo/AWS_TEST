import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentity, Logger, ParsedIniData, Profile } from "@smithy/types";

import { FromIniInit } from "./fromIni";
import { resolveCredentialSource } from "./resolveCredentialSource";
import { resolveProfileData } from "./resolveProfileData";

/**
 * @internal
 *
 * @see http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/STS.html#assumeRole-property
 * TODO update the above to link to V3 docs
 */
export interface AssumeRoleParams {
  /**
   * The identifier of the role to be assumed.
   */
  RoleArn: string;

  /**
   * A name for the assumed role session.
   */
  RoleSessionName: string;

  /**
   * A unique identifier that is used by third parties when assuming roles in
   * their customers' accounts.
   */
  ExternalId?: string;

  /**
   * The identification number of the MFA device that is associated with the
   * user who is making the `AssumeRole` call.
   */
  SerialNumber?: string;

  /**
   * The value provided by the MFA device.
   */
  TokenCode?: string;

  /**
   * The duration, in seconds, of the role session.
   */
  DurationSeconds?: number;
}

interface AssumeRoleWithSourceProfile extends Profile {
  role_arn: string;
  source_profile: string;
}

interface AssumeRoleWithProviderProfile extends Profile {
  role_arn: string;
  credential_source: string;
}

/**
 * @internal
 */
export const isAssumeRoleProfile = (
  arg: any,
  { profile = "default", logger }: { profile?: string; logger?: Logger } = {}
) => {
  return (
    Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg, { profile, logger }) || isCredentialSourceProfile(arg, { profile, logger }))
  );
};

const isAssumeRoleWithSourceProfile = (
  arg: any,
  { profile, logger }: { profile: string; logger?: Logger }
): arg is AssumeRoleWithSourceProfile => {
  const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
  if (withSourceProfile) {
    logger?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
  }
  return withSourceProfile;
};

const isCredentialSourceProfile = (
  arg: any,
  { profile, logger }: { profile: string; logger?: Logger }
): arg is AssumeRoleWithProviderProfile => {
  const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
  if (withProviderProfile) {
    logger?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
  }
  return withProviderProfile;
};

/**
 * @internal
 */
export const resolveAssumeRoleCredentials = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  visitedProfiles: Record<string, true> = {}
) => {
  options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
  const data = profiles[profileName];

  if (!options.roleAssumer) {
    // @ts-ignore Cannot find module '@aws-sdk/client-sts'
    const { getDefaultRoleAssumer } = await import("@aws-sdk/client-sts");
    options.roleAssumer = getDefaultRoleAssumer(
      {
        ...options.clientConfig,
        credentialProviderLogger: options.logger,
        parentClientConfig: options?.parentClientConfig,
      },
      options.clientPlugins
    );
  }

  const { source_profile } = data;
  if (source_profile && source_profile in visitedProfiles) {
    throw new CredentialsProviderError(
      `Detected a cycle attempting to resolve credentials for profile` +
        ` ${getProfileName(options)}. Profiles visited: ` +
        Object.keys(visitedProfiles).join(", "),
      { logger: options.logger }
    );
  }

  options.logger?.debug(
    `@aws-sdk/credential-provider-ini - finding credential resolver using ${
      source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`
    }`
  );

  const sourceCredsProvider: Promise<AwsCredentialIdentity> = source_profile
    ? resolveProfileData(
        source_profile,
        {
          ...profiles,
          [source_profile]: {
            ...profiles[source_profile],
            // This assigns the role_arn of the "root" profile
            // to the credential_source profile so this recursive call knows
            // what role to assume.
            role_arn: data.role_arn ?? profiles[source_profile].role_arn,
          },
        },
        options,
        {
          ...visitedProfiles,
          [source_profile]: true,
        }
      )
    : (await resolveCredentialSource(data.credential_source!, profileName, options.logger)(options))();

  const params: AssumeRoleParams = {
    RoleArn: data.role_arn!,
    RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
    ExternalId: data.external_id,
    DurationSeconds: parseInt(data.duration_seconds || "3600", 10),
  };

  const { mfa_serial } = data;
  if (mfa_serial) {
    if (!options.mfaCodeProvider) {
      throw new CredentialsProviderError(
        `Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`,
        { logger: options.logger, tryNextLink: false }
      );
    }
    params.SerialNumber = mfa_serial;
    params.TokenCode = await options.mfaCodeProvider(mfa_serial);
  }

  const sourceCreds = await sourceCredsProvider;
  return options.roleAssumer!(sourceCreds, params);
};
