/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmContactsAddGlobals = {
  /**
   * A unique identifier for the consumer, required to specify the data source or destination for the API operation. This ID is essential for authenticating and authorizing the request within the CRM system.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmContactsAddRequest = {
  /**
   * A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.
   */
  raw?: boolean | undefined;
  /**
   * An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service.
   */
  serviceId?: string | undefined;
  createContactRequest: components.CreateContactRequest;
};

export type CrmContactsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Contact created
   */
  createContactResponse?: components.CreateContactResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmContactsAddGlobals$inboundSchema: z.ZodType<
  CrmContactsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmContactsAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmContactsAddGlobals$outboundSchema: z.ZodType<
  CrmContactsAddGlobals$Outbound,
  z.ZodTypeDef,
  CrmContactsAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAddGlobals$ {
  /** @deprecated use `CrmContactsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAddGlobals$inboundSchema;
  /** @deprecated use `CrmContactsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAddGlobals$outboundSchema;
  /** @deprecated use `CrmContactsAddGlobals$Outbound` instead. */
  export type Outbound = CrmContactsAddGlobals$Outbound;
}

export function crmContactsAddGlobalsToJSON(
  crmContactsAddGlobals: CrmContactsAddGlobals,
): string {
  return JSON.stringify(
    CrmContactsAddGlobals$outboundSchema.parse(crmContactsAddGlobals),
  );
}

export function crmContactsAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsAddGlobals' from JSON`,
  );
}

/** @internal */
export const CrmContactsAddRequest$inboundSchema: z.ZodType<
  CrmContactsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  CreateContactRequest: components.CreateContactRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CreateContactRequest": "createContactRequest",
  });
});

/** @internal */
export type CrmContactsAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  CreateContactRequest: components.CreateContactRequest$Outbound;
};

/** @internal */
export const CrmContactsAddRequest$outboundSchema: z.ZodType<
  CrmContactsAddRequest$Outbound,
  z.ZodTypeDef,
  CrmContactsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  createContactRequest: components.CreateContactRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createContactRequest: "CreateContactRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAddRequest$ {
  /** @deprecated use `CrmContactsAddRequest$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAddRequest$inboundSchema;
  /** @deprecated use `CrmContactsAddRequest$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAddRequest$outboundSchema;
  /** @deprecated use `CrmContactsAddRequest$Outbound` instead. */
  export type Outbound = CrmContactsAddRequest$Outbound;
}

export function crmContactsAddRequestToJSON(
  crmContactsAddRequest: CrmContactsAddRequest,
): string {
  return JSON.stringify(
    CrmContactsAddRequest$outboundSchema.parse(crmContactsAddRequest),
  );
}

export function crmContactsAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsAddRequest' from JSON`,
  );
}

/** @internal */
export const CrmContactsAddResponse$inboundSchema: z.ZodType<
  CrmContactsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateContactResponse: components.CreateContactResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateContactResponse": "createContactResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmContactsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateContactResponse?: components.CreateContactResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmContactsAddResponse$outboundSchema: z.ZodType<
  CrmContactsAddResponse$Outbound,
  z.ZodTypeDef,
  CrmContactsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createContactResponse: components.CreateContactResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createContactResponse: "CreateContactResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAddResponse$ {
  /** @deprecated use `CrmContactsAddResponse$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAddResponse$inboundSchema;
  /** @deprecated use `CrmContactsAddResponse$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAddResponse$outboundSchema;
  /** @deprecated use `CrmContactsAddResponse$Outbound` instead. */
  export type Outbound = CrmContactsAddResponse$Outbound;
}

export function crmContactsAddResponseToJSON(
  crmContactsAddResponse: CrmContactsAddResponse,
): string {
  return JSON.stringify(
    CrmContactsAddResponse$outboundSchema.parse(crmContactsAddResponse),
  );
}

export function crmContactsAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsAddResponse' from JSON`,
  );
}
