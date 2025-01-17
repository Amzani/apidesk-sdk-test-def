/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ActivitiesUpdateSecurity = {
  apiKey: string;
};

export type ActivitiesUpdateRequest = {
  /**
   * The unique identifier of the activity record to be deleted. This parameter is essential as it specifies which activity in the CRM system will be removed. Ensure that the ID corresponds to an existing activity to avoid errors.
   */
  id: string;
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
   * A boolean flag that, when set to true, includes the raw response in the output. This is primarily used for debugging purposes to provide more detailed information about the response. By default, this is set to false.
   */
  raw?: boolean | undefined;
  activityUpdateRequest: components.ActivityUpdateRequest;
};

export type ActivitiesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Activity updated
   */
  activityUpdateResponse?: components.ActivityUpdateResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const ActivitiesUpdateSecurity$inboundSchema: z.ZodType<
  ActivitiesUpdateSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
});

/** @internal */
export type ActivitiesUpdateSecurity$Outbound = {
  apiKey: string;
};

/** @internal */
export const ActivitiesUpdateSecurity$outboundSchema: z.ZodType<
  ActivitiesUpdateSecurity$Outbound,
  z.ZodTypeDef,
  ActivitiesUpdateSecurity
> = z.object({
  apiKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivitiesUpdateSecurity$ {
  /** @deprecated use `ActivitiesUpdateSecurity$inboundSchema` instead. */
  export const inboundSchema = ActivitiesUpdateSecurity$inboundSchema;
  /** @deprecated use `ActivitiesUpdateSecurity$outboundSchema` instead. */
  export const outboundSchema = ActivitiesUpdateSecurity$outboundSchema;
  /** @deprecated use `ActivitiesUpdateSecurity$Outbound` instead. */
  export type Outbound = ActivitiesUpdateSecurity$Outbound;
}

export function activitiesUpdateSecurityToJSON(
  activitiesUpdateSecurity: ActivitiesUpdateSecurity,
): string {
  return JSON.stringify(
    ActivitiesUpdateSecurity$outboundSchema.parse(activitiesUpdateSecurity),
  );
}

export function activitiesUpdateSecurityFromJSON(
  jsonString: string,
): SafeParseResult<ActivitiesUpdateSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivitiesUpdateSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivitiesUpdateSecurity' from JSON`,
  );
}

/** @internal */
export const ActivitiesUpdateRequest$inboundSchema: z.ZodType<
  ActivitiesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  ActivityUpdateRequest: components.ActivityUpdateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "ActivityUpdateRequest": "activityUpdateRequest",
  });
});

/** @internal */
export type ActivitiesUpdateRequest$Outbound = {
  id: string;
  consumerId: string;
  appId: string;
  serviceId?: string | undefined;
  raw: boolean;
  ActivityUpdateRequest: components.ActivityUpdateRequest$Outbound;
};

/** @internal */
export const ActivitiesUpdateRequest$outboundSchema: z.ZodType<
  ActivitiesUpdateRequest$Outbound,
  z.ZodTypeDef,
  ActivitiesUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  activityUpdateRequest: components.ActivityUpdateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    activityUpdateRequest: "ActivityUpdateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivitiesUpdateRequest$ {
  /** @deprecated use `ActivitiesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = ActivitiesUpdateRequest$inboundSchema;
  /** @deprecated use `ActivitiesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = ActivitiesUpdateRequest$outboundSchema;
  /** @deprecated use `ActivitiesUpdateRequest$Outbound` instead. */
  export type Outbound = ActivitiesUpdateRequest$Outbound;
}

export function activitiesUpdateRequestToJSON(
  activitiesUpdateRequest: ActivitiesUpdateRequest,
): string {
  return JSON.stringify(
    ActivitiesUpdateRequest$outboundSchema.parse(activitiesUpdateRequest),
  );
}

export function activitiesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<ActivitiesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivitiesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivitiesUpdateRequest' from JSON`,
  );
}

/** @internal */
export const ActivitiesUpdateResponse$inboundSchema: z.ZodType<
  ActivitiesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ActivityUpdateResponse: components.ActivityUpdateResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ActivityUpdateResponse": "activityUpdateResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type ActivitiesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ActivityUpdateResponse?:
    | components.ActivityUpdateResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const ActivitiesUpdateResponse$outboundSchema: z.ZodType<
  ActivitiesUpdateResponse$Outbound,
  z.ZodTypeDef,
  ActivitiesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  activityUpdateResponse: components.ActivityUpdateResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    activityUpdateResponse: "ActivityUpdateResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivitiesUpdateResponse$ {
  /** @deprecated use `ActivitiesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = ActivitiesUpdateResponse$inboundSchema;
  /** @deprecated use `ActivitiesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = ActivitiesUpdateResponse$outboundSchema;
  /** @deprecated use `ActivitiesUpdateResponse$Outbound` instead. */
  export type Outbound = ActivitiesUpdateResponse$Outbound;
}

export function activitiesUpdateResponseToJSON(
  activitiesUpdateResponse: ActivitiesUpdateResponse,
): string {
  return JSON.stringify(
    ActivitiesUpdateResponse$outboundSchema.parse(activitiesUpdateResponse),
  );
}

export function activitiesUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<ActivitiesUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivitiesUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivitiesUpdateResponse' from JSON`,
  );
}
