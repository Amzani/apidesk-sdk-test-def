/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HrisDepartmentsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisDepartmentsDeleteRequest = {
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
export type HrisDepartmentsDeleteDetail = string | { [k: string]: any };

/**
 * Unexpected error
 */
export type HrisDepartmentsDeleteHrisDepartmentsResponseBody = {
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

export type HrisDepartmentsDeleteUnifiedId = {
  /**
   * The unique identifier of the resource
   */
  id: string;
};

/**
 * Departments
 */
export type HrisDepartmentsDeleteResponseBody = {
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
  data: HrisDepartmentsDeleteUnifiedId;
};

export type HrisDepartmentsDeleteResponse =
  | HrisDepartmentsDeleteResponseBody
  | HrisDepartmentsDeleteHrisDepartmentsResponseBody;

/** @internal */
export const HrisDepartmentsDeleteGlobals$inboundSchema: z.ZodType<
  HrisDepartmentsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisDepartmentsDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisDepartmentsDeleteGlobals$outboundSchema: z.ZodType<
  HrisDepartmentsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsDeleteGlobals$ {
  /** @deprecated use `HrisDepartmentsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsDeleteGlobals$inboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsDeleteGlobals$outboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteGlobals$Outbound` instead. */
  export type Outbound = HrisDepartmentsDeleteGlobals$Outbound;
}

export function hrisDepartmentsDeleteGlobalsToJSON(
  hrisDepartmentsDeleteGlobals: HrisDepartmentsDeleteGlobals,
): string {
  return JSON.stringify(
    HrisDepartmentsDeleteGlobals$outboundSchema.parse(
      hrisDepartmentsDeleteGlobals,
    ),
  );
}

export function hrisDepartmentsDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsDeleteRequest$inboundSchema: z.ZodType<
  HrisDepartmentsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type HrisDepartmentsDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const HrisDepartmentsDeleteRequest$outboundSchema: z.ZodType<
  HrisDepartmentsDeleteRequest$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsDeleteRequest$ {
  /** @deprecated use `HrisDepartmentsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsDeleteRequest$inboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsDeleteRequest$outboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteRequest$Outbound` instead. */
  export type Outbound = HrisDepartmentsDeleteRequest$Outbound;
}

export function hrisDepartmentsDeleteRequestToJSON(
  hrisDepartmentsDeleteRequest: HrisDepartmentsDeleteRequest,
): string {
  return JSON.stringify(
    HrisDepartmentsDeleteRequest$outboundSchema.parse(
      hrisDepartmentsDeleteRequest,
    ),
  );
}

export function hrisDepartmentsDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsDeleteRequest' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsDeleteDetail$inboundSchema: z.ZodType<
  HrisDepartmentsDeleteDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisDepartmentsDeleteDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const HrisDepartmentsDeleteDetail$outboundSchema: z.ZodType<
  HrisDepartmentsDeleteDetail$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsDeleteDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsDeleteDetail$ {
  /** @deprecated use `HrisDepartmentsDeleteDetail$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsDeleteDetail$inboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteDetail$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsDeleteDetail$outboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteDetail$Outbound` instead. */
  export type Outbound = HrisDepartmentsDeleteDetail$Outbound;
}

export function hrisDepartmentsDeleteDetailToJSON(
  hrisDepartmentsDeleteDetail: HrisDepartmentsDeleteDetail,
): string {
  return JSON.stringify(
    HrisDepartmentsDeleteDetail$outboundSchema.parse(
      hrisDepartmentsDeleteDetail,
    ),
  );
}

export function hrisDepartmentsDeleteDetailFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsDeleteDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsDeleteDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsDeleteDetail' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsDeleteHrisDepartmentsResponseBody$inboundSchema:
  z.ZodType<
    HrisDepartmentsDeleteHrisDepartmentsResponseBody,
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
export type HrisDepartmentsDeleteHrisDepartmentsResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const HrisDepartmentsDeleteHrisDepartmentsResponseBody$outboundSchema:
  z.ZodType<
    HrisDepartmentsDeleteHrisDepartmentsResponseBody$Outbound,
    z.ZodTypeDef,
    HrisDepartmentsDeleteHrisDepartmentsResponseBody
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
export namespace HrisDepartmentsDeleteHrisDepartmentsResponseBody$ {
  /** @deprecated use `HrisDepartmentsDeleteHrisDepartmentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisDepartmentsDeleteHrisDepartmentsResponseBody$inboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteHrisDepartmentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisDepartmentsDeleteHrisDepartmentsResponseBody$outboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteHrisDepartmentsResponseBody$Outbound` instead. */
  export type Outbound =
    HrisDepartmentsDeleteHrisDepartmentsResponseBody$Outbound;
}

export function hrisDepartmentsDeleteHrisDepartmentsResponseBodyToJSON(
  hrisDepartmentsDeleteHrisDepartmentsResponseBody:
    HrisDepartmentsDeleteHrisDepartmentsResponseBody,
): string {
  return JSON.stringify(
    HrisDepartmentsDeleteHrisDepartmentsResponseBody$outboundSchema.parse(
      hrisDepartmentsDeleteHrisDepartmentsResponseBody,
    ),
  );
}

export function hrisDepartmentsDeleteHrisDepartmentsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisDepartmentsDeleteHrisDepartmentsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisDepartmentsDeleteHrisDepartmentsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisDepartmentsDeleteHrisDepartmentsResponseBody' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsDeleteUnifiedId$inboundSchema: z.ZodType<
  HrisDepartmentsDeleteUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type HrisDepartmentsDeleteUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const HrisDepartmentsDeleteUnifiedId$outboundSchema: z.ZodType<
  HrisDepartmentsDeleteUnifiedId$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsDeleteUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsDeleteUnifiedId$ {
  /** @deprecated use `HrisDepartmentsDeleteUnifiedId$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsDeleteUnifiedId$inboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteUnifiedId$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsDeleteUnifiedId$outboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteUnifiedId$Outbound` instead. */
  export type Outbound = HrisDepartmentsDeleteUnifiedId$Outbound;
}

export function hrisDepartmentsDeleteUnifiedIdToJSON(
  hrisDepartmentsDeleteUnifiedId: HrisDepartmentsDeleteUnifiedId,
): string {
  return JSON.stringify(
    HrisDepartmentsDeleteUnifiedId$outboundSchema.parse(
      hrisDepartmentsDeleteUnifiedId,
    ),
  );
}

export function hrisDepartmentsDeleteUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsDeleteUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsDeleteUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsDeleteUnifiedId' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsDeleteResponseBody$inboundSchema: z.ZodType<
  HrisDepartmentsDeleteResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => HrisDepartmentsDeleteUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type HrisDepartmentsDeleteResponseBody$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: HrisDepartmentsDeleteUnifiedId$Outbound;
};

/** @internal */
export const HrisDepartmentsDeleteResponseBody$outboundSchema: z.ZodType<
  HrisDepartmentsDeleteResponseBody$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsDeleteResponseBody
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => HrisDepartmentsDeleteUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsDeleteResponseBody$ {
  /** @deprecated use `HrisDepartmentsDeleteResponseBody$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsDeleteResponseBody$inboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisDepartmentsDeleteResponseBody$outboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteResponseBody$Outbound` instead. */
  export type Outbound = HrisDepartmentsDeleteResponseBody$Outbound;
}

export function hrisDepartmentsDeleteResponseBodyToJSON(
  hrisDepartmentsDeleteResponseBody: HrisDepartmentsDeleteResponseBody,
): string {
  return JSON.stringify(
    HrisDepartmentsDeleteResponseBody$outboundSchema.parse(
      hrisDepartmentsDeleteResponseBody,
    ),
  );
}

export function hrisDepartmentsDeleteResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsDeleteResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsDeleteResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsDeleteResponseBody' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsDeleteResponse$inboundSchema: z.ZodType<
  HrisDepartmentsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => HrisDepartmentsDeleteResponseBody$inboundSchema),
  z.lazy(() => HrisDepartmentsDeleteHrisDepartmentsResponseBody$inboundSchema),
]);

/** @internal */
export type HrisDepartmentsDeleteResponse$Outbound =
  | HrisDepartmentsDeleteResponseBody$Outbound
  | HrisDepartmentsDeleteHrisDepartmentsResponseBody$Outbound;

/** @internal */
export const HrisDepartmentsDeleteResponse$outboundSchema: z.ZodType<
  HrisDepartmentsDeleteResponse$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsDeleteResponse
> = z.union([
  z.lazy(() => HrisDepartmentsDeleteResponseBody$outboundSchema),
  z.lazy(() => HrisDepartmentsDeleteHrisDepartmentsResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsDeleteResponse$ {
  /** @deprecated use `HrisDepartmentsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsDeleteResponse$inboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsDeleteResponse$outboundSchema;
  /** @deprecated use `HrisDepartmentsDeleteResponse$Outbound` instead. */
  export type Outbound = HrisDepartmentsDeleteResponse$Outbound;
}

export function hrisDepartmentsDeleteResponseToJSON(
  hrisDepartmentsDeleteResponse: HrisDepartmentsDeleteResponse,
): string {
  return JSON.stringify(
    HrisDepartmentsDeleteResponse$outboundSchema.parse(
      hrisDepartmentsDeleteResponse,
    ),
  );
}

export function hrisDepartmentsDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsDeleteResponse' from JSON`,
  );
}
