/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NotesUpdateSecurity = {
  apiKey: string;
};

export type NotesUpdateExtendPaths = {
  /**
   * JSONPath string specifying where to apply the value.
   */
  path: string;
  /**
   * The value to set at the specified path, can be any type.
   */
  value?: any | undefined;
};

export type NotesUpdatePassThrough = {
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
  extendPaths?: Array<NotesUpdateExtendPaths> | undefined;
};

export type NotesUpdateRequestBody = {
  /**
   * The title of the note
   */
  title?: string | null | undefined;
  /**
   * The content of the note.
   */
  content?: string | null | undefined;
  /**
   * The user that owns the note.
   */
  ownerId?: string | null | undefined;
  /**
   * The contact that is related to the note.
   */
  contactId?: string | null | undefined;
  /**
   * The company that is related to the note.
   */
  companyId?: string | null | undefined;
  /**
   * The opportunity that is related to the note.
   */
  opportunityId?: string | null | undefined;
  /**
   * The lead that is related to the note.
   */
  leadId?: string | null | undefined;
  /**
   * Whether the Note is active or not.
   */
  active?: boolean | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<NotesUpdatePassThrough> | undefined;
};

export type NotesUpdateRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId: string;
  /**
   * The ID of your Unify application
   */
  appId: string;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  requestBody: NotesUpdateRequestBody;
};

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type NotesUpdateDetail = string | { [k: string]: any };

/**
 * Unexpected error
 */
export type NotesUpdateNotesResponseBody = {
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

export type NotesUpdateUnifiedId = {
  /**
   * The unique identifier of the resource
   */
  id: string;
};

/**
 * Note updated
 */
export type NotesUpdateResponseBody = {
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
  data: NotesUpdateUnifiedId;
};

export type NotesUpdateResponse =
  | NotesUpdateResponseBody
  | NotesUpdateNotesResponseBody;

/** @internal */
export const NotesUpdateSecurity$inboundSchema: z.ZodType<
  NotesUpdateSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
});

/** @internal */
export type NotesUpdateSecurity$Outbound = {
  apiKey: string;
};

/** @internal */
export const NotesUpdateSecurity$outboundSchema: z.ZodType<
  NotesUpdateSecurity$Outbound,
  z.ZodTypeDef,
  NotesUpdateSecurity
> = z.object({
  apiKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateSecurity$ {
  /** @deprecated use `NotesUpdateSecurity$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateSecurity$inboundSchema;
  /** @deprecated use `NotesUpdateSecurity$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateSecurity$outboundSchema;
  /** @deprecated use `NotesUpdateSecurity$Outbound` instead. */
  export type Outbound = NotesUpdateSecurity$Outbound;
}

export function notesUpdateSecurityToJSON(
  notesUpdateSecurity: NotesUpdateSecurity,
): string {
  return JSON.stringify(
    NotesUpdateSecurity$outboundSchema.parse(notesUpdateSecurity),
  );
}

export function notesUpdateSecurityFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateSecurity' from JSON`,
  );
}

/** @internal */
export const NotesUpdateExtendPaths$inboundSchema: z.ZodType<
  NotesUpdateExtendPaths,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/** @internal */
export type NotesUpdateExtendPaths$Outbound = {
  path: string;
  value?: any | undefined;
};

/** @internal */
export const NotesUpdateExtendPaths$outboundSchema: z.ZodType<
  NotesUpdateExtendPaths$Outbound,
  z.ZodTypeDef,
  NotesUpdateExtendPaths
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateExtendPaths$ {
  /** @deprecated use `NotesUpdateExtendPaths$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateExtendPaths$inboundSchema;
  /** @deprecated use `NotesUpdateExtendPaths$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateExtendPaths$outboundSchema;
  /** @deprecated use `NotesUpdateExtendPaths$Outbound` instead. */
  export type Outbound = NotesUpdateExtendPaths$Outbound;
}

export function notesUpdateExtendPathsToJSON(
  notesUpdateExtendPaths: NotesUpdateExtendPaths,
): string {
  return JSON.stringify(
    NotesUpdateExtendPaths$outboundSchema.parse(notesUpdateExtendPaths),
  );
}

export function notesUpdateExtendPathsFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateExtendPaths, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateExtendPaths$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateExtendPaths' from JSON`,
  );
}

/** @internal */
export const NotesUpdatePassThrough$inboundSchema: z.ZodType<
  NotesUpdatePassThrough,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  operation_id: z.string().optional(),
  extend_object: z.record(z.any()).optional(),
  extend_paths: z.array(z.lazy(() => NotesUpdateExtendPaths$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "operation_id": "operationId",
    "extend_object": "extendObject",
    "extend_paths": "extendPaths",
  });
});

/** @internal */
export type NotesUpdatePassThrough$Outbound = {
  service_id: string;
  operation_id?: string | undefined;
  extend_object?: { [k: string]: any } | undefined;
  extend_paths?: Array<NotesUpdateExtendPaths$Outbound> | undefined;
};

/** @internal */
export const NotesUpdatePassThrough$outboundSchema: z.ZodType<
  NotesUpdatePassThrough$Outbound,
  z.ZodTypeDef,
  NotesUpdatePassThrough
> = z.object({
  serviceId: z.string(),
  operationId: z.string().optional(),
  extendObject: z.record(z.any()).optional(),
  extendPaths: z.array(z.lazy(() => NotesUpdateExtendPaths$outboundSchema))
    .optional(),
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
export namespace NotesUpdatePassThrough$ {
  /** @deprecated use `NotesUpdatePassThrough$inboundSchema` instead. */
  export const inboundSchema = NotesUpdatePassThrough$inboundSchema;
  /** @deprecated use `NotesUpdatePassThrough$outboundSchema` instead. */
  export const outboundSchema = NotesUpdatePassThrough$outboundSchema;
  /** @deprecated use `NotesUpdatePassThrough$Outbound` instead. */
  export type Outbound = NotesUpdatePassThrough$Outbound;
}

export function notesUpdatePassThroughToJSON(
  notesUpdatePassThrough: NotesUpdatePassThrough,
): string {
  return JSON.stringify(
    NotesUpdatePassThrough$outboundSchema.parse(notesUpdatePassThrough),
  );
}

export function notesUpdatePassThroughFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdatePassThrough, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdatePassThrough$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdatePassThrough' from JSON`,
  );
}

/** @internal */
export const NotesUpdateRequestBody$inboundSchema: z.ZodType<
  NotesUpdateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.nullable(z.string()).optional(),
  content: z.nullable(z.string()).optional(),
  owner_id: z.nullable(z.string()).optional(),
  contact_id: z.nullable(z.string()).optional(),
  company_id: z.nullable(z.string()).optional(),
  opportunity_id: z.nullable(z.string()).optional(),
  lead_id: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  pass_through: z.array(z.lazy(() => NotesUpdatePassThrough$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "owner_id": "ownerId",
    "contact_id": "contactId",
    "company_id": "companyId",
    "opportunity_id": "opportunityId",
    "lead_id": "leadId",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type NotesUpdateRequestBody$Outbound = {
  title?: string | null | undefined;
  content?: string | null | undefined;
  owner_id?: string | null | undefined;
  contact_id?: string | null | undefined;
  company_id?: string | null | undefined;
  opportunity_id?: string | null | undefined;
  lead_id?: string | null | undefined;
  active?: boolean | null | undefined;
  pass_through?: Array<NotesUpdatePassThrough$Outbound> | undefined;
};

/** @internal */
export const NotesUpdateRequestBody$outboundSchema: z.ZodType<
  NotesUpdateRequestBody$Outbound,
  z.ZodTypeDef,
  NotesUpdateRequestBody
> = z.object({
  title: z.nullable(z.string()).optional(),
  content: z.nullable(z.string()).optional(),
  ownerId: z.nullable(z.string()).optional(),
  contactId: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  opportunityId: z.nullable(z.string()).optional(),
  leadId: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  passThrough: z.array(z.lazy(() => NotesUpdatePassThrough$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    ownerId: "owner_id",
    contactId: "contact_id",
    companyId: "company_id",
    opportunityId: "opportunity_id",
    leadId: "lead_id",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateRequestBody$ {
  /** @deprecated use `NotesUpdateRequestBody$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateRequestBody$inboundSchema;
  /** @deprecated use `NotesUpdateRequestBody$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateRequestBody$outboundSchema;
  /** @deprecated use `NotesUpdateRequestBody$Outbound` instead. */
  export type Outbound = NotesUpdateRequestBody$Outbound;
}

export function notesUpdateRequestBodyToJSON(
  notesUpdateRequestBody: NotesUpdateRequestBody,
): string {
  return JSON.stringify(
    NotesUpdateRequestBody$outboundSchema.parse(notesUpdateRequestBody),
  );
}

export function notesUpdateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateRequestBody' from JSON`,
  );
}

/** @internal */
export const NotesUpdateRequest$inboundSchema: z.ZodType<
  NotesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  RequestBody: z.lazy(() => NotesUpdateRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type NotesUpdateRequest$Outbound = {
  id: string;
  consumerId: string;
  appId: string;
  serviceId?: string | undefined;
  raw: boolean;
  RequestBody: NotesUpdateRequestBody$Outbound;
};

/** @internal */
export const NotesUpdateRequest$outboundSchema: z.ZodType<
  NotesUpdateRequest$Outbound,
  z.ZodTypeDef,
  NotesUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  requestBody: z.lazy(() => NotesUpdateRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateRequest$ {
  /** @deprecated use `NotesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateRequest$inboundSchema;
  /** @deprecated use `NotesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateRequest$outboundSchema;
  /** @deprecated use `NotesUpdateRequest$Outbound` instead. */
  export type Outbound = NotesUpdateRequest$Outbound;
}

export function notesUpdateRequestToJSON(
  notesUpdateRequest: NotesUpdateRequest,
): string {
  return JSON.stringify(
    NotesUpdateRequest$outboundSchema.parse(notesUpdateRequest),
  );
}

export function notesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateRequest' from JSON`,
  );
}

/** @internal */
export const NotesUpdateDetail$inboundSchema: z.ZodType<
  NotesUpdateDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type NotesUpdateDetail$Outbound = string | { [k: string]: any };

/** @internal */
export const NotesUpdateDetail$outboundSchema: z.ZodType<
  NotesUpdateDetail$Outbound,
  z.ZodTypeDef,
  NotesUpdateDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateDetail$ {
  /** @deprecated use `NotesUpdateDetail$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateDetail$inboundSchema;
  /** @deprecated use `NotesUpdateDetail$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateDetail$outboundSchema;
  /** @deprecated use `NotesUpdateDetail$Outbound` instead. */
  export type Outbound = NotesUpdateDetail$Outbound;
}

export function notesUpdateDetailToJSON(
  notesUpdateDetail: NotesUpdateDetail,
): string {
  return JSON.stringify(
    NotesUpdateDetail$outboundSchema.parse(notesUpdateDetail),
  );
}

export function notesUpdateDetailFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateDetail' from JSON`,
  );
}

/** @internal */
export const NotesUpdateNotesResponseBody$inboundSchema: z.ZodType<
  NotesUpdateNotesResponseBody,
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
export type NotesUpdateNotesResponseBody$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const NotesUpdateNotesResponseBody$outboundSchema: z.ZodType<
  NotesUpdateNotesResponseBody$Outbound,
  z.ZodTypeDef,
  NotesUpdateNotesResponseBody
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
export namespace NotesUpdateNotesResponseBody$ {
  /** @deprecated use `NotesUpdateNotesResponseBody$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateNotesResponseBody$inboundSchema;
  /** @deprecated use `NotesUpdateNotesResponseBody$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateNotesResponseBody$outboundSchema;
  /** @deprecated use `NotesUpdateNotesResponseBody$Outbound` instead. */
  export type Outbound = NotesUpdateNotesResponseBody$Outbound;
}

export function notesUpdateNotesResponseBodyToJSON(
  notesUpdateNotesResponseBody: NotesUpdateNotesResponseBody,
): string {
  return JSON.stringify(
    NotesUpdateNotesResponseBody$outboundSchema.parse(
      notesUpdateNotesResponseBody,
    ),
  );
}

export function notesUpdateNotesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateNotesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateNotesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateNotesResponseBody' from JSON`,
  );
}

/** @internal */
export const NotesUpdateUnifiedId$inboundSchema: z.ZodType<
  NotesUpdateUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type NotesUpdateUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const NotesUpdateUnifiedId$outboundSchema: z.ZodType<
  NotesUpdateUnifiedId$Outbound,
  z.ZodTypeDef,
  NotesUpdateUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateUnifiedId$ {
  /** @deprecated use `NotesUpdateUnifiedId$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateUnifiedId$inboundSchema;
  /** @deprecated use `NotesUpdateUnifiedId$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateUnifiedId$outboundSchema;
  /** @deprecated use `NotesUpdateUnifiedId$Outbound` instead. */
  export type Outbound = NotesUpdateUnifiedId$Outbound;
}

export function notesUpdateUnifiedIdToJSON(
  notesUpdateUnifiedId: NotesUpdateUnifiedId,
): string {
  return JSON.stringify(
    NotesUpdateUnifiedId$outboundSchema.parse(notesUpdateUnifiedId),
  );
}

export function notesUpdateUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateUnifiedId' from JSON`,
  );
}

/** @internal */
export const NotesUpdateResponseBody$inboundSchema: z.ZodType<
  NotesUpdateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => NotesUpdateUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type NotesUpdateResponseBody$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: NotesUpdateUnifiedId$Outbound;
};

/** @internal */
export const NotesUpdateResponseBody$outboundSchema: z.ZodType<
  NotesUpdateResponseBody$Outbound,
  z.ZodTypeDef,
  NotesUpdateResponseBody
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => NotesUpdateUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateResponseBody$ {
  /** @deprecated use `NotesUpdateResponseBody$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateResponseBody$inboundSchema;
  /** @deprecated use `NotesUpdateResponseBody$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateResponseBody$outboundSchema;
  /** @deprecated use `NotesUpdateResponseBody$Outbound` instead. */
  export type Outbound = NotesUpdateResponseBody$Outbound;
}

export function notesUpdateResponseBodyToJSON(
  notesUpdateResponseBody: NotesUpdateResponseBody,
): string {
  return JSON.stringify(
    NotesUpdateResponseBody$outboundSchema.parse(notesUpdateResponseBody),
  );
}

export function notesUpdateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateResponseBody' from JSON`,
  );
}

/** @internal */
export const NotesUpdateResponse$inboundSchema: z.ZodType<
  NotesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => NotesUpdateResponseBody$inboundSchema),
  z.lazy(() => NotesUpdateNotesResponseBody$inboundSchema),
]);

/** @internal */
export type NotesUpdateResponse$Outbound =
  | NotesUpdateResponseBody$Outbound
  | NotesUpdateNotesResponseBody$Outbound;

/** @internal */
export const NotesUpdateResponse$outboundSchema: z.ZodType<
  NotesUpdateResponse$Outbound,
  z.ZodTypeDef,
  NotesUpdateResponse
> = z.union([
  z.lazy(() => NotesUpdateResponseBody$outboundSchema),
  z.lazy(() => NotesUpdateNotesResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotesUpdateResponse$ {
  /** @deprecated use `NotesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = NotesUpdateResponse$inboundSchema;
  /** @deprecated use `NotesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = NotesUpdateResponse$outboundSchema;
  /** @deprecated use `NotesUpdateResponse$Outbound` instead. */
  export type Outbound = NotesUpdateResponse$Outbound;
}

export function notesUpdateResponseToJSON(
  notesUpdateResponse: NotesUpdateResponse,
): string {
  return JSON.stringify(
    NotesUpdateResponse$outboundSchema.parse(notesUpdateResponse),
  );
}

export function notesUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<NotesUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotesUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotesUpdateResponse' from JSON`,
  );
}
