/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail =
  | string
  | { [k: string]: any };

/**
 * Unprocessable
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBodyData =
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

/**
 * Unprocessable
 */
export class HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody
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

  /** The original data that was passed to this error instance. */
  data$: HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBodyData;

  constructor(
    err: HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBodyData,
  ) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name =
      "HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail = string | {
  [k: string]: any;
};

/**
 * The specified resource was not found
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBodyData =
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

/**
 * The specified resource was not found
 */
export class HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody
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

  /** The original data that was passed to this error instance. */
  data$: HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBodyData;

  constructor(
    err: HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBodyData,
  ) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name =
      "HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBodyData =
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
  };

/**
 * Payment Required
 */
export class HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody
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

  /** The original data that was passed to this error instance. */
  data$: HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBodyData;

  constructor(
    err: HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBodyData,
  ) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsDetail = string | {
  [k: string]: any;
};

/**
 * Unauthorized
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBodyData = {
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

/**
 * Unauthorized
 */
export class HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody
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

  /** The original data that was passed to this error instance. */
  data$: HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBodyData;

  constructor(err: HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisTimeOffRequestsOneDetail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type HrisTimeOffRequestsOneResponseBodyData = {
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

/**
 * Bad Request
 */
export class HrisTimeOffRequestsOneResponseBody extends Error {
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

  /** The original data that was passed to this error instance. */
  data$: HrisTimeOffRequestsOneResponseBodyData;

  constructor(err: HrisTimeOffRequestsOneResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "HrisTimeOffRequestsOneResponseBody";
  }
}

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$inboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$Outbound =
  | string
  | { [k: string]: any };

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$outboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$Outbound,
    z.ZodTypeDef,
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$ {
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$Outbound` instead. */
  export type Outbound =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$Outbound;
}

export function hrisTimeOffRequestsOneHrisTimeOffRequestsResponse422DetailToJSON(
  hrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail:
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$outboundSchema
      .parse(hrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail),
  );
}

export function hrisTimeOffRequestsOneHrisTimeOffRequestsResponse422DetailFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422Detail' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$inboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.union([z.string(), z.record(z.any())]).optional(),
    ref: z.string().optional(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
      });

      return new HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody(
        remapped,
      );
    });

/** @internal */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$Outbound =
  {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | { [k: string]: any } | undefined;
    ref?: string | undefined;
  };

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$outboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$Outbound,
    z.ZodTypeDef,
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody
  > = z.instanceof(
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody,
  )
    .transform(v => v.data$)
    .pipe(
      z.object({
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
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$ {
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$Outbound` instead. */
  export type Outbound =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse422ResponseBody$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$inboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$Outbound =
  | string
  | { [k: string]: any };

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$outboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$Outbound,
    z.ZodTypeDef,
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$ {
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$Outbound` instead. */
  export type Outbound =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$Outbound;
}

export function hrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetailToJSON(
  hrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail:
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$outboundSchema
      .parse(hrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail),
  );
}

export function hrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneHrisTimeOffRequestsResponseDetail' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$inboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.union([z.string(), z.record(z.any())]).optional(),
    ref: z.string().optional(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
      });

      return new HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody(
        remapped,
      );
    });

/** @internal */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$Outbound =
  {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | { [k: string]: any } | undefined;
    ref?: string | undefined;
  };

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$outboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$Outbound,
    z.ZodTypeDef,
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody
  > = z.instanceof(
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody,
  )
    .transform(v => v.data$)
    .pipe(
      z.object({
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
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$ {
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$Outbound` instead. */
  export type Outbound =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponse404ResponseBody$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$inboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.string().optional(),
    ref: z.string().optional(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
      });

      return new HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody(
        remapped,
      );
    });

/** @internal */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$Outbound =
  {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | undefined;
    ref?: string | undefined;
  };

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$outboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$Outbound,
    z.ZodTypeDef,
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody
  > = z.instanceof(
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody,
  )
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number().optional(),
        error: z.string().optional(),
        typeName: z.string().optional(),
        message: z.string().optional(),
        detail: z.string().optional(),
        ref: z.string().optional(),
      }).transform((v) => {
        return remap$(v, {
          statusCode: "status_code",
          typeName: "type_name",
        });
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$ {
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$Outbound` instead. */
  export type Outbound =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseResponseBody$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$inboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$Outbound =
  | string
  | { [k: string]: any };

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$outboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$Outbound,
    z.ZodTypeDef,
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$ {
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$Outbound` instead. */
  export type Outbound =
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$Outbound;
}

export function hrisTimeOffRequestsOneHrisTimeOffRequestsDetailToJSON(
  hrisTimeOffRequestsOneHrisTimeOffRequestsDetail:
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$outboundSchema.parse(
      hrisTimeOffRequestsOneHrisTimeOffRequestsDetail,
    ),
  );
}

export function hrisTimeOffRequestsOneHrisTimeOffRequestsDetailFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisTimeOffRequestsOneHrisTimeOffRequestsDetail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisTimeOffRequestsOneHrisTimeOffRequestsDetail$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisTimeOffRequestsOneHrisTimeOffRequestsDetail' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$inboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number().optional(),
    error: z.string().optional(),
    type_name: z.string().optional(),
    message: z.string().optional(),
    detail: z.union([z.string(), z.record(z.any())]).optional(),
    ref: z.string().optional(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
        "type_name": "typeName",
      });

      return new HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody(
        remapped,
      );
    });

/** @internal */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$outboundSchema:
  z.ZodType<
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$Outbound,
    z.ZodTypeDef,
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody
  > = z.instanceof(HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody)
    .transform(v => v.data$)
    .pipe(
      z.object({
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
      }),
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$ {
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$Outbound` instead. */
  export type Outbound =
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsOneDetail$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type HrisTimeOffRequestsOneDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const HrisTimeOffRequestsOneDetail$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneDetail$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneDetail$ {
  /** @deprecated use `HrisTimeOffRequestsOneDetail$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneDetail$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneDetail$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneDetail$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneDetail$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneDetail$Outbound;
}

export function hrisTimeOffRequestsOneDetailToJSON(
  hrisTimeOffRequestsOneDetail: HrisTimeOffRequestsOneDetail,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneDetail$outboundSchema.parse(
      hrisTimeOffRequestsOneDetail,
    ),
  );
}

export function hrisTimeOffRequestsOneDetailFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOneDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneDetail' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneResponseBody$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().optional(),
  error: z.string().optional(),
  type_name: z.string().optional(),
  message: z.string().optional(),
  detail: z.union([z.string(), z.record(z.any())]).optional(),
  ref: z.string().optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
      "type_name": "typeName",
    });

    return new HrisTimeOffRequestsOneResponseBody(remapped);
  });

/** @internal */
export type HrisTimeOffRequestsOneResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneResponseBody$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponseBody$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneResponseBody
> = z.instanceof(HrisTimeOffRequestsOneResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
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
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneResponseBody$ {
  /** @deprecated use `HrisTimeOffRequestsOneResponseBody$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneResponseBody$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneResponseBody$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneResponseBody$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneResponseBody$Outbound;
}
