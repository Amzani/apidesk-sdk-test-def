/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The 'data' object serves as the primary container for the contact information that has been successfully added to the CRM system. This object encapsulates all relevant details about the newly created contact, ensuring that the response is structured and comprehensive. It is always included in the response to confirm the successful addition of the contact and to provide immediate access to the contact's details for further processing or verification.
 */
export type ContactCreateResponseUnifiedId = {
  /**
   * The 'data.id' field represents the unique identifier of the user resource that has been updated. This identifier is crucial for confirming that the correct user record was modified. It is always included in the response to ensure that the client can verify the specific user record that was affected by the update operation.
   */
  id: string;
};

/**
 * Contact created
 */
export type ContactCreateResponse = {
  /**
   * The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request made to add a new contact. A status code of 201 signifies successful creation, confirming that the contact has been added to the CRM system. This code is essential for determining the outcome of the operation and is always included in the response.
   */
  statusCode: number;
  /**
   * The HTTP response status message accompanying the status code. This string provides a textual representation of the status code, such as 'Created' for a 201 status. It offers a human-readable explanation of the response outcome, aiding in understanding the result of the contact addition request. This property is always present in the response.
   */
  status: string;
  /**
   * The Apideck ID of the service provider that processed the request. This string uniquely identifies the service within the Apideck ecosystem that handled the contact addition. It is included to specify which service was used, especially useful when multiple integrations are active, ensuring clarity in multi-service environments.
   */
  service: string;
  /**
   * The name of the Unified API resource involved in the operation. This string indicates the specific resource type, such as 'contacts', that the operation was performed on. It helps in identifying the context of the API call, ensuring that the correct resource was targeted during the contact addition process. This property is always included in the response.
   */
  resource: string;
  /**
   * The specific operation performed by the API, in this case, 'contactsAdd'. This string denotes the action taken, providing clarity on what was executed. It is crucial for logging and auditing purposes, allowing developers to track the exact operation carried out by the API. This property is consistently included in the response to confirm the action taken.
   */
  operation: string;
  /**
   * The 'data' object serves as the primary container for the contact information that has been successfully added to the CRM system. This object encapsulates all relevant details about the newly created contact, ensuring that the response is structured and comprehensive. It is always included in the response to confirm the successful addition of the contact and to provide immediate access to the contact's details for further processing or verification.
   */
  data: ContactCreateResponseUnifiedId;
};

/** @internal */
export const ContactCreateResponseUnifiedId$inboundSchema: z.ZodType<
  ContactCreateResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type ContactCreateResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const ContactCreateResponseUnifiedId$outboundSchema: z.ZodType<
  ContactCreateResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  ContactCreateResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactCreateResponseUnifiedId$ {
  /** @deprecated use `ContactCreateResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = ContactCreateResponseUnifiedId$inboundSchema;
  /** @deprecated use `ContactCreateResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = ContactCreateResponseUnifiedId$outboundSchema;
  /** @deprecated use `ContactCreateResponseUnifiedId$Outbound` instead. */
  export type Outbound = ContactCreateResponseUnifiedId$Outbound;
}

export function contactCreateResponseUnifiedIdToJSON(
  contactCreateResponseUnifiedId: ContactCreateResponseUnifiedId,
): string {
  return JSON.stringify(
    ContactCreateResponseUnifiedId$outboundSchema.parse(
      contactCreateResponseUnifiedId,
    ),
  );
}

export function contactCreateResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<ContactCreateResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContactCreateResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContactCreateResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const ContactCreateResponse$inboundSchema: z.ZodType<
  ContactCreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => ContactCreateResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type ContactCreateResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: ContactCreateResponseUnifiedId$Outbound;
};

/** @internal */
export const ContactCreateResponse$outboundSchema: z.ZodType<
  ContactCreateResponse$Outbound,
  z.ZodTypeDef,
  ContactCreateResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => ContactCreateResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactCreateResponse$ {
  /** @deprecated use `ContactCreateResponse$inboundSchema` instead. */
  export const inboundSchema = ContactCreateResponse$inboundSchema;
  /** @deprecated use `ContactCreateResponse$outboundSchema` instead. */
  export const outboundSchema = ContactCreateResponse$outboundSchema;
  /** @deprecated use `ContactCreateResponse$Outbound` instead. */
  export type Outbound = ContactCreateResponse$Outbound;
}

export function contactCreateResponseToJSON(
  contactCreateResponse: ContactCreateResponse,
): string {
  return JSON.stringify(
    ContactCreateResponse$outboundSchema.parse(contactCreateResponse),
  );
}

export function contactCreateResponseFromJSON(
  jsonString: string,
): SafeParseResult<ContactCreateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContactCreateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContactCreateResponse' from JSON`,
  );
}
