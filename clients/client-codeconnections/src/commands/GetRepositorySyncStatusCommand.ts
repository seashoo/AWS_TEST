// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositorySyncStatusInput, GetRepositorySyncStatusOutput } from "../models/models_0";
import { de_GetRepositorySyncStatusCommand, se_GetRepositorySyncStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandInput extends GetRepositorySyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandOutput extends GetRepositorySyncStatusOutput, __MetadataBearer {}

/**
 * <p>Returns details about the sync status for a repository. A repository sync uses Git sync
 *       to push and pull changes from your remote repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, GetRepositorySyncStatusCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, GetRepositorySyncStatusCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * const client = new CodeConnectionsClient(config);
 * const input = { // GetRepositorySyncStatusInput
 *   Branch: "STRING_VALUE", // required
 *   RepositoryLinkId: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 * };
 * const command = new GetRepositorySyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositorySyncStatusOutput
 * //   LatestSync: { // RepositorySyncAttempt
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED" || "QUEUED", // required
 * //     Events: [ // RepositorySyncEventList // required
 * //       { // RepositorySyncEvent
 * //         Event: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         Time: new Date("TIMESTAMP"), // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositorySyncStatusCommandInput - {@link GetRepositorySyncStatusCommandInput}
 * @returns {@link GetRepositorySyncStatusCommandOutput}
 * @see {@link GetRepositorySyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetRepositorySyncStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 * @public
 */
export class GetRepositorySyncStatusCommand extends $Command
  .classBuilder<
    GetRepositorySyncStatusCommandInput,
    GetRepositorySyncStatusCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeConnections_20231201", "GetRepositorySyncStatus", {})
  .n("CodeConnectionsClient", "GetRepositorySyncStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositorySyncStatusCommand)
  .de(de_GetRepositorySyncStatusCommand)
  .build() {}
