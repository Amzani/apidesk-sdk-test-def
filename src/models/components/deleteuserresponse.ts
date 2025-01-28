/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This object contains information about the user resource that was deleted. It serves as a confirmation that the specified user has been successfully removed from the CRM system. The object includes the unique identifier of the deleted user, ensuring that developers can verify the correct user was deleted.
 */
export type DeleteUserResponseUnifiedId = {
  /**
   * The unique identifier of the user that was deleted. This ID confirms the specific user record that has been removed from the CRM system, allowing developers to track and verify the deletion operation.
   */
  id: string;
};

/**
 * User deleted
 */
export type DeleteUserResponse = {
  /**
   * The HTTP response status code returned by the server. This integer value indicates the result of the delete operation, with a code of 200 signifying that the user was successfully removed from the CRM system. It helps developers confirm the success or failure of the operation.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status. This string provides a human-readable status message, such as 'OK', which corresponds to the status code and confirms the successful deletion of the user from the CRM system.
   */
  status: string;
  /**
   * The Apideck ID of the service provider involved in the operation. This string identifies which service integration was used to perform the user deletion, aiding in tracking and managing service-specific operations within the CRM.
   */
  service: string;
  /**
   * The name of the Unified API resource that was affected by the operation. This string indicates the type of resource, such as 'user', that was deleted, helping developers understand the context of the operation within the broader API ecosystem.
   */
  resource: string;
  /**
   * The specific operation that was performed, represented as a string. In this context, it indicates the 'delete' action taken on the user resource, providing clarity on the type of operation executed within the CRM system.
   */
  operation: string;
  /**
   * This object contains information about the user resource that was deleted. It serves as a confirmation that the specified user has been successfully removed from the CRM system. The object includes the unique identifier of the deleted user, ensuring that developers can verify the correct user was deleted.
   */
  data: DeleteUserResponseUnifiedId;
};

/** @internal */
export const DeleteUserResponseUnifiedId$inboundSchema: z.ZodType<
  DeleteUserResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteUserResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const DeleteUserResponseUnifiedId$outboundSchema: z.ZodType<
  DeleteUserResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  DeleteUserResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteUserResponseUnifiedId$ {
  /** @deprecated use `DeleteUserResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = DeleteUserResponseUnifiedId$inboundSchema;
  /** @deprecated use `DeleteUserResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = DeleteUserResponseUnifiedId$outboundSchema;
  /** @deprecated use `DeleteUserResponseUnifiedId$Outbound` instead. */
  export type Outbound = DeleteUserResponseUnifiedId$Outbound;
}

export function deleteUserResponseUnifiedIdToJSON(
  deleteUserResponseUnifiedId: DeleteUserResponseUnifiedId,
): string {
  return JSON.stringify(
    DeleteUserResponseUnifiedId$outboundSchema.parse(
      deleteUserResponseUnifiedId,
    ),
  );
}

export function deleteUserResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<DeleteUserResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteUserResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteUserResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const DeleteUserResponse$inboundSchema: z.ZodType<
  DeleteUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteUserResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type DeleteUserResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: DeleteUserResponseUnifiedId$Outbound;
};

/** @internal */
export const DeleteUserResponse$outboundSchema: z.ZodType<
  DeleteUserResponse$Outbound,
  z.ZodTypeDef,
  DeleteUserResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => DeleteUserResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteUserResponse$ {
  /** @deprecated use `DeleteUserResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteUserResponse$inboundSchema;
  /** @deprecated use `DeleteUserResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteUserResponse$outboundSchema;
  /** @deprecated use `DeleteUserResponse$Outbound` instead. */
  export type Outbound = DeleteUserResponse$Outbound;
}

export function deleteUserResponseToJSON(
  deleteUserResponse: DeleteUserResponse,
): string {
  return JSON.stringify(
    DeleteUserResponse$outboundSchema.parse(deleteUserResponse),
  );
}

export function deleteUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteUserResponse' from JSON`,
  );
}
