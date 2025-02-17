/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This object contains details about the contact that was deleted. It serves as a confirmation that the specified contact has been successfully removed from the CRM system. The object includes the unique identifier of the deleted contact, ensuring that developers can verify the correct resource was affected.
 */
export type DeleteContactResponseUnifiedId = {
  /**
   * The unique identifier of the contact that was deleted. This string confirms the specific contact entry that has been removed from the CRM system, allowing developers to ensure the correct contact was deleted based on the provided ID.
   */
  id: string;
};

/**
 * Contact deleted
 */
export type DeleteContactResponse = {
  /**
   * The HTTP response status code returned by the server. This integer value indicates the result of the delete operation, with a successful deletion typically returning a 200 status code. It helps developers confirm that the contact was successfully removed from the CRM system.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status. This string provides a human-readable status message, such as 'OK', to indicate the outcome of the delete operation. It complements the status code by offering a more descriptive result of the operation.
   */
  status: string;
  /**
   * The Apideck ID of the service provider involved in the operation. This string identifies which service integration was used to perform the contact deletion, helping developers track and manage service-specific operations within the CRM.
   */
  service: string;
  /**
   * The name of the unified API resource that was affected by the operation. This string specifies the type of resource, such as 'contact', that was deleted, providing context about the operation's target within the CRM system.
   */
  resource: string;
  /**
   * The specific operation that was performed, in this case, 'delete'. This string indicates the action taken on the resource, confirming that the contact was removed from the CRM system as intended.
   */
  operation: string;
  /**
   * This object contains details about the contact that was deleted. It serves as a confirmation that the specified contact has been successfully removed from the CRM system. The object includes the unique identifier of the deleted contact, ensuring that developers can verify the correct resource was affected.
   */
  data: DeleteContactResponseUnifiedId;
};

/** @internal */
export const DeleteContactResponseUnifiedId$inboundSchema: z.ZodType<
  DeleteContactResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteContactResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const DeleteContactResponseUnifiedId$outboundSchema: z.ZodType<
  DeleteContactResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  DeleteContactResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteContactResponseUnifiedId$ {
  /** @deprecated use `DeleteContactResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = DeleteContactResponseUnifiedId$inboundSchema;
  /** @deprecated use `DeleteContactResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = DeleteContactResponseUnifiedId$outboundSchema;
  /** @deprecated use `DeleteContactResponseUnifiedId$Outbound` instead. */
  export type Outbound = DeleteContactResponseUnifiedId$Outbound;
}

export function deleteContactResponseUnifiedIdToJSON(
  deleteContactResponseUnifiedId: DeleteContactResponseUnifiedId,
): string {
  return JSON.stringify(
    DeleteContactResponseUnifiedId$outboundSchema.parse(
      deleteContactResponseUnifiedId,
    ),
  );
}

export function deleteContactResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<DeleteContactResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteContactResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteContactResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const DeleteContactResponse$inboundSchema: z.ZodType<
  DeleteContactResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteContactResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type DeleteContactResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: DeleteContactResponseUnifiedId$Outbound;
};

/** @internal */
export const DeleteContactResponse$outboundSchema: z.ZodType<
  DeleteContactResponse$Outbound,
  z.ZodTypeDef,
  DeleteContactResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteContactResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteContactResponse$ {
  /** @deprecated use `DeleteContactResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteContactResponse$inboundSchema;
  /** @deprecated use `DeleteContactResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteContactResponse$outboundSchema;
  /** @deprecated use `DeleteContactResponse$Outbound` instead. */
  export type Outbound = DeleteContactResponse$Outbound;
}

export function deleteContactResponseToJSON(
  deleteContactResponse: DeleteContactResponse,
): string {
  return JSON.stringify(
    DeleteContactResponse$outboundSchema.parse(deleteContactResponse),
  );
}

export function deleteContactResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteContactResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteContactResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteContactResponse' from JSON`,
  );
}
