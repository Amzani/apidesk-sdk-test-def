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
   * A unique identifier for the consumer, required to specify the data source or destination for the API operation. This ID is essential for authenticating and authorizing the request within the CRM system.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmCompaniesAllRequest = {
  /**
   * A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.
   */
  raw?: boolean | undefined;
  /**
   * An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service.
   */
  serviceId?: string | undefined;
  /**
   * The 'cursor' parameter is used for pagination, allowing you to specify the starting point for the next set of results. It is particularly useful for navigating through large datasets efficiently. You can find the cursor for the next or previous page in the 'meta.cursors' property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * The 'limit' parameter specifies the maximum number of results to return in a single response. It helps manage the size of the response and can be set between 1 and 200, with a default value of 20 if not specified.
   */
  limit?: number | undefined;
  /**
   * The 'filter' parameter allows you to refine the results by applying specific criteria. It supports nested properties such as 'company_id' and 'owner_id' to filter activities based on company or owner identifiers.
   */
  filter?: components.CompaniesFilter | undefined;
  /**
   * Define sorting preferences for the retrieved activities. Use nested properties to specify the field and order for sorting.
   */
  sort?: components.CompaniesSort | undefined;
  /**
   * Allows additional query parameters to be sent directly to the downstream service without modification. This is useful for leveraging specific features of the downstream API that are not directly exposed by this API.
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * Enables selective retrieval of specific fields in the API response, improving performance by reducing data load. Specify fields as a comma-separated list, and use dot notation for nested properties.
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
