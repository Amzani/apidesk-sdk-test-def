/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Activity,
  Activity$inboundSchema,
  Activity$Outbound,
  Activity$outboundSchema,
} from "./activity.js";

/**
 * Activity
 */
export type GetActivityResponse = {
  /**
   * The HTTP response status code returned by the server, indicating the result of the GET request. This integer value helps developers understand whether the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found).
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This string provides a human-readable explanation of the status code, aiding in quick interpretation of the response outcome.
   */
  status: string;
  /**
   * The Apideck ID of the service provider that processed the request. This string identifies which service integration was used, especially useful when multiple services are connected, ensuring developers know the source of the data.
   */
  service: string;
  /**
   * The name of the Unified API resource that was accessed, such as 'activity'. This string helps developers understand which specific resource type the response data pertains to, aligning with the operation's purpose of fetching CRM activity details.
   */
  resource: string;
  /**
   * The specific operation performed by the API, in this case, 'activitiesOne'. This string indicates the action taken, helping developers confirm that the correct API operation was executed to retrieve the desired CRM activity information.
   */
  operation: string;
  /**
   * This object contains all the detailed information about the specific CRM activity requested. It serves as the main container for the activity's data, encapsulating various attributes such as identifiers, timestamps, and other relevant details. This structure ensures that developers can access all necessary information about the activity in a single, organized format.
   */
  data: Activity;
};

/** @internal */
export const GetActivityResponse$inboundSchema: z.ZodType<
  GetActivityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Activity$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetActivityResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Activity$Outbound;
};

/** @internal */
export const GetActivityResponse$outboundSchema: z.ZodType<
  GetActivityResponse$Outbound,
  z.ZodTypeDef,
  GetActivityResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Activity$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActivityResponse$ {
  /** @deprecated use `GetActivityResponse$inboundSchema` instead. */
  export const inboundSchema = GetActivityResponse$inboundSchema;
  /** @deprecated use `GetActivityResponse$outboundSchema` instead. */
  export const outboundSchema = GetActivityResponse$outboundSchema;
  /** @deprecated use `GetActivityResponse$Outbound` instead. */
  export type Outbound = GetActivityResponse$Outbound;
}

export function getActivityResponseToJSON(
  getActivityResponse: GetActivityResponse,
): string {
  return JSON.stringify(
    GetActivityResponse$outboundSchema.parse(getActivityResponse),
  );
}

export function getActivityResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetActivityResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetActivityResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetActivityResponse' from JSON`,
  );
}
