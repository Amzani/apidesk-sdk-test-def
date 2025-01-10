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
export type CompaniesAddCompaniesResponseDetail = string | { [k: string]: any };

/**
 * Unprocessable
 */
export type CompaniesAddCompaniesResponse422ResponseBodyData = {
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
export class CompaniesAddCompaniesResponse422ResponseBody extends Error {
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
  data$: CompaniesAddCompaniesResponse422ResponseBodyData;

  constructor(err: CompaniesAddCompaniesResponse422ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "CompaniesAddCompaniesResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type CompaniesAddCompaniesDetail = string | { [k: string]: any };

/**
 * The specified resource was not found
 */
export type CompaniesAddCompaniesResponse404ResponseBodyData = {
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
export class CompaniesAddCompaniesResponse404ResponseBody extends Error {
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
  data$: CompaniesAddCompaniesResponse404ResponseBodyData;

  constructor(err: CompaniesAddCompaniesResponse404ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "CompaniesAddCompaniesResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type CompaniesAddCompaniesResponseResponseBodyData = {
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
export class CompaniesAddCompaniesResponseResponseBody extends Error {
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
  data$: CompaniesAddCompaniesResponseResponseBodyData;

  constructor(err: CompaniesAddCompaniesResponseResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "CompaniesAddCompaniesResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type CompaniesAddDetail = string | { [k: string]: any };

/**
 * Unauthorized
 */
export type CompaniesAddCompaniesResponseBodyData = {
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
export class CompaniesAddCompaniesResponseBody extends Error {
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
  data$: CompaniesAddCompaniesResponseBodyData;

  constructor(err: CompaniesAddCompaniesResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "CompaniesAddCompaniesResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type Detail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type CompaniesAddResponseBodyData = {
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
export class CompaniesAddResponseBody extends Error {
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
  data$: CompaniesAddResponseBodyData;

  constructor(err: CompaniesAddResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "CompaniesAddResponseBody";
  }
}

/** @internal */
export const CompaniesAddCompaniesResponseDetail$inboundSchema: z.ZodType<
  CompaniesAddCompaniesResponseDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type CompaniesAddCompaniesResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const CompaniesAddCompaniesResponseDetail$outboundSchema: z.ZodType<
  CompaniesAddCompaniesResponseDetail$Outbound,
  z.ZodTypeDef,
  CompaniesAddCompaniesResponseDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesAddCompaniesResponseDetail$ {
  /** @deprecated use `CompaniesAddCompaniesResponseDetail$inboundSchema` instead. */
  export const inboundSchema =
    CompaniesAddCompaniesResponseDetail$inboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponseDetail$outboundSchema` instead. */
  export const outboundSchema =
    CompaniesAddCompaniesResponseDetail$outboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponseDetail$Outbound` instead. */
  export type Outbound = CompaniesAddCompaniesResponseDetail$Outbound;
}

export function companiesAddCompaniesResponseDetailToJSON(
  companiesAddCompaniesResponseDetail: CompaniesAddCompaniesResponseDetail,
): string {
  return JSON.stringify(
    CompaniesAddCompaniesResponseDetail$outboundSchema.parse(
      companiesAddCompaniesResponseDetail,
    ),
  );
}

export function companiesAddCompaniesResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<CompaniesAddCompaniesResponseDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CompaniesAddCompaniesResponseDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompaniesAddCompaniesResponseDetail' from JSON`,
  );
}

/** @internal */
export const CompaniesAddCompaniesResponse422ResponseBody$inboundSchema:
  z.ZodType<
    CompaniesAddCompaniesResponse422ResponseBody,
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

      return new CompaniesAddCompaniesResponse422ResponseBody(remapped);
    });

/** @internal */
export type CompaniesAddCompaniesResponse422ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const CompaniesAddCompaniesResponse422ResponseBody$outboundSchema:
  z.ZodType<
    CompaniesAddCompaniesResponse422ResponseBody$Outbound,
    z.ZodTypeDef,
    CompaniesAddCompaniesResponse422ResponseBody
  > = z.instanceof(CompaniesAddCompaniesResponse422ResponseBody)
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
export namespace CompaniesAddCompaniesResponse422ResponseBody$ {
  /** @deprecated use `CompaniesAddCompaniesResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CompaniesAddCompaniesResponse422ResponseBody$inboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CompaniesAddCompaniesResponse422ResponseBody$outboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponse422ResponseBody$Outbound` instead. */
  export type Outbound = CompaniesAddCompaniesResponse422ResponseBody$Outbound;
}

/** @internal */
export const CompaniesAddCompaniesDetail$inboundSchema: z.ZodType<
  CompaniesAddCompaniesDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type CompaniesAddCompaniesDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const CompaniesAddCompaniesDetail$outboundSchema: z.ZodType<
  CompaniesAddCompaniesDetail$Outbound,
  z.ZodTypeDef,
  CompaniesAddCompaniesDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesAddCompaniesDetail$ {
  /** @deprecated use `CompaniesAddCompaniesDetail$inboundSchema` instead. */
  export const inboundSchema = CompaniesAddCompaniesDetail$inboundSchema;
  /** @deprecated use `CompaniesAddCompaniesDetail$outboundSchema` instead. */
  export const outboundSchema = CompaniesAddCompaniesDetail$outboundSchema;
  /** @deprecated use `CompaniesAddCompaniesDetail$Outbound` instead. */
  export type Outbound = CompaniesAddCompaniesDetail$Outbound;
}

export function companiesAddCompaniesDetailToJSON(
  companiesAddCompaniesDetail: CompaniesAddCompaniesDetail,
): string {
  return JSON.stringify(
    CompaniesAddCompaniesDetail$outboundSchema.parse(
      companiesAddCompaniesDetail,
    ),
  );
}

export function companiesAddCompaniesDetailFromJSON(
  jsonString: string,
): SafeParseResult<CompaniesAddCompaniesDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompaniesAddCompaniesDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompaniesAddCompaniesDetail' from JSON`,
  );
}

/** @internal */
export const CompaniesAddCompaniesResponse404ResponseBody$inboundSchema:
  z.ZodType<
    CompaniesAddCompaniesResponse404ResponseBody,
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

      return new CompaniesAddCompaniesResponse404ResponseBody(remapped);
    });

/** @internal */
export type CompaniesAddCompaniesResponse404ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const CompaniesAddCompaniesResponse404ResponseBody$outboundSchema:
  z.ZodType<
    CompaniesAddCompaniesResponse404ResponseBody$Outbound,
    z.ZodTypeDef,
    CompaniesAddCompaniesResponse404ResponseBody
  > = z.instanceof(CompaniesAddCompaniesResponse404ResponseBody)
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
export namespace CompaniesAddCompaniesResponse404ResponseBody$ {
  /** @deprecated use `CompaniesAddCompaniesResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CompaniesAddCompaniesResponse404ResponseBody$inboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CompaniesAddCompaniesResponse404ResponseBody$outboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponse404ResponseBody$Outbound` instead. */
  export type Outbound = CompaniesAddCompaniesResponse404ResponseBody$Outbound;
}

/** @internal */
export const CompaniesAddCompaniesResponseResponseBody$inboundSchema: z.ZodType<
  CompaniesAddCompaniesResponseResponseBody,
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

    return new CompaniesAddCompaniesResponseResponseBody(remapped);
  });

/** @internal */
export type CompaniesAddCompaniesResponseResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | undefined;
  ref?: string | undefined;
};

/** @internal */
export const CompaniesAddCompaniesResponseResponseBody$outboundSchema:
  z.ZodType<
    CompaniesAddCompaniesResponseResponseBody$Outbound,
    z.ZodTypeDef,
    CompaniesAddCompaniesResponseResponseBody
  > = z.instanceof(CompaniesAddCompaniesResponseResponseBody)
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
export namespace CompaniesAddCompaniesResponseResponseBody$ {
  /** @deprecated use `CompaniesAddCompaniesResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CompaniesAddCompaniesResponseResponseBody$inboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CompaniesAddCompaniesResponseResponseBody$outboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponseResponseBody$Outbound` instead. */
  export type Outbound = CompaniesAddCompaniesResponseResponseBody$Outbound;
}

/** @internal */
export const CompaniesAddDetail$inboundSchema: z.ZodType<
  CompaniesAddDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type CompaniesAddDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const CompaniesAddDetail$outboundSchema: z.ZodType<
  CompaniesAddDetail$Outbound,
  z.ZodTypeDef,
  CompaniesAddDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesAddDetail$ {
  /** @deprecated use `CompaniesAddDetail$inboundSchema` instead. */
  export const inboundSchema = CompaniesAddDetail$inboundSchema;
  /** @deprecated use `CompaniesAddDetail$outboundSchema` instead. */
  export const outboundSchema = CompaniesAddDetail$outboundSchema;
  /** @deprecated use `CompaniesAddDetail$Outbound` instead. */
  export type Outbound = CompaniesAddDetail$Outbound;
}

export function companiesAddDetailToJSON(
  companiesAddDetail: CompaniesAddDetail,
): string {
  return JSON.stringify(
    CompaniesAddDetail$outboundSchema.parse(companiesAddDetail),
  );
}

export function companiesAddDetailFromJSON(
  jsonString: string,
): SafeParseResult<CompaniesAddDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompaniesAddDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompaniesAddDetail' from JSON`,
  );
}

/** @internal */
export const CompaniesAddCompaniesResponseBody$inboundSchema: z.ZodType<
  CompaniesAddCompaniesResponseBody,
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

    return new CompaniesAddCompaniesResponseBody(remapped);
  });

/** @internal */
export type CompaniesAddCompaniesResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const CompaniesAddCompaniesResponseBody$outboundSchema: z.ZodType<
  CompaniesAddCompaniesResponseBody$Outbound,
  z.ZodTypeDef,
  CompaniesAddCompaniesResponseBody
> = z.instanceof(CompaniesAddCompaniesResponseBody)
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
export namespace CompaniesAddCompaniesResponseBody$ {
  /** @deprecated use `CompaniesAddCompaniesResponseBody$inboundSchema` instead. */
  export const inboundSchema = CompaniesAddCompaniesResponseBody$inboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CompaniesAddCompaniesResponseBody$outboundSchema;
  /** @deprecated use `CompaniesAddCompaniesResponseBody$Outbound` instead. */
  export type Outbound = CompaniesAddCompaniesResponseBody$Outbound;
}

/** @internal */
export const Detail$inboundSchema: z.ZodType<Detail, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.record(z.any())]);

/** @internal */
export type Detail$Outbound = string | { [k: string]: any };

/** @internal */
export const Detail$outboundSchema: z.ZodType<
  Detail$Outbound,
  z.ZodTypeDef,
  Detail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Detail$ {
  /** @deprecated use `Detail$inboundSchema` instead. */
  export const inboundSchema = Detail$inboundSchema;
  /** @deprecated use `Detail$outboundSchema` instead. */
  export const outboundSchema = Detail$outboundSchema;
  /** @deprecated use `Detail$Outbound` instead. */
  export type Outbound = Detail$Outbound;
}

export function detailToJSON(detail: Detail): string {
  return JSON.stringify(Detail$outboundSchema.parse(detail));
}

export function detailFromJSON(
  jsonString: string,
): SafeParseResult<Detail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Detail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Detail' from JSON`,
  );
}

/** @internal */
export const CompaniesAddResponseBody$inboundSchema: z.ZodType<
  CompaniesAddResponseBody,
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

    return new CompaniesAddResponseBody(remapped);
  });

/** @internal */
export type CompaniesAddResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const CompaniesAddResponseBody$outboundSchema: z.ZodType<
  CompaniesAddResponseBody$Outbound,
  z.ZodTypeDef,
  CompaniesAddResponseBody
> = z.instanceof(CompaniesAddResponseBody)
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
export namespace CompaniesAddResponseBody$ {
  /** @deprecated use `CompaniesAddResponseBody$inboundSchema` instead. */
  export const inboundSchema = CompaniesAddResponseBody$inboundSchema;
  /** @deprecated use `CompaniesAddResponseBody$outboundSchema` instead. */
  export const outboundSchema = CompaniesAddResponseBody$outboundSchema;
  /** @deprecated use `CompaniesAddResponseBody$Outbound` instead. */
  export type Outbound = CompaniesAddResponseBody$Outbound;
}
