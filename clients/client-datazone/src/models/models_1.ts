// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionParameters,
  AssetItem,
  AssetItemFilterSensitiveLog,
  AssetListingItem,
  AssetListingItemFilterSensitiveLog,
  AssetTypeItem,
  AssetTypeItemFilterSensitiveLog,
  ConfigurableEnvironmentAction,
  CustomParameter,
  CustomParameterFilterSensitiveLog,
  DataProductSummary,
  DataProductSummaryFilterSensitiveLog,
  Deployment,
  DeploymentProperties,
  EnvironmentParameter,
  EnvironmentStatus,
  FailureCause,
  FormEntryOutput,
  FormEntryOutputFilterSensitiveLog,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GrantedEntity,
  GroupProfileStatus,
  Import,
  ImportFilterSensitiveLog,
  Model,
  NotificationType,
  ProjectDeletionError,
  ProjectStatus,
  ProvisioningProperties,
  Resource,
  SortOrder,
  SubscribedAsset,
  SubscribedListing,
  SubscribedListingFilterSensitiveLog,
  SubscribedPrincipal,
  SubscribedPrincipalFilterSensitiveLog,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  SubscriptionTargetForm,
  TaskStatus,
  TermRelations,
  TimeSeriesDataPointFormOutput,
  TimeSeriesDataPointSummaryFormOutput,
  TimeSeriesEntityType,
  UserDesignation,
  UserProfileDetails,
  UserProfileDetailsFilterSensitiveLog,
  UserProfileStatus,
  UserProfileType,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const NotificationResourceType = {
  PROJECT: "PROJECT",
} as const;

/**
 * @public
 */
export type NotificationResourceType = (typeof NotificationResourceType)[keyof typeof NotificationResourceType];

/**
 * <p>The details of the resource mentioned in a notification.</p>
 * @public
 */
export interface NotificationResource {
  /**
   * <p>The type of the resource mentioned in a notification.</p>
   * @public
   */
  type: NotificationResourceType | undefined;

  /**
   * <p>The ID of the resource mentioned in a notification.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the resource mentioned in a notification.</p>
   * @public
   */
  name?: string;
}

/**
 * @public
 * @enum
 */
export const NotificationRole = {
  DOMAIN_OWNER: "DOMAIN_OWNER",
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
  PROJECT_SUBSCRIBER: "PROJECT_SUBSCRIBER",
  PROJECT_VIEWER: "PROJECT_VIEWER",
} as const;

/**
 * @public
 */
export type NotificationRole = (typeof NotificationRole)[keyof typeof NotificationRole];

/**
 * <p>The topic of the notification.</p>
 * @public
 */
export interface Topic {
  /**
   * <p>The subject of the resource mentioned in a notification.</p>
   * @public
   */
  subject: string | undefined;

  /**
   * <p>The details of the resource mentioned in a notification.</p>
   * @public
   */
  resource: NotificationResource | undefined;

  /**
   * <p>The role of the resource mentioned in a notification.</p>
   * @public
   */
  role: NotificationRole | undefined;
}

/**
 * <p>The details of a notification generated in Amazon DataZone.</p>
 * @public
 */
export interface NotificationOutput {
  /**
   * <p>The identifier of the notification.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The identifier of a Amazon DataZone domain in which the notification exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of the notification.</p>
   * @public
   */
  type: NotificationType | undefined;

  /**
   * <p>The topic of the notification.</p>
   * @public
   */
  topic: Topic | undefined;

  /**
   * <p>The title of the notification.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The message included in the notification.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The status included in the notification.</p>
   * @public
   */
  status?: TaskStatus;

  /**
   * <p>The action link included in the notification.</p>
   * @public
   */
  actionLink: string | undefined;

  /**
   * <p>The timestamp of when a notification was created.</p>
   * @public
   */
  creationTimestamp: Date | undefined;

  /**
   * <p>The timestamp of when the notification was last updated.</p>
   * @public
   */
  lastUpdatedTimestamp: Date | undefined;

  /**
   * <p>The metadata included in the notification.</p>
   * @public
   */
  metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * <p>The results of the <code>ListNotifications</code> action.</p>
   * @public
   */
  notifications?: NotificationOutput[];

  /**
   * <p>When the number of notifications is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of notifications, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListNotifications</code> to
   *          list the next set of notifications.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortFieldProject = {
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type SortFieldProject = (typeof SortFieldProject)[keyof typeof SortFieldProject];

/**
 * @public
 */
export interface ListProjectMembershipsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which you want to list project
   *          memberships.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project whose memberships you want to list.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The method by which you want to sort the project memberships.</p>
   * @public
   */
  sortBy?: SortFieldProject;

  /**
   * <p>The sort order of the project memberships.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>When the number of memberships is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of memberships, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjectMemberships</code>
   *          to list the next set of memberships.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of memberships to return in a single call to
   *             <code>ListProjectMemberships</code>. When the number of memberships to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListProjectMemberships</code> to list the next set of memberships.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The details of a group in Amazon DataZone.</p>
 * @public
 */
export interface GroupDetails {
  /**
   * <p>The identifier of the group in Amazon DataZone.</p>
   * @public
   */
  groupId: string | undefined;
}

/**
 * <p>The user details of a project member.</p>
 * @public
 */
export interface UserDetails {
  /**
   * <p>The identifier of the Amazon DataZone user.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * <p>The details about a project member.</p>
 * @public
 */
export type MemberDetails = MemberDetails.GroupMember | MemberDetails.UserMember | MemberDetails.$UnknownMember;

/**
 * @public
 */
export namespace MemberDetails {
  /**
   * <p>The user details of a project member.</p>
   * @public
   */
  export interface UserMember {
    user: UserDetails;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>The group details of a project member.</p>
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: GroupDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    user: (value: UserDetails) => T;
    group: (value: GroupDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MemberDetails, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The details of a project member.</p>
 * @public
 */
export interface ProjectMember {
  /**
   * <p>The membership details of a project member.</p>
   * @public
   */
  memberDetails: MemberDetails | undefined;

  /**
   * <p>The designated role of a project member.</p>
   * @public
   */
  designation: UserDesignation | undefined;
}

/**
 * @public
 */
export interface ListProjectMembershipsOutput {
  /**
   * <p>The members of the project.</p>
   * @public
   */
  members: ProjectMember[] | undefined;

  /**
   * <p>When the number of memberships is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of memberships, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjectMemberships</code>
   *          to list the next set of memberships.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user.</p>
   * @public
   */
  userIdentifier?: string;

  /**
   * <p>The identifier of a group.</p>
   * @public
   */
  groupIdentifier?: string;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name?: string;

  /**
   * <p>When the number of projects is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of projects, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjects</code> to list
   *          the next set of projects.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of projects to return in a single call to <code>ListProjects</code>.
   *          When the number of projects to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>ListProjects</code> to list the next set of
   *          projects.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The details of a Amazon DataZone project.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The identifier of a Amazon DataZone domain where the project exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of a project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of a project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of a project.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  projectStatus?: ProjectStatus;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureReasons?: ProjectDeletionError[];

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when a project was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the project was updated.</p>
   * @public
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * <p>The results of the <code>ListProjects</code> action.</p>
   * @public
   */
  items?: ProjectSummary[];

  /**
   * <p>When the number of projects is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of projects, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjects</code> to list
   *          the next set of projects.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortKey = {
  CREATED_AT: "CREATED_AT",
  UPDATED_AT: "UPDATED_AT",
} as const;

/**
 * @public
 */
export type SortKey = (typeof SortKey)[keyof typeof SortKey];

/**
 * @public
 */
export interface ListSubscriptionGrantsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone environment.</p>
   * @public
   */
  environmentId?: string;

  /**
   * <p>The identifier of the subscription target.</p>
   * @public
   */
  subscriptionTargetId?: string;

  /**
   * <p>The identifier of the subscribed listing.</p>
   * @public
   */
  subscribedListingId?: string;

  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  subscriptionId?: string;

  /**
   * <p>Specifies the way of sorting the results of this action.</p>
   * @public
   */
  sortBy?: SortKey;

  /**
   * <p>Specifies the sort order of this action.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The maximum number of subscription grants to return in a single call to
   *             <code>ListSubscriptionGrants</code>. When the number of subscription grants to be listed
   *          is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionGrants</code> to list the next set of subscription grants.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of subscription grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription grants, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptionGrants</code>
   *          to list the next set of subscription grants.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of the subscription grant.</p>
 * @public
 */
export interface SubscriptionGrantSummary {
  /**
   * <p>The identifier of the subscription grant.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The datazone user who created the subscription grant.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when a subscription grant was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestampf of when the subscription grant was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The identifier of the target of the subscription grant.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The entity to which the subscription is granted.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status of the subscription grant.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The assets included in the subscription grant.</p>
   * @public
   */
  assets?: SubscribedAsset[];

  /**
   * <p>The ID of the subscription grant.</p>
   * @public
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface ListSubscriptionGrantsOutput {
  /**
   * <p>The results of the <code>ListSubscriptionGrants</code> action. </p>
   * @public
   */
  items: SubscriptionGrantSummary[] | undefined;

  /**
   * <p>When the number of subscription grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription grants, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptionGrants</code>
   *          to list the next set of subscription grants.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Specifies the status of the subscription requests.</p>
   * @public
   */
  status?: SubscriptionRequestStatus;

  /**
   * <p>The identifier of the subscribed listing.</p>
   * @public
   */
  subscribedListingId?: string;

  /**
   * <p>The identifier of the project for the subscription requests.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The identifier of the subscription request approver's project.</p>
   * @public
   */
  approverProjectId?: string;

  /**
   * <p>Specifies the way to sort the results of this action.</p>
   * @public
   */
  sortBy?: SortKey;

  /**
   * <p>Specifies the sort order for the results of this action.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The maximum number of subscription requests to return in a single call to
   *             <code>ListSubscriptionRequests</code>. When the number of subscription requests to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of subscription requests is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription requests, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of the subscription request.</p>
 * @public
 */
export interface SubscriptionRequestSummary {
  /**
   * <p>The identifier of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription request exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when a subscription request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the subscription request.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>The principals included in the subscription request. </p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The listings included in the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the subscription request reviewer.</p>
   * @public
   */
  reviewerId?: string;

  /**
   * <p>The decision comment of the subscription request.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsOutput {
  /**
   * <p>The results of the <code>ListSubscriptionRequests</code> action. </p>
   * @public
   */
  items: SubscriptionRequestSummary[] | undefined;

  /**
   * <p>When the number of subscription requests is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription requests, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request for the subscriptions that you want to
   *          list.</p>
   * @public
   */
  subscriptionRequestIdentifier?: string;

  /**
   * <p>The status of the subscriptions that you want to list.</p>
   * @public
   */
  status?: SubscriptionStatus;

  /**
   * <p>The identifier of the subscribed listing for the subscriptions that you want to
   *          list.</p>
   * @public
   */
  subscribedListingId?: string;

  /**
   * <p>The identifier of the owning project.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The identifier of the project for the subscription's approver.</p>
   * @public
   */
  approverProjectId?: string;

  /**
   * <p>Specifies the way in which the results of this action are to be sorted.</p>
   * @public
   */
  sortBy?: SortKey;

  /**
   * <p>Specifies the sort order for the results of this action.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The maximum number of subscriptions to return in a single call to
   *             <code>ListSubscriptions</code>. When the number of subscriptions to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListSubscriptions</code> to list the
   *          next set of Subscriptions. </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of subscriptions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscriptions, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptions</code> to
   *          list the next set of subscriptions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of the subscription.</p>
 * @public
 */
export interface SubscriptionSummary {
  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp of when the subscription was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The principal included in the subscription.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The listing included in the subscription.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The identifier of the subscription request for the subscription.</p>
   * @public
   */
  subscriptionRequestId?: string;

  /**
   * <p>The retain permissions included in the subscription.</p>
   * @public
   */
  retainPermissions?: boolean;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * <p>The results of the <code>ListSubscriptions</code> action.</p>
   * @public
   */
  items: SubscriptionSummary[] | undefined;

  /**
   * <p>When the number of subscriptions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscriptions, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptions</code> to
   *          list the next set of subscriptions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionTargetsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain where you want to list subscription
   *          targets.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment where you want to list subscription targets.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>Specifies the way in which the results of this action are to be sorted.</p>
   * @public
   */
  sortBy?: SortKey;

  /**
   * <p>Specifies the sort order for the results of this action.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The maximum number of subscription targets to return in a single call to
   *             <code>ListSubscriptionTargets</code>. When the number of subscription targets to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription targets.
   *       </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of subscription targets is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription targets, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription
   *          targets.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of the subscription target.</p>
 * @public
 */
export interface SubscriptionTargetSummary {
  /**
   * <p>The identifier of the subscription target.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorized principals included in the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription target exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project specified in the subscription target.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment of the subscription target.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the subscription target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the subscription target.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription target.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The timestamp of when the subscription target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription target was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The manage access role specified in the subscription target.</p>
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * <p>The asset types included in the subscription target.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration of the subscription target.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The provider of the subscription target.</p>
   * @public
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionTargetsOutput {
  /**
   * <p>The results of the <code>ListSubscriptionTargets</code> action.</p>
   * @public
   */
  items: SubscriptionTargetSummary[] | undefined;

  /**
   * <p>When the number of subscription targets is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription targets, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription
   *          targets.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the specified resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTimeSeriesDataPointsInput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the assets for which you want to list
   *          time series data points.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to list data points.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to list data points.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The name of the time series data points form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The timestamp at which the data points that you want to list started.</p>
   * @public
   */
  startedAt?: Date;

  /**
   * <p>The timestamp at which the data points that you wanted to list ended.</p>
   * @public
   */
  endedAt?: Date;

  /**
   * <p>When the number of data points is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of data points, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set
   *          of data points.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of data points to return in a single call to
   *          ListTimeSeriesDataPoints. When the number of data points to be listed is greater than the
   *          value of MaxResults, the response contains a NextToken value that you can use in a
   *          subsequent call to ListTimeSeriesDataPoints to list the next set of data points.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTimeSeriesDataPointsOutput {
  /**
   * <p>The results of the ListTimeSeriesDataPoints action. </p>
   * @public
   */
  items?: TimeSeriesDataPointSummaryFormOutput[];

  /**
   * <p>When the number of data points is greater than the default value for the MaxResults
   *          parameter, or if you explicitly specify a value for MaxResults that is less than the number
   *          of data points, the response includes a pagination token named NextToken. You can specify
   *          this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set
   *          of data points.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetMetadataGenerationRunInput {
  /**
   * <p>The ID of the Amazon DataZone domain the metadata generation run of which you want to
   *          get.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the metadata generation run.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MetadataGenerationRunStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type MetadataGenerationRunStatus =
  (typeof MetadataGenerationRunStatus)[keyof typeof MetadataGenerationRunStatus];

/**
 * @public
 * @enum
 */
export const MetadataGenerationTargetType = {
  ASSET: "ASSET",
} as const;

/**
 * @public
 */
export type MetadataGenerationTargetType =
  (typeof MetadataGenerationTargetType)[keyof typeof MetadataGenerationTargetType];

/**
 * <p>The asset for which metadata was generated.</p>
 * @public
 */
export interface MetadataGenerationRunTarget {
  /**
   * <p>The type of the asset for which metadata was generated.</p>
   * @public
   */
  type: MetadataGenerationTargetType | undefined;

  /**
   * <p>The ID of the metadata generation run's target.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the asset for which metadata was generated.</p>
   * @public
   */
  revision?: string;
}

/**
 * @public
 * @enum
 */
export const MetadataGenerationRunType = {
  BUSINESS_DESCRIPTIONS: "BUSINESS_DESCRIPTIONS",
} as const;

/**
 * @public
 */
export type MetadataGenerationRunType = (typeof MetadataGenerationRunType)[keyof typeof MetadataGenerationRunType];

/**
 * @public
 */
export interface GetMetadataGenerationRunOutput {
  /**
   * <p>The ID of the Amazon DataZone domain the metadata generation run of which you want to
   *          get.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The asset for which you're generating metadata.</p>
   * @public
   */
  target?: MetadataGenerationRunTarget;

  /**
   * <p>The status of the metadata generation run.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus;

  /**
   * <p>The type of metadata generation run.</p>
   * @public
   */
  type?: MetadataGenerationRunType;

  /**
   * <p>The timestamp of when the metadata generation run was start.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who started the metadata generation run.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The ID of the project that owns the assets for which you're running metadata
   *          generation.</p>
   * @public
   */
  owningProjectId: string | undefined;
}

/**
 * @public
 */
export interface ListMetadataGenerationRunsInput {
  /**
   * <p>The ID of the Amazon DataZone domain where you want to list metadata generation
   *          runs.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The status of the metadata generation runs.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus;

  /**
   * <p>The type of the metadata generation runs.</p>
   * @public
   */
  type?: MetadataGenerationRunType;

  /**
   * <p>When the number of metadata generation runs is greater than the default value for the
   *          MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than
   *          the number of metadata generation runs, the response includes a pagination token named
   *          NextToken. You can specify this NextToken value in a subsequent call to
   *          ListMetadataGenerationRuns to list the next set of revisions.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of metadata generation runs to return in a single call to
   *          ListMetadataGenerationRuns. When the number of metadata generation runs to be listed is
   *          greater than the value of MaxResults, the response contains a NextToken value that you can
   *          use in a subsequent call to ListMetadataGenerationRuns to list the next set of
   *          revisions.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The metadata generation run.</p>
 * @public
 */
export interface MetadataGenerationRunItem {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata generation run was
   *          created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The asset for which metadata was generated.</p>
   * @public
   */
  target?: MetadataGenerationRunTarget;

  /**
   * <p>The status of the metadata generation run.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus;

  /**
   * <p>The type of the metadata generation run.</p>
   * @public
   */
  type?: MetadataGenerationRunType;

  /**
   * <p>The timestamp at which the metadata generation run was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user who created the metadata generation run.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The ID of the project that owns the asset for which the metadata generation was
   *          ran.</p>
   * @public
   */
  owningProjectId: string | undefined;
}

/**
 * @public
 */
export interface ListMetadataGenerationRunsOutput {
  /**
   * <p>The results of the ListMetadataGenerationRuns action.</p>
   * @public
   */
  items?: MetadataGenerationRunItem[];

  /**
   * <p>When the number of metadata generation runs is greater than the default value for the
   *          MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than
   *          the number of metadata generation runs, the response includes a pagination token named
   *          NextToken. You can specify this NextToken value in a subsequent call to
   *          ListMetadataGenerationRuns to list the next set of revisions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartMetadataGenerationRunInput {
  /**
   * <p>The ID of the Amazon DataZone domain where you want to start a metadata generation
   *          run.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of the metadata generation run.</p>
   * @public
   */
  type: MetadataGenerationRunType | undefined;

  /**
   * <p>The asset for which you want to start a metadata generation run.</p>
   * @public
   */
  target: MetadataGenerationRunTarget | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is
   *          automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID of the project that owns the asset for which you want to start a metadata
   *          generation run.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataGenerationRunOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata generation run was
   *          started.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the metadata generation run.</p>
   * @public
   */
  status?: MetadataGenerationRunStatus;

  /**
   * <p>The type of the metadata generation run.</p>
   * @public
   */
  type?: MetadataGenerationRunType;

  /**
   * <p>The timestamp at which the metadata generation run was started.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The ID of the user who started the metadata generation run.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The ID of the project that owns the asset for which the metadata generation run was
   *          started.</p>
   * @public
   */
  owningProjectId?: string;
}

/**
 * @public
 */
export interface PostLineageEventInput {
  /**
   * <p>The ID of the domain where you want to post a data lineage event.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The data lineage event that you want to post. Only open-lineage run event are supported
   *          as events. </p>
   * @public
   */
  event: Uint8Array | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface PostLineageEventOutput {}

/**
 * <p>The time series data points form.</p>
 * @public
 */
export interface TimeSeriesDataPointFormInput {
  /**
   * <p>The name of the time series data points form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The ID of the type of the time series data points form.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the time series data points form.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>The timestamp of the time series data points form.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The content of the time series data points form.</p>
   * @public
   */
  content?: string;
}

/**
 * @public
 */
export interface PostTimeSeriesDataPointsInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which you want to post time series data
   *          points.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to post time series data points.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to post data points.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The forms that contain the data points that you want to post.</p>
   * @public
   */
  forms: TimeSeriesDataPointFormInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface PostTimeSeriesDataPointsOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which you want to post time series data
   *          points.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The ID of the asset for which you want to post time series data points.</p>
   * @public
   */
  entityId?: string;

  /**
   * <p>The type of the asset for which you want to post data points.</p>
   * @public
   */
  entityType?: TimeSeriesEntityType;

  /**
   * <p>The forms that contain the data points that you have posted.</p>
   * @public
   */
  forms?: TimeSeriesDataPointFormOutput[];
}

/**
 * <p>The details of the automatically generated business metadata that is rejected.</p>
 * @public
 */
export interface RejectChoice {
  /**
   * <p>Specifies the target (for example, a column name) where a prediction can be
   *          rejected.</p>
   * @public
   */
  predictionTarget: string | undefined;

  /**
   * <p>Specifies the the automatically generated business metadata that can be rejected.</p>
   * @public
   */
  predictionChoices?: number[];
}

/**
 * @public
 * @enum
 */
export const RejectRuleBehavior = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type RejectRuleBehavior = (typeof RejectRuleBehavior)[keyof typeof RejectRuleBehavior];

/**
 * <p>Specifies the rule and the threshold under which a prediction can be rejected.</p>
 * @public
 */
export interface RejectRule {
  /**
   * <p>Specifies whether you want to reject the top prediction for all targets or none.</p>
   * @public
   */
  rule?: RejectRuleBehavior;

  /**
   * <p>The confidence score that specifies the condition at which a prediction can be
   *          rejected.</p>
   * @public
   */
  threshold?: number;
}

/**
 * @public
 */
export interface RejectPredictionsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the prediction.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision?: string;

  /**
   * <p>Specifies the rule (or the conditions) under which a prediction can be rejected.</p>
   * @public
   */
  rejectRule?: RejectRule;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the
   *          target (for example, a column name) that can be rejected.</p>
   * @public
   */
  rejectChoices?: RejectChoice[];

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface RejectPredictionsOutput {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  assetRevision: string | undefined;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was
   *          rejected.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request that was rejected.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The decision comment of the rejected subscription request.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestOutput {
  /**
   * <p>The identifier of the subscription request that was rejected.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The timestamp of when the subscription request was rejected.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the subscription request was
   *          rejected.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when the subscription request was rejected.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the subscription request.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>The subscribed principals of the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The subscribed listings of the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the subscription request reviewer.</p>
   * @public
   */
  reviewerId?: string;

  /**
   * <p>The decision comment of the rejected subscription request.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface RevokeSubscriptionInput {
  /**
   * <p>The identifier of the Amazon DataZone domain where you want to revoke a subscription.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the revoked subscription.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies whether permissions are retained when the subscription is revoked.</p>
   * @public
   */
  retainPermissions?: boolean;
}

/**
 * @public
 */
export interface RevokeSubscriptionOutput {
  /**
   * <p>The identifier of the revoked subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the user who revoked the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who revoked the subscription.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain where you want to revoke a subscription.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the revoked subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp of when the subscription was revoked.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription was revoked.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The subscribed principal of the revoked subscription.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The subscribed listing of the revoked subscription.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The identifier of the subscription request for the revoked subscription.</p>
   * @public
   */
  subscriptionRequestId?: string;

  /**
   * <p>Specifies whether permissions are retained when the subscription is revoked.</p>
   * @public
   */
  retainPermissions?: boolean;
}

/**
 * @public
 * @enum
 */
export const SearchOutputAdditionalAttribute = {
  FORMS: "FORMS",
  TIME_SERIES_DATA_POINT_FORMS: "TIME_SERIES_DATA_POINT_FORMS",
} as const;

/**
 * @public
 */
export type SearchOutputAdditionalAttribute =
  (typeof SearchOutputAdditionalAttribute)[keyof typeof SearchOutputAdditionalAttribute];

/**
 * <p>A search filter in Amazon DataZone.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>A search filter attribute in Amazon DataZone.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>A search filter value in Amazon DataZone.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The details of the search.</p>
 * @public
 */
export interface SearchInItem {
  /**
   * <p>The search attribute.</p>
   * @public
   */
  attribute: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InventorySearchScope = {
  ASSET: "ASSET",
  GLOSSARY: "GLOSSARY",
  GLOSSARY_TERM: "GLOSSARY_TERM",
} as const;

/**
 * @public
 */
export type InventorySearchScope = (typeof InventorySearchScope)[keyof typeof InventorySearchScope];

/**
 * <p>The details of the way to sort search results.</p>
 * @public
 */
export interface SearchSort {
  /**
   * <p>The attribute detail of the way to sort search results.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>The order detail of the wya to sort search results.</p>
   * @public
   */
  order?: SortOrder;
}

/**
 * <p>The details of a business glossary.</p>
 * @public
 */
export interface GlossaryItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the business glossary exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the glossary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the project that owns the business glosary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The business glossary description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The business glossary status.</p>
   * @public
   */
  status: GlossaryStatus | undefined;

  /**
   * <p>The timestamp of when the glossary was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the glossary.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the business glossary was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who updated the business glossary.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * <p>The details of a business glossary term.</p>
 * @public
 */
export interface GlossaryTermItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the business glossary exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the business glossary to which the term belongs.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The identifier of the business glossary term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The short description of the business glossary term.</p>
   * @public
   */
  shortDescription?: string;

  /**
   * <p>The long description of the business glossary term.</p>
   * @public
   */
  longDescription?: string;

  /**
   * <p>The relations of the business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations;

  /**
   * <p>The status of the business glossary term.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The timestamp of when a business glossary term was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the business glossary.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when a business glossary term was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who updated the business glossary term.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * <p>The details of the search results.</p>
 * @public
 */
export type SearchInventoryResultItem =
  | SearchInventoryResultItem.AssetItemMember
  | SearchInventoryResultItem.DataProductItemMember
  | SearchInventoryResultItem.GlossaryItemMember
  | SearchInventoryResultItem.GlossaryTermItemMember
  | SearchInventoryResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchInventoryResultItem {
  /**
   * <p>The glossary item included in the search results.</p>
   * @public
   */
  export interface GlossaryItemMember {
    glossaryItem: GlossaryItem;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The glossary term item included in the search results.</p>
   * @public
   */
  export interface GlossaryTermItemMember {
    glossaryItem?: never;
    glossaryTermItem: GlossaryTermItem;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The asset item included in the search results.</p>
   * @public
   */
  export interface AssetItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem: AssetItem;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * @deprecated
   *
   * <p>The data product item included in the search results.</p>
   * @public
   */
  export interface DataProductItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem: DataProductSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glossaryItem: (value: GlossaryItem) => T;
    glossaryTermItem: (value: GlossaryTermItem) => T;
    assetItem: (value: AssetItem) => T;
    dataProductItem: (value: DataProductSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchInventoryResultItem, visitor: Visitor<T>): T => {
    if (value.glossaryItem !== undefined) return visitor.glossaryItem(value.glossaryItem);
    if (value.glossaryTermItem !== undefined) return visitor.glossaryTermItem(value.glossaryTermItem);
    if (value.assetItem !== undefined) return visitor.assetItem(value.assetItem);
    if (value.dataProductItem !== undefined) return visitor.dataProductItem(value.dataProductItem);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchOutput {
  /**
   * <p>The results of the <code>Search</code> action.</p>
   * @public
   */
  items?: SearchInventoryResultItem[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Total number of search results.</p>
   * @public
   */
  totalMatchCount?: number;
}

/**
 * @public
 * @enum
 */
export const GroupSearchType = {
  DATAZONE_SSO_GROUP: "DATAZONE_SSO_GROUP",
  SSO_GROUP: "SSO_GROUP",
} as const;

/**
 * @public
 */
export type GroupSearchType = (typeof GroupSearchType)[keyof typeof GroupSearchType];

/**
 * @public
 */
export interface SearchGroupProfilesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which you want to search group
   *          profiles.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The group type for which to search.</p>
   * @public
   */
  groupType: GroupSearchType | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string;

  /**
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchGroupProfiles</code>. When the number of results to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>SearchGroupProfiles</code> to list the
   *          next set of results. </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of a group profile.</p>
 * @public
 */
export interface GroupProfileSummary {
  /**
   * <p>The ID of the Amazon DataZone domain of a group profile.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The ID of a group profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status of a group profile.</p>
   * @public
   */
  status?: GroupProfileStatus;

  /**
   * <p>The group name of a group profile.</p>
   * @public
   */
  groupName?: string;
}

/**
 * @public
 */
export interface SearchGroupProfilesOutput {
  /**
   * <p>The results of the <code>SearchGroupProfiles</code> action.</p>
   * @public
   */
  items?: GroupProfileSummary[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchGroupProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of the results of the <code>SearchListings</code> action.</p>
 * @public
 */
export type SearchResultItem = SearchResultItem.AssetListingMember | SearchResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchResultItem {
  /**
   * <p>The asset listing included in the results of the <code>SearchListings</code>
   *          action.</p>
   * @public
   */
  export interface AssetListingMember {
    assetListing: AssetListingItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetListing: (value: AssetListingItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchResultItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchListingsOutput {
  /**
   * <p>The results of the <code>SearchListings</code> action.</p>
   * @public
   */
  items?: SearchResultItem[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Total number of search results.</p>
   * @public
   */
  totalMatchCount?: number;
}

/**
 * @public
 * @enum
 */
export const TypesSearchScope = {
  ASSET_TYPE: "ASSET_TYPE",
  FORM_TYPE: "FORM_TYPE",
  LINEAGE_NODE_TYPE: "LINEAGE_NODE_TYPE",
} as const;

/**
 * @public
 */
export type TypesSearchScope = (typeof TypesSearchScope)[keyof typeof TypesSearchScope];

/**
 * <p>The details of the metadata form type.</p>
 * @public
 */
export interface FormTypeData {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the form type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the form type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The model of the form type.</p>
   * @public
   */
  model?: Model;

  /**
   * <p>The status of the form type.</p>
   * @public
   */
  status?: FormTypeStatus;

  /**
   * <p>The identifier of the project that owns the form type.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the form type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string;

  /**
   * <p>The identifier of the project in which the form type was originally created.</p>
   * @public
   */
  originProjectId?: string;

  /**
   * <p>The timestamp of when the metadata form type was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created teh metadata form type.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The description of the metadata form type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The imports specified in the form type.</p>
   * @public
   */
  imports?: Import[];
}

/**
 * <p>The details of a data lineage node type.</p>
 * @public
 */
export interface LineageNodeTypeItem {
  /**
   * <p>The ID of the domain where the data lineage node type lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the data lineage node type.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the data lineage node type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The timestamp at which the data lineage node type was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user who created the data lineage node type.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp at which the data lineage node type was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The user who updated the data lineage node type.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The revision of the data lineage node type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The forms output of the data lineage node type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;
}

/**
 * <p>The details of the results of the <code>SearchTypes</code> action.</p>
 * @public
 */
export type SearchTypesResultItem =
  | SearchTypesResultItem.AssetTypeItemMember
  | SearchTypesResultItem.FormTypeItemMember
  | SearchTypesResultItem.LineageNodeTypeItemMember
  | SearchTypesResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchTypesResultItem {
  /**
   * <p>The asset type included in the results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  export interface AssetTypeItemMember {
    assetTypeItem: AssetTypeItem;
    formTypeItem?: never;
    lineageNodeTypeItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The form type included in the results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  export interface FormTypeItemMember {
    assetTypeItem?: never;
    formTypeItem: FormTypeData;
    lineageNodeTypeItem?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a data lineage node type.</p>
   * @public
   */
  export interface LineageNodeTypeItemMember {
    assetTypeItem?: never;
    formTypeItem?: never;
    lineageNodeTypeItem: LineageNodeTypeItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetTypeItem?: never;
    formTypeItem?: never;
    lineageNodeTypeItem?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetTypeItem: (value: AssetTypeItem) => T;
    formTypeItem: (value: FormTypeData) => T;
    lineageNodeTypeItem: (value: LineageNodeTypeItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchTypesResultItem, visitor: Visitor<T>): T => {
    if (value.assetTypeItem !== undefined) return visitor.assetTypeItem(value.assetTypeItem);
    if (value.formTypeItem !== undefined) return visitor.formTypeItem(value.formTypeItem);
    if (value.lineageNodeTypeItem !== undefined) return visitor.lineageNodeTypeItem(value.lineageNodeTypeItem);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchTypesOutput {
  /**
   * <p>The results of the <code>SearchTypes</code> action.</p>
   * @public
   */
  items?: SearchTypesResultItem[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Total number of search results.</p>
   * @public
   */
  totalMatchCount?: number;
}

/**
 * @public
 * @enum
 */
export const UserSearchType = {
  DATAZONE_IAM_USER: "DATAZONE_IAM_USER",
  DATAZONE_SSO_USER: "DATAZONE_SSO_USER",
  DATAZONE_USER: "DATAZONE_USER",
  SSO_USER: "SSO_USER",
} as const;

/**
 * @public
 */
export type UserSearchType = (typeof UserSearchType)[keyof typeof UserSearchType];

/**
 * @public
 */
export interface SearchUserProfilesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which you want to search user
   *          profiles.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Specifies the user type for the <code>SearchUserProfiles</code> action.</p>
   * @public
   */
  userType: UserSearchType | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string;

  /**
   * <p>The maximum number of results to return in a single call to
   *             <code>SearchUserProfiles</code>. When the number of results to be listed is greater than
   *          the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value
   *          that you can use in a subsequent call to <code>SearchUserProfiles</code> to list the next
   *          set of results. </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The details of the user profile.</p>
 * @public
 */
export interface UserProfileSummary {
  /**
   * <p>The ID of the Amazon DataZone domain of the user profile.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The ID of the user profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType;

  /**
   * <p>The status of the user profile.</p>
   * @public
   */
  status?: UserProfileStatus;

  /**
   * <p>The details of the user profile.</p>
   * @public
   */
  details?: UserProfileDetails;
}

/**
 * @public
 */
export interface SearchUserProfilesOutput {
  /**
   * <p>The results of the <code>SearchUserProfiles</code> action.</p>
   * @public
   */
  items?: UserProfileSummary[];

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchUserProfiles</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to be tagged in Amazon DataZone.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specifies the tags for the <code>TagResource</code> action.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to be untagged in Amazon DataZone.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specifies the tag keys for the <code>UntagResource</code> action.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * <p>The identifier of the domain in which the environment is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * <p>The project identifier of the environment.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment that is to be updated.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The identifier of the domain in which the environment is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the environment.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the environment was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The profile identifier of the environment.</p>
   * @public
   */
  environmentProfileId?: string;

  /**
   * <p>The identifier of the Amazon Web Services account in which the environment is to be
   *          updated.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services Region in which the environment is updated.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The provider identifier of the environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioned resources to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  provisionedResources?: Resource[];

  /**
   * <p>The status to be updated as part of the <code>UpdateEnvironment</code> action.</p>
   * @public
   */
  status?: EnvironmentStatus;

  /**
   * <p>The environment actions to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[];

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  userParameters?: CustomParameter[];

  /**
   * <p>The last deployment of the environment.</p>
   * @public
   */
  lastDeployment?: Deployment;

  /**
   * <p>The provisioning properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties;

  /**
   * <p>The deployment properties to be updated as part of the <code>UpdateEnvironment</code>
   *          action.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * <p>The blueprint identifier of the environment.</p>
   * @public
   */
  environmentBlueprintId?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentActionInput {
  /**
   * <p>The domain ID of the environment action.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters?: ActionParameters;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the environment action.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentActionOutput {
  /**
   * <p>The domain ID of the environment action.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which an environment profile is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment profile that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[];

  /**
   * <p>The Amazon Web Services account in which a specified environment profile is to be
   *          udpated.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
   * @public
   */
  awsAccountRegion?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileOutput {
  /**
   * <p>The identifier of the environment profile that is to be udpated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment profile is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Web Services account in which a specified environment profile is to be
   *          udpated.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services Region in which a specified environment profile is to be
   *          updated.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The Amazon DataZone user who created the environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment profile was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the environment profile was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier of the blueprint of the environment profile that is to be updated.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The identifier of the project of the environment profile that is to be updated.</p>
   * @public
   */
  projectId?: string;

  /**
   * <p>The user parameters to be updated as part of the <code>UpdateEnvironmentProfile</code>
   *          action.</p>
   * @public
   */
  userParameters?: CustomParameter[];
}

/**
 * @public
 */
export interface UpdateGroupProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a group profile is updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the group profile that is updated.</p>
   * @public
   */
  groupIdentifier: string | undefined;

  /**
   * <p>The status of the group profile that is updated.</p>
   * @public
   */
  status: GroupProfileStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGroupProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a group profile is updated.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The identifier of the group profile that is updated.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status of the group profile that is updated.</p>
   * @public
   */
  status?: GroupProfileStatus;

  /**
   * <p>The name of the group profile that is updated.</p>
   * @public
   */
  groupName?: string;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a project is to be updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateProject</code> action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateProject</code> action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The glossary terms to be updated as part of the <code>UpdateProject</code>
   *          action.</p>
   * @public
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a project is updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project that is to be updated.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project that is to be updated.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  projectStatus?: ProjectStatus;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureReasons?: ProjectDeletionError[];

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the project was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The glossary terms of the project that are to be updated.</p>
   * @public
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription grant the status of which is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The identifier of the asset the subscription grant status of which is to be
   *          updated.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureCause?: FailureCause;

  /**
   * <p>The target name to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   * @public
   */
  targetName?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusOutput {
  /**
   * <p>The identifier of the subscription grant.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone domain user who created the subscription grant status.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant status.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant status is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when the subscription grant status was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription grant status is to be updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The identifier of the subscription target whose subscription grant status is to be
   *          updated.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The granted entity to be updated as part of the
   *             <code>UpdateSubscriptionGrantStatus</code> action.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateSubscriptionGrantStatus</code>
   *          action.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The details of the asset for which the subscription grant is created.</p>
   * @public
   */
  assets?: SubscribedAsset[];

  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The reason for the <code>UpdateSubscriptionRequest</code> action.</p>
   * @public
   */
  requestReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestOutput {
  /**
   * <p>The identifier of the subscription request that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription request is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when the subscription request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the <code>UpdateSubscriptionRequest</code> action.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>The subscribed principals of the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The subscribed listings of the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user who reviews the subscription request.</p>
   * @public
   */
  reviewerId?: string;

  /**
   * <p>The decision comment of the <code>UpdateSubscriptionRequest</code> action.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>Identifier of the subscription target that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The authorized principals to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  authorizedPrincipals?: string[];

  /**
   * <p>The applicable asset types to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  applicableAssetTypes?: string[];

  /**
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  subscriptionTargetConfig?: SubscriptionTargetForm[];

  /**
   * <p>The manage access role to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  manageAccessRole?: string;

  /**
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  provider?: string;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetOutput {
  /**
   * <p>Identifier of the subscription target that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorized principals to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project in which a subscription target is to be updated.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment in which a subscription target is to be
   *          updated.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription target.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The timestamp of when a subscription target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription target was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The manage access role to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * <p>The applicable asset types to be updated as part of the
   *             <code>UpdateSubscriptionTarget</code> action.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The provider to be updated as part of the <code>UpdateSubscriptionTarget</code>
   *          action.</p>
   * @public
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the user whose user profile is to be updated.</p>
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * <p>The type of the user profile that are to be updated.</p>
   * @public
   */
  type?: UserProfileType;

  /**
   * <p>The status of the user profile that are to be updated.</p>
   * @public
   */
  status: UserProfileStatus | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is updated.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The identifier of the user profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType;

  /**
   * <p>The status of the user profile.</p>
   * @public
   */
  status?: UserProfileStatus;

  /**
   * <p>The details of the user profile in Amazon DataZone.</p>
   * @public
   */
  details?: UserProfileDetails;
}

/**
 * <p>A search filter clause in Amazon DataZone.</p>
 * @public
 */
export type FilterClause =
  | FilterClause.AndMember
  | FilterClause.FilterMember
  | FilterClause.OrMember
  | FilterClause.$UnknownMember;

/**
 * @public
 */
export namespace FilterClause {
  /**
   * <p>A search filter in Amazon DataZone.</p>
   * @public
   */
  export interface FilterMember {
    filter: Filter;
    and?: never;
    or?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'and' search filter clause in Amazon DataZone.</p>
   * @public
   */
  export interface AndMember {
    filter?: never;
    and: FilterClause[];
    or?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'or' search filter clause in Amazon DataZone.</p>
   * @public
   */
  export interface OrMember {
    filter?: never;
    and?: never;
    or: FilterClause[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    filter?: never;
    and?: never;
    or?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    filter: (value: Filter) => T;
    and: (value: FilterClause[]) => T;
    or: (value: FilterClause[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FilterClause, visitor: Visitor<T>): T => {
    if (value.filter !== undefined) return visitor.filter(value.filter);
    if (value.and !== undefined) return visitor.and(value.and);
    if (value.or !== undefined) return visitor.or(value.or);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the owning project specified for the search.</p>
   * @public
   */
  owningProjectIdentifier?: string;

  /**
   * <p>The maximum number of results to return in a single call to <code>Search</code>. When
   *          the number of results to be listed is greater than the value of <code>MaxResults</code>,
   *          the response contains a <code>NextToken</code> value that you can use in a subsequent call
   *          to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>Search</code> to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The scope of the search.</p>
   * @public
   */
  searchScope: InventorySearchScope | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string;

  /**
   * <p>The details of the search.</p>
   * @public
   */
  searchIn?: SearchInItem[];

  /**
   * <p>Specifies the search filters.</p>
   * @public
   */
  filters?: FilterClause;

  /**
   * <p>Specifies the way in which the search results are to be sorted.</p>
   * @public
   */
  sort?: SearchSort;

  /**
   * <p>Specifies additional attributes for the <code>Search</code> action.</p>
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[];
}

/**
 * @public
 */
export interface SearchListingsInput {
  /**
   * <p>The identifier of the domain in which to search listings.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string;

  /**
   * <p>The details of the search.</p>
   * @public
   */
  searchIn?: SearchInItem[];

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchListings</code>.
   *          When the number of results to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results. </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchListings</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the filters for the search of listings.</p>
   * @public
   */
  filters?: FilterClause;

  /**
   * <p>Specifies the way for sorting the search results.</p>
   * @public
   */
  sort?: SearchSort;

  /**
   * <p>Specifies additional attributes for the search.</p>
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[];
}

/**
 * @public
 */
export interface SearchTypesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to invoke the <code>SearchTypes</code>
   *          action.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call to <code>SearchTypes</code>.
   *          When the number of results to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>SearchTypes</code> to list the next set of results.
   *       </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of results is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of results, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>SearchTypes</code> to list the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the scope of the search for types.</p>
   * @public
   */
  searchScope: TypesSearchScope | undefined;

  /**
   * <p>Specifies the text for which to search.</p>
   * @public
   */
  searchText?: string;

  /**
   * <p>The details of the search.</p>
   * @public
   */
  searchIn?: SearchInItem[];

  /**
   * <p>The filters for the <code>SearchTypes</code> action.</p>
   * @public
   */
  filters?: FilterClause;

  /**
   * <p>The specifies the way to sort the <code>SearchTypes</code> results.</p>
   * @public
   */
  sort?: SearchSort;

  /**
   * <p>Specifies whether the search is managed.</p>
   * @public
   */
  managed: boolean | undefined;
}

/**
 * @internal
 */
export const NotificationOutputFilterSensitiveLog = (obj: NotificationOutput): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.actionLink && { actionLink: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListNotificationsOutputFilterSensitiveLog = (obj: ListNotificationsOutput): any => ({
  ...obj,
  ...(obj.notifications && {
    notifications: obj.notifications.map((item) => NotificationOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListProjectsInputFilterSensitiveLog = (obj: ListProjectsInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListProjectsOutputFilterSensitiveLog = (obj: ListProjectsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ProjectSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SubscriptionRequestSummaryFilterSensitiveLog = (obj: SubscriptionRequestSummary): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSubscriptionRequestsOutputFilterSensitiveLog = (obj: ListSubscriptionRequestsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionRequestSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SubscriptionSummaryFilterSensitiveLog = (obj: SubscriptionSummary): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const ListSubscriptionsOutputFilterSensitiveLog = (obj: ListSubscriptionsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SubscriptionTargetSummaryFilterSensitiveLog = (obj: SubscriptionTargetSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSubscriptionTargetsOutputFilterSensitiveLog = (obj: ListSubscriptionTargetsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionTargetSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PostLineageEventInputFilterSensitiveLog = (obj: PostLineageEventInput): any => ({
  ...obj,
  ...(obj.event && { event: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RejectSubscriptionRequestInputFilterSensitiveLog = (obj: RejectSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RejectSubscriptionRequestOutputFilterSensitiveLog = (obj: RejectSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RevokeSubscriptionOutputFilterSensitiveLog = (obj: RevokeSubscriptionOutput): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const GlossaryItemFilterSensitiveLog = (obj: GlossaryItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GlossaryTermItemFilterSensitiveLog = (obj: GlossaryTermItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchInventoryResultItemFilterSensitiveLog = (obj: SearchInventoryResultItem): any => {
  if (obj.glossaryItem !== undefined) return { glossaryItem: GlossaryItemFilterSensitiveLog(obj.glossaryItem) };
  if (obj.glossaryTermItem !== undefined)
    return { glossaryTermItem: GlossaryTermItemFilterSensitiveLog(obj.glossaryTermItem) };
  if (obj.assetItem !== undefined) return { assetItem: AssetItemFilterSensitiveLog(obj.assetItem) };
  if (obj.dataProductItem !== undefined)
    return { dataProductItem: DataProductSummaryFilterSensitiveLog(obj.dataProductItem) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchOutputFilterSensitiveLog = (obj: SearchOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SearchInventoryResultItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchGroupProfilesInputFilterSensitiveLog = (obj: SearchGroupProfilesInput): any => ({
  ...obj,
  ...(obj.searchText && { searchText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GroupProfileSummaryFilterSensitiveLog = (obj: GroupProfileSummary): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchGroupProfilesOutputFilterSensitiveLog = (obj: SearchGroupProfilesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => GroupProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchResultItemFilterSensitiveLog = (obj: SearchResultItem): any => {
  if (obj.assetListing !== undefined) return { assetListing: AssetListingItemFilterSensitiveLog(obj.assetListing) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchListingsOutputFilterSensitiveLog = (obj: SearchListingsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SearchResultItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FormTypeDataFilterSensitiveLog = (obj: FormTypeData): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.model && { model: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.imports && { imports: obj.imports.map((item) => ImportFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const LineageNodeTypeItemFilterSensitiveLog = (obj: LineageNodeTypeItem): any => ({
  ...obj,
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const SearchTypesResultItemFilterSensitiveLog = (obj: SearchTypesResultItem): any => {
  if (obj.assetTypeItem !== undefined) return { assetTypeItem: AssetTypeItemFilterSensitiveLog(obj.assetTypeItem) };
  if (obj.formTypeItem !== undefined) return { formTypeItem: FormTypeDataFilterSensitiveLog(obj.formTypeItem) };
  if (obj.lineageNodeTypeItem !== undefined)
    return { lineageNodeTypeItem: LineageNodeTypeItemFilterSensitiveLog(obj.lineageNodeTypeItem) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchTypesOutputFilterSensitiveLog = (obj: SearchTypesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SearchTypesResultItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchUserProfilesInputFilterSensitiveLog = (obj: SearchUserProfilesInput): any => ({
  ...obj,
  ...(obj.searchText && { searchText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserProfileSummaryFilterSensitiveLog = (obj: UserProfileSummary): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const SearchUserProfilesOutputFilterSensitiveLog = (obj: SearchUserProfilesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => UserProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateEnvironmentOutputFilterSensitiveLog = (obj: UpdateEnvironmentOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
});

/**
 * @internal
 */
export const UpdateEnvironmentProfileInputFilterSensitiveLog = (obj: UpdateEnvironmentProfileInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEnvironmentProfileOutputFilterSensitiveLog = (obj: UpdateEnvironmentProfileOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateGroupProfileOutputFilterSensitiveLog = (obj: UpdateGroupProfileOutput): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProjectInputFilterSensitiveLog = (obj: UpdateProjectInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProjectOutputFilterSensitiveLog = (obj: UpdateProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionRequestInputFilterSensitiveLog = (obj: UpdateSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionRequestOutputFilterSensitiveLog = (obj: UpdateSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionTargetInputFilterSensitiveLog = (obj: UpdateSubscriptionTargetInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSubscriptionTargetOutputFilterSensitiveLog = (obj: UpdateSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserProfileOutputFilterSensitiveLog = (obj: UpdateUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});
