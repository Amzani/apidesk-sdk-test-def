/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  User,
  User$inboundSchema,
  User$Outbound,
  User$outboundSchema,
} from "./user.js";

/**
 * User
 */
export type GetUserResponse = {
  /**
   * The HTTP response status code returned by the server, indicating the result of the GET request. This integer value helps determine whether the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is essential for error handling and debugging in API integrations.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for a failed one. This string provides a human-readable explanation of the status code, aiding developers in understanding the outcome of the API call.
   */
  status: string;
  /**
   * The unique Apideck identifier for the service provider from which the user data is retrieved. This string helps in identifying the source of the data, especially when multiple service integrations are involved, ensuring accurate data mapping and retrieval.
   */
  service: string;
  /**
   * The name of the unified API resource being accessed, which in this context is related to user data. This string indicates the type of resource involved in the operation, helping developers understand the nature of the data returned by the API.
   */
  resource: string;
  /**
   * The specific operation performed by the API, in this case, fetching user details. This string provides clarity on the action taken, which is crucial for logging and tracking API usage within applications.
   */
  operation: string;
  /**
   * This object contains all the detailed information about the user retrieved from the CRM system. It serves as the primary container for user-specific data, including identifiers, names, and other relevant attributes. This structure ensures that all user-related information is organized and accessible in a single, cohesive format.
   */
  data: User;
};

/** @internal */
export const GetUserResponse$inboundSchema: z.ZodType<
  GetUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: User$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetUserResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: User$Outbound;
};

/** @internal */
export const GetUserResponse$outboundSchema: z.ZodType<
  GetUserResponse$Outbound,
  z.ZodTypeDef,
  GetUserResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: User$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserResponse$ {
  /** @deprecated use `GetUserResponse$inboundSchema` instead. */
  export const inboundSchema = GetUserResponse$inboundSchema;
  /** @deprecated use `GetUserResponse$outboundSchema` instead. */
  export const outboundSchema = GetUserResponse$outboundSchema;
  /** @deprecated use `GetUserResponse$Outbound` instead. */
  export type Outbound = GetUserResponse$Outbound;
}

export function getUserResponseToJSON(
  getUserResponse: GetUserResponse,
): string {
  return JSON.stringify(GetUserResponse$outboundSchema.parse(getUserResponse));
}

export function getUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUserResponse' from JSON`,
  );
}
