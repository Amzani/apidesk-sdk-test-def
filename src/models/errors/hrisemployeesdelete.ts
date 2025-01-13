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
export type HrisEmployeesDeleteHrisEmployeesResponse422Detail = string | {
  [k: string]: any;
};

/**
 * Unprocessable
 */
export type HrisEmployeesDeleteHrisEmployeesResponse422ResponseBodyData = {
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
export class HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody
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
  data$: HrisEmployeesDeleteHrisEmployeesResponse422ResponseBodyData;

  constructor(
    err: HrisEmployeesDeleteHrisEmployeesResponse422ResponseBodyData,
  ) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisEmployeesDeleteHrisEmployeesResponseDetail = string | {
  [k: string]: any;
};

/**
 * The specified resource was not found
 */
export type HrisEmployeesDeleteHrisEmployeesResponse404ResponseBodyData = {
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
export class HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody
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
  data$: HrisEmployeesDeleteHrisEmployeesResponse404ResponseBodyData;

  constructor(
    err: HrisEmployeesDeleteHrisEmployeesResponse404ResponseBodyData,
  ) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type HrisEmployeesDeleteHrisEmployeesResponseResponseBodyData = {
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
export class HrisEmployeesDeleteHrisEmployeesResponseResponseBody
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
  detail?: string | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
  httpMeta: components.HTTPMetadata;

  /** The original data that was passed to this error instance. */
  data$: HrisEmployeesDeleteHrisEmployeesResponseResponseBodyData;

  constructor(err: HrisEmployeesDeleteHrisEmployeesResponseResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisEmployeesDeleteHrisEmployeesResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisEmployeesDeleteHrisEmployeesDetail = string | {
  [k: string]: any;
};

/**
 * Unauthorized
 */
export type HrisEmployeesDeleteHrisEmployeesResponseBodyData = {
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
export class HrisEmployeesDeleteHrisEmployeesResponseBody extends Error {
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
  data$: HrisEmployeesDeleteHrisEmployeesResponseBodyData;

  constructor(err: HrisEmployeesDeleteHrisEmployeesResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisEmployeesDeleteHrisEmployeesResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisEmployeesDeleteDetail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type HrisEmployeesDeleteResponseBodyData = {
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
export class HrisEmployeesDeleteResponseBody extends Error {
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
  data$: HrisEmployeesDeleteResponseBodyData;

  constructor(err: HrisEmployeesDeleteResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;
    this.httpMeta = err.httpMeta;

    this.name = "HrisEmployeesDeleteResponseBody";
  }
}

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponse422Detail$inboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponse422Detail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesResponse422Detail$Outbound =
  | string
  | { [k: string]: any };

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponse422Detail$outboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponse422Detail$Outbound,
    z.ZodTypeDef,
    HrisEmployeesDeleteHrisEmployeesResponse422Detail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteHrisEmployeesResponse422Detail$ {
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse422Detail$inboundSchema` instead. */
  export const inboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponse422Detail$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse422Detail$outboundSchema` instead. */
  export const outboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponse422Detail$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse422Detail$Outbound` instead. */
  export type Outbound =
    HrisEmployeesDeleteHrisEmployeesResponse422Detail$Outbound;
}

export function hrisEmployeesDeleteHrisEmployeesResponse422DetailToJSON(
  hrisEmployeesDeleteHrisEmployeesResponse422Detail:
    HrisEmployeesDeleteHrisEmployeesResponse422Detail,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteHrisEmployeesResponse422Detail$outboundSchema.parse(
      hrisEmployeesDeleteHrisEmployeesResponse422Detail,
    ),
  );
}

export function hrisEmployeesDeleteHrisEmployeesResponse422DetailFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisEmployeesDeleteHrisEmployeesResponse422Detail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisEmployeesDeleteHrisEmployeesResponse422Detail$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisEmployeesDeleteHrisEmployeesResponse422Detail' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$inboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody,
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

      return new HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody(
        remapped,
      );
    });

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$outboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$Outbound,
    z.ZodTypeDef,
    HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody
  > = z.instanceof(HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody)
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
export namespace HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$ {
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$Outbound` instead. */
  export type Outbound =
    HrisEmployeesDeleteHrisEmployeesResponse422ResponseBody$Outbound;
}

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponseDetail$inboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponseDetail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponseDetail$outboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponseDetail$Outbound,
    z.ZodTypeDef,
    HrisEmployeesDeleteHrisEmployeesResponseDetail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteHrisEmployeesResponseDetail$ {
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseDetail$inboundSchema` instead. */
  export const inboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponseDetail$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseDetail$outboundSchema` instead. */
  export const outboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponseDetail$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseDetail$Outbound` instead. */
  export type Outbound =
    HrisEmployeesDeleteHrisEmployeesResponseDetail$Outbound;
}

export function hrisEmployeesDeleteHrisEmployeesResponseDetailToJSON(
  hrisEmployeesDeleteHrisEmployeesResponseDetail:
    HrisEmployeesDeleteHrisEmployeesResponseDetail,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteHrisEmployeesResponseDetail$outboundSchema.parse(
      hrisEmployeesDeleteHrisEmployeesResponseDetail,
    ),
  );
}

export function hrisEmployeesDeleteHrisEmployeesResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisEmployeesDeleteHrisEmployeesResponseDetail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisEmployeesDeleteHrisEmployeesResponseDetail$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisEmployeesDeleteHrisEmployeesResponseDetail' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$inboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody,
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

      return new HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody(
        remapped,
      );
    });

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$outboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$Outbound,
    z.ZodTypeDef,
    HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody
  > = z.instanceof(HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody)
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
export namespace HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$ {
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$Outbound` instead. */
  export type Outbound =
    HrisEmployeesDeleteHrisEmployeesResponse404ResponseBody$Outbound;
}

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponseResponseBody$inboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponseResponseBody,
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

      return new HrisEmployeesDeleteHrisEmployeesResponseResponseBody(remapped);
    });

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesResponseResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponseResponseBody$outboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponseResponseBody$Outbound,
    z.ZodTypeDef,
    HrisEmployeesDeleteHrisEmployeesResponseResponseBody
  > = z.instanceof(HrisEmployeesDeleteHrisEmployeesResponseResponseBody)
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
export namespace HrisEmployeesDeleteHrisEmployeesResponseResponseBody$ {
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponseResponseBody$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisEmployeesDeleteHrisEmployeesResponseResponseBody$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesResponseResponseBody$Outbound` instead. */
  export type Outbound =
    HrisEmployeesDeleteHrisEmployeesResponseResponseBody$Outbound;
}

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesDetail$inboundSchema: z.ZodType<
  HrisEmployeesDeleteHrisEmployeesDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesDetail$outboundSchema: z.ZodType<
  HrisEmployeesDeleteHrisEmployeesDetail$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteHrisEmployeesDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesDeleteHrisEmployeesDetail$ {
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesDetail$inboundSchema` instead. */
  export const inboundSchema =
    HrisEmployeesDeleteHrisEmployeesDetail$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesDetail$outboundSchema` instead. */
  export const outboundSchema =
    HrisEmployeesDeleteHrisEmployeesDetail$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteHrisEmployeesDetail$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteHrisEmployeesDetail$Outbound;
}

export function hrisEmployeesDeleteHrisEmployeesDetailToJSON(
  hrisEmployeesDeleteHrisEmployeesDetail:
    HrisEmployeesDeleteHrisEmployeesDetail,
): string {
  return JSON.stringify(
    HrisEmployeesDeleteHrisEmployeesDetail$outboundSchema.parse(
      hrisEmployeesDeleteHrisEmployeesDetail,
    ),
  );
}

export function hrisEmployeesDeleteHrisEmployeesDetailFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesDeleteHrisEmployeesDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisEmployeesDeleteHrisEmployeesDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesDeleteHrisEmployeesDetail' from JSON`,
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
    HttpMeta: components.HTTPMetadata$inboundSchema,
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
        "HttpMeta": "httpMeta",
      });

      return new HrisEmployeesDeleteHrisEmployeesResponseBody(remapped);
    });

/** @internal */
export type HrisEmployeesDeleteHrisEmployeesResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisEmployeesDeleteHrisEmployeesResponseBody$outboundSchema:
  z.ZodType<
    HrisEmployeesDeleteHrisEmployeesResponseBody$Outbound,
    z.ZodTypeDef,
    HrisEmployeesDeleteHrisEmployeesResponseBody
  > = z.instanceof(HrisEmployeesDeleteHrisEmployeesResponseBody)
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
export const HrisEmployeesDeleteResponseBody$inboundSchema: z.ZodType<
  HrisEmployeesDeleteResponseBody,
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

    return new HrisEmployeesDeleteResponseBody(remapped);
  });

/** @internal */
export type HrisEmployeesDeleteResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HrisEmployeesDeleteResponseBody$outboundSchema: z.ZodType<
  HrisEmployeesDeleteResponseBody$Outbound,
  z.ZodTypeDef,
  HrisEmployeesDeleteResponseBody
> = z.instanceof(HrisEmployeesDeleteResponseBody)
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
export namespace HrisEmployeesDeleteResponseBody$ {
  /** @deprecated use `HrisEmployeesDeleteResponseBody$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesDeleteResponseBody$inboundSchema;
  /** @deprecated use `HrisEmployeesDeleteResponseBody$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesDeleteResponseBody$outboundSchema;
  /** @deprecated use `HrisEmployeesDeleteResponseBody$Outbound` instead. */
  export type Outbound = HrisEmployeesDeleteResponseBody$Outbound;
}
