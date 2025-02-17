/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmUsersUpdateGlobals = {
  /**
   * A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmUsersUpdateRequest = {
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
  updateUserRequest: components.UpdateUserRequest;
};

export type CrmUsersUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * User updated
   */
  updateUserResponse?: components.UpdateUserResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmUsersUpdateGlobals$inboundSchema: z.ZodType<
  CrmUsersUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmUsersUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmUsersUpdateGlobals$outboundSchema: z.ZodType<
  CrmUsersUpdateGlobals$Outbound,
  z.ZodTypeDef,
  CrmUsersUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersUpdateGlobals$ {
  /** @deprecated use `CrmUsersUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmUsersUpdateGlobals$inboundSchema;
  /** @deprecated use `CrmUsersUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmUsersUpdateGlobals$outboundSchema;
  /** @deprecated use `CrmUsersUpdateGlobals$Outbound` instead. */
  export type Outbound = CrmUsersUpdateGlobals$Outbound;
}

export function crmUsersUpdateGlobalsToJSON(
  crmUsersUpdateGlobals: CrmUsersUpdateGlobals,
): string {
  return JSON.stringify(
    CrmUsersUpdateGlobals$outboundSchema.parse(crmUsersUpdateGlobals),
  );
}

export function crmUsersUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const CrmUsersUpdateRequest$inboundSchema: z.ZodType<
  CrmUsersUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  UpdateUserRequest: components.UpdateUserRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateUserRequest": "updateUserRequest",
  });
});

/** @internal */
export type CrmUsersUpdateRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  UpdateUserRequest: components.UpdateUserRequest$Outbound;
};

/** @internal */
export const CrmUsersUpdateRequest$outboundSchema: z.ZodType<
  CrmUsersUpdateRequest$Outbound,
  z.ZodTypeDef,
  CrmUsersUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  updateUserRequest: components.UpdateUserRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateUserRequest: "UpdateUserRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersUpdateRequest$ {
  /** @deprecated use `CrmUsersUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CrmUsersUpdateRequest$inboundSchema;
  /** @deprecated use `CrmUsersUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CrmUsersUpdateRequest$outboundSchema;
  /** @deprecated use `CrmUsersUpdateRequest$Outbound` instead. */
  export type Outbound = CrmUsersUpdateRequest$Outbound;
}

export function crmUsersUpdateRequestToJSON(
  crmUsersUpdateRequest: CrmUsersUpdateRequest,
): string {
  return JSON.stringify(
    CrmUsersUpdateRequest$outboundSchema.parse(crmUsersUpdateRequest),
  );
}

export function crmUsersUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersUpdateRequest' from JSON`,
  );
}

/** @internal */
export const CrmUsersUpdateResponse$inboundSchema: z.ZodType<
  CrmUsersUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateUserResponse: components.UpdateUserResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateUserResponse": "updateUserResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmUsersUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateUserResponse?: components.UpdateUserResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmUsersUpdateResponse$outboundSchema: z.ZodType<
  CrmUsersUpdateResponse$Outbound,
  z.ZodTypeDef,
  CrmUsersUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateUserResponse: components.UpdateUserResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateUserResponse: "UpdateUserResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersUpdateResponse$ {
  /** @deprecated use `CrmUsersUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = CrmUsersUpdateResponse$inboundSchema;
  /** @deprecated use `CrmUsersUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = CrmUsersUpdateResponse$outboundSchema;
  /** @deprecated use `CrmUsersUpdateResponse$Outbound` instead. */
  export type Outbound = CrmUsersUpdateResponse$Outbound;
}

export function crmUsersUpdateResponseToJSON(
  crmUsersUpdateResponse: CrmUsersUpdateResponse,
): string {
  return JSON.stringify(
    CrmUsersUpdateResponse$outboundSchema.parse(crmUsersUpdateResponse),
  );
}

export function crmUsersUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersUpdateResponse' from JSON`,
  );
}
