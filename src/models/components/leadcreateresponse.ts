/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The 'data' object serves as the container for all the information related to the newly created lead. This object is included in the response to encapsulate the details of the lead that has been successfully added to the CRM system. It provides a structured format to access various attributes of the lead, ensuring that the consumer can easily parse and utilize the information. The presence of this object in the response confirms that the lead creation process was executed without errors, and it is always included when the operation is successful.
 */
export type LeadCreateResponseUnifiedId = {
  /**
   * The 'data.id' field represents the unique identifier of the user resource that has been updated. This identifier is crucial for confirming that the correct user record was modified. It is always included in the response to ensure that the client can verify the specific user record that was affected by the update operation.
   */
  id: string;
};

/**
 * Lead created
 */
export type LeadCreateResponse = {
  /**
   * The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request made to add a new lead to the CRM system. A status code of 201 signifies that the lead was successfully created, while other codes may indicate errors or issues with the request. This property is always included in the response to provide immediate feedback on the request's outcome.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'Created' for a successful lead addition. It helps developers quickly understand the result of their API request without needing to reference status code documentation. This property is always included to complement the status code with a descriptive message.
   */
  status: string;
  /**
   * The Apideck ID of the service provider used for this operation. This string uniquely identifies the service provider within the Apideck ecosystem, which is responsible for processing the lead addition request. It is included in the response to confirm which service handled the request, especially useful when multiple integrations are active.
   */
  service: string;
  /**
   * The name of the unified API resource involved in the operation. This string indicates the specific resource within the Apideck platform that was targeted by the request, such as 'leads'. It helps in identifying the context of the operation and is always included to clarify the resource affected by the API call.
   */
  resource: string;
  /**
   * The specific operation performed by the API request. This string describes the action taken, such as 'leadsAdd', confirming the type of operation executed. It is included in the response to ensure clarity about what action was completed, aiding in debugging and logging activities.
   */
  operation: string;
  /**
   * The 'data' object serves as the container for all the information related to the newly created lead. This object is included in the response to encapsulate the details of the lead that has been successfully added to the CRM system. It provides a structured format to access various attributes of the lead, ensuring that the consumer can easily parse and utilize the information. The presence of this object in the response confirms that the lead creation process was executed without errors, and it is always included when the operation is successful.
   */
  data: LeadCreateResponseUnifiedId;
};

/** @internal */
export const LeadCreateResponseUnifiedId$inboundSchema: z.ZodType<
  LeadCreateResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type LeadCreateResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const LeadCreateResponseUnifiedId$outboundSchema: z.ZodType<
  LeadCreateResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  LeadCreateResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadCreateResponseUnifiedId$ {
  /** @deprecated use `LeadCreateResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = LeadCreateResponseUnifiedId$inboundSchema;
  /** @deprecated use `LeadCreateResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = LeadCreateResponseUnifiedId$outboundSchema;
  /** @deprecated use `LeadCreateResponseUnifiedId$Outbound` instead. */
  export type Outbound = LeadCreateResponseUnifiedId$Outbound;
}

export function leadCreateResponseUnifiedIdToJSON(
  leadCreateResponseUnifiedId: LeadCreateResponseUnifiedId,
): string {
  return JSON.stringify(
    LeadCreateResponseUnifiedId$outboundSchema.parse(
      leadCreateResponseUnifiedId,
    ),
  );
}

export function leadCreateResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<LeadCreateResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadCreateResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadCreateResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const LeadCreateResponse$inboundSchema: z.ZodType<
  LeadCreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => LeadCreateResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type LeadCreateResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: LeadCreateResponseUnifiedId$Outbound;
};

/** @internal */
export const LeadCreateResponse$outboundSchema: z.ZodType<
  LeadCreateResponse$Outbound,
  z.ZodTypeDef,
  LeadCreateResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => LeadCreateResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadCreateResponse$ {
  /** @deprecated use `LeadCreateResponse$inboundSchema` instead. */
  export const inboundSchema = LeadCreateResponse$inboundSchema;
  /** @deprecated use `LeadCreateResponse$outboundSchema` instead. */
  export const outboundSchema = LeadCreateResponse$outboundSchema;
  /** @deprecated use `LeadCreateResponse$Outbound` instead. */
  export type Outbound = LeadCreateResponse$Outbound;
}

export function leadCreateResponseToJSON(
  leadCreateResponse: LeadCreateResponse,
): string {
  return JSON.stringify(
    LeadCreateResponse$outboundSchema.parse(leadCreateResponse),
  );
}

export function leadCreateResponseFromJSON(
  jsonString: string,
): SafeParseResult<LeadCreateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadCreateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadCreateResponse' from JSON`,
  );
}
