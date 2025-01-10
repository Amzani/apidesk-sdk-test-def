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
export type LeadsUpdateLeadsResponse422Detail = string | { [k: string]: any };

/**
 * Unprocessable
 */
export type LeadsUpdateLeadsResponse422ResponseBodyData = {
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
export class LeadsUpdateLeadsResponse422ResponseBody extends Error {
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
  data$: LeadsUpdateLeadsResponse422ResponseBodyData;

  constructor(err: LeadsUpdateLeadsResponse422ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "LeadsUpdateLeadsResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type LeadsUpdateLeadsResponseDetail = string | { [k: string]: any };

/**
 * The specified resource was not found
 */
export type LeadsUpdateLeadsResponse404ResponseBodyData = {
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
export class LeadsUpdateLeadsResponse404ResponseBody extends Error {
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
  data$: LeadsUpdateLeadsResponse404ResponseBodyData;

  constructor(err: LeadsUpdateLeadsResponse404ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "LeadsUpdateLeadsResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type LeadsUpdateLeadsResponseResponseBodyData = {
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
export class LeadsUpdateLeadsResponseResponseBody extends Error {
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
  data$: LeadsUpdateLeadsResponseResponseBodyData;

  constructor(err: LeadsUpdateLeadsResponseResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "LeadsUpdateLeadsResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type LeadsUpdateLeadsDetail = string | { [k: string]: any };

/**
 * Unauthorized
 */
export type LeadsUpdateLeadsResponseBodyData = {
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
export class LeadsUpdateLeadsResponseBody extends Error {
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
  data$: LeadsUpdateLeadsResponseBodyData;

  constructor(err: LeadsUpdateLeadsResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "LeadsUpdateLeadsResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type LeadsUpdateDetail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type LeadsUpdateResponseBodyData = {
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
export class LeadsUpdateResponseBody extends Error {
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
  data$: LeadsUpdateResponseBodyData;

  constructor(err: LeadsUpdateResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "LeadsUpdateResponseBody";
  }
}

/** @internal */
export const LeadsUpdateLeadsResponse422Detail$inboundSchema: z.ZodType<
  LeadsUpdateLeadsResponse422Detail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type LeadsUpdateLeadsResponse422Detail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const LeadsUpdateLeadsResponse422Detail$outboundSchema: z.ZodType<
  LeadsUpdateLeadsResponse422Detail$Outbound,
  z.ZodTypeDef,
  LeadsUpdateLeadsResponse422Detail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsUpdateLeadsResponse422Detail$ {
  /** @deprecated use `LeadsUpdateLeadsResponse422Detail$inboundSchema` instead. */
  export const inboundSchema = LeadsUpdateLeadsResponse422Detail$inboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponse422Detail$outboundSchema` instead. */
  export const outboundSchema =
    LeadsUpdateLeadsResponse422Detail$outboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponse422Detail$Outbound` instead. */
  export type Outbound = LeadsUpdateLeadsResponse422Detail$Outbound;
}

export function leadsUpdateLeadsResponse422DetailToJSON(
  leadsUpdateLeadsResponse422Detail: LeadsUpdateLeadsResponse422Detail,
): string {
  return JSON.stringify(
    LeadsUpdateLeadsResponse422Detail$outboundSchema.parse(
      leadsUpdateLeadsResponse422Detail,
    ),
  );
}

export function leadsUpdateLeadsResponse422DetailFromJSON(
  jsonString: string,
): SafeParseResult<LeadsUpdateLeadsResponse422Detail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadsUpdateLeadsResponse422Detail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadsUpdateLeadsResponse422Detail' from JSON`,
  );
}

/** @internal */
export const LeadsUpdateLeadsResponse422ResponseBody$inboundSchema: z.ZodType<
  LeadsUpdateLeadsResponse422ResponseBody,
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

    return new LeadsUpdateLeadsResponse422ResponseBody(remapped);
  });

/** @internal */
export type LeadsUpdateLeadsResponse422ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const LeadsUpdateLeadsResponse422ResponseBody$outboundSchema: z.ZodType<
  LeadsUpdateLeadsResponse422ResponseBody$Outbound,
  z.ZodTypeDef,
  LeadsUpdateLeadsResponse422ResponseBody
> = z.instanceof(LeadsUpdateLeadsResponse422ResponseBody)
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
export namespace LeadsUpdateLeadsResponse422ResponseBody$ {
  /** @deprecated use `LeadsUpdateLeadsResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    LeadsUpdateLeadsResponse422ResponseBody$inboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    LeadsUpdateLeadsResponse422ResponseBody$outboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponse422ResponseBody$Outbound` instead. */
  export type Outbound = LeadsUpdateLeadsResponse422ResponseBody$Outbound;
}

/** @internal */
export const LeadsUpdateLeadsResponseDetail$inboundSchema: z.ZodType<
  LeadsUpdateLeadsResponseDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type LeadsUpdateLeadsResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const LeadsUpdateLeadsResponseDetail$outboundSchema: z.ZodType<
  LeadsUpdateLeadsResponseDetail$Outbound,
  z.ZodTypeDef,
  LeadsUpdateLeadsResponseDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsUpdateLeadsResponseDetail$ {
  /** @deprecated use `LeadsUpdateLeadsResponseDetail$inboundSchema` instead. */
  export const inboundSchema = LeadsUpdateLeadsResponseDetail$inboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponseDetail$outboundSchema` instead. */
  export const outboundSchema = LeadsUpdateLeadsResponseDetail$outboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponseDetail$Outbound` instead. */
  export type Outbound = LeadsUpdateLeadsResponseDetail$Outbound;
}

export function leadsUpdateLeadsResponseDetailToJSON(
  leadsUpdateLeadsResponseDetail: LeadsUpdateLeadsResponseDetail,
): string {
  return JSON.stringify(
    LeadsUpdateLeadsResponseDetail$outboundSchema.parse(
      leadsUpdateLeadsResponseDetail,
    ),
  );
}

export function leadsUpdateLeadsResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<LeadsUpdateLeadsResponseDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadsUpdateLeadsResponseDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadsUpdateLeadsResponseDetail' from JSON`,
  );
}

/** @internal */
export const LeadsUpdateLeadsResponse404ResponseBody$inboundSchema: z.ZodType<
  LeadsUpdateLeadsResponse404ResponseBody,
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

    return new LeadsUpdateLeadsResponse404ResponseBody(remapped);
  });

/** @internal */
export type LeadsUpdateLeadsResponse404ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const LeadsUpdateLeadsResponse404ResponseBody$outboundSchema: z.ZodType<
  LeadsUpdateLeadsResponse404ResponseBody$Outbound,
  z.ZodTypeDef,
  LeadsUpdateLeadsResponse404ResponseBody
> = z.instanceof(LeadsUpdateLeadsResponse404ResponseBody)
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
export namespace LeadsUpdateLeadsResponse404ResponseBody$ {
  /** @deprecated use `LeadsUpdateLeadsResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    LeadsUpdateLeadsResponse404ResponseBody$inboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    LeadsUpdateLeadsResponse404ResponseBody$outboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponse404ResponseBody$Outbound` instead. */
  export type Outbound = LeadsUpdateLeadsResponse404ResponseBody$Outbound;
}

/** @internal */
export const LeadsUpdateLeadsResponseResponseBody$inboundSchema: z.ZodType<
  LeadsUpdateLeadsResponseResponseBody,
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

    return new LeadsUpdateLeadsResponseResponseBody(remapped);
  });

/** @internal */
export type LeadsUpdateLeadsResponseResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | undefined;
  ref?: string | undefined;
};

/** @internal */
export const LeadsUpdateLeadsResponseResponseBody$outboundSchema: z.ZodType<
  LeadsUpdateLeadsResponseResponseBody$Outbound,
  z.ZodTypeDef,
  LeadsUpdateLeadsResponseResponseBody
> = z.instanceof(LeadsUpdateLeadsResponseResponseBody)
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
export namespace LeadsUpdateLeadsResponseResponseBody$ {
  /** @deprecated use `LeadsUpdateLeadsResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    LeadsUpdateLeadsResponseResponseBody$inboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    LeadsUpdateLeadsResponseResponseBody$outboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponseResponseBody$Outbound` instead. */
  export type Outbound = LeadsUpdateLeadsResponseResponseBody$Outbound;
}

/** @internal */
export const LeadsUpdateLeadsDetail$inboundSchema: z.ZodType<
  LeadsUpdateLeadsDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type LeadsUpdateLeadsDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const LeadsUpdateLeadsDetail$outboundSchema: z.ZodType<
  LeadsUpdateLeadsDetail$Outbound,
  z.ZodTypeDef,
  LeadsUpdateLeadsDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsUpdateLeadsDetail$ {
  /** @deprecated use `LeadsUpdateLeadsDetail$inboundSchema` instead. */
  export const inboundSchema = LeadsUpdateLeadsDetail$inboundSchema;
  /** @deprecated use `LeadsUpdateLeadsDetail$outboundSchema` instead. */
  export const outboundSchema = LeadsUpdateLeadsDetail$outboundSchema;
  /** @deprecated use `LeadsUpdateLeadsDetail$Outbound` instead. */
  export type Outbound = LeadsUpdateLeadsDetail$Outbound;
}

export function leadsUpdateLeadsDetailToJSON(
  leadsUpdateLeadsDetail: LeadsUpdateLeadsDetail,
): string {
  return JSON.stringify(
    LeadsUpdateLeadsDetail$outboundSchema.parse(leadsUpdateLeadsDetail),
  );
}

export function leadsUpdateLeadsDetailFromJSON(
  jsonString: string,
): SafeParseResult<LeadsUpdateLeadsDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadsUpdateLeadsDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadsUpdateLeadsDetail' from JSON`,
  );
}

/** @internal */
export const LeadsUpdateLeadsResponseBody$inboundSchema: z.ZodType<
  LeadsUpdateLeadsResponseBody,
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

    return new LeadsUpdateLeadsResponseBody(remapped);
  });

/** @internal */
export type LeadsUpdateLeadsResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const LeadsUpdateLeadsResponseBody$outboundSchema: z.ZodType<
  LeadsUpdateLeadsResponseBody$Outbound,
  z.ZodTypeDef,
  LeadsUpdateLeadsResponseBody
> = z.instanceof(LeadsUpdateLeadsResponseBody)
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
export namespace LeadsUpdateLeadsResponseBody$ {
  /** @deprecated use `LeadsUpdateLeadsResponseBody$inboundSchema` instead. */
  export const inboundSchema = LeadsUpdateLeadsResponseBody$inboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponseBody$outboundSchema` instead. */
  export const outboundSchema = LeadsUpdateLeadsResponseBody$outboundSchema;
  /** @deprecated use `LeadsUpdateLeadsResponseBody$Outbound` instead. */
  export type Outbound = LeadsUpdateLeadsResponseBody$Outbound;
}

/** @internal */
export const LeadsUpdateDetail$inboundSchema: z.ZodType<
  LeadsUpdateDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type LeadsUpdateDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const LeadsUpdateDetail$outboundSchema: z.ZodType<
  LeadsUpdateDetail$Outbound,
  z.ZodTypeDef,
  LeadsUpdateDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsUpdateDetail$ {
  /** @deprecated use `LeadsUpdateDetail$inboundSchema` instead. */
  export const inboundSchema = LeadsUpdateDetail$inboundSchema;
  /** @deprecated use `LeadsUpdateDetail$outboundSchema` instead. */
  export const outboundSchema = LeadsUpdateDetail$outboundSchema;
  /** @deprecated use `LeadsUpdateDetail$Outbound` instead. */
  export type Outbound = LeadsUpdateDetail$Outbound;
}

export function leadsUpdateDetailToJSON(
  leadsUpdateDetail: LeadsUpdateDetail,
): string {
  return JSON.stringify(
    LeadsUpdateDetail$outboundSchema.parse(leadsUpdateDetail),
  );
}

export function leadsUpdateDetailFromJSON(
  jsonString: string,
): SafeParseResult<LeadsUpdateDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadsUpdateDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadsUpdateDetail' from JSON`,
  );
}

/** @internal */
export const LeadsUpdateResponseBody$inboundSchema: z.ZodType<
  LeadsUpdateResponseBody,
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

    return new LeadsUpdateResponseBody(remapped);
  });

/** @internal */
export type LeadsUpdateResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const LeadsUpdateResponseBody$outboundSchema: z.ZodType<
  LeadsUpdateResponseBody$Outbound,
  z.ZodTypeDef,
  LeadsUpdateResponseBody
> = z.instanceof(LeadsUpdateResponseBody)
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
export namespace LeadsUpdateResponseBody$ {
  /** @deprecated use `LeadsUpdateResponseBody$inboundSchema` instead. */
  export const inboundSchema = LeadsUpdateResponseBody$inboundSchema;
  /** @deprecated use `LeadsUpdateResponseBody$outboundSchema` instead. */
  export const outboundSchema = LeadsUpdateResponseBody$outboundSchema;
  /** @deprecated use `LeadsUpdateResponseBody$Outbound` instead. */
  export type Outbound = LeadsUpdateResponseBody$Outbound;
}
