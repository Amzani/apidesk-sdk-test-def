/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmUsersOneGlobals = {
  /**
   * A unique identifier for the consumer, required to specify the data source or destination for the API operation. This ID is essential for authenticating and authorizing the request within the CRM system.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmUsersOneRequest = {
  /**
   * The unique identifier of the activity to be deleted. This parameter is required to specify which activity record should be removed from the CRM system. Ensure that the ID corresponds to an existing activity to avoid errors.
   */
  id: string;
  /**
   * An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service.
   */
  serviceId?: string | undefined;
  /**
   * A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.
   */
  raw?: boolean | undefined;
  /**
   * Enables selective retrieval of specific fields in the API response, improving performance by reducing data load. Specify fields as a comma-separated list, and use dot notation for nested properties.
   */
  fields?: string | null | undefined;
};

export type CrmUsersOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * User
   */
  getUserResponse?: components.GetUserResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmUsersOneGlobals$inboundSchema: z.ZodType<
  CrmUsersOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmUsersOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmUsersOneGlobals$outboundSchema: z.ZodType<
  CrmUsersOneGlobals$Outbound,
  z.ZodTypeDef,
  CrmUsersOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersOneGlobals$ {
  /** @deprecated use `CrmUsersOneGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmUsersOneGlobals$inboundSchema;
  /** @deprecated use `CrmUsersOneGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmUsersOneGlobals$outboundSchema;
  /** @deprecated use `CrmUsersOneGlobals$Outbound` instead. */
  export type Outbound = CrmUsersOneGlobals$Outbound;
}

export function crmUsersOneGlobalsToJSON(
  crmUsersOneGlobals: CrmUsersOneGlobals,
): string {
  return JSON.stringify(
    CrmUsersOneGlobals$outboundSchema.parse(crmUsersOneGlobals),
  );
}

export function crmUsersOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersOneGlobals' from JSON`,
  );
}

/** @internal */
export const CrmUsersOneRequest$inboundSchema: z.ZodType<
  CrmUsersOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type CrmUsersOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const CrmUsersOneRequest$outboundSchema: z.ZodType<
  CrmUsersOneRequest$Outbound,
  z.ZodTypeDef,
  CrmUsersOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersOneRequest$ {
  /** @deprecated use `CrmUsersOneRequest$inboundSchema` instead. */
  export const inboundSchema = CrmUsersOneRequest$inboundSchema;
  /** @deprecated use `CrmUsersOneRequest$outboundSchema` instead. */
  export const outboundSchema = CrmUsersOneRequest$outboundSchema;
  /** @deprecated use `CrmUsersOneRequest$Outbound` instead. */
  export type Outbound = CrmUsersOneRequest$Outbound;
}

export function crmUsersOneRequestToJSON(
  crmUsersOneRequest: CrmUsersOneRequest,
): string {
  return JSON.stringify(
    CrmUsersOneRequest$outboundSchema.parse(crmUsersOneRequest),
  );
}

export function crmUsersOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersOneRequest' from JSON`,
  );
}

/** @internal */
export const CrmUsersOneResponse$inboundSchema: z.ZodType<
  CrmUsersOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetUserResponse: components.GetUserResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetUserResponse": "getUserResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmUsersOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetUserResponse?: components.GetUserResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmUsersOneResponse$outboundSchema: z.ZodType<
  CrmUsersOneResponse$Outbound,
  z.ZodTypeDef,
  CrmUsersOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getUserResponse: components.GetUserResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getUserResponse: "GetUserResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersOneResponse$ {
  /** @deprecated use `CrmUsersOneResponse$inboundSchema` instead. */
  export const inboundSchema = CrmUsersOneResponse$inboundSchema;
  /** @deprecated use `CrmUsersOneResponse$outboundSchema` instead. */
  export const outboundSchema = CrmUsersOneResponse$outboundSchema;
  /** @deprecated use `CrmUsersOneResponse$Outbound` instead. */
  export type Outbound = CrmUsersOneResponse$Outbound;
}

export function crmUsersOneResponseToJSON(
  crmUsersOneResponse: CrmUsersOneResponse,
): string {
  return JSON.stringify(
    CrmUsersOneResponse$outboundSchema.parse(crmUsersOneResponse),
  );
}

export function crmUsersOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersOneResponse' from JSON`,
  );
}
