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
export type OpportunitiesDeleteOpportunitiesResponse422Detail = string | {
  [k: string]: any;
};

/**
 * Unprocessable
 */
export type OpportunitiesDeleteOpportunitiesResponse422ResponseBodyData = {
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
export class OpportunitiesDeleteOpportunitiesResponse422ResponseBody
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
  data$: OpportunitiesDeleteOpportunitiesResponse422ResponseBodyData;

  constructor(
    err: OpportunitiesDeleteOpportunitiesResponse422ResponseBodyData,
  ) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "OpportunitiesDeleteOpportunitiesResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type OpportunitiesDeleteOpportunitiesResponseDetail = string | {
  [k: string]: any;
};

/**
 * The specified resource was not found
 */
export type OpportunitiesDeleteOpportunitiesResponse404ResponseBodyData = {
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
export class OpportunitiesDeleteOpportunitiesResponse404ResponseBody
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
  data$: OpportunitiesDeleteOpportunitiesResponse404ResponseBodyData;

  constructor(
    err: OpportunitiesDeleteOpportunitiesResponse404ResponseBodyData,
  ) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "OpportunitiesDeleteOpportunitiesResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type OpportunitiesDeleteOpportunitiesResponseResponseBodyData = {
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
export class OpportunitiesDeleteOpportunitiesResponseResponseBody
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
  data$: OpportunitiesDeleteOpportunitiesResponseResponseBodyData;

  constructor(err: OpportunitiesDeleteOpportunitiesResponseResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "OpportunitiesDeleteOpportunitiesResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type OpportunitiesDeleteOpportunitiesDetail = string | {
  [k: string]: any;
};

/**
 * Unauthorized
 */
export type OpportunitiesDeleteOpportunitiesResponseBodyData = {
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
export class OpportunitiesDeleteOpportunitiesResponseBody extends Error {
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
  data$: OpportunitiesDeleteOpportunitiesResponseBodyData;

  constructor(err: OpportunitiesDeleteOpportunitiesResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "OpportunitiesDeleteOpportunitiesResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type OpportunitiesDeleteDetail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type OpportunitiesDeleteResponseBodyData = {
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
export class OpportunitiesDeleteResponseBody extends Error {
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
  data$: OpportunitiesDeleteResponseBodyData;

  constructor(err: OpportunitiesDeleteResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "OpportunitiesDeleteResponseBody";
  }
}

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponse422Detail$inboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponse422Detail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type OpportunitiesDeleteOpportunitiesResponse422Detail$Outbound =
  | string
  | { [k: string]: any };

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponse422Detail$outboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponse422Detail$Outbound,
    z.ZodTypeDef,
    OpportunitiesDeleteOpportunitiesResponse422Detail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpportunitiesDeleteOpportunitiesResponse422Detail$ {
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse422Detail$inboundSchema` instead. */
  export const inboundSchema =
    OpportunitiesDeleteOpportunitiesResponse422Detail$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse422Detail$outboundSchema` instead. */
  export const outboundSchema =
    OpportunitiesDeleteOpportunitiesResponse422Detail$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse422Detail$Outbound` instead. */
  export type Outbound =
    OpportunitiesDeleteOpportunitiesResponse422Detail$Outbound;
}

export function opportunitiesDeleteOpportunitiesResponse422DetailToJSON(
  opportunitiesDeleteOpportunitiesResponse422Detail:
    OpportunitiesDeleteOpportunitiesResponse422Detail,
): string {
  return JSON.stringify(
    OpportunitiesDeleteOpportunitiesResponse422Detail$outboundSchema.parse(
      opportunitiesDeleteOpportunitiesResponse422Detail,
    ),
  );
}

export function opportunitiesDeleteOpportunitiesResponse422DetailFromJSON(
  jsonString: string,
): SafeParseResult<
  OpportunitiesDeleteOpportunitiesResponse422Detail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      OpportunitiesDeleteOpportunitiesResponse422Detail$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'OpportunitiesDeleteOpportunitiesResponse422Detail' from JSON`,
  );
}

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponse422ResponseBody$inboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponse422ResponseBody,
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

      return new OpportunitiesDeleteOpportunitiesResponse422ResponseBody(
        remapped,
      );
    });

/** @internal */
export type OpportunitiesDeleteOpportunitiesResponse422ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponse422ResponseBody$outboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponse422ResponseBody$Outbound,
    z.ZodTypeDef,
    OpportunitiesDeleteOpportunitiesResponse422ResponseBody
  > = z.instanceof(OpportunitiesDeleteOpportunitiesResponse422ResponseBody)
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
export namespace OpportunitiesDeleteOpportunitiesResponse422ResponseBody$ {
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    OpportunitiesDeleteOpportunitiesResponse422ResponseBody$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    OpportunitiesDeleteOpportunitiesResponse422ResponseBody$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse422ResponseBody$Outbound` instead. */
  export type Outbound =
    OpportunitiesDeleteOpportunitiesResponse422ResponseBody$Outbound;
}

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponseDetail$inboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponseDetail,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type OpportunitiesDeleteOpportunitiesResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponseDetail$outboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponseDetail$Outbound,
    z.ZodTypeDef,
    OpportunitiesDeleteOpportunitiesResponseDetail
  > = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpportunitiesDeleteOpportunitiesResponseDetail$ {
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseDetail$inboundSchema` instead. */
  export const inboundSchema =
    OpportunitiesDeleteOpportunitiesResponseDetail$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseDetail$outboundSchema` instead. */
  export const outboundSchema =
    OpportunitiesDeleteOpportunitiesResponseDetail$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseDetail$Outbound` instead. */
  export type Outbound =
    OpportunitiesDeleteOpportunitiesResponseDetail$Outbound;
}

export function opportunitiesDeleteOpportunitiesResponseDetailToJSON(
  opportunitiesDeleteOpportunitiesResponseDetail:
    OpportunitiesDeleteOpportunitiesResponseDetail,
): string {
  return JSON.stringify(
    OpportunitiesDeleteOpportunitiesResponseDetail$outboundSchema.parse(
      opportunitiesDeleteOpportunitiesResponseDetail,
    ),
  );
}

export function opportunitiesDeleteOpportunitiesResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<
  OpportunitiesDeleteOpportunitiesResponseDetail,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      OpportunitiesDeleteOpportunitiesResponseDetail$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'OpportunitiesDeleteOpportunitiesResponseDetail' from JSON`,
  );
}

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponse404ResponseBody$inboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponse404ResponseBody,
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

      return new OpportunitiesDeleteOpportunitiesResponse404ResponseBody(
        remapped,
      );
    });

/** @internal */
export type OpportunitiesDeleteOpportunitiesResponse404ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponse404ResponseBody$outboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponse404ResponseBody$Outbound,
    z.ZodTypeDef,
    OpportunitiesDeleteOpportunitiesResponse404ResponseBody
  > = z.instanceof(OpportunitiesDeleteOpportunitiesResponse404ResponseBody)
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
export namespace OpportunitiesDeleteOpportunitiesResponse404ResponseBody$ {
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    OpportunitiesDeleteOpportunitiesResponse404ResponseBody$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    OpportunitiesDeleteOpportunitiesResponse404ResponseBody$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponse404ResponseBody$Outbound` instead. */
  export type Outbound =
    OpportunitiesDeleteOpportunitiesResponse404ResponseBody$Outbound;
}

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponseResponseBody$inboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponseResponseBody,
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

      return new OpportunitiesDeleteOpportunitiesResponseResponseBody(remapped);
    });

/** @internal */
export type OpportunitiesDeleteOpportunitiesResponseResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | undefined;
  ref?: string | undefined;
};

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponseResponseBody$outboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponseResponseBody$Outbound,
    z.ZodTypeDef,
    OpportunitiesDeleteOpportunitiesResponseResponseBody
  > = z.instanceof(OpportunitiesDeleteOpportunitiesResponseResponseBody)
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
export namespace OpportunitiesDeleteOpportunitiesResponseResponseBody$ {
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    OpportunitiesDeleteOpportunitiesResponseResponseBody$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    OpportunitiesDeleteOpportunitiesResponseResponseBody$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseResponseBody$Outbound` instead. */
  export type Outbound =
    OpportunitiesDeleteOpportunitiesResponseResponseBody$Outbound;
}

/** @internal */
export const OpportunitiesDeleteOpportunitiesDetail$inboundSchema: z.ZodType<
  OpportunitiesDeleteOpportunitiesDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type OpportunitiesDeleteOpportunitiesDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const OpportunitiesDeleteOpportunitiesDetail$outboundSchema: z.ZodType<
  OpportunitiesDeleteOpportunitiesDetail$Outbound,
  z.ZodTypeDef,
  OpportunitiesDeleteOpportunitiesDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpportunitiesDeleteOpportunitiesDetail$ {
  /** @deprecated use `OpportunitiesDeleteOpportunitiesDetail$inboundSchema` instead. */
  export const inboundSchema =
    OpportunitiesDeleteOpportunitiesDetail$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesDetail$outboundSchema` instead. */
  export const outboundSchema =
    OpportunitiesDeleteOpportunitiesDetail$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesDetail$Outbound` instead. */
  export type Outbound = OpportunitiesDeleteOpportunitiesDetail$Outbound;
}

export function opportunitiesDeleteOpportunitiesDetailToJSON(
  opportunitiesDeleteOpportunitiesDetail:
    OpportunitiesDeleteOpportunitiesDetail,
): string {
  return JSON.stringify(
    OpportunitiesDeleteOpportunitiesDetail$outboundSchema.parse(
      opportunitiesDeleteOpportunitiesDetail,
    ),
  );
}

export function opportunitiesDeleteOpportunitiesDetailFromJSON(
  jsonString: string,
): SafeParseResult<OpportunitiesDeleteOpportunitiesDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      OpportunitiesDeleteOpportunitiesDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpportunitiesDeleteOpportunitiesDetail' from JSON`,
  );
}

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponseBody$inboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponseBody,
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

      return new OpportunitiesDeleteOpportunitiesResponseBody(remapped);
    });

/** @internal */
export type OpportunitiesDeleteOpportunitiesResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const OpportunitiesDeleteOpportunitiesResponseBody$outboundSchema:
  z.ZodType<
    OpportunitiesDeleteOpportunitiesResponseBody$Outbound,
    z.ZodTypeDef,
    OpportunitiesDeleteOpportunitiesResponseBody
  > = z.instanceof(OpportunitiesDeleteOpportunitiesResponseBody)
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
export namespace OpportunitiesDeleteOpportunitiesResponseBody$ {
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    OpportunitiesDeleteOpportunitiesResponseBody$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    OpportunitiesDeleteOpportunitiesResponseBody$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteOpportunitiesResponseBody$Outbound` instead. */
  export type Outbound = OpportunitiesDeleteOpportunitiesResponseBody$Outbound;
}

/** @internal */
export const OpportunitiesDeleteDetail$inboundSchema: z.ZodType<
  OpportunitiesDeleteDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type OpportunitiesDeleteDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const OpportunitiesDeleteDetail$outboundSchema: z.ZodType<
  OpportunitiesDeleteDetail$Outbound,
  z.ZodTypeDef,
  OpportunitiesDeleteDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpportunitiesDeleteDetail$ {
  /** @deprecated use `OpportunitiesDeleteDetail$inboundSchema` instead. */
  export const inboundSchema = OpportunitiesDeleteDetail$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteDetail$outboundSchema` instead. */
  export const outboundSchema = OpportunitiesDeleteDetail$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteDetail$Outbound` instead. */
  export type Outbound = OpportunitiesDeleteDetail$Outbound;
}

export function opportunitiesDeleteDetailToJSON(
  opportunitiesDeleteDetail: OpportunitiesDeleteDetail,
): string {
  return JSON.stringify(
    OpportunitiesDeleteDetail$outboundSchema.parse(opportunitiesDeleteDetail),
  );
}

export function opportunitiesDeleteDetailFromJSON(
  jsonString: string,
): SafeParseResult<OpportunitiesDeleteDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpportunitiesDeleteDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpportunitiesDeleteDetail' from JSON`,
  );
}

/** @internal */
export const OpportunitiesDeleteResponseBody$inboundSchema: z.ZodType<
  OpportunitiesDeleteResponseBody,
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

    return new OpportunitiesDeleteResponseBody(remapped);
  });

/** @internal */
export type OpportunitiesDeleteResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const OpportunitiesDeleteResponseBody$outboundSchema: z.ZodType<
  OpportunitiesDeleteResponseBody$Outbound,
  z.ZodTypeDef,
  OpportunitiesDeleteResponseBody
> = z.instanceof(OpportunitiesDeleteResponseBody)
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
export namespace OpportunitiesDeleteResponseBody$ {
  /** @deprecated use `OpportunitiesDeleteResponseBody$inboundSchema` instead. */
  export const inboundSchema = OpportunitiesDeleteResponseBody$inboundSchema;
  /** @deprecated use `OpportunitiesDeleteResponseBody$outboundSchema` instead. */
  export const outboundSchema = OpportunitiesDeleteResponseBody$outboundSchema;
  /** @deprecated use `OpportunitiesDeleteResponseBody$Outbound` instead. */
  export type Outbound = OpportunitiesDeleteResponseBody$Outbound;
}
