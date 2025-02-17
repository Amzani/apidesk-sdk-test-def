/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmCompaniesAllGlobals = {
  /**
   * A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmCompaniesAllRequest = {
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
   * Facilitates the filtering of companies based on specific criteria. Utilize nested properties such as 'filter.name' to apply precise conditions, allowing for targeted data retrieval based on attributes like company name.
   */
  filter?: components.CompaniesFilter | undefined;
  /**
   * Enables sorting of the company list by specified fields. Use nested properties like 'sort.by' to define sorting criteria, allowing results to be organized by attributes such as name or creation date.
   */
  sort?: components.CompaniesSort | undefined;
  /**
   * This parameter allows developers to pass additional query parameters directly to the downstream service, extending the API's functionality without modifying its core parameters. It is particularly useful for leveraging specific features or data points offered by the downstream service that are not natively supported by the API.
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * This parameter allows users to specify which fields to include in the API response by providing a comma-separated list. This customization helps optimize data handling and performance by returning only the necessary data fields.
   */
  fields?: string | null | undefined;
};

export type CrmCompaniesAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Companies
   */
  listCompaniesResponse?: components.ListCompaniesResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmCompaniesAllGlobals$inboundSchema: z.ZodType<
  CrmCompaniesAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmCompaniesAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmCompaniesAllGlobals$outboundSchema: z.ZodType<
  CrmCompaniesAllGlobals$Outbound,
  z.ZodTypeDef,
  CrmCompaniesAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesAllGlobals$ {
  /** @deprecated use `CrmCompaniesAllGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesAllGlobals$inboundSchema;
  /** @deprecated use `CrmCompaniesAllGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesAllGlobals$outboundSchema;
  /** @deprecated use `CrmCompaniesAllGlobals$Outbound` instead. */
  export type Outbound = CrmCompaniesAllGlobals$Outbound;
}

export function crmCompaniesAllGlobalsToJSON(
  crmCompaniesAllGlobals: CrmCompaniesAllGlobals,
): string {
  return JSON.stringify(
    CrmCompaniesAllGlobals$outboundSchema.parse(crmCompaniesAllGlobals),
  );
}

export function crmCompaniesAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesAllGlobals' from JSON`,
  );
}

/** @internal */
export const CrmCompaniesAllRequest$inboundSchema: z.ZodType<
  CrmCompaniesAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.CompaniesFilter$inboundSchema.optional(),
  sort: components.CompaniesSort$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type CrmCompaniesAllRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.CompaniesFilter$Outbound | undefined;
  sort?: components.CompaniesSort$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const CrmCompaniesAllRequest$outboundSchema: z.ZodType<
  CrmCompaniesAllRequest$Outbound,
  z.ZodTypeDef,
  CrmCompaniesAllRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.CompaniesFilter$outboundSchema.optional(),
  sort: components.CompaniesSort$outboundSchema.optional(),
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
export namespace CrmCompaniesAllRequest$ {
  /** @deprecated use `CrmCompaniesAllRequest$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesAllRequest$inboundSchema;
  /** @deprecated use `CrmCompaniesAllRequest$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesAllRequest$outboundSchema;
  /** @deprecated use `CrmCompaniesAllRequest$Outbound` instead. */
  export type Outbound = CrmCompaniesAllRequest$Outbound;
}

export function crmCompaniesAllRequestToJSON(
  crmCompaniesAllRequest: CrmCompaniesAllRequest,
): string {
  return JSON.stringify(
    CrmCompaniesAllRequest$outboundSchema.parse(crmCompaniesAllRequest),
  );
}

export function crmCompaniesAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesAllRequest' from JSON`,
  );
}

/** @internal */
export const CrmCompaniesAllResponse$inboundSchema: z.ZodType<
  CrmCompaniesAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ListCompaniesResponse: components.ListCompaniesResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ListCompaniesResponse": "listCompaniesResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmCompaniesAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ListCompaniesResponse?: components.ListCompaniesResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmCompaniesAllResponse$outboundSchema: z.ZodType<
  CrmCompaniesAllResponse$Outbound,
  z.ZodTypeDef,
  CrmCompaniesAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  listCompaniesResponse: components.ListCompaniesResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    listCompaniesResponse: "ListCompaniesResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesAllResponse$ {
  /** @deprecated use `CrmCompaniesAllResponse$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesAllResponse$inboundSchema;
  /** @deprecated use `CrmCompaniesAllResponse$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesAllResponse$outboundSchema;
  /** @deprecated use `CrmCompaniesAllResponse$Outbound` instead. */
  export type Outbound = CrmCompaniesAllResponse$Outbound;
}

export function crmCompaniesAllResponseToJSON(
  crmCompaniesAllResponse: CrmCompaniesAllResponse,
): string {
  return JSON.stringify(
    CrmCompaniesAllResponse$outboundSchema.parse(crmCompaniesAllResponse),
  );
}

export function crmCompaniesAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesAllResponse' from JSON`,
  );
}
