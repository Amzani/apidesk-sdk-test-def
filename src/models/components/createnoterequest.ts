/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateNoteRequestExtendPaths = {
  /**
   * A JSONPath string that specifies the exact location within the data structure where the value should be applied. This path must be valid and correctly formatted to ensure the data is updated accurately.
   */
  path: string;
  /**
   * The value to be set at the specified JSONPath. This can be of any data type, allowing for flexible updates to the data structure. Ensure the value is compatible with the target location's data type.
   */
  value?: any | undefined;
};

export type CreateNoteRequestPassThrough = {
  /**
   * The identifier for the service to which the pass_through data should be applied. This string is crucial for directing the custom data to the correct service integration, ensuring that the modifications are processed appropriately.
   */
  serviceId: string;
  /**
   * An optional identifier for a specific workflow operation. This property is useful when the API call involves multiple downstream requests, allowing you to track and manage the operation effectively. It should be a unique string if used.
   */
  operationId?: string | undefined;
  /**
   * A flexible object that allows for the direct extension of properties. This can be used to include additional data or metadata that may be required for specific integrations or custom workflows. The object can contain any key-value pairs as needed.
   */
  extendObject?: { [k: string]: any } | undefined;
  /**
   * An array of objects designed for modifying structured data through specified paths. Each object in the array should define a path and a value, enabling precise updates to nested data structures. This is particularly useful for complex data manipulations.
   */
  extendPaths?: Array<CreateNoteRequestExtendPaths> | undefined;
};

export type CreateNoteRequest = {
  /**
   * The title of the note, serving as a brief summary or headline. This field helps in quickly identifying the note's subject matter within the CRM system. While optional, providing a title can enhance the organization and retrieval of notes.
   */
  title?: string | null | undefined;
  /**
   * The main body of the note, containing detailed information or observations. This field is crucial for capturing the full context and specifics of the note, ensuring comprehensive record-keeping within the CRM. Although not mandatory, including content is recommended for clarity and completeness.
   */
  content?: string | null | undefined;
  /**
   * The unique identifier of the user who owns the note. This property links the note to a specific user, facilitating accountability and tracking within the CRM system. It is optional but useful for assigning responsibility and managing user-specific notes.
   */
  ownerId?: string | null | undefined;
  /**
   * The unique identifier of the contact associated with the note. This field connects the note to a particular contact, aiding in the organization and retrieval of notes related to specific individuals. While optional, it enhances the relational context of the note within the CRM.
   */
  contactId?: string | null | undefined;
  /**
   * The unique identifier of the company related to the note. This property associates the note with a specific company, supporting better organization and context within the CRM system. It is optional but beneficial for linking notes to company records.
   */
  companyId?: string | null | undefined;
  /**
   * The unique identifier of the opportunity associated with this note. This field links the note to a specific opportunity within the CRM, allowing for better tracking and management of related interactions. It should be a valid string that corresponds to an existing opportunity ID in the system.
   */
  opportunityId?: string | null | undefined;
  /**
   * The unique identifier of the lead associated with this note. This property connects the note to a specific lead, facilitating detailed record-keeping and follow-up actions. Ensure this is a valid string that matches an existing lead ID in the CRM.
   */
  leadId?: string | null | undefined;
  /**
   * Indicates whether the note is currently active. This boolean value helps in managing the visibility and relevance of the note within the CRM system. Set to true if the note should be considered active and false if it should be inactive.
   */
  active?: boolean | null | undefined;
  /**
   * An array that allows the inclusion of service-specific custom data or modifications when creating or updating resources. This property is useful for passing additional structured data that may be required by specific service integrations.
   */
  passThrough?: Array<CreateNoteRequestPassThrough> | undefined;
};

/** @internal */
export const CreateNoteRequestExtendPaths$inboundSchema: z.ZodType<
  CreateNoteRequestExtendPaths,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/** @internal */
export type CreateNoteRequestExtendPaths$Outbound = {
  path: string;
  value?: any | undefined;
};

/** @internal */
export const CreateNoteRequestExtendPaths$outboundSchema: z.ZodType<
  CreateNoteRequestExtendPaths$Outbound,
  z.ZodTypeDef,
  CreateNoteRequestExtendPaths
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateNoteRequestExtendPaths$ {
  /** @deprecated use `CreateNoteRequestExtendPaths$inboundSchema` instead. */
  export const inboundSchema = CreateNoteRequestExtendPaths$inboundSchema;
  /** @deprecated use `CreateNoteRequestExtendPaths$outboundSchema` instead. */
  export const outboundSchema = CreateNoteRequestExtendPaths$outboundSchema;
  /** @deprecated use `CreateNoteRequestExtendPaths$Outbound` instead. */
  export type Outbound = CreateNoteRequestExtendPaths$Outbound;
}

export function createNoteRequestExtendPathsToJSON(
  createNoteRequestExtendPaths: CreateNoteRequestExtendPaths,
): string {
  return JSON.stringify(
    CreateNoteRequestExtendPaths$outboundSchema.parse(
      createNoteRequestExtendPaths,
    ),
  );
}

export function createNoteRequestExtendPathsFromJSON(
  jsonString: string,
): SafeParseResult<CreateNoteRequestExtendPaths, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateNoteRequestExtendPaths$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateNoteRequestExtendPaths' from JSON`,
  );
}

/** @internal */
export const CreateNoteRequestPassThrough$inboundSchema: z.ZodType<
  CreateNoteRequestPassThrough,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  operation_id: z.string().optional(),
  extend_object: z.record(z.any()).optional(),
  extend_paths: z.array(
    z.lazy(() => CreateNoteRequestExtendPaths$inboundSchema),
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
export type CreateNoteRequestPassThrough$Outbound = {
  service_id: string;
  operation_id?: string | undefined;
  extend_object?: { [k: string]: any } | undefined;
  extend_paths?: Array<CreateNoteRequestExtendPaths$Outbound> | undefined;
};

/** @internal */
export const CreateNoteRequestPassThrough$outboundSchema: z.ZodType<
  CreateNoteRequestPassThrough$Outbound,
  z.ZodTypeDef,
  CreateNoteRequestPassThrough
> = z.object({
  serviceId: z.string(),
  operationId: z.string().optional(),
  extendObject: z.record(z.any()).optional(),
  extendPaths: z.array(
    z.lazy(() => CreateNoteRequestExtendPaths$outboundSchema),
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
export namespace CreateNoteRequestPassThrough$ {
  /** @deprecated use `CreateNoteRequestPassThrough$inboundSchema` instead. */
  export const inboundSchema = CreateNoteRequestPassThrough$inboundSchema;
  /** @deprecated use `CreateNoteRequestPassThrough$outboundSchema` instead. */
  export const outboundSchema = CreateNoteRequestPassThrough$outboundSchema;
  /** @deprecated use `CreateNoteRequestPassThrough$Outbound` instead. */
  export type Outbound = CreateNoteRequestPassThrough$Outbound;
}

export function createNoteRequestPassThroughToJSON(
  createNoteRequestPassThrough: CreateNoteRequestPassThrough,
): string {
  return JSON.stringify(
    CreateNoteRequestPassThrough$outboundSchema.parse(
      createNoteRequestPassThrough,
    ),
  );
}

export function createNoteRequestPassThroughFromJSON(
  jsonString: string,
): SafeParseResult<CreateNoteRequestPassThrough, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateNoteRequestPassThrough$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateNoteRequestPassThrough' from JSON`,
  );
}

/** @internal */
export const CreateNoteRequest$inboundSchema: z.ZodType<
  CreateNoteRequest,
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
  pass_through: z.array(
    z.lazy(() => CreateNoteRequestPassThrough$inboundSchema),
  ).optional(),
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
export type CreateNoteRequest$Outbound = {
  title?: string | null | undefined;
  content?: string | null | undefined;
  owner_id?: string | null | undefined;
  contact_id?: string | null | undefined;
  company_id?: string | null | undefined;
  opportunity_id?: string | null | undefined;
  lead_id?: string | null | undefined;
  active?: boolean | null | undefined;
  pass_through?: Array<CreateNoteRequestPassThrough$Outbound> | undefined;
};

/** @internal */
export const CreateNoteRequest$outboundSchema: z.ZodType<
  CreateNoteRequest$Outbound,
  z.ZodTypeDef,
  CreateNoteRequest
> = z.object({
  title: z.nullable(z.string()).optional(),
  content: z.nullable(z.string()).optional(),
  ownerId: z.nullable(z.string()).optional(),
  contactId: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  opportunityId: z.nullable(z.string()).optional(),
  leadId: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  passThrough: z.array(
    z.lazy(() => CreateNoteRequestPassThrough$outboundSchema),
  ).optional(),
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
export namespace CreateNoteRequest$ {
  /** @deprecated use `CreateNoteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateNoteRequest$inboundSchema;
  /** @deprecated use `CreateNoteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateNoteRequest$outboundSchema;
  /** @deprecated use `CreateNoteRequest$Outbound` instead. */
  export type Outbound = CreateNoteRequest$Outbound;
}

export function createNoteRequestToJSON(
  createNoteRequest: CreateNoteRequest,
): string {
  return JSON.stringify(
    CreateNoteRequest$outboundSchema.parse(createNoteRequest),
  );
}

export function createNoteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateNoteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateNoteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateNoteRequest' from JSON`,
  );
}
