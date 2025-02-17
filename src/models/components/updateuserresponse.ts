/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This object contains the updated details of the user record in the CRM system. It encapsulates all the fields that were modified during the PATCH operation, ensuring that the user information is current and accurate. The structure of this object will vary based on the fields included in the update request.
 */
export type UpdateUserResponseUnifiedId = {
  /**
   * The unique identifier of the user record that was updated. This ID is crucial for referencing the specific user within the CRM system and confirms the successful modification of the user's details. It is returned as a string and remains unchanged during the update process.
   */
  id: string;
};

/**
 * User updated
 */
export type UpdateUserResponse = {
  /**
   * The HTTP response status code returned by the server, indicating the result of the PATCH request to update a user record. A status code of 200 signifies that the operation was successful, and the user details have been updated accordingly. This code helps in programmatically determining the outcome of the request.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status, such as 'OK' for a successful request. This provides a human-readable confirmation of the operation's result, complementing the numerical status code.
   */
  status: string;
  /**
   * The unique Apideck identifier for the service provider involved in the operation. This ID helps in identifying which service integration was used to perform the user update, especially when multiple integrations are in place.
   */
  service: string;
  /**
   * The name of the unified API resource that was targeted by the operation, in this case, the user resource. This helps in understanding which type of resource was affected by the PATCH request.
   */
  resource: string;
  /**
   * The specific operation that was performed, identified as 'update' in this context. This indicates that the user record was modified as a result of the PATCH request, providing clarity on the action taken.
   */
  operation: string;
  /**
   * This object contains the updated details of the user record in the CRM system. It encapsulates all the fields that were modified during the PATCH operation, ensuring that the user information is current and accurate. The structure of this object will vary based on the fields included in the update request.
   */
  data: UpdateUserResponseUnifiedId;
};

/** @internal */
export const UpdateUserResponseUnifiedId$inboundSchema: z.ZodType<
  UpdateUserResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type UpdateUserResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const UpdateUserResponseUnifiedId$outboundSchema: z.ZodType<
  UpdateUserResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  UpdateUserResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserResponseUnifiedId$ {
  /** @deprecated use `UpdateUserResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = UpdateUserResponseUnifiedId$inboundSchema;
  /** @deprecated use `UpdateUserResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = UpdateUserResponseUnifiedId$outboundSchema;
  /** @deprecated use `UpdateUserResponseUnifiedId$Outbound` instead. */
  export type Outbound = UpdateUserResponseUnifiedId$Outbound;
}

export function updateUserResponseUnifiedIdToJSON(
  updateUserResponseUnifiedId: UpdateUserResponseUnifiedId,
): string {
  return JSON.stringify(
    UpdateUserResponseUnifiedId$outboundSchema.parse(
      updateUserResponseUnifiedId,
    ),
  );
}

export function updateUserResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUserResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUserResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUserResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const UpdateUserResponse$inboundSchema: z.ZodType<
  UpdateUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => UpdateUserResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type UpdateUserResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UpdateUserResponseUnifiedId$Outbound;
};

/** @internal */
export const UpdateUserResponse$outboundSchema: z.ZodType<
  UpdateUserResponse$Outbound,
  z.ZodTypeDef,
  UpdateUserResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => UpdateUserResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserResponse$ {
  /** @deprecated use `UpdateUserResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateUserResponse$inboundSchema;
  /** @deprecated use `UpdateUserResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateUserResponse$outboundSchema;
  /** @deprecated use `UpdateUserResponse$Outbound` instead. */
  export type Outbound = UpdateUserResponse$Outbound;
}

export function updateUserResponseToJSON(
  updateUserResponse: UpdateUserResponse,
): string {
  return JSON.stringify(
    UpdateUserResponse$outboundSchema.parse(updateUserResponse),
  );
}

export function updateUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUserResponse' from JSON`,
  );
}
