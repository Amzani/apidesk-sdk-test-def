/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The data object encapsulates the response details for the delete operation. It serves as a container for all relevant information returned by the API after a lead is successfully deleted. This object is always included in the response to confirm the operation's success and to provide any additional metadata or related information.
 */
export type LeadDeleteResponseUnifiedId = {
  /**
   * The 'data.id' field represents the unique identifier of the user resource that has been updated. This identifier is crucial for confirming that the correct user record was modified. It is always included in the response to ensure that the client can verify the specific user record that was affected by the update operation.
   */
  id: string;
};

/**
 * Lead deleted
 */
export type LeadDeleteResponse = {
  /**
   * The HTTP response status code returned by the server. This integer value indicates the result of the delete operation, such as 200 for a successful deletion or 404 if the lead ID does not exist. It is crucial for determining the outcome of the API request and handling errors appropriately.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for a successful operation or 'Not Found' if the lead ID is invalid. It helps in understanding the result of the API call at a glance.
   */
  status: string;
  /**
   * The Apideck ID of the service provider that processed the request. This string identifies which service within the Apideck ecosystem handled the delete operation, especially important when multiple services are integrated. It ensures traceability and accountability for the operation performed.
   */
  service: string;
  /**
   * The name of the unified API resource targeted by the operation. This string specifies the type of resource, such as 'lead', that was affected by the delete request. It confirms the specific resource context in which the operation was executed, ensuring clarity in multi-resource environments.
   */
  resource: string;
  /**
   * The specific operation performed by the API, in this case, 'delete'. This string indicates the action taken on the resource, confirming that the lead was intended to be removed. It is essential for logging and auditing purposes to track the types of operations executed through the API.
   */
  operation: string;
  /**
   * The data object encapsulates the response details for the delete operation. It serves as a container for all relevant information returned by the API after a lead is successfully deleted. This object is always included in the response to confirm the operation's success and to provide any additional metadata or related information.
   */
  data: LeadDeleteResponseUnifiedId;
};

/** @internal */
export const LeadDeleteResponseUnifiedId$inboundSchema: z.ZodType<
  LeadDeleteResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type LeadDeleteResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const LeadDeleteResponseUnifiedId$outboundSchema: z.ZodType<
  LeadDeleteResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  LeadDeleteResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadDeleteResponseUnifiedId$ {
  /** @deprecated use `LeadDeleteResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = LeadDeleteResponseUnifiedId$inboundSchema;
  /** @deprecated use `LeadDeleteResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = LeadDeleteResponseUnifiedId$outboundSchema;
  /** @deprecated use `LeadDeleteResponseUnifiedId$Outbound` instead. */
  export type Outbound = LeadDeleteResponseUnifiedId$Outbound;
}

export function leadDeleteResponseUnifiedIdToJSON(
  leadDeleteResponseUnifiedId: LeadDeleteResponseUnifiedId,
): string {
  return JSON.stringify(
    LeadDeleteResponseUnifiedId$outboundSchema.parse(
      leadDeleteResponseUnifiedId,
    ),
  );
}

export function leadDeleteResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<LeadDeleteResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadDeleteResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadDeleteResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const LeadDeleteResponse$inboundSchema: z.ZodType<
  LeadDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => LeadDeleteResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type LeadDeleteResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: LeadDeleteResponseUnifiedId$Outbound;
};

/** @internal */
export const LeadDeleteResponse$outboundSchema: z.ZodType<
  LeadDeleteResponse$Outbound,
  z.ZodTypeDef,
  LeadDeleteResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => LeadDeleteResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadDeleteResponse$ {
  /** @deprecated use `LeadDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = LeadDeleteResponse$inboundSchema;
  /** @deprecated use `LeadDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = LeadDeleteResponse$outboundSchema;
  /** @deprecated use `LeadDeleteResponse$Outbound` instead. */
  export type Outbound = LeadDeleteResponse$Outbound;
}

export function leadDeleteResponseToJSON(
  leadDeleteResponse: LeadDeleteResponse,
): string {
  return JSON.stringify(
    LeadDeleteResponse$outboundSchema.parse(leadDeleteResponse),
  );
}

export function leadDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<LeadDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadDeleteResponse' from JSON`,
  );
}
