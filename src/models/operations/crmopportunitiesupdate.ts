/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmOpportunitiesUpdateGlobals = {
  /**
   * A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmOpportunitiesUpdateRequest = {
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
  updateOpportunityRequest: components.UpdateOpportunityRequest;
};

export type CrmOpportunitiesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Opportunity updated
   */
  updateOpportunityResponse?: components.UpdateOpportunityResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmOpportunitiesUpdateGlobals$inboundSchema: z.ZodType<
  CrmOpportunitiesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmOpportunitiesUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmOpportunitiesUpdateGlobals$outboundSchema: z.ZodType<
  CrmOpportunitiesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesUpdateGlobals$ {
  /** @deprecated use `CrmOpportunitiesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesUpdateGlobals$inboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesUpdateGlobals$outboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateGlobals$Outbound` instead. */
  export type Outbound = CrmOpportunitiesUpdateGlobals$Outbound;
}

export function crmOpportunitiesUpdateGlobalsToJSON(
  crmOpportunitiesUpdateGlobals: CrmOpportunitiesUpdateGlobals,
): string {
  return JSON.stringify(
    CrmOpportunitiesUpdateGlobals$outboundSchema.parse(
      crmOpportunitiesUpdateGlobals,
    ),
  );
}

export function crmOpportunitiesUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesUpdateRequest$inboundSchema: z.ZodType<
  CrmOpportunitiesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  UpdateOpportunityRequest: components.UpdateOpportunityRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateOpportunityRequest": "updateOpportunityRequest",
  });
});

/** @internal */
export type CrmOpportunitiesUpdateRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  UpdateOpportunityRequest: components.UpdateOpportunityRequest$Outbound;
};

/** @internal */
export const CrmOpportunitiesUpdateRequest$outboundSchema: z.ZodType<
  CrmOpportunitiesUpdateRequest$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  updateOpportunityRequest: components.UpdateOpportunityRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateOpportunityRequest: "UpdateOpportunityRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesUpdateRequest$ {
  /** @deprecated use `CrmOpportunitiesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesUpdateRequest$inboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesUpdateRequest$outboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateRequest$Outbound` instead. */
  export type Outbound = CrmOpportunitiesUpdateRequest$Outbound;
}

export function crmOpportunitiesUpdateRequestToJSON(
  crmOpportunitiesUpdateRequest: CrmOpportunitiesUpdateRequest,
): string {
  return JSON.stringify(
    CrmOpportunitiesUpdateRequest$outboundSchema.parse(
      crmOpportunitiesUpdateRequest,
    ),
  );
}

export function crmOpportunitiesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesUpdateRequest' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesUpdateResponse$inboundSchema: z.ZodType<
  CrmOpportunitiesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateOpportunityResponse: components.UpdateOpportunityResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateOpportunityResponse": "updateOpportunityResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmOpportunitiesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateOpportunityResponse?:
    | components.UpdateOpportunityResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmOpportunitiesUpdateResponse$outboundSchema: z.ZodType<
  CrmOpportunitiesUpdateResponse$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateOpportunityResponse: components.UpdateOpportunityResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateOpportunityResponse: "UpdateOpportunityResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesUpdateResponse$ {
  /** @deprecated use `CrmOpportunitiesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesUpdateResponse$inboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesUpdateResponse$outboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateResponse$Outbound` instead. */
  export type Outbound = CrmOpportunitiesUpdateResponse$Outbound;
}

export function crmOpportunitiesUpdateResponseToJSON(
  crmOpportunitiesUpdateResponse: CrmOpportunitiesUpdateResponse,
): string {
  return JSON.stringify(
    CrmOpportunitiesUpdateResponse$outboundSchema.parse(
      crmOpportunitiesUpdateResponse,
    ),
  );
}

export function crmOpportunitiesUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesUpdateResponse' from JSON`,
  );
}
