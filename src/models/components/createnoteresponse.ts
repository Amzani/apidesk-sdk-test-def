/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This object contains the details of the note that was successfully created in the CRM system. It includes essential information such as the unique identifier of the newly added note, which can be used for future reference or operations related to this note. The structure of this object is crucial for understanding the outcome of the notesAdd operation.
 */
export type CreateNoteResponseUnifiedId = {
  /**
   * The unique identifier assigned to the note that was just created in the CRM system. This ID is essential for retrieving, updating, or deleting the note in future operations. It serves as a reference point for any subsequent interactions with this specific note.
   */
  id: string;
};

/**
 * Note created
 */
export type CreateNoteResponse = {
  /**
   * The HTTP response status code returned by the API. This integer value indicates the result of the notesAdd operation, with a successful creation typically returning a 201 status code. It helps developers understand the outcome of their request.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status. This string provides a human-readable status message corresponding to the status_code, such as 'Created' for a successful note addition. It aids in quickly assessing the result of the operation.
   */
  status: string;
  /**
   * The Apideck ID of the service provider involved in the operation. This string identifies which service integration was used to add the note, helping developers track and manage service-specific interactions within the CRM.
   */
  service: string;
  /**
   * The name of the unified API resource that was affected by the operation. This string indicates the type of resource, such as 'note', that was created or modified, providing context about the operation's target within the CRM system.
   */
  resource: string;
  /**
   * The specific operation performed by the API. This string describes the action taken, such as 'add', to inform developers about the nature of the request processed by the CRM system.
   */
  operation: string;
  /**
   * This object contains the details of the note that was successfully created in the CRM system. It includes essential information such as the unique identifier of the newly added note, which can be used for future reference or operations related to this note. The structure of this object is crucial for understanding the outcome of the notesAdd operation.
   */
  data: CreateNoteResponseUnifiedId;
};

/** @internal */
export const CreateNoteResponseUnifiedId$inboundSchema: z.ZodType<
  CreateNoteResponseUnifiedId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type CreateNoteResponseUnifiedId$Outbound = {
  id: string;
};

/** @internal */
export const CreateNoteResponseUnifiedId$outboundSchema: z.ZodType<
  CreateNoteResponseUnifiedId$Outbound,
  z.ZodTypeDef,
  CreateNoteResponseUnifiedId
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateNoteResponseUnifiedId$ {
  /** @deprecated use `CreateNoteResponseUnifiedId$inboundSchema` instead. */
  export const inboundSchema = CreateNoteResponseUnifiedId$inboundSchema;
  /** @deprecated use `CreateNoteResponseUnifiedId$outboundSchema` instead. */
  export const outboundSchema = CreateNoteResponseUnifiedId$outboundSchema;
  /** @deprecated use `CreateNoteResponseUnifiedId$Outbound` instead. */
  export type Outbound = CreateNoteResponseUnifiedId$Outbound;
}

export function createNoteResponseUnifiedIdToJSON(
  createNoteResponseUnifiedId: CreateNoteResponseUnifiedId,
): string {
  return JSON.stringify(
    CreateNoteResponseUnifiedId$outboundSchema.parse(
      createNoteResponseUnifiedId,
    ),
  );
}

export function createNoteResponseUnifiedIdFromJSON(
  jsonString: string,
): SafeParseResult<CreateNoteResponseUnifiedId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateNoteResponseUnifiedId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateNoteResponseUnifiedId' from JSON`,
  );
}

/** @internal */
export const CreateNoteResponse$inboundSchema: z.ZodType<
  CreateNoteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => CreateNoteResponseUnifiedId$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type CreateNoteResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: CreateNoteResponseUnifiedId$Outbound;
};

/** @internal */
export const CreateNoteResponse$outboundSchema: z.ZodType<
  CreateNoteResponse$Outbound,
  z.ZodTypeDef,
  CreateNoteResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.lazy(() => CreateNoteResponseUnifiedId$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateNoteResponse$ {
  /** @deprecated use `CreateNoteResponse$inboundSchema` instead. */
  export const inboundSchema = CreateNoteResponse$inboundSchema;
  /** @deprecated use `CreateNoteResponse$outboundSchema` instead. */
  export const outboundSchema = CreateNoteResponse$outboundSchema;
  /** @deprecated use `CreateNoteResponse$Outbound` instead. */
  export type Outbound = CreateNoteResponse$Outbound;
}

export function createNoteResponseToJSON(
  createNoteResponse: CreateNoteResponse,
): string {
  return JSON.stringify(
    CreateNoteResponse$outboundSchema.parse(createNoteResponse),
  );
}

export function createNoteResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateNoteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateNoteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateNoteResponse' from JSON`,
  );
}
