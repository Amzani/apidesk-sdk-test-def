/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The 'data' object serves as the container for all the information returned in the response. It encapsulates the updated user details after a successful PATCH request to the '/crm/users/{id}' endpoint. This object is always included in the response to provide a structured format for accessing the updated user information.
 */
export type UserUpdateResponseUnifiedId = {
  /**
   * The 'data.id' field represents the unique identifier of the user resource that has been updated. This identifier is crucial for confirming that the correct user record was modified. It is always included in the response to ensure that the client can verify the specific user record that was affected by the update operation.
   */
  id: string;
};

/**
 * User updated
 */
export type UserUpdateResponse = {
  /**
   * The HTTP response status code returned by the server. This integer value indicates the result of the PATCH request operation, such as 200 for success or 400 for a client error. It is always included in the response to inform the client about the outcome of their request, helping in debugging and ensuring proper handling of the response.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for a successful request or 'Bad Request' for an error. It complements the status code by offering more context about the result of the operation, aiding in understanding the server's response.
   */
  status: string;
  /**
   * The Apideck ID of the service provider involved in the operation. This string uniquely identifies the service through which the user update request was processed, especially useful in environments with multiple integrations. It is included to help track and manage the specific service handling the request, ensuring transparency and traceability.
   */
  service: string;
  /**
   * The name of the Unified API resource that was targeted by the operation. This string indicates which resource within the API was affected by the PATCH request, such as 'users' in this context. It is crucial for understanding the scope and impact of the operation, especially when dealing with complex API interactions.
   */
  resource: string;
  /**
   * The specific operation performed as part of the API request. This string describes the action taken, such as 'update' in this case, providing clarity on what change was attempted on the resource. It is included to confirm the intended operation was executed, assisting in auditing and logging activities.
   */
  operation: string;
  /**
   * The 'data' object serves as the container for all the information returned in the response. It encapsulates the updated user details after a successful PATCH request to the '/crm/users/{id}' endpoint. This object is always included in the response to provide a structured format for accessing the updated user information.
   */
  data: UserUpdateResponseUnifiedId;
};

/** @internal */
export const UserUpdateResponseUnifiedId$inboundSchema: z.ZodType<
  UserUpdateResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type UserUpdateResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const UserUpdateResponseUnifiedId$outboundSchema: z.ZodType<
  UserUpdateResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  UserUpdateResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserUpdateResponseUnifiedId$ {
  /** @deprecated use `UserUpdateResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = UserUpdateResponseUnifiedId$inboundSchema;
  /** @deprecated use `UserUpdateResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = UserUpdateResponseUnifiedId$outboundSchema;
  /** @deprecated use `UserUpdateResponseUnifiedId$Outbound` instead. */
  export type Outbound = UserUpdateResponseUnifiedId$Outbound;
}

export function userUpdateResponseUnifiedIdToJSON(
  userUpdateResponseUnifiedId: UserUpdateResponseUnifiedId,
): string {
  return JSON.stringify(
    UserUpdateResponseUnifiedId$outboundSchema.parse(
      userUpdateResponseUnifiedId,
    ),
  );
}

export function userUpdateResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<UserUpdateResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserUpdateResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserUpdateResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const UserUpdateResponse$inboundSchema: z.ZodType<
  UserUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => UserUpdateResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type UserUpdateResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UserUpdateResponseUnifiedId$Outbound;
};

/** @internal */
export const UserUpdateResponse$outboundSchema: z.ZodType<
  UserUpdateResponse$Outbound,
  z.ZodTypeDef,
  UserUpdateResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => UserUpdateResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserUpdateResponse$ {
  /** @deprecated use `UserUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = UserUpdateResponse$inboundSchema;
  /** @deprecated use `UserUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = UserUpdateResponse$outboundSchema;
  /** @deprecated use `UserUpdateResponse$Outbound` instead. */
  export type Outbound = UserUpdateResponse$Outbound;
}

export function userUpdateResponseToJSON(
  userUpdateResponse: UserUpdateResponse,
): string {
  return JSON.stringify(
    UserUpdateResponse$outboundSchema.parse(userUpdateResponse),
  );
}

export function userUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<UserUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserUpdateResponse' from JSON`,
  );
}
