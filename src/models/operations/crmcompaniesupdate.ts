/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmCompaniesUpdateGlobals = {
  /**
   * A unique identifier for the consumer, required to specify the data source or destination for the API operation. This ID is essential for authenticating and authorizing the request within the CRM system.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmCompaniesUpdateRequest = {
  /**
   * The unique identifier of the activity to be deleted. This parameter is required to specify which activity record should be removed from the CRM system. Ensure that the ID corresponds to an existing activity to avoid errors.
   */
  id: string;
  /**
   * A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.
   */
  raw?: boolean | undefined;
  /**
   * An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service.
   */
  serviceId?: string | undefined;
  updateCompanyRequest: components.UpdateCompanyRequest;
};

export type CrmCompaniesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Company updated
   */
  updateCompanyResponse?: components.UpdateCompanyResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmCompaniesUpdateGlobals$inboundSchema: z.ZodType<
  CrmCompaniesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmCompaniesUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmCompaniesUpdateGlobals$outboundSchema: z.ZodType<
  CrmCompaniesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  CrmCompaniesUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesUpdateGlobals$ {
  /** @deprecated use `CrmCompaniesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesUpdateGlobals$inboundSchema;
  /** @deprecated use `CrmCompaniesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesUpdateGlobals$outboundSchema;
  /** @deprecated use `CrmCompaniesUpdateGlobals$Outbound` instead. */
  export type Outbound = CrmCompaniesUpdateGlobals$Outbound;
}

export function crmCompaniesUpdateGlobalsToJSON(
  crmCompaniesUpdateGlobals: CrmCompaniesUpdateGlobals,
): string {
  return JSON.stringify(
    CrmCompaniesUpdateGlobals$outboundSchema.parse(crmCompaniesUpdateGlobals),
  );
}

export function crmCompaniesUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const CrmCompaniesUpdateRequest$inboundSchema: z.ZodType<
  CrmCompaniesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  UpdateCompanyRequest: components.UpdateCompanyRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateCompanyRequest": "updateCompanyRequest",
  });
});

/** @internal */
export type CrmCompaniesUpdateRequest$Outbound = {
  id: string;
  raw: boolean;
  serviceId?: string | undefined;
  UpdateCompanyRequest: components.UpdateCompanyRequest$Outbound;
};

/** @internal */
export const CrmCompaniesUpdateRequest$outboundSchema: z.ZodType<
  CrmCompaniesUpdateRequest$Outbound,
  z.ZodTypeDef,
  CrmCompaniesUpdateRequest
> = z.object({
  id: z.string(),
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  updateCompanyRequest: components.UpdateCompanyRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateCompanyRequest: "UpdateCompanyRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesUpdateRequest$ {
  /** @deprecated use `CrmCompaniesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesUpdateRequest$inboundSchema;
  /** @deprecated use `CrmCompaniesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesUpdateRequest$outboundSchema;
  /** @deprecated use `CrmCompaniesUpdateRequest$Outbound` instead. */
  export type Outbound = CrmCompaniesUpdateRequest$Outbound;
}

export function crmCompaniesUpdateRequestToJSON(
  crmCompaniesUpdateRequest: CrmCompaniesUpdateRequest,
): string {
  return JSON.stringify(
    CrmCompaniesUpdateRequest$outboundSchema.parse(crmCompaniesUpdateRequest),
  );
}

export function crmCompaniesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesUpdateRequest' from JSON`,
  );
}

/** @internal */
export const CrmCompaniesUpdateResponse$inboundSchema: z.ZodType<
  CrmCompaniesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateCompanyResponse: components.UpdateCompanyResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateCompanyResponse": "updateCompanyResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmCompaniesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateCompanyResponse?: components.UpdateCompanyResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmCompaniesUpdateResponse$outboundSchema: z.ZodType<
  CrmCompaniesUpdateResponse$Outbound,
  z.ZodTypeDef,
  CrmCompaniesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateCompanyResponse: components.UpdateCompanyResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateCompanyResponse: "UpdateCompanyResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesUpdateResponse$ {
  /** @deprecated use `CrmCompaniesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesUpdateResponse$inboundSchema;
  /** @deprecated use `CrmCompaniesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesUpdateResponse$outboundSchema;
  /** @deprecated use `CrmCompaniesUpdateResponse$Outbound` instead. */
  export type Outbound = CrmCompaniesUpdateResponse$Outbound;
}

export function crmCompaniesUpdateResponseToJSON(
  crmCompaniesUpdateResponse: CrmCompaniesUpdateResponse,
): string {
  return JSON.stringify(
    CrmCompaniesUpdateResponse$outboundSchema.parse(crmCompaniesUpdateResponse),
  );
}

export function crmCompaniesUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesUpdateResponse' from JSON`,
  );
}
