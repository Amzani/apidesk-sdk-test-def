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
export type NotesAllNotesResponse422Detail = string | { [k: string]: any };

/**
 * Unprocessable
 */
export type NotesAllNotesResponse422ResponseBodyData = {
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
export class NotesAllNotesResponse422ResponseBody extends Error {
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
  data$: NotesAllNotesResponse422ResponseBodyData;

  constructor(err: NotesAllNotesResponse422ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "NotesAllNotesResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type NotesAllNotesResponseDetail = string | { [k: string]: any };

/**
 * The specified resource was not found
 */
export type NotesAllNotesResponse404ResponseBodyData = {
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
export class NotesAllNotesResponse404ResponseBody extends Error {
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
  data$: NotesAllNotesResponse404ResponseBodyData;

  constructor(err: NotesAllNotesResponse404ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "NotesAllNotesResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type NotesAllNotesResponseResponseBodyData = {
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
export class NotesAllNotesResponseResponseBody extends Error {
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
  data$: NotesAllNotesResponseResponseBodyData;

  constructor(err: NotesAllNotesResponseResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "NotesAllNotesResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type NotesAllNotesDetail = string | { [k: string]: any };

/**
 * Unauthorized
 */
export type NotesAllNotesResponseBodyData = {
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
export class NotesAllNotesResponseBody extends Error {
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
  data$: NotesAllNotesResponseBodyData;

  constructor(err: NotesAllNotesResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "NotesAllNotesResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type NotesAllDetail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type NotesAllResponseBodyData = {
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
export class NotesAllResponseBody extends Error {
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
  data$: NotesAllResponseBodyData;

  constructor(err: NotesAllResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "NotesAllResponseBody";
  }
}

/** @internal */
export const NotesAllNotesResponse422Detail$inboundSchema: z.ZodType<
  NotesAllNotesResponse422Detail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type NotesAllNotesResponse422Detail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const NotesAllNotesResponse422Detail$outboundSchema: z.ZodType<
  NotesAllNotesResponse422Detail$Outbound,
  z.ZodTypeDef,
  NotesAllNotesResponse422Detail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesAllNotesResponse422Detail$ {
  /** @deprecated use `NotesAllNotesResponse422Detail$inboundSchema` instead. */
  export const inboundSchema = NotesAllNotesResponse422Detail$inboundSchema;
  /** @deprecated use `NotesAllNotesResponse422Detail$outboundSchema` instead. */
  export const outboundSchema = NotesAllNotesResponse422Detail$outboundSchema;
  /** @deprecated use `NotesAllNotesResponse422Detail$Outbound` instead. */
  export type Outbound = NotesAllNotesResponse422Detail$Outbound;
}

export function notesAllNotesResponse422DetailToJSON(
  notesAllNotesResponse422Detail: NotesAllNotesResponse422Detail,
): string {
  return JSON.stringify(
    NotesAllNotesResponse422Detail$outboundSchema.parse(
      notesAllNotesResponse422Detail,
    ),
  );
}

export function notesAllNotesResponse422DetailFromJSON(
  jsonString: string,
): SafeParseResult<NotesAllNotesResponse422Detail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesAllNotesResponse422Detail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesAllNotesResponse422Detail' from JSON`,
  );
}

/** @internal */
export const NotesAllNotesResponse422ResponseBody$inboundSchema: z.ZodType<
  NotesAllNotesResponse422ResponseBody,
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

    return new NotesAllNotesResponse422ResponseBody(remapped);
  });

/** @internal */
export type NotesAllNotesResponse422ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const NotesAllNotesResponse422ResponseBody$outboundSchema: z.ZodType<
  NotesAllNotesResponse422ResponseBody$Outbound,
  z.ZodTypeDef,
  NotesAllNotesResponse422ResponseBody
> = z.instanceof(NotesAllNotesResponse422ResponseBody)
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
export namespace NotesAllNotesResponse422ResponseBody$ {
  /** @deprecated use `NotesAllNotesResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    NotesAllNotesResponse422ResponseBody$inboundSchema;
  /** @deprecated use `NotesAllNotesResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    NotesAllNotesResponse422ResponseBody$outboundSchema;
  /** @deprecated use `NotesAllNotesResponse422ResponseBody$Outbound` instead. */
  export type Outbound = NotesAllNotesResponse422ResponseBody$Outbound;
}

/** @internal */
export const NotesAllNotesResponseDetail$inboundSchema: z.ZodType<
  NotesAllNotesResponseDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type NotesAllNotesResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const NotesAllNotesResponseDetail$outboundSchema: z.ZodType<
  NotesAllNotesResponseDetail$Outbound,
  z.ZodTypeDef,
  NotesAllNotesResponseDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesAllNotesResponseDetail$ {
  /** @deprecated use `NotesAllNotesResponseDetail$inboundSchema` instead. */
  export const inboundSchema = NotesAllNotesResponseDetail$inboundSchema;
  /** @deprecated use `NotesAllNotesResponseDetail$outboundSchema` instead. */
  export const outboundSchema = NotesAllNotesResponseDetail$outboundSchema;
  /** @deprecated use `NotesAllNotesResponseDetail$Outbound` instead. */
  export type Outbound = NotesAllNotesResponseDetail$Outbound;
}

export function notesAllNotesResponseDetailToJSON(
  notesAllNotesResponseDetail: NotesAllNotesResponseDetail,
): string {
  return JSON.stringify(
    NotesAllNotesResponseDetail$outboundSchema.parse(
      notesAllNotesResponseDetail,
    ),
  );
}

export function notesAllNotesResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<NotesAllNotesResponseDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesAllNotesResponseDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesAllNotesResponseDetail' from JSON`,
  );
}

/** @internal */
export const NotesAllNotesResponse404ResponseBody$inboundSchema: z.ZodType<
  NotesAllNotesResponse404ResponseBody,
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

    return new NotesAllNotesResponse404ResponseBody(remapped);
  });

/** @internal */
export type NotesAllNotesResponse404ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const NotesAllNotesResponse404ResponseBody$outboundSchema: z.ZodType<
  NotesAllNotesResponse404ResponseBody$Outbound,
  z.ZodTypeDef,
  NotesAllNotesResponse404ResponseBody
> = z.instanceof(NotesAllNotesResponse404ResponseBody)
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
export namespace NotesAllNotesResponse404ResponseBody$ {
  /** @deprecated use `NotesAllNotesResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    NotesAllNotesResponse404ResponseBody$inboundSchema;
  /** @deprecated use `NotesAllNotesResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    NotesAllNotesResponse404ResponseBody$outboundSchema;
  /** @deprecated use `NotesAllNotesResponse404ResponseBody$Outbound` instead. */
  export type Outbound = NotesAllNotesResponse404ResponseBody$Outbound;
}

/** @internal */
export const NotesAllNotesResponseResponseBody$inboundSchema: z.ZodType<
  NotesAllNotesResponseResponseBody,
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

    return new NotesAllNotesResponseResponseBody(remapped);
  });

/** @internal */
export type NotesAllNotesResponseResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | undefined;
  ref?: string | undefined;
};

/** @internal */
export const NotesAllNotesResponseResponseBody$outboundSchema: z.ZodType<
  NotesAllNotesResponseResponseBody$Outbound,
  z.ZodTypeDef,
  NotesAllNotesResponseResponseBody
> = z.instanceof(NotesAllNotesResponseResponseBody)
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
export namespace NotesAllNotesResponseResponseBody$ {
  /** @deprecated use `NotesAllNotesResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema = NotesAllNotesResponseResponseBody$inboundSchema;
  /** @deprecated use `NotesAllNotesResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    NotesAllNotesResponseResponseBody$outboundSchema;
  /** @deprecated use `NotesAllNotesResponseResponseBody$Outbound` instead. */
  export type Outbound = NotesAllNotesResponseResponseBody$Outbound;
}

/** @internal */
export const NotesAllNotesDetail$inboundSchema: z.ZodType<
  NotesAllNotesDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type NotesAllNotesDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const NotesAllNotesDetail$outboundSchema: z.ZodType<
  NotesAllNotesDetail$Outbound,
  z.ZodTypeDef,
  NotesAllNotesDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesAllNotesDetail$ {
  /** @deprecated use `NotesAllNotesDetail$inboundSchema` instead. */
  export const inboundSchema = NotesAllNotesDetail$inboundSchema;
  /** @deprecated use `NotesAllNotesDetail$outboundSchema` instead. */
  export const outboundSchema = NotesAllNotesDetail$outboundSchema;
  /** @deprecated use `NotesAllNotesDetail$Outbound` instead. */
  export type Outbound = NotesAllNotesDetail$Outbound;
}

export function notesAllNotesDetailToJSON(
  notesAllNotesDetail: NotesAllNotesDetail,
): string {
  return JSON.stringify(
    NotesAllNotesDetail$outboundSchema.parse(notesAllNotesDetail),
  );
}

export function notesAllNotesDetailFromJSON(
  jsonString: string,
): SafeParseResult<NotesAllNotesDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesAllNotesDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesAllNotesDetail' from JSON`,
  );
}

/** @internal */
export const NotesAllNotesResponseBody$inboundSchema: z.ZodType<
  NotesAllNotesResponseBody,
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

    return new NotesAllNotesResponseBody(remapped);
  });

/** @internal */
export type NotesAllNotesResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const NotesAllNotesResponseBody$outboundSchema: z.ZodType<
  NotesAllNotesResponseBody$Outbound,
  z.ZodTypeDef,
  NotesAllNotesResponseBody
> = z.instanceof(NotesAllNotesResponseBody)
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
export namespace NotesAllNotesResponseBody$ {
  /** @deprecated use `NotesAllNotesResponseBody$inboundSchema` instead. */
  export const inboundSchema = NotesAllNotesResponseBody$inboundSchema;
  /** @deprecated use `NotesAllNotesResponseBody$outboundSchema` instead. */
  export const outboundSchema = NotesAllNotesResponseBody$outboundSchema;
  /** @deprecated use `NotesAllNotesResponseBody$Outbound` instead. */
  export type Outbound = NotesAllNotesResponseBody$Outbound;
}

/** @internal */
export const NotesAllDetail$inboundSchema: z.ZodType<
  NotesAllDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type NotesAllDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const NotesAllDetail$outboundSchema: z.ZodType<
  NotesAllDetail$Outbound,
  z.ZodTypeDef,
  NotesAllDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesAllDetail$ {
  /** @deprecated use `NotesAllDetail$inboundSchema` instead. */
  export const inboundSchema = NotesAllDetail$inboundSchema;
  /** @deprecated use `NotesAllDetail$outboundSchema` instead. */
  export const outboundSchema = NotesAllDetail$outboundSchema;
  /** @deprecated use `NotesAllDetail$Outbound` instead. */
  export type Outbound = NotesAllDetail$Outbound;
}

export function notesAllDetailToJSON(notesAllDetail: NotesAllDetail): string {
  return JSON.stringify(NotesAllDetail$outboundSchema.parse(notesAllDetail));
}

export function notesAllDetailFromJSON(
  jsonString: string,
): SafeParseResult<NotesAllDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesAllDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesAllDetail' from JSON`,
  );
}

/** @internal */
export const NotesAllResponseBody$inboundSchema: z.ZodType<
  NotesAllResponseBody,
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

    return new NotesAllResponseBody(remapped);
  });

/** @internal */
export type NotesAllResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const NotesAllResponseBody$outboundSchema: z.ZodType<
  NotesAllResponseBody$Outbound,
  z.ZodTypeDef,
  NotesAllResponseBody
> = z.instanceof(NotesAllResponseBody)
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
export namespace NotesAllResponseBody$ {
  /** @deprecated use `NotesAllResponseBody$inboundSchema` instead. */
  export const inboundSchema = NotesAllResponseBody$inboundSchema;
  /** @deprecated use `NotesAllResponseBody$outboundSchema` instead. */
  export const outboundSchema = NotesAllResponseBody$outboundSchema;
  /** @deprecated use `NotesAllResponseBody$Outbound` instead. */
  export type Outbound = NotesAllResponseBody$Outbound;
}
