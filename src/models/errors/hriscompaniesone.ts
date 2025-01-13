/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisCompaniesOneHrisCompaniesResponse422Detail = string | {
  [k: string]: any;
};

/**
 * Unprocessable
 */
export type HrisCompaniesOneHrisCompaniesResponse422ResponseBodyData = {
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
  httpMeta: components.HTTPMetadata;
};

/**
 * Unprocessable
 */
export class HrisCompaniesOneHrisCompaniesResponse422ResponseBody
  extends Error
{
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
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | { [k: string]: any } | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
  httpMeta: components.HTTPMetadata;

  /** The original data that was passed to this error instance. */
  data$: HrisCompaniesOneHrisCompaniesResponse422ResponseBodyData;

  constructor(err: HrisCompaniesOneHrisCompaniesResponse422ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisCompaniesOneHrisCompaniesResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisCompaniesOneHrisCompaniesResponseDetail = string | {
  [k: string]: any;
};

/**
 * The specified resource was not found
 */
export type HrisCompaniesOneHrisCompaniesResponse404ResponseBodyData = {
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
  httpMeta: components.HTTPMetadata;
};

/**
 * The specified resource was not found
 */
export class HrisCompaniesOneHrisCompaniesResponse404ResponseBody
  extends Error
{
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
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | { [k: string]: any } | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
  httpMeta: components.HTTPMetadata;

  /** The original data that was passed to this error instance. */
  data$: HrisCompaniesOneHrisCompaniesResponse404ResponseBodyData;

  constructor(err: HrisCompaniesOneHrisCompaniesResponse404ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisCompaniesOneHrisCompaniesResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type HrisCompaniesOneHrisCompaniesResponseResponseBodyData = {
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
  detail?: string | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
  httpMeta: components.HTTPMetadata;
};

/**
 * Payment Required
 */
export class HrisCompaniesOneHrisCompaniesResponseResponseBody extends Error {
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
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
  httpMeta: components.HTTPMetadata;

  /** The original data that was passed to this error instance. */
  data$: HrisCompaniesOneHrisCompaniesResponseResponseBodyData;

  constructor(err: HrisCompaniesOneHrisCompaniesResponseResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisCompaniesOneHrisCompaniesResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisCompaniesOneHrisCompaniesDetail = string | { [k: string]: any };

/**
 * Unauthorized
 */
export type HrisCompaniesOneHrisCompaniesResponseBodyData = {
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
  httpMeta: components.HTTPMetadata;
};

/**
 * Unauthorized
 */
export class HrisCompaniesOneHrisCompaniesResponseBody extends Error {
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
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | { [k: string]: any } | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
  httpMeta: components.HTTPMetadata;

  /** The original data that was passed to this error instance. */
  data$: HrisCompaniesOneHrisCompaniesResponseBodyData;

  constructor(err: HrisCompaniesOneHrisCompaniesResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisCompaniesOneHrisCompaniesResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisCompaniesOneDetail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type HrisCompaniesOneResponseBodyData = {
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
  httpMeta: components.HTTPMetadata;
};

/**
 * Bad Request
 */
export class HrisCompaniesOneResponseBody extends Error {
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
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | { [k: string]: any } | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
  httpMeta: components.HTTPMetadata;

  /** The original data that was passed to this error instance. */
  data$: HrisCompaniesOneResponseBodyData;

  constructor(err: HrisCompaniesOneResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisCompaniesOneResponseBody";
  }
}

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponse422Detail$inboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponse422Detail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisCompaniesOneHrisCompaniesResponse422Detail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponse422Detail$outboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponse422Detail$Outbound,
    z.ZodTypeDef,
    HrisCompaniesOneHrisCompaniesResponse422Detail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneHrisCompaniesResponse422Detail$ {
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse422Detail$inboundSchema` instead. */
  export const inboundSchema =
    HrisCompaniesOneHrisCompaniesResponse422Detail$inboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse422Detail$outboundSchema` instead. */
  export const outboundSchema =
    HrisCompaniesOneHrisCompaniesResponse422Detail$outboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse422Detail$Outbound` instead. */
  export type Outbound =
    HrisCompaniesOneHrisCompaniesResponse422Detail$Outbound;
}

export function hrisCompaniesOneHrisCompaniesResponse422DetailToJSON(
  hrisCompaniesOneHrisCompaniesResponse422Detail:
    HrisCompaniesOneHrisCompaniesResponse422Detail,
): string {
  return JSON.stringify(
    HrisCompaniesOneHrisCompaniesResponse422Detail$outboundSchema.parse(
      hrisCompaniesOneHrisCompaniesResponse422Detail,
    ),
  );
}

export function hrisCompaniesOneHrisCompaniesResponse422DetailFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisCompaniesOneHrisCompaniesResponse422Detail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisCompaniesOneHrisCompaniesResponse422Detail$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisCompaniesOneHrisCompaniesResponse422Detail' from JSON`,
  );
}

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponse422ResponseBody$inboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponse422ResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.union([z.string(), z.record(z.any())]).optional(),
    ref: z.string().optional(),
    HttpMeta: components.HTTPMetadata$inboundSchema,
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
        "HttpMeta": "httpMeta",
      });

      return new HrisCompaniesOneHrisCompaniesResponse422ResponseBody(remapped);
    });

/** @internal */
export type HrisCompaniesOneHrisCompaniesResponse422ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponse422ResponseBody$outboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponse422ResponseBody$Outbound,
    z.ZodTypeDef,
    HrisCompaniesOneHrisCompaniesResponse422ResponseBody
  > = z.instanceof(HrisCompaniesOneHrisCompaniesResponse422ResponseBody)
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number().optional(),
        error: z.string().optional(),
        typeName: z.string().optional(),
        message: z.string().optional(),
        detail: z.union([z.string(), z.record(z.any())]).optional(),
        ref: z.string().optional(),
        httpMeta: components.HTTPMetadata$outboundSchema,
      }).transform((v) => {
        return remap$(v, {
          statusCode: "status_code",
          typeName: "type_name",
          httpMeta: "HttpMeta",
        });
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneHrisCompaniesResponse422ResponseBody$ {
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisCompaniesOneHrisCompaniesResponse422ResponseBody$inboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisCompaniesOneHrisCompaniesResponse422ResponseBody$outboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse422ResponseBody$Outbound` instead. */
  export type Outbound =
    HrisCompaniesOneHrisCompaniesResponse422ResponseBody$Outbound;
}

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponseDetail$inboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponseDetail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisCompaniesOneHrisCompaniesResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponseDetail$outboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponseDetail$Outbound,
    z.ZodTypeDef,
    HrisCompaniesOneHrisCompaniesResponseDetail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneHrisCompaniesResponseDetail$ {
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseDetail$inboundSchema` instead. */
  export const inboundSchema =
    HrisCompaniesOneHrisCompaniesResponseDetail$inboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseDetail$outboundSchema` instead. */
  export const outboundSchema =
    HrisCompaniesOneHrisCompaniesResponseDetail$outboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseDetail$Outbound` instead. */
  export type Outbound = HrisCompaniesOneHrisCompaniesResponseDetail$Outbound;
}

export function hrisCompaniesOneHrisCompaniesResponseDetailToJSON(
  hrisCompaniesOneHrisCompaniesResponseDetail:
    HrisCompaniesOneHrisCompaniesResponseDetail,
): string {
  return JSON.stringify(
    HrisCompaniesOneHrisCompaniesResponseDetail$outboundSchema.parse(
      hrisCompaniesOneHrisCompaniesResponseDetail,
    ),
  );
}

export function hrisCompaniesOneHrisCompaniesResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisCompaniesOneHrisCompaniesResponseDetail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisCompaniesOneHrisCompaniesResponseDetail$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisCompaniesOneHrisCompaniesResponseDetail' from JSON`,
  );
}

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponse404ResponseBody$inboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponse404ResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.union([z.string(), z.record(z.any())]).optional(),
    ref: z.string().optional(),
    HttpMeta: components.HTTPMetadata$inboundSchema,
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
        "HttpMeta": "httpMeta",
      });

      return new HrisCompaniesOneHrisCompaniesResponse404ResponseBody(remapped);
    });

/** @internal */
export type HrisCompaniesOneHrisCompaniesResponse404ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponse404ResponseBody$outboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponse404ResponseBody$Outbound,
    z.ZodTypeDef,
    HrisCompaniesOneHrisCompaniesResponse404ResponseBody
  > = z.instanceof(HrisCompaniesOneHrisCompaniesResponse404ResponseBody)
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number().optional(),
        error: z.string().optional(),
        typeName: z.string().optional(),
        message: z.string().optional(),
        detail: z.union([z.string(), z.record(z.any())]).optional(),
        ref: z.string().optional(),
        httpMeta: components.HTTPMetadata$outboundSchema,
      }).transform((v) => {
        return remap$(v, {
          statusCode: "status_code",
          typeName: "type_name",
          httpMeta: "HttpMeta",
        });
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneHrisCompaniesResponse404ResponseBody$ {
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisCompaniesOneHrisCompaniesResponse404ResponseBody$inboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisCompaniesOneHrisCompaniesResponse404ResponseBody$outboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponse404ResponseBody$Outbound` instead. */
  export type Outbound =
    HrisCompaniesOneHrisCompaniesResponse404ResponseBody$Outbound;
}

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponseResponseBody$inboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.string().optional(),
    ref: z.string().optional(),
    HttpMeta: components.HTTPMetadata$inboundSchema,
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
        "HttpMeta": "httpMeta",
      });

      return new HrisCompaniesOneHrisCompaniesResponseResponseBody(remapped);
    });

/** @internal */
export type HrisCompaniesOneHrisCompaniesResponseResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponseResponseBody$outboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponseResponseBody$Outbound,
    z.ZodTypeDef,
    HrisCompaniesOneHrisCompaniesResponseResponseBody
  > = z.instanceof(HrisCompaniesOneHrisCompaniesResponseResponseBody)
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number().optional(),
        error: z.string().optional(),
        typeName: z.string().optional(),
        message: z.string().optional(),
        detail: z.string().optional(),
        ref: z.string().optional(),
        httpMeta: components.HTTPMetadata$outboundSchema,
      }).transform((v) => {
        return remap$(v, {
          statusCode: "status_code",
          typeName: "type_name",
          httpMeta: "HttpMeta",
        });
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneHrisCompaniesResponseResponseBody$ {
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisCompaniesOneHrisCompaniesResponseResponseBody$inboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisCompaniesOneHrisCompaniesResponseResponseBody$outboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseResponseBody$Outbound` instead. */
  export type Outbound =
    HrisCompaniesOneHrisCompaniesResponseResponseBody$Outbound;
}

/** @internal */
export const HrisCompaniesOneHrisCompaniesDetail$inboundSchema: z.ZodType<
  HrisCompaniesOneHrisCompaniesDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisCompaniesOneHrisCompaniesDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const HrisCompaniesOneHrisCompaniesDetail$outboundSchema: z.ZodType<
  HrisCompaniesOneHrisCompaniesDetail$Outbound,
  z.ZodTypeDef,
  HrisCompaniesOneHrisCompaniesDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneHrisCompaniesDetail$ {
  /** @deprecated use `HrisCompaniesOneHrisCompaniesDetail$inboundSchema` instead. */
  export const inboundSchema =
    HrisCompaniesOneHrisCompaniesDetail$inboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesDetail$outboundSchema` instead. */
  export const outboundSchema =
    HrisCompaniesOneHrisCompaniesDetail$outboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesDetail$Outbound` instead. */
  export type Outbound = HrisCompaniesOneHrisCompaniesDetail$Outbound;
}

export function hrisCompaniesOneHrisCompaniesDetailToJSON(
  hrisCompaniesOneHrisCompaniesDetail: HrisCompaniesOneHrisCompaniesDetail,
): string {
  return JSON.stringify(
    HrisCompaniesOneHrisCompaniesDetail$outboundSchema.parse(
      hrisCompaniesOneHrisCompaniesDetail,
    ),
  );
}

export function hrisCompaniesOneHrisCompaniesDetailFromJSON(
  jsonString: string,
): SafeParseResult<HrisCompaniesOneHrisCompaniesDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisCompaniesOneHrisCompaniesDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisCompaniesOneHrisCompaniesDetail' from JSON`,
  );
}

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponseBody$inboundSchema: z.ZodType<
  HrisCompaniesOneHrisCompaniesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().optional(),
  error: z.string().optional(),
  type_name: z.string().optional(),
  message: z.string().optional(),
  detail: z.union([z.string(), z.record(z.any())]).optional(),
  ref: z.string().optional(),
  HttpMeta: components.HTTPMetadata$inboundSchema,
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
      "type_name": "typeName",
      "HttpMeta": "httpMeta",
    });

    return new HrisCompaniesOneHrisCompaniesResponseBody(remapped);
  });

/** @internal */
export type HrisCompaniesOneHrisCompaniesResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisCompaniesOneHrisCompaniesResponseBody$outboundSchema:
  z.ZodType<
    HrisCompaniesOneHrisCompaniesResponseBody$Outbound,
    z.ZodTypeDef,
    HrisCompaniesOneHrisCompaniesResponseBody
  > = z.instanceof(HrisCompaniesOneHrisCompaniesResponseBody)
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number().optional(),
        error: z.string().optional(),
        typeName: z.string().optional(),
        message: z.string().optional(),
        detail: z.union([z.string(), z.record(z.any())]).optional(),
        ref: z.string().optional(),
        httpMeta: components.HTTPMetadata$outboundSchema,
      }).transform((v) => {
        return remap$(v, {
          statusCode: "status_code",
          typeName: "type_name",
          httpMeta: "HttpMeta",
        });
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneHrisCompaniesResponseBody$ {
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisCompaniesOneHrisCompaniesResponseBody$inboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisCompaniesOneHrisCompaniesResponseBody$outboundSchema;
  /** @deprecated use `HrisCompaniesOneHrisCompaniesResponseBody$Outbound` instead. */
  export type Outbound = HrisCompaniesOneHrisCompaniesResponseBody$Outbound;
}

/** @internal */
export const HrisCompaniesOneDetail$inboundSchema: z.ZodType<
  HrisCompaniesOneDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisCompaniesOneDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const HrisCompaniesOneDetail$outboundSchema: z.ZodType<
  HrisCompaniesOneDetail$Outbound,
  z.ZodTypeDef,
  HrisCompaniesOneDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneDetail$ {
  /** @deprecated use `HrisCompaniesOneDetail$inboundSchema` instead. */
  export const inboundSchema = HrisCompaniesOneDetail$inboundSchema;
  /** @deprecated use `HrisCompaniesOneDetail$outboundSchema` instead. */
  export const outboundSchema = HrisCompaniesOneDetail$outboundSchema;
  /** @deprecated use `HrisCompaniesOneDetail$Outbound` instead. */
  export type Outbound = HrisCompaniesOneDetail$Outbound;
}

export function hrisCompaniesOneDetailToJSON(
  hrisCompaniesOneDetail: HrisCompaniesOneDetail,
): string {
  return JSON.stringify(
    HrisCompaniesOneDetail$outboundSchema.parse(hrisCompaniesOneDetail),
  );
}

export function hrisCompaniesOneDetailFromJSON(
  jsonString: string,
): SafeParseResult<HrisCompaniesOneDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisCompaniesOneDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisCompaniesOneDetail' from JSON`,
  );
}

/** @internal */
export const HrisCompaniesOneResponseBody$inboundSchema: z.ZodType<
  HrisCompaniesOneResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().optional(),
  error: z.string().optional(),
  type_name: z.string().optional(),
  message: z.string().optional(),
  detail: z.union([z.string(), z.record(z.any())]).optional(),
  ref: z.string().optional(),
  HttpMeta: components.HTTPMetadata$inboundSchema,
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
      "type_name": "typeName",
      "HttpMeta": "httpMeta",
    });

    return new HrisCompaniesOneResponseBody(remapped);
  });

/** @internal */
export type HrisCompaniesOneResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisCompaniesOneResponseBody$outboundSchema: z.ZodType<
  HrisCompaniesOneResponseBody$Outbound,
  z.ZodTypeDef,
  HrisCompaniesOneResponseBody
> = z.instanceof(HrisCompaniesOneResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number().optional(),
      error: z.string().optional(),
      typeName: z.string().optional(),
      message: z.string().optional(),
      detail: z.union([z.string(), z.record(z.any())]).optional(),
      ref: z.string().optional(),
      httpMeta: components.HTTPMetadata$outboundSchema,
    }).transform((v) => {
      return remap$(v, {
        statusCode: "status_code",
        typeName: "type_name",
        httpMeta: "HttpMeta",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneResponseBody$ {
  /** @deprecated use `HrisCompaniesOneResponseBody$inboundSchema` instead. */
  export const inboundSchema = HrisCompaniesOneResponseBody$inboundSchema;
  /** @deprecated use `HrisCompaniesOneResponseBody$outboundSchema` instead. */
  export const outboundSchema = HrisCompaniesOneResponseBody$outboundSchema;
  /** @deprecated use `HrisCompaniesOneResponseBody$Outbound` instead. */
  export type Outbound = HrisCompaniesOneResponseBody$Outbound;
}
