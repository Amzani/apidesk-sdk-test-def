/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NotesUpdateSecurity = {
  apiKey: string;
};

export type NotesUpdateRequest = {
  /**
   * The unique identifier of the activity record to be deleted. This parameter is essential as it specifies which activity in the CRM system will be removed. Ensure that the ID corresponds to an existing activity to avoid errors.
   */
  id: string;
  /**
   * A unique identifier for the consumer making the request. This ID is crucial for authenticating the consumer and ensuring that the correct data is accessed or modified. It must be a valid consumer ID associated with your account.
   */
  consumerId: string;
  /**
   * The unique identifier of your Unify application. This ID is used to authenticate the application making the request and must match the ID assigned to your application in the Apideck platform.
   */
  appId: string;
  /**
   * An optional parameter used to specify the target service when multiple integrations are active. This ID helps direct the request to the correct service, such as 'pipedrive' or 'salesforce'. It is only necessary if your setup includes multiple services.
   */
  serviceId?: string | undefined;
  /**
   * A boolean flag that, when set to true, includes the raw response in the output. This is primarily used for debugging purposes to provide more detailed information about the response. By default, this is set to false.
   */
  raw?: boolean | undefined;
  noteUpdateRequest: components.NoteUpdateRequest;
};

export type NotesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Note updated
   */
  noteUpdateResponse?: components.NoteUpdateResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

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
  NoteUpdateRequest: components.NoteUpdateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "NoteUpdateRequest": "noteUpdateRequest",
  });
});

/** @internal */
export type NotesUpdateRequest$Outbound = {
  id: string;
  consumerId: string;
  appId: string;
  serviceId?: string | undefined;
  raw: boolean;
  NoteUpdateRequest: components.NoteUpdateRequest$Outbound;
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
  noteUpdateRequest: components.NoteUpdateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    noteUpdateRequest: "NoteUpdateRequest",
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
export const NotesUpdateResponse$inboundSchema: z.ZodType<
  NotesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  NoteUpdateResponse: components.NoteUpdateResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "NoteUpdateResponse": "noteUpdateResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type NotesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  NoteUpdateResponse?: components.NoteUpdateResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const NotesUpdateResponse$outboundSchema: z.ZodType<
  NotesUpdateResponse$Outbound,
  z.ZodTypeDef,
  NotesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  noteUpdateResponse: components.NoteUpdateResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    noteUpdateResponse: "NoteUpdateResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

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
