/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ContactsAddSecurity = {
  apiKey: string;
};

export type ContactsAddRequest = {
  /**
   * A boolean flag that, when set to true, includes the raw response in the output. This is primarily used for debugging purposes to provide more detailed information about the response. By default, this is set to false.
   */
  raw?: boolean | undefined;
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
  contactCreateRequest: components.ContactCreateRequest;
};

export type ContactsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Contact created
   */
  contactCreateResponse?: components.ContactCreateResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const ContactsAddSecurity$inboundSchema: z.ZodType<
  ContactsAddSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
});

/** @internal */
export type ContactsAddSecurity$Outbound = {
  apiKey: string;
};

/** @internal */
export const ContactsAddSecurity$outboundSchema: z.ZodType<
  ContactsAddSecurity$Outbound,
  z.ZodTypeDef,
  ContactsAddSecurity
> = z.object({
  apiKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactsAddSecurity$ {
  /** @deprecated use `ContactsAddSecurity$inboundSchema` instead. */
  export const inboundSchema = ContactsAddSecurity$inboundSchema;
  /** @deprecated use `ContactsAddSecurity$outboundSchema` instead. */
  export const outboundSchema = ContactsAddSecurity$outboundSchema;
  /** @deprecated use `ContactsAddSecurity$Outbound` instead. */
  export type Outbound = ContactsAddSecurity$Outbound;
}

export function contactsAddSecurityToJSON(
  contactsAddSecurity: ContactsAddSecurity,
): string {
  return JSON.stringify(
    ContactsAddSecurity$outboundSchema.parse(contactsAddSecurity),
  );
}

export function contactsAddSecurityFromJSON(
  jsonString: string,
): SafeParseResult<ContactsAddSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContactsAddSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContactsAddSecurity' from JSON`,
  );
}

/** @internal */
export const ContactsAddRequest$inboundSchema: z.ZodType<
  ContactsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  ContactCreateRequest: components.ContactCreateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "ContactCreateRequest": "contactCreateRequest",
  });
});

/** @internal */
export type ContactsAddRequest$Outbound = {
  raw: boolean;
  consumerId: string;
  appId: string;
  serviceId?: string | undefined;
  ContactCreateRequest: components.ContactCreateRequest$Outbound;
};

/** @internal */
export const ContactsAddRequest$outboundSchema: z.ZodType<
  ContactsAddRequest$Outbound,
  z.ZodTypeDef,
  ContactsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string(),
  appId: z.string(),
  serviceId: z.string().optional(),
  contactCreateRequest: components.ContactCreateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    contactCreateRequest: "ContactCreateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactsAddRequest$ {
  /** @deprecated use `ContactsAddRequest$inboundSchema` instead. */
  export const inboundSchema = ContactsAddRequest$inboundSchema;
  /** @deprecated use `ContactsAddRequest$outboundSchema` instead. */
  export const outboundSchema = ContactsAddRequest$outboundSchema;
  /** @deprecated use `ContactsAddRequest$Outbound` instead. */
  export type Outbound = ContactsAddRequest$Outbound;
}

export function contactsAddRequestToJSON(
  contactsAddRequest: ContactsAddRequest,
): string {
  return JSON.stringify(
    ContactsAddRequest$outboundSchema.parse(contactsAddRequest),
  );
}

export function contactsAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<ContactsAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContactsAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContactsAddRequest' from JSON`,
  );
}

/** @internal */
export const ContactsAddResponse$inboundSchema: z.ZodType<
  ContactsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ContactCreateResponse: components.ContactCreateResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ContactCreateResponse": "contactCreateResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type ContactsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ContactCreateResponse?: components.ContactCreateResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const ContactsAddResponse$outboundSchema: z.ZodType<
  ContactsAddResponse$Outbound,
  z.ZodTypeDef,
  ContactsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  contactCreateResponse: components.ContactCreateResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    contactCreateResponse: "ContactCreateResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactsAddResponse$ {
  /** @deprecated use `ContactsAddResponse$inboundSchema` instead. */
  export const inboundSchema = ContactsAddResponse$inboundSchema;
  /** @deprecated use `ContactsAddResponse$outboundSchema` instead. */
  export const outboundSchema = ContactsAddResponse$outboundSchema;
  /** @deprecated use `ContactsAddResponse$Outbound` instead. */
  export type Outbound = ContactsAddResponse$Outbound;
}

export function contactsAddResponseToJSON(
  contactsAddResponse: ContactsAddResponse,
): string {
  return JSON.stringify(
    ContactsAddResponse$outboundSchema.parse(contactsAddResponse),
  );
}

export function contactsAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<ContactsAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContactsAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContactsAddResponse' from JSON`,
  );
}
