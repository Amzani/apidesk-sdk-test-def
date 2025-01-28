/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This object contains the updated details of the opportunity record that was modified. It includes all relevant fields that were changed during the PATCH operation, ensuring that the opportunity data is current and accurate. This object is essential for confirming the success of the update operation.
 */
export type UpdateOpportunityResponseUnifiedId = {
  /**
   * The unique identifier of the opportunity record that was updated. This ID is crucial for referencing the specific opportunity within the CRM system and confirms which record was modified during the PATCH operation.
   */
  id: string;
};

/**
 * Opportunity updated
 */
export type UpdateOpportunityResponse = {
  /**
   * The HTTP response status code indicating the result of the PATCH request. A status code of 200 signifies that the opportunity record was successfully updated. This code is crucial for error handling and debugging in client applications.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status, such as 'OK' for a successful update. This provides a human-readable confirmation of the operation's outcome, complementing the numeric status code.
   */
  status: string;
  /**
   * The Apideck ID of the service provider that processed the request. This identifier helps in tracking which service integration handled the opportunity update, especially useful in multi-service environments.
   */
  service: string;
  /**
   * The name of the unified API resource that was affected by the operation, in this case, 'opportunities'. This helps in identifying the type of resource that was updated, ensuring clarity in API responses.
   */
  resource: string;
  /**
   * The specific operation performed on the resource, typically 'update' for this PATCH request. This field confirms the action taken, aiding in logging and auditing processes.
   */
  operation: string;
  /**
   * This object contains the updated details of the opportunity record that was modified. It includes all relevant fields that were changed during the PATCH operation, ensuring that the opportunity data is current and accurate. This object is essential for confirming the success of the update operation.
   */
  data: UpdateOpportunityResponseUnifiedId;
};

/** @internal */
export const UpdateOpportunityResponseUnifiedId$inboundSchema: z.ZodType<
  UpdateOpportunityResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type UpdateOpportunityResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const UpdateOpportunityResponseUnifiedId$outboundSchema: z.ZodType<
  UpdateOpportunityResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  UpdateOpportunityResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOpportunityResponseUnifiedId$ {
  /** @deprecated use `UpdateOpportunityResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = UpdateOpportunityResponseUnifiedId$inboundSchema;
  /** @deprecated use `UpdateOpportunityResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema =
    UpdateOpportunityResponseUnifiedId$outboundSchema;
  /** @deprecated use `UpdateOpportunityResponseUnifiedId$Outbound` instead. */
  export type Outbound = UpdateOpportunityResponseUnifiedId$Outbound;
}

export function updateOpportunityResponseUnifiedIdToJSON(
  updateOpportunityResponseUnifiedId: UpdateOpportunityResponseUnifiedId,
): string {
  return JSON.stringify(
    UpdateOpportunityResponseUnifiedId$outboundSchema.parse(
      updateOpportunityResponseUnifiedId,
    ),
  );
}

export function updateOpportunityResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOpportunityResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateOpportunityResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOpportunityResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const UpdateOpportunityResponse$inboundSchema: z.ZodType<
  UpdateOpportunityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => UpdateOpportunityResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type UpdateOpportunityResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UpdateOpportunityResponseUnifiedId$Outbound;
};

/** @internal */
export const UpdateOpportunityResponse$outboundSchema: z.ZodType<
  UpdateOpportunityResponse$Outbound,
  z.ZodTypeDef,
  UpdateOpportunityResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => UpdateOpportunityResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOpportunityResponse$ {
  /** @deprecated use `UpdateOpportunityResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateOpportunityResponse$inboundSchema;
  /** @deprecated use `UpdateOpportunityResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateOpportunityResponse$outboundSchema;
  /** @deprecated use `UpdateOpportunityResponse$Outbound` instead. */
  export type Outbound = UpdateOpportunityResponse$Outbound;
}

export function updateOpportunityResponseToJSON(
  updateOpportunityResponse: UpdateOpportunityResponse,
): string {
  return JSON.stringify(
    UpdateOpportunityResponse$outboundSchema.parse(updateOpportunityResponse),
  );
}

export function updateOpportunityResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOpportunityResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOpportunityResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOpportunityResponse' from JSON`,
  );
}
