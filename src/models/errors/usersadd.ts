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
export type UsersAddUsersResponse422Detail = string | { [k: string]: any };

/**
 * Unprocessable
 */
export type UsersAddUsersResponse422ResponseBodyData = {
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
export class UsersAddUsersResponse422ResponseBody extends Error {
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
  data$: UsersAddUsersResponse422ResponseBodyData;

  constructor(err: UsersAddUsersResponse422ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "UsersAddUsersResponse422ResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type UsersAddUsersResponseDetail = string | { [k: string]: any };

/**
 * The specified resource was not found
 */
export type UsersAddUsersResponse404ResponseBodyData = {
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
export class UsersAddUsersResponse404ResponseBody extends Error {
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
  data$: UsersAddUsersResponse404ResponseBodyData;

  constructor(err: UsersAddUsersResponse404ResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "UsersAddUsersResponse404ResponseBody";
  }
}

/**
 * Payment Required
 */
export type UsersAddUsersResponseResponseBodyData = {
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
export class UsersAddUsersResponseResponseBody extends Error {
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
  data$: UsersAddUsersResponseResponseBodyData;

  constructor(err: UsersAddUsersResponseResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "UsersAddUsersResponseResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type UsersAddUsersDetail = string | { [k: string]: any };

/**
 * Unauthorized
 */
export type UsersAddUsersResponseBodyData = {
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
export class UsersAddUsersResponseBody extends Error {
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
  data$: UsersAddUsersResponseBodyData;

  constructor(err: UsersAddUsersResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "UsersAddUsersResponseBody";
  }
}

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type UsersAddDetail = string | { [k: string]: any };

/**
 * Bad Request
 */
export type UsersAddResponseBodyData = {
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
export class UsersAddResponseBody extends Error {
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
  data$: UsersAddResponseBodyData;

  constructor(err: UsersAddResponseBodyData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "UsersAddResponseBody";
  }
}

/** @internal */
export const UsersAddUsersResponse422Detail$inboundSchema: z.ZodType<
  UsersAddUsersResponse422Detail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type UsersAddUsersResponse422Detail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const UsersAddUsersResponse422Detail$outboundSchema: z.ZodType<
  UsersAddUsersResponse422Detail$Outbound,
  z.ZodTypeDef,
  UsersAddUsersResponse422Detail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersAddUsersResponse422Detail$ {
  /** @deprecated use `UsersAddUsersResponse422Detail$inboundSchema` instead. */
  export const inboundSchema = UsersAddUsersResponse422Detail$inboundSchema;
  /** @deprecated use `UsersAddUsersResponse422Detail$outboundSchema` instead. */
  export const outboundSchema = UsersAddUsersResponse422Detail$outboundSchema;
  /** @deprecated use `UsersAddUsersResponse422Detail$Outbound` instead. */
  export type Outbound = UsersAddUsersResponse422Detail$Outbound;
}

export function usersAddUsersResponse422DetailToJSON(
  usersAddUsersResponse422Detail: UsersAddUsersResponse422Detail,
): string {
  return JSON.stringify(
    UsersAddUsersResponse422Detail$outboundSchema.parse(
      usersAddUsersResponse422Detail,
    ),
  );
}

export function usersAddUsersResponse422DetailFromJSON(
  jsonString: string,
): SafeParseResult<UsersAddUsersResponse422Detail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsersAddUsersResponse422Detail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsersAddUsersResponse422Detail' from JSON`,
  );
}

/** @internal */
export const UsersAddUsersResponse422ResponseBody$inboundSchema: z.ZodType<
  UsersAddUsersResponse422ResponseBody,
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

    return new UsersAddUsersResponse422ResponseBody(remapped);
  });

/** @internal */
export type UsersAddUsersResponse422ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const UsersAddUsersResponse422ResponseBody$outboundSchema: z.ZodType<
  UsersAddUsersResponse422ResponseBody$Outbound,
  z.ZodTypeDef,
  UsersAddUsersResponse422ResponseBody
> = z.instanceof(UsersAddUsersResponse422ResponseBody)
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
export namespace UsersAddUsersResponse422ResponseBody$ {
  /** @deprecated use `UsersAddUsersResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    UsersAddUsersResponse422ResponseBody$inboundSchema;
  /** @deprecated use `UsersAddUsersResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UsersAddUsersResponse422ResponseBody$outboundSchema;
  /** @deprecated use `UsersAddUsersResponse422ResponseBody$Outbound` instead. */
  export type Outbound = UsersAddUsersResponse422ResponseBody$Outbound;
}

/** @internal */
export const UsersAddUsersResponseDetail$inboundSchema: z.ZodType<
  UsersAddUsersResponseDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type UsersAddUsersResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const UsersAddUsersResponseDetail$outboundSchema: z.ZodType<
  UsersAddUsersResponseDetail$Outbound,
  z.ZodTypeDef,
  UsersAddUsersResponseDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersAddUsersResponseDetail$ {
  /** @deprecated use `UsersAddUsersResponseDetail$inboundSchema` instead. */
  export const inboundSchema = UsersAddUsersResponseDetail$inboundSchema;
  /** @deprecated use `UsersAddUsersResponseDetail$outboundSchema` instead. */
  export const outboundSchema = UsersAddUsersResponseDetail$outboundSchema;
  /** @deprecated use `UsersAddUsersResponseDetail$Outbound` instead. */
  export type Outbound = UsersAddUsersResponseDetail$Outbound;
}

export function usersAddUsersResponseDetailToJSON(
  usersAddUsersResponseDetail: UsersAddUsersResponseDetail,
): string {
  return JSON.stringify(
    UsersAddUsersResponseDetail$outboundSchema.parse(
      usersAddUsersResponseDetail,
    ),
  );
}

export function usersAddUsersResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<UsersAddUsersResponseDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsersAddUsersResponseDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsersAddUsersResponseDetail' from JSON`,
  );
}

/** @internal */
export const UsersAddUsersResponse404ResponseBody$inboundSchema: z.ZodType<
  UsersAddUsersResponse404ResponseBody,
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

    return new UsersAddUsersResponse404ResponseBody(remapped);
  });

/** @internal */
export type UsersAddUsersResponse404ResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const UsersAddUsersResponse404ResponseBody$outboundSchema: z.ZodType<
  UsersAddUsersResponse404ResponseBody$Outbound,
  z.ZodTypeDef,
  UsersAddUsersResponse404ResponseBody
> = z.instanceof(UsersAddUsersResponse404ResponseBody)
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
export namespace UsersAddUsersResponse404ResponseBody$ {
  /** @deprecated use `UsersAddUsersResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    UsersAddUsersResponse404ResponseBody$inboundSchema;
  /** @deprecated use `UsersAddUsersResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UsersAddUsersResponse404ResponseBody$outboundSchema;
  /** @deprecated use `UsersAddUsersResponse404ResponseBody$Outbound` instead. */
  export type Outbound = UsersAddUsersResponse404ResponseBody$Outbound;
}

/** @internal */
export const UsersAddUsersResponseResponseBody$inboundSchema: z.ZodType<
  UsersAddUsersResponseResponseBody,
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

    return new UsersAddUsersResponseResponseBody(remapped);
  });

/** @internal */
export type UsersAddUsersResponseResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | undefined;
  ref?: string | undefined;
};

/** @internal */
export const UsersAddUsersResponseResponseBody$outboundSchema: z.ZodType<
  UsersAddUsersResponseResponseBody$Outbound,
  z.ZodTypeDef,
  UsersAddUsersResponseResponseBody
> = z.instanceof(UsersAddUsersResponseResponseBody)
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
export namespace UsersAddUsersResponseResponseBody$ {
  /** @deprecated use `UsersAddUsersResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema = UsersAddUsersResponseResponseBody$inboundSchema;
  /** @deprecated use `UsersAddUsersResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UsersAddUsersResponseResponseBody$outboundSchema;
  /** @deprecated use `UsersAddUsersResponseResponseBody$Outbound` instead. */
  export type Outbound = UsersAddUsersResponseResponseBody$Outbound;
}

/** @internal */
export const UsersAddUsersDetail$inboundSchema: z.ZodType<
  UsersAddUsersDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type UsersAddUsersDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const UsersAddUsersDetail$outboundSchema: z.ZodType<
  UsersAddUsersDetail$Outbound,
  z.ZodTypeDef,
  UsersAddUsersDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersAddUsersDetail$ {
  /** @deprecated use `UsersAddUsersDetail$inboundSchema` instead. */
  export const inboundSchema = UsersAddUsersDetail$inboundSchema;
  /** @deprecated use `UsersAddUsersDetail$outboundSchema` instead. */
  export const outboundSchema = UsersAddUsersDetail$outboundSchema;
  /** @deprecated use `UsersAddUsersDetail$Outbound` instead. */
  export type Outbound = UsersAddUsersDetail$Outbound;
}

export function usersAddUsersDetailToJSON(
  usersAddUsersDetail: UsersAddUsersDetail,
): string {
  return JSON.stringify(
    UsersAddUsersDetail$outboundSchema.parse(usersAddUsersDetail),
  );
}

export function usersAddUsersDetailFromJSON(
  jsonString: string,
): SafeParseResult<UsersAddUsersDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsersAddUsersDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsersAddUsersDetail' from JSON`,
  );
}

/** @internal */
export const UsersAddUsersResponseBody$inboundSchema: z.ZodType<
  UsersAddUsersResponseBody,
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

    return new UsersAddUsersResponseBody(remapped);
  });

/** @internal */
export type UsersAddUsersResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const UsersAddUsersResponseBody$outboundSchema: z.ZodType<
  UsersAddUsersResponseBody$Outbound,
  z.ZodTypeDef,
  UsersAddUsersResponseBody
> = z.instanceof(UsersAddUsersResponseBody)
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
export namespace UsersAddUsersResponseBody$ {
  /** @deprecated use `UsersAddUsersResponseBody$inboundSchema` instead. */
  export const inboundSchema = UsersAddUsersResponseBody$inboundSchema;
  /** @deprecated use `UsersAddUsersResponseBody$outboundSchema` instead. */
  export const outboundSchema = UsersAddUsersResponseBody$outboundSchema;
  /** @deprecated use `UsersAddUsersResponseBody$Outbound` instead. */
  export type Outbound = UsersAddUsersResponseBody$Outbound;
}

/** @internal */
export const UsersAddDetail$inboundSchema: z.ZodType<
  UsersAddDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type UsersAddDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const UsersAddDetail$outboundSchema: z.ZodType<
  UsersAddDetail$Outbound,
  z.ZodTypeDef,
  UsersAddDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersAddDetail$ {
  /** @deprecated use `UsersAddDetail$inboundSchema` instead. */
  export const inboundSchema = UsersAddDetail$inboundSchema;
  /** @deprecated use `UsersAddDetail$outboundSchema` instead. */
  export const outboundSchema = UsersAddDetail$outboundSchema;
  /** @deprecated use `UsersAddDetail$Outbound` instead. */
  export type Outbound = UsersAddDetail$Outbound;
}

export function usersAddDetailToJSON(usersAddDetail: UsersAddDetail): string {
  return JSON.stringify(UsersAddDetail$outboundSchema.parse(usersAddDetail));
}

export function usersAddDetailFromJSON(
  jsonString: string,
): SafeParseResult<UsersAddDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsersAddDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsersAddDetail' from JSON`,
  );
}

/** @internal */
export const UsersAddResponseBody$inboundSchema: z.ZodType<
  UsersAddResponseBody,
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

    return new UsersAddResponseBody(remapped);
  });

/** @internal */
export type UsersAddResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const UsersAddResponseBody$outboundSchema: z.ZodType<
  UsersAddResponseBody$Outbound,
  z.ZodTypeDef,
  UsersAddResponseBody
> = z.instanceof(UsersAddResponseBody)
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
export namespace UsersAddResponseBody$ {
  /** @deprecated use `UsersAddResponseBody$inboundSchema` instead. */
  export const inboundSchema = UsersAddResponseBody$inboundSchema;
  /** @deprecated use `UsersAddResponseBody$outboundSchema` instead. */
  export const outboundSchema = UsersAddResponseBody$outboundSchema;
  /** @deprecated use `UsersAddResponseBody$Outbound` instead. */
  export type Outbound = UsersAddResponseBody$Outbound;
}
