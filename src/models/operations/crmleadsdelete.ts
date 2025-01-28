/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmLeadsDeleteGlobals = {
  /**
   * A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmLeadsDeleteRequest = {
  /**
   * The unique identifier of the activity record you wish to delete. This ID is crucial for specifying which record should be removed from the CRM system.
   */
  id: string;
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
   * A boolean flag that, when set to true, returns the raw data as received from the service. This is primarily useful for debugging and development purposes, allowing you to see the unprocessed response.
   */
  raw?: boolean | undefined;
};

export type CrmLeadsDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Lead deleted
   */
  deleteLeadResponse?: components.DeleteLeadResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmLeadsDeleteGlobals$inboundSchema: z.ZodType<
  CrmLeadsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmLeadsDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmLeadsDeleteGlobals$outboundSchema: z.ZodType<
  CrmLeadsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  CrmLeadsDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsDeleteGlobals$ {
  /** @deprecated use `CrmLeadsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsDeleteGlobals$inboundSchema;
  /** @deprecated use `CrmLeadsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsDeleteGlobals$outboundSchema;
  /** @deprecated use `CrmLeadsDeleteGlobals$Outbound` instead. */
  export type Outbound = CrmLeadsDeleteGlobals$Outbound;
}

export function crmLeadsDeleteGlobalsToJSON(
  crmLeadsDeleteGlobals: CrmLeadsDeleteGlobals,
): string {
  return JSON.stringify(
    CrmLeadsDeleteGlobals$outboundSchema.parse(crmLeadsDeleteGlobals),
  );
}

export function crmLeadsDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmLeadsDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmLeadsDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmLeadsDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const CrmLeadsDeleteRequest$inboundSchema: z.ZodType<
  CrmLeadsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type CrmLeadsDeleteRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const CrmLeadsDeleteRequest$outboundSchema: z.ZodType<
  CrmLeadsDeleteRequest$Outbound,
  z.ZodTypeDef,
  CrmLeadsDeleteRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsDeleteRequest$ {
  /** @deprecated use `CrmLeadsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsDeleteRequest$inboundSchema;
  /** @deprecated use `CrmLeadsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsDeleteRequest$outboundSchema;
  /** @deprecated use `CrmLeadsDeleteRequest$Outbound` instead. */
  export type Outbound = CrmLeadsDeleteRequest$Outbound;
}

export function crmLeadsDeleteRequestToJSON(
  crmLeadsDeleteRequest: CrmLeadsDeleteRequest,
): string {
  return JSON.stringify(
    CrmLeadsDeleteRequest$outboundSchema.parse(crmLeadsDeleteRequest),
  );
}

export function crmLeadsDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmLeadsDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmLeadsDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmLeadsDeleteRequest' from JSON`,
  );
}

/** @internal */
export const CrmLeadsDeleteResponse$inboundSchema: z.ZodType<
  CrmLeadsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteLeadResponse: components.DeleteLeadResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteLeadResponse": "deleteLeadResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmLeadsDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteLeadResponse?: components.DeleteLeadResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmLeadsDeleteResponse$outboundSchema: z.ZodType<
  CrmLeadsDeleteResponse$Outbound,
  z.ZodTypeDef,
  CrmLeadsDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteLeadResponse: components.DeleteLeadResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteLeadResponse: "DeleteLeadResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsDeleteResponse$ {
  /** @deprecated use `CrmLeadsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsDeleteResponse$inboundSchema;
  /** @deprecated use `CrmLeadsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsDeleteResponse$outboundSchema;
  /** @deprecated use `CrmLeadsDeleteResponse$Outbound` instead. */
  export type Outbound = CrmLeadsDeleteResponse$Outbound;
}

export function crmLeadsDeleteResponseToJSON(
  crmLeadsDeleteResponse: CrmLeadsDeleteResponse,
): string {
  return JSON.stringify(
    CrmLeadsDeleteResponse$outboundSchema.parse(crmLeadsDeleteResponse),
  );
}

export function crmLeadsDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmLeadsDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmLeadsDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmLeadsDeleteResponse' from JSON`,
  );
}
