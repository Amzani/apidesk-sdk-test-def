/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This object contains details about the activity that was deleted, including its unique identifier. It serves as a confirmation that the specified activity has been successfully removed from the CRM system. The presence of this object in the response indicates a successful deletion operation.
 */
export type DeleteActivityResponseUnifiedId = {
  /**
   * The unique identifier of the activity that was deleted. This ID confirms which specific activity record has been removed from the CRM, ensuring that developers can verify the correct deletion of the intended resource.
   */
  id: string;
};

/**
 * Activity deleted
 */
export type DeleteActivityResponse = {
  /**
   * The HTTP response status code returned by the server, indicating the result of the delete operation. A status code of 200 signifies that the activity was successfully deleted from the CRM system. This code helps developers confirm the success or failure of the operation.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status, providing a human-readable summary of the operation's outcome. This status complements the status code by offering a more descriptive explanation of the result, such as 'OK' for a successful deletion.
   */
  status: string;
  /**
   * The Apideck ID of the service provider involved in the operation, identifying which service integration was used to perform the delete action. This ID is crucial for tracking and managing interactions across different service providers within the Apideck ecosystem.
   */
  service: string;
  /**
   * The name of the unified API resource that was targeted by the delete operation, indicating the type of entity that was removed. This helps developers understand the context of the operation within the broader API framework.
   */
  resource: string;
  /**
   * The specific operation performed, in this case, 'delete', indicating that the activity record was removed from the CRM. This property confirms the action taken and is useful for logging and auditing purposes.
   */
  operation: string;
  /**
   * This object contains details about the activity that was deleted, including its unique identifier. It serves as a confirmation that the specified activity has been successfully removed from the CRM system. The presence of this object in the response indicates a successful deletion operation.
   */
  data: DeleteActivityResponseUnifiedId;
};

/** @internal */
export const DeleteActivityResponseUnifiedId$inboundSchema: z.ZodType<
  DeleteActivityResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteActivityResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const DeleteActivityResponseUnifiedId$outboundSchema: z.ZodType<
  DeleteActivityResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  DeleteActivityResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteActivityResponseUnifiedId$ {
  /** @deprecated use `DeleteActivityResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = DeleteActivityResponseUnifiedId$inboundSchema;
  /** @deprecated use `DeleteActivityResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = DeleteActivityResponseUnifiedId$outboundSchema;
  /** @deprecated use `DeleteActivityResponseUnifiedId$Outbound` instead. */
  export type Outbound = DeleteActivityResponseUnifiedId$Outbound;
}

export function deleteActivityResponseUnifiedIdToJSON(
  deleteActivityResponseUnifiedId: DeleteActivityResponseUnifiedId,
): string {
  return JSON.stringify(
    DeleteActivityResponseUnifiedId$outboundSchema.parse(
      deleteActivityResponseUnifiedId,
    ),
  );
}

export function deleteActivityResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<DeleteActivityResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteActivityResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteActivityResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const DeleteActivityResponse$inboundSchema: z.ZodType<
  DeleteActivityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteActivityResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type DeleteActivityResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: DeleteActivityResponseUnifiedId$Outbound;
};

/** @internal */
export const DeleteActivityResponse$outboundSchema: z.ZodType<
  DeleteActivityResponse$Outbound,
  z.ZodTypeDef,
  DeleteActivityResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteActivityResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteActivityResponse$ {
  /** @deprecated use `DeleteActivityResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteActivityResponse$inboundSchema;
  /** @deprecated use `DeleteActivityResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteActivityResponse$outboundSchema;
  /** @deprecated use `DeleteActivityResponse$Outbound` instead. */
  export type Outbound = DeleteActivityResponse$Outbound;
}

export function deleteActivityResponseToJSON(
  deleteActivityResponse: DeleteActivityResponse,
): string {
  return JSON.stringify(
    DeleteActivityResponse$outboundSchema.parse(deleteActivityResponse),
  );
}

export function deleteActivityResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteActivityResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteActivityResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteActivityResponse' from JSON`,
  );
}
