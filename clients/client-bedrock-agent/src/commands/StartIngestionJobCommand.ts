// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { StartIngestionJobRequest, StartIngestionJobResponse } from "../models/models_0";
import { de_StartIngestionJobCommand, se_StartIngestionJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartIngestionJobCommand}.
 */
export interface StartIngestionJobCommandInput extends StartIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartIngestionJobCommand}.
 */
export interface StartIngestionJobCommandOutput extends StartIngestionJobResponse, __MetadataBearer {}

/**
 * @public
 * Start a new ingestion job
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, StartIngestionJobCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, StartIngestionJobCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // StartIngestionJobRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new StartIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartIngestionJobResponse
 * //   ingestionJob: { // IngestionJob
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     dataSourceId: "STRING_VALUE", // required
 * //     ingestionJobId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STARTING" || "IN_PROGRESS" || "COMPLETE" || "FAILED", // required
 * //     statistics: { // IngestionJobStatistics
 * //       numberOfDocumentsScanned: Number("long"),
 * //       numberOfNewDocumentsIndexed: Number("long"),
 * //       numberOfModifiedDocumentsIndexed: Number("long"),
 * //       numberOfDocumentsDeleted: Number("long"),
 * //       numberOfDocumentsFailed: Number("long"),
 * //     },
 * //     failureReasons: [ // FailureReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param StartIngestionJobCommandInput - {@link StartIngestionJobCommandInput}
 * @returns {@link StartIngestionJobCommandOutput}
 * @see {@link StartIngestionJobCommandInput} for command's `input` shape.
 * @see {@link StartIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class StartIngestionJobCommand extends $Command<
  StartIngestionJobCommandInput,
  StartIngestionJobCommandOutput,
  BedrockAgentClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartIngestionJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartIngestionJobCommandInput, StartIngestionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartIngestionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "StartIngestionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "StartIngestionJob",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartIngestionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartIngestionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartIngestionJobCommandOutput> {
    return de_StartIngestionJobCommand(output, context);
  }
}
