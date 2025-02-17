/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmContactsAllGlobals = {
  /**
   * A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmContactsAllRequest = {
  /**
   * A boolean flag that, when set to true, returns the raw data as received from the service. This is primarily useful for debugging and development purposes, allowing you to see the unprocessed response.
   */
  raw?: boolean | undefined;
  /**
   * A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.
   */
  consumerId?: string | undefined;
  /**
   * The unique identifier for your Unify application, required to authenticate API requests and ensure they are processed within the correct application context.
   */
  appId?: string | undefined;
  /**
   * Optional header to specify the service ID for targeting a specific service integration, such as 'pipedrive'. This is useful when multiple integrations are active and you need to direct the request to a particular service.
   */
  serviceId?: string | undefined;
  /**
   * This parameter is used for pagination, acting as a pointer to indicate the starting point for the next set of results. It helps in navigating through paginated data efficiently, with cursors typically found in the response's meta.cursors property.
   */
  cursor?: string | null | undefined;
  /**
   * Defines the maximum number of CRM activities to return in the response, allowing control over data volume. Accepts values between 1 and 200, with a default of 20 if unspecified. Useful for managing response size in paginated requests.
   */
  limit?: number | undefined;
  /**
   * Allows for the application of filters to refine the list of CRM contacts returned. This parameter supports nested properties such as 'name', 'first_name', and 'last_name' to specify filtering criteria based on contact details.
   */
  filter?: components.ContactsFilter | undefined;
  /**
   * Apply sorting to the contact list. This parameter allows you to specify sorting preferences using nested properties, such as sorting by name or date, to organize the retrieved contact data efficiently.
   */
  sort?: components.ContactsSort | undefined;
  /**
   * This parameter allows developers to pass additional query parameters directly to the downstream service, extending the API's functionality without modifying its core parameters. It is particularly useful for leveraging specific features or data points offered by the downstream service that are not natively supported by the API.
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * This parameter allows users to specify which fields to include in the API response by providing a comma-separated list. This customization helps optimize data handling and performance by returning only the necessary data fields.
   */
  fields?: string | null | undefined;
};

export type CrmContactsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Contacts
   */
  listContactsResponse?: components.ListContactsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmContactsAllGlobals$inboundSchema: z.ZodType<
  CrmContactsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmContactsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmContactsAllGlobals$outboundSchema: z.ZodType<
  CrmContactsAllGlobals$Outbound,
  z.ZodTypeDef,
  CrmContactsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAllGlobals$ {
  /** @deprecated use `CrmContactsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAllGlobals$inboundSchema;
  /** @deprecated use `CrmContactsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAllGlobals$outboundSchema;
  /** @deprecated use `CrmContactsAllGlobals$Outbound` instead. */
  export type Outbound = CrmContactsAllGlobals$Outbound;
}

export function crmContactsAllGlobalsToJSON(
  crmContactsAllGlobals: CrmContactsAllGlobals,
): string {
  return JSON.stringify(
    CrmContactsAllGlobals$outboundSchema.parse(crmContactsAllGlobals),
  );
}

export function crmContactsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsAllGlobals' from JSON`,
  );
}

/** @internal */
export const CrmContactsAllRequest$inboundSchema: z.ZodType<
  CrmContactsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.ContactsFilter$inboundSchema.optional(),
  sort: components.ContactsSort$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type CrmContactsAllRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.ContactsFilter$Outbound | undefined;
  sort?: components.ContactsSort$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const CrmContactsAllRequest$outboundSchema: z.ZodType<
  CrmContactsAllRequest$Outbound,
  z.ZodTypeDef,
  CrmContactsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.ContactsFilter$outboundSchema.optional(),
  sort: components.ContactsSort$outboundSchema.optional(),
  passThrough: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAllRequest$ {
  /** @deprecated use `CrmContactsAllRequest$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAllRequest$inboundSchema;
  /** @deprecated use `CrmContactsAllRequest$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAllRequest$outboundSchema;
  /** @deprecated use `CrmContactsAllRequest$Outbound` instead. */
  export type Outbound = CrmContactsAllRequest$Outbound;
}

export function crmContactsAllRequestToJSON(
  crmContactsAllRequest: CrmContactsAllRequest,
): string {
  return JSON.stringify(
    CrmContactsAllRequest$outboundSchema.parse(crmContactsAllRequest),
  );
}

export function crmContactsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsAllRequest' from JSON`,
  );
}

/** @internal */
export const CrmContactsAllResponse$inboundSchema: z.ZodType<
  CrmContactsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ListContactsResponse: components.ListContactsResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ListContactsResponse": "listContactsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmContactsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ListContactsResponse?: components.ListContactsResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmContactsAllResponse$outboundSchema: z.ZodType<
  CrmContactsAllResponse$Outbound,
  z.ZodTypeDef,
  CrmContactsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  listContactsResponse: components.ListContactsResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    listContactsResponse: "ListContactsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAllResponse$ {
  /** @deprecated use `CrmContactsAllResponse$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAllResponse$inboundSchema;
  /** @deprecated use `CrmContactsAllResponse$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAllResponse$outboundSchema;
  /** @deprecated use `CrmContactsAllResponse$Outbound` instead. */
  export type Outbound = CrmContactsAllResponse$Outbound;
}

export function crmContactsAllResponseToJSON(
  crmContactsAllResponse: CrmContactsAllResponse,
): string {
  return JSON.stringify(
    CrmContactsAllResponse$outboundSchema.parse(crmContactsAllResponse),
  );
}

export function crmContactsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsAllResponse' from JSON`,
  );
}
