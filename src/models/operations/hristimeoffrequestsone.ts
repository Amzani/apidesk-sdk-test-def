/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HrisTimeOffRequestsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisTimeOffRequestsOneRequest = {
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
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
  /**
   * ID of the employee you are acting upon.
   */
  employeeId: string;
};

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type HrisTimeOffRequestsOneDetail = string | { [k: string]: any };

/**
 * Unexpected error
 */
export type HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody = {
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
 * The status of the time off request.
 */
export const HrisTimeOffRequestsOneStatus = {
  Requested: "requested",
  Approved: "approved",
  Declined: "declined",
  Cancelled: "cancelled",
  Deleted: "deleted",
  Other: "other",
} as const;
/**
 * The status of the time off request.
 */
export type HrisTimeOffRequestsOneStatus = ClosedEnum<
  typeof HrisTimeOffRequestsOneStatus
>;

/**
 * The type of request
 */
export const HrisTimeOffRequestsOneRequestType = {
  Vacation: "vacation",
  Sick: "sick",
  Personal: "personal",
  JuryDuty: "jury_duty",
  Volunteer: "volunteer",
  Bereavement: "bereavement",
  Other: "other",
} as const;
/**
 * The type of request
 */
export type HrisTimeOffRequestsOneRequestType = ClosedEnum<
  typeof HrisTimeOffRequestsOneRequestType
>;

/**
 * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
 */
export const HrisTimeOffRequestsOneUnits = {
  Days: "days",
  Hours: "hours",
  Other: "other",
} as const;
/**
 * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
 */
export type HrisTimeOffRequestsOneUnits = ClosedEnum<
  typeof HrisTimeOffRequestsOneUnits
>;

export type HrisTimeOffRequestsOneNotes = {
  employee?: string | null | undefined;
  manager?: string | null | undefined;
};

/**
 * When custom mappings are configured on the resource, the result is included here.
 */
export type HrisTimeOffRequestsOneCustomMappings = {};

export type HrisTimeOffRequestsOneExtendPaths = {
  /**
   * JSONPath string specifying where to apply the value.
   */
  path: string;
  /**
   * The value to set at the specified path, can be any type.
   */
  value?: any | undefined;
};

export type HrisTimeOffRequestsOnePassThrough = {
  /**
   * Identifier for the service to which this pass_through should be applied.
   */
  serviceId: string;
  /**
   * Optional identifier for a workflow operation to which this pass_through should be applied. This is useful for Unify calls that are making more than one downstream request.
   */
  operationId?: string | undefined;
  /**
   * Simple object allowing any properties for direct extension.
   */
  extendObject?: { [k: string]: any } | undefined;
  /**
   * Array of objects for structured data modifications via paths.
   */
  extendPaths?: Array<HrisTimeOffRequestsOneExtendPaths> | undefined;
};

export type HrisTimeOffRequestsOneData = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * ID of the employee
   */
  employeeId?: string | null | undefined;
  /**
   * ID of the policy
   */
  policyId?: string | null | undefined;
  /**
   * The status of the time off request.
   */
  status?: HrisTimeOffRequestsOneStatus | null | undefined;
  /**
   * Description of the time off request.
   */
  description?: string | null | undefined;
  /**
   * The start date of the time off request.
   */
  startDate?: string | null | undefined;
  /**
   * The end date of the time off request.
   */
  endDate?: string | null | undefined;
  /**
   * The date the request was made.
   */
  requestDate?: string | null | undefined;
  /**
   * The type of request
   */
  requestType?: HrisTimeOffRequestsOneRequestType | null | undefined;
  /**
   * The date the request was approved
   */
  approvalDate?: string | null | undefined;
  /**
   * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
   */
  units?: HrisTimeOffRequestsOneUnits | null | undefined;
  /**
   * The amount of time off requested.
   */
  amount?: number | null | undefined;
  /**
   * The day part of the time off request.
   */
  dayPart?: string | null | undefined;
  notes?: HrisTimeOffRequestsOneNotes | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: HrisTimeOffRequestsOneCustomMappings | null | undefined;
  /**
   * The user who last updated the object.
   */
  updatedBy?: string | null | undefined;
  /**
   * The user who created the object.
   */
  createdBy?: string | null | undefined;
  /**
   * The date and time when the object was last updated.
   */
  updatedAt?: Date | null | undefined;
  /**
   * The date and time when the object was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<HrisTimeOffRequestsOnePassThrough> | undefined;
  /**
   * The policy type of the time off request
   */
  policyType?: string | undefined;
};

/**
 * TimeOffRequests
 */
export type HrisTimeOffRequestsOneResponseBody = {
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
  data: HrisTimeOffRequestsOneData;
};

export type HrisTimeOffRequestsOneResponse =
  | HrisTimeOffRequestsOneResponseBody
  | HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody;

/** @internal */
export const HrisTimeOffRequestsOneGlobals$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisTimeOffRequestsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneGlobals$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneGlobals$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneGlobals$ {
  /** @deprecated use `HrisTimeOffRequestsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneGlobals$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneGlobals$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneGlobals$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneGlobals$Outbound;
}

export function hrisTimeOffRequestsOneGlobalsToJSON(
  hrisTimeOffRequestsOneGlobals: HrisTimeOffRequestsOneGlobals,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneGlobals$outboundSchema.parse(
      hrisTimeOffRequestsOneGlobals,
    ),
  );
}

export function hrisTimeOffRequestsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneGlobals' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneRequest$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  employee_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
  });
});

/** @internal */
export type HrisTimeOffRequestsOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
  employee_id: string;
};

/** @internal */
export const HrisTimeOffRequestsOneRequest$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneRequest$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  employeeId: z.string(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneRequest$ {
  /** @deprecated use `HrisTimeOffRequestsOneRequest$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneRequest$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneRequest$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneRequest$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneRequest$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneRequest$Outbound;
}

export function hrisTimeOffRequestsOneRequestToJSON(
  hrisTimeOffRequestsOneRequest: HrisTimeOffRequestsOneRequest,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneRequest$outboundSchema.parse(
      hrisTimeOffRequestsOneRequest,
    ),
  );
}

export function hrisTimeOffRequestsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneRequest' from JSON`,
  );
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
  }).transform((v) => {
    return remap$(v, {
      "status_code": "statusCode",
      "type_name": "typeName",
    });
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

export function hrisTimeOffRequestsOneHrisTimeOffRequestsResponseBodyToJSON(
  hrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody:
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$outboundSchema.parse(
      hrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody,
    ),
  );
}

export function hrisTimeOffRequestsOneHrisTimeOffRequestsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneStatus$inboundSchema: z.ZodNativeEnum<
  typeof HrisTimeOffRequestsOneStatus
> = z.nativeEnum(HrisTimeOffRequestsOneStatus);

/** @internal */
export const HrisTimeOffRequestsOneStatus$outboundSchema: z.ZodNativeEnum<
  typeof HrisTimeOffRequestsOneStatus
> = HrisTimeOffRequestsOneStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneStatus$ {
  /** @deprecated use `HrisTimeOffRequestsOneStatus$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneStatus$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneStatus$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneStatus$outboundSchema;
}

/** @internal */
export const HrisTimeOffRequestsOneRequestType$inboundSchema: z.ZodNativeEnum<
  typeof HrisTimeOffRequestsOneRequestType
> = z.nativeEnum(HrisTimeOffRequestsOneRequestType);

/** @internal */
export const HrisTimeOffRequestsOneRequestType$outboundSchema: z.ZodNativeEnum<
  typeof HrisTimeOffRequestsOneRequestType
> = HrisTimeOffRequestsOneRequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneRequestType$ {
  /** @deprecated use `HrisTimeOffRequestsOneRequestType$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneRequestType$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneRequestType$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneRequestType$outboundSchema;
}

/** @internal */
export const HrisTimeOffRequestsOneUnits$inboundSchema: z.ZodNativeEnum<
  typeof HrisTimeOffRequestsOneUnits
> = z.nativeEnum(HrisTimeOffRequestsOneUnits);

/** @internal */
export const HrisTimeOffRequestsOneUnits$outboundSchema: z.ZodNativeEnum<
  typeof HrisTimeOffRequestsOneUnits
> = HrisTimeOffRequestsOneUnits$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneUnits$ {
  /** @deprecated use `HrisTimeOffRequestsOneUnits$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneUnits$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneUnits$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneUnits$outboundSchema;
}

/** @internal */
export const HrisTimeOffRequestsOneNotes$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneNotes,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee: z.nullable(z.string()).optional(),
  manager: z.nullable(z.string()).optional(),
});

/** @internal */
export type HrisTimeOffRequestsOneNotes$Outbound = {
  employee?: string | null | undefined;
  manager?: string | null | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneNotes$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneNotes$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneNotes
> = z.object({
  employee: z.nullable(z.string()).optional(),
  manager: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneNotes$ {
  /** @deprecated use `HrisTimeOffRequestsOneNotes$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneNotes$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneNotes$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneNotes$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneNotes$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneNotes$Outbound;
}

export function hrisTimeOffRequestsOneNotesToJSON(
  hrisTimeOffRequestsOneNotes: HrisTimeOffRequestsOneNotes,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneNotes$outboundSchema.parse(
      hrisTimeOffRequestsOneNotes,
    ),
  );
}

export function hrisTimeOffRequestsOneNotesFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneNotes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOneNotes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneNotes' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneCustomMappings$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneCustomMappings,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type HrisTimeOffRequestsOneCustomMappings$Outbound = {};

/** @internal */
export const HrisTimeOffRequestsOneCustomMappings$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneCustomMappings$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneCustomMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneCustomMappings$ {
  /** @deprecated use `HrisTimeOffRequestsOneCustomMappings$inboundSchema` instead. */
  export const inboundSchema =
    HrisTimeOffRequestsOneCustomMappings$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneCustomMappings$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneCustomMappings$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneCustomMappings$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneCustomMappings$Outbound;
}

export function hrisTimeOffRequestsOneCustomMappingsToJSON(
  hrisTimeOffRequestsOneCustomMappings: HrisTimeOffRequestsOneCustomMappings,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneCustomMappings$outboundSchema.parse(
      hrisTimeOffRequestsOneCustomMappings,
    ),
  );
}

export function hrisTimeOffRequestsOneCustomMappingsFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneCustomMappings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisTimeOffRequestsOneCustomMappings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneCustomMappings' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneExtendPaths$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneExtendPaths,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/** @internal */
export type HrisTimeOffRequestsOneExtendPaths$Outbound = {
  path: string;
  value?: any | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneExtendPaths$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneExtendPaths$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneExtendPaths
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneExtendPaths$ {
  /** @deprecated use `HrisTimeOffRequestsOneExtendPaths$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneExtendPaths$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneExtendPaths$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOneExtendPaths$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneExtendPaths$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneExtendPaths$Outbound;
}

export function hrisTimeOffRequestsOneExtendPathsToJSON(
  hrisTimeOffRequestsOneExtendPaths: HrisTimeOffRequestsOneExtendPaths,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneExtendPaths$outboundSchema.parse(
      hrisTimeOffRequestsOneExtendPaths,
    ),
  );
}

export function hrisTimeOffRequestsOneExtendPathsFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneExtendPaths, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOneExtendPaths$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneExtendPaths' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOnePassThrough$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOnePassThrough,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  operation_id: z.string().optional(),
  extend_object: z.record(z.any()).optional(),
  extend_paths: z.array(
    z.lazy(() => HrisTimeOffRequestsOneExtendPaths$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "operation_id": "operationId",
    "extend_object": "extendObject",
    "extend_paths": "extendPaths",
  });
});

/** @internal */
export type HrisTimeOffRequestsOnePassThrough$Outbound = {
  service_id: string;
  operation_id?: string | undefined;
  extend_object?: { [k: string]: any } | undefined;
  extend_paths?: Array<HrisTimeOffRequestsOneExtendPaths$Outbound> | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOnePassThrough$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOnePassThrough$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOnePassThrough
> = z.object({
  serviceId: z.string(),
  operationId: z.string().optional(),
  extendObject: z.record(z.any()).optional(),
  extendPaths: z.array(
    z.lazy(() => HrisTimeOffRequestsOneExtendPaths$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    operationId: "operation_id",
    extendObject: "extend_object",
    extendPaths: "extend_paths",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOnePassThrough$ {
  /** @deprecated use `HrisTimeOffRequestsOnePassThrough$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOnePassThrough$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOnePassThrough$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsOnePassThrough$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOnePassThrough$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOnePassThrough$Outbound;
}

export function hrisTimeOffRequestsOnePassThroughToJSON(
  hrisTimeOffRequestsOnePassThrough: HrisTimeOffRequestsOnePassThrough,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOnePassThrough$outboundSchema.parse(
      hrisTimeOffRequestsOnePassThrough,
    ),
  );
}

export function hrisTimeOffRequestsOnePassThroughFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOnePassThrough, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOnePassThrough$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOnePassThrough' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneData$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  employee_id: z.nullable(z.string()).optional(),
  policy_id: z.nullable(z.string()).optional(),
  status: z.nullable(HrisTimeOffRequestsOneStatus$inboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  start_date: z.nullable(z.string()).optional(),
  end_date: z.nullable(z.string()).optional(),
  request_date: z.nullable(z.string()).optional(),
  request_type: z.nullable(HrisTimeOffRequestsOneRequestType$inboundSchema)
    .optional(),
  approval_date: z.nullable(z.string()).optional(),
  units: z.nullable(HrisTimeOffRequestsOneUnits$inboundSchema).optional(),
  amount: z.nullable(z.number()).optional(),
  day_part: z.nullable(z.string()).optional(),
  notes: z.lazy(() => HrisTimeOffRequestsOneNotes$inboundSchema).optional(),
  custom_mappings: z.nullable(
    z.lazy(() => HrisTimeOffRequestsOneCustomMappings$inboundSchema),
  ).optional(),
  updated_by: z.nullable(z.string()).optional(),
  created_by: z.nullable(z.string()).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  pass_through: z.array(
    z.lazy(() => HrisTimeOffRequestsOnePassThrough$inboundSchema),
  ).optional(),
  policy_type: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "policy_id": "policyId",
    "start_date": "startDate",
    "end_date": "endDate",
    "request_date": "requestDate",
    "request_type": "requestType",
    "approval_date": "approvalDate",
    "day_part": "dayPart",
    "custom_mappings": "customMappings",
    "updated_by": "updatedBy",
    "created_by": "createdBy",
    "updated_at": "updatedAt",
    "created_at": "createdAt",
    "pass_through": "passThrough",
    "policy_type": "policyType",
  });
});

/** @internal */
export type HrisTimeOffRequestsOneData$Outbound = {
  id?: string | undefined;
  employee_id?: string | null | undefined;
  policy_id?: string | null | undefined;
  status?: string | null | undefined;
  description?: string | null | undefined;
  start_date?: string | null | undefined;
  end_date?: string | null | undefined;
  request_date?: string | null | undefined;
  request_type?: string | null | undefined;
  approval_date?: string | null | undefined;
  units?: string | null | undefined;
  amount?: number | null | undefined;
  day_part?: string | null | undefined;
  notes?: HrisTimeOffRequestsOneNotes$Outbound | undefined;
  custom_mappings?:
    | HrisTimeOffRequestsOneCustomMappings$Outbound
    | null
    | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<HrisTimeOffRequestsOnePassThrough$Outbound> | undefined;
  policy_type?: string | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneData$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneData$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneData
> = z.object({
  id: z.string().optional(),
  employeeId: z.nullable(z.string()).optional(),
  policyId: z.nullable(z.string()).optional(),
  status: z.nullable(HrisTimeOffRequestsOneStatus$outboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  startDate: z.nullable(z.string()).optional(),
  endDate: z.nullable(z.string()).optional(),
  requestDate: z.nullable(z.string()).optional(),
  requestType: z.nullable(HrisTimeOffRequestsOneRequestType$outboundSchema)
    .optional(),
  approvalDate: z.nullable(z.string()).optional(),
  units: z.nullable(HrisTimeOffRequestsOneUnits$outboundSchema).optional(),
  amount: z.nullable(z.number()).optional(),
  dayPart: z.nullable(z.string()).optional(),
  notes: z.lazy(() => HrisTimeOffRequestsOneNotes$outboundSchema).optional(),
  customMappings: z.nullable(
    z.lazy(() => HrisTimeOffRequestsOneCustomMappings$outboundSchema),
  ).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(
    z.lazy(() => HrisTimeOffRequestsOnePassThrough$outboundSchema),
  ).optional(),
  policyType: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    policyId: "policy_id",
    startDate: "start_date",
    endDate: "end_date",
    requestDate: "request_date",
    requestType: "request_type",
    approvalDate: "approval_date",
    dayPart: "day_part",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    passThrough: "pass_through",
    policyType: "policy_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneData$ {
  /** @deprecated use `HrisTimeOffRequestsOneData$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneData$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneData$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneData$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneData$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneData$Outbound;
}

export function hrisTimeOffRequestsOneDataToJSON(
  hrisTimeOffRequestsOneData: HrisTimeOffRequestsOneData,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneData$outboundSchema.parse(hrisTimeOffRequestsOneData),
  );
}

export function hrisTimeOffRequestsOneDataFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOneData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneData' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneResponseBody$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => HrisTimeOffRequestsOneData$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type HrisTimeOffRequestsOneResponseBody$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: HrisTimeOffRequestsOneData$Outbound;
};

/** @internal */
export const HrisTimeOffRequestsOneResponseBody$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponseBody$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneResponseBody
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => HrisTimeOffRequestsOneData$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

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

export function hrisTimeOffRequestsOneResponseBodyToJSON(
  hrisTimeOffRequestsOneResponseBody: HrisTimeOffRequestsOneResponseBody,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneResponseBody$outboundSchema.parse(
      hrisTimeOffRequestsOneResponseBody,
    ),
  );
}

export function hrisTimeOffRequestsOneResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisTimeOffRequestsOneResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneResponseBody' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsOneResponse$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => HrisTimeOffRequestsOneResponseBody$inboundSchema),
  z.lazy(() =>
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$inboundSchema
  ),
]);

/** @internal */
export type HrisTimeOffRequestsOneResponse$Outbound =
  | HrisTimeOffRequestsOneResponseBody$Outbound
  | HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$Outbound;

/** @internal */
export const HrisTimeOffRequestsOneResponse$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponse$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneResponse
> = z.union([
  z.lazy(() => HrisTimeOffRequestsOneResponseBody$outboundSchema),
  z.lazy(() =>
    HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody$outboundSchema
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneResponse$ {
  /** @deprecated use `HrisTimeOffRequestsOneResponse$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneResponse$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneResponse$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneResponse$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneResponse$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneResponse$Outbound;
}

export function hrisTimeOffRequestsOneResponseToJSON(
  hrisTimeOffRequestsOneResponse: HrisTimeOffRequestsOneResponse,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsOneResponse$outboundSchema.parse(
      hrisTimeOffRequestsOneResponse,
    ),
  );
}

export function hrisTimeOffRequestsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsOneResponse' from JSON`,
  );
}
