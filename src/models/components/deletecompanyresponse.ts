/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This object contains details about the company record that was deleted. It serves as a confirmation that the operation was successful and includes the unique identifier of the deleted resource.
 */
export type DeleteCompanyResponseUnifiedId = {
  /**
   * The unique identifier of the company record that was deleted. This ID confirms the specific resource that was removed from the CRM system, ensuring that developers can verify the deletion of the correct company.
   */
  id: string;
};

/**
 * Company deleted
 */
export type DeleteCompanyResponse = {
  /**
   * The HTTP response status code returned by the server. This integer value indicates the result of the delete operation, with a successful deletion typically represented by a 200 status code. It helps developers confirm that the company record was successfully removed from the CRM system.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status. This string provides a human-readable status message, such as 'OK', corresponding to the status code, confirming the outcome of the delete operation.
   */
  status: string;
  /**
   * The Apideck ID of the service provider that processed the delete request. This string identifies which service within the Apideck ecosystem handled the operation, useful for tracking and logging purposes.
   */
  service: string;
  /**
   * The name of the Unified API resource that was targeted by the delete operation. This string specifies the type of resource, such as 'company', that was affected, helping developers understand the context of the operation.
   */
  resource: string;
  /**
   * The specific operation performed, indicated as a string. In this context, it confirms that a 'delete' operation was executed, providing clarity on the action taken on the resource.
   */
  operation: string;
  /**
   * This object contains details about the company record that was deleted. It serves as a confirmation that the operation was successful and includes the unique identifier of the deleted resource.
   */
  data: DeleteCompanyResponseUnifiedId;
};

/** @internal */
export const DeleteCompanyResponseUnifiedId$inboundSchema: z.ZodType<
  DeleteCompanyResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteCompanyResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const DeleteCompanyResponseUnifiedId$outboundSchema: z.ZodType<
  DeleteCompanyResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  DeleteCompanyResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteCompanyResponseUnifiedId$ {
  /** @deprecated use `DeleteCompanyResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = DeleteCompanyResponseUnifiedId$inboundSchema;
  /** @deprecated use `DeleteCompanyResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = DeleteCompanyResponseUnifiedId$outboundSchema;
  /** @deprecated use `DeleteCompanyResponseUnifiedId$Outbound` instead. */
  export type Outbound = DeleteCompanyResponseUnifiedId$Outbound;
}

export function deleteCompanyResponseUnifiedIdToJSON(
  deleteCompanyResponseUnifiedId: DeleteCompanyResponseUnifiedId,
): string {
  return JSON.stringify(
    DeleteCompanyResponseUnifiedId$outboundSchema.parse(
      deleteCompanyResponseUnifiedId,
    ),
  );
}

export function deleteCompanyResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<DeleteCompanyResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteCompanyResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteCompanyResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const DeleteCompanyResponse$inboundSchema: z.ZodType<
  DeleteCompanyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteCompanyResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type DeleteCompanyResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: DeleteCompanyResponseUnifiedId$Outbound;
};

/** @internal */
export const DeleteCompanyResponse$outboundSchema: z.ZodType<
  DeleteCompanyResponse$Outbound,
  z.ZodTypeDef,
  DeleteCompanyResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteCompanyResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteCompanyResponse$ {
  /** @deprecated use `DeleteCompanyResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteCompanyResponse$inboundSchema;
  /** @deprecated use `DeleteCompanyResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteCompanyResponse$outboundSchema;
  /** @deprecated use `DeleteCompanyResponse$Outbound` instead. */
  export type Outbound = DeleteCompanyResponse$Outbound;
}

export function deleteCompanyResponseToJSON(
  deleteCompanyResponse: DeleteCompanyResponse,
): string {
  return JSON.stringify(
    DeleteCompanyResponse$outboundSchema.parse(deleteCompanyResponse),
  );
}

export function deleteCompanyResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteCompanyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteCompanyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteCompanyResponse' from JSON`,
  );
}
