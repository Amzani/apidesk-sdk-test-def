/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CompaniesOneSecurity = {
  apiKey: string;
};

export type CompaniesOneRequest = {
  /**
   * The unique identifier of the activity record to be deleted. This parameter is essential as it specifies which activity in the CRM system will be removed. Ensure that the ID corresponds to an existing activity to avoid errors.
   */
  id: string;
  /**
   * A boolean flag that, when set to true, includes the raw response in the output. This is primarily used for debugging purposes to provide more detailed information about the response. By default, this is set to false.
   */
  raw?: boolean | undefined;
  /**
   * A unique identifier for the consumer making the request. This ID is crucial for authenticating the consumer and ensuring that the correct data is accessed or modified. It must be a valid consumer ID associated with your account.
   */
  consumerId: string;
  /**
   * The unique identifier of your Unify application. This ID is used to authenticate the application making the request and must match the ID assigned to your application in the Apideck platform.
   */
  appId: string;
  /**
   * An optional parameter used to specify the target service when multiple integrations are active. This ID helps direct the request to the correct service, such as 'pipedrive' or 'salesforce'. It is only necessary if your setup includes multiple services.
   */
  serviceId?: string | undefined;
  /**
   * The 'fields' query parameter allows API users to customize the response by specifying which fields to include. This parameter accepts a comma-separated string of field names, enabling users to retrieve only the necessary data. If omitted, the API returns all available fields. Nested properties can be requested using dot notation, enhancing the flexibility of data retrieval.
   */
  fields?: string | null | undefined;
};

export type CompaniesOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Company
   */
  companyGetResponse?: components.CompanyGetResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CompaniesOneSecurity$inboundSchema: z.ZodType<
  CompaniesOneSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
});

/** @internal */
export type CompaniesOneSecurity$Outbound = {
  apiKey: string;
};

/** @internal */
export const CompaniesOneSecurity$outboundSchema: z.ZodType<
  CompaniesOneSecurity$Outbound,
  z.ZodTypeDef,
  CompaniesOneSecurity
> = z.object({
  apiKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesOneSecurity$ {
  /** @deprecated use `CompaniesOneSecurity$inboundSchema` instead. */
  export const inboundSchema = CompaniesOneSecurity$inboundSchema;
  /** @deprecated use `CompaniesOneSecurity$outboundSchema` instead. */
  export const outboundSchema = CompaniesOneSecurity$outboundSchema;
  /** @deprecated use `CompaniesOneSecurity$Outbound` instead. */
  export type Outbound = CompaniesOneSecurity$Outbound;
}

export function companiesOneSecurityToJSON(
  companiesOneSecurity: CompaniesOneSecurity,
): string {
  return JSON.stringify(
    CompaniesOneSecurity$outboundSchema.parse(companiesOneSecurity),
  );
}

export function companiesOneSecurityFromJSON(
  jsonString: string,
): SafeParseResult<CompaniesOneSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompaniesOneSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompaniesOneSecurity' from JSON`,
  );
}

/** @internal */
export const CompaniesOneRequest$inboundSchema: z.ZodType<
  CompaniesOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  raw: z.boolean().default(false),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type CompaniesOneRequest$Outbound = {
  id: string;
  raw: boolean;
  consumerId: string;
  appId: string;
  serviceId?: string | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const CompaniesOneRequest$outboundSchema: z.ZodType<
  CompaniesOneRequest$Outbound,
  z.ZodTypeDef,
  CompaniesOneRequest
> = z.object({
  id: z.string(),
  raw: z.boolean().default(false),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesOneRequest$ {
  /** @deprecated use `CompaniesOneRequest$inboundSchema` instead. */
  export const inboundSchema = CompaniesOneRequest$inboundSchema;
  /** @deprecated use `CompaniesOneRequest$outboundSchema` instead. */
  export const outboundSchema = CompaniesOneRequest$outboundSchema;
  /** @deprecated use `CompaniesOneRequest$Outbound` instead. */
  export type Outbound = CompaniesOneRequest$Outbound;
}

export function companiesOneRequestToJSON(
  companiesOneRequest: CompaniesOneRequest,
): string {
  return JSON.stringify(
    CompaniesOneRequest$outboundSchema.parse(companiesOneRequest),
  );
}

export function companiesOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<CompaniesOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompaniesOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompaniesOneRequest' from JSON`,
  );
}

/** @internal */
export const CompaniesOneResponse$inboundSchema: z.ZodType<
  CompaniesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CompanyGetResponse: components.CompanyGetResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CompanyGetResponse": "companyGetResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CompaniesOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CompanyGetResponse?: components.CompanyGetResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CompaniesOneResponse$outboundSchema: z.ZodType<
  CompaniesOneResponse$Outbound,
  z.ZodTypeDef,
  CompaniesOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  companyGetResponse: components.CompanyGetResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    companyGetResponse: "CompanyGetResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesOneResponse$ {
  /** @deprecated use `CompaniesOneResponse$inboundSchema` instead. */
  export const inboundSchema = CompaniesOneResponse$inboundSchema;
  /** @deprecated use `CompaniesOneResponse$outboundSchema` instead. */
  export const outboundSchema = CompaniesOneResponse$outboundSchema;
  /** @deprecated use `CompaniesOneResponse$Outbound` instead. */
  export type Outbound = CompaniesOneResponse$Outbound;
}

export function companiesOneResponseToJSON(
  companiesOneResponse: CompaniesOneResponse,
): string {
  return JSON.stringify(
    CompaniesOneResponse$outboundSchema.parse(companiesOneResponse),
  );
}

export function companiesOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<CompaniesOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompaniesOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompaniesOneResponse' from JSON`,
  );
}
