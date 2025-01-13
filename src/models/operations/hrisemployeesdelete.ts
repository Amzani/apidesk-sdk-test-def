/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HrisEmployeesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisEmployeesDeleteRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
};

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisEmployeesDeleteDetail = string | { [k: string]: any };

/**
 * Unexpected error
 */
export type HrisEmployeesDeleteHrisEmployeesResponseBody = {
  /**
   * HTTP status code
   */
  statusCode?: number | undefined;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   */
  error?: string | undefined;
  /**
   * The type of error returned
   */
  typeName?: string | undefined;
  /**
   * A human-readable message providing more details about the error.
   */
  message?: string | undefined;
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | { [k: string]: any } | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
};

export type HrisEmployeesDeleteUnifiedId = {
  /**
   * The unique identifier of the resource
   */
  id: string;
};

/**
 * Employees
 */
export type HrisEmployeesDeleteResponseBody = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  /**
   * Apideck ID of service provider
   */
  service: string;
  /**
   * Unified API resource name
   */
  resource: string;
  /**
   * Operation performed
   */
  operation: string;
  data: HrisEmployeesDeleteUnifiedId;
};

export type HrisEmployeesDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Employees
   */
  twoHundredApplicationJsonObject?: HrisEmployeesDeleteResponseBody | undefined;
  /**
   * Unexpected error
   */
  defaultApplicationJsonObject?:
    | HrisEmployeesDeleteHrisEmployeesResponseBody
    | undefined;
};

/** @internal */
export const HrisEmployeesDeleteGlobals$inboundSchema: z.ZodType<
  HrisEmployeesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisEmployeesDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisEmployeesDeleteGlobals$outboundSchema: z.ZodType<
  HrisEmployeesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteGlobals$ {
  /** @deprecated use `HrisEmployeesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesDeleteGlobals$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesDeleteGlobals$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteGlobals$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteGlobals$Outbound;
}

export function hrisEmployeesDeleteGlobalsToJSON(
  hrisEmployeesDeleteGlobals: HrisEmployeesDeleteGlobals,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteGlobals$outboundSchema.parse(hrisEmployeesDeleteGlobals),
  );
}

export function hrisEmployeesDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteRequest$inboundSchema: z.ZodType<
  HrisEmployeesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type HrisEmployeesDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const HrisEmployeesDeleteRequest$outboundSchema: z.ZodType<
  HrisEmployeesDeleteRequest$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteRequest$ {
  /** @deprecated use `HrisEmployeesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesDeleteRequest$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesDeleteRequest$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteRequest$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteRequest$Outbound;
}

export function hrisEmployeesDeleteRequestToJSON(
  hrisEmployeesDeleteRequest: HrisEmployeesDeleteRequest,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteRequest$outboundSchema.parse(hrisEmployeesDeleteRequest),
  );
}

export function hrisEmployeesDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesDeleteRequest' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteDetail$inboundSchema: z.ZodType<
  HrisEmployeesDeleteDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisEmployeesDeleteDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const HrisEmployeesDeleteDetail$outboundSchema: z.ZodType<
  HrisEmployeesDeleteDetail$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteDetail$ {
  /** @deprecated use `HrisEmployeesDeleteDetail$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesDeleteDetail$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteDetail$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesDeleteDetail$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteDetail$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteDetail$Outbound;
}

export function hrisEmployeesDeleteDetailToJSON(
  hrisEmployeesDeleteDetail: HrisEmployeesDeleteDetail,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteDetail$outboundSchema.parse(hrisEmployeesDeleteDetail),
  );
}

export function hrisEmployeesDeleteDetailFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesDeleteDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesDeleteDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesDeleteDetail' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponseBody$inboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.union([z.string(), z.record(z.any())]).optional(),
    ref: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "status_code": "statusCode",
      "type_name": "typeName",
    });
  });

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponseBody$outboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponseBody$Outbound,
    z.ZodTypeDef,
    HrisEmployeesDeleteHrisEmployeesResponseBody
  > = z.object({
    statusCode: z.number().optional(),
    error: z.string().optional(),
    typeName: z.string().optional(),
    message: z.string().optional(),
    detail: z.union([z.string(), z.record(z.any())]).optional(),
    ref: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      statusCode: "status_code",
      typeName: "type_name",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteHrisEmployeesResponseBody$ {
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponseBody$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponseBody$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseBody$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteHrisEmployeesResponseBody$Outbound;
}

export function hrisEmployeesDeleteHrisEmployeesResponseBodyToJSON(
  hrisEmployeesDeleteHrisEmployeesResponseBody:
    HrisEmployeesDeleteHrisEmployeesResponseBody,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteHrisEmployeesResponseBody$outboundSchema.parse(
      hrisEmployeesDeleteHrisEmployeesResponseBody,
    ),
  );
}

export function hrisEmployeesDeleteHrisEmployeesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisEmployeesDeleteHrisEmployeesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisEmployeesDeleteHrisEmployeesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisEmployeesDeleteHrisEmployeesResponseBody' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteUnifiedId$inboundSchema: z.ZodType<
  HrisEmployeesDeleteUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type HrisEmployeesDeleteUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const HrisEmployeesDeleteUnifiedId$outboundSchema: z.ZodType<
  HrisEmployeesDeleteUnifiedId$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteUnifiedId$ {
  /** @deprecated use `HrisEmployeesDeleteUnifiedId$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesDeleteUnifiedId$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteUnifiedId$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesDeleteUnifiedId$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteUnifiedId$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteUnifiedId$Outbound;
}

export function hrisEmployeesDeleteUnifiedIdToJSON(
  hrisEmployeesDeleteUnifiedId: HrisEmployeesDeleteUnifiedId,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteUnifiedId$outboundSchema.parse(
      hrisEmployeesDeleteUnifiedId,
    ),
  );
}

export function hrisEmployeesDeleteUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesDeleteUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesDeleteUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesDeleteUnifiedId' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteResponseBody$inboundSchema: z.ZodType<
  HrisEmployeesDeleteResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => HrisEmployeesDeleteUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type HrisEmployeesDeleteResponseBody$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: HrisEmployeesDeleteUnifiedId$Outbound;
};

/** @internal */
export const HrisEmployeesDeleteResponseBody$outboundSchema: z.ZodType<
  HrisEmployeesDeleteResponseBody$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteResponseBody
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => HrisEmployeesDeleteUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteResponseBody$ {
  /** @deprecated use `HrisEmployeesDeleteResponseBody$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesDeleteResponseBody$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteResponseBody$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesDeleteResponseBody$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteResponseBody$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteResponseBody$Outbound;
}

export function hrisEmployeesDeleteResponseBodyToJSON(
  hrisEmployeesDeleteResponseBody: HrisEmployeesDeleteResponseBody,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteResponseBody$outboundSchema.parse(
      hrisEmployeesDeleteResponseBody,
    ),
  );
}

export function hrisEmployeesDeleteResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesDeleteResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesDeleteResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesDeleteResponseBody' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteResponse$inboundSchema: z.ZodType<
  HrisEmployeesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  "200_application/json_object": z.lazy(() =>
    HrisEmployeesDeleteResponseBody$inboundSchema
  ).optional(),
  "default_application/json_object": z.lazy(() =>
    HrisEmployeesDeleteHrisEmployeesResponseBody$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "200_application/json_object": "twoHundredApplicationJsonObject",
    "default_application/json_object": "defaultApplicationJsonObject",
  });
});

/** @internal */
export type HrisEmployeesDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  "200_application/json_object"?:
    | HrisEmployeesDeleteResponseBody$Outbound
    | undefined;
  "default_application/json_object"?:
    | HrisEmployeesDeleteHrisEmployeesResponseBody$Outbound
    | undefined;
};

/** @internal */
export const HrisEmployeesDeleteResponse$outboundSchema: z.ZodType<
  HrisEmployeesDeleteResponse$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  twoHundredApplicationJsonObject: z.lazy(() =>
    HrisEmployeesDeleteResponseBody$outboundSchema
  ).optional(),
  defaultApplicationJsonObject: z.lazy(() =>
    HrisEmployeesDeleteHrisEmployeesResponseBody$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    twoHundredApplicationJsonObject: "200_application/json_object",
    defaultApplicationJsonObject: "default_application/json_object",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteResponse$ {
  /** @deprecated use `HrisEmployeesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesDeleteResponse$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesDeleteResponse$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteResponse$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteResponse$Outbound;
}

export function hrisEmployeesDeleteResponseToJSON(
  hrisEmployeesDeleteResponse: HrisEmployeesDeleteResponse,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteResponse$outboundSchema.parse(
      hrisEmployeesDeleteResponse,
    ),
  );
}

export function hrisEmployeesDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesDeleteResponse' from JSON`,
  );
}
