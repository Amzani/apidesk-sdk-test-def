/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Contains any custom mappings configured for the note resource. This object provides additional metadata or configuration details that are specific to the note, allowing for customized data handling or display. Useful for applications that need to interpret or transform note data based on custom settings.
 */
export type ListNotesResponseCustomMappings = {};

export type ListNotesResponseExtendPaths = {
  /**
   * This property contains a JSONPath string that specifies the exact location within the JSON structure where a particular value should be applied. It is crucial for directing the API to the correct data point within the response, ensuring that the value is set accurately according to the specified path.
   */
  path: string;
  /**
   * This property holds the value that needs to be set at the specified JSONPath. The value can be of any data type, allowing flexibility in what can be inserted or updated within the JSON structure. It is essential for dynamically modifying the data returned by the API based on the specified path.
   */
  value?: any | undefined;
};

export type ListNotesResponsePassThrough = {
  /**
   * A unique identifier for the service to which the pass_through data should be applied. This ensures that the correct service processes the custom data or modifications included in the pass_through array.
   */
  serviceId: string;
  /**
   * An optional identifier for a specific workflow operation that the pass_through data should target. This is particularly useful when multiple downstream requests are involved, ensuring the correct operation processes the data.
   */
  operationId?: string | undefined;
  /**
   * An object that allows for direct extension with any properties. This flexibility supports the inclusion of additional data fields that may be necessary for specific service integrations or custom operations.
   */
  extendObject?: { [k: string]: any } | undefined;
  /**
   * An array of objects that define structured data modifications via specific paths. This property enables precise alterations to the data structure, facilitating complex integrations and custom data handling within the CRM notes retrieval process.
   */
  extendPaths?: Array<ListNotesResponseExtendPaths> | undefined;
};

export type ListNotesResponseData = {
  /**
   * The unique identifier assigned to each note within the CRM system. This ID is crucial for distinguishing between different notes and is used in operations that require specific note references, such as updates or deletions.
   */
  id?: string | undefined;
  /**
   * The title or headline of the note, providing a brief summary or subject of the note's content. This field helps users quickly identify the main topic or purpose of the note within the CRM system.
   */
  title?: string | null | undefined;
  /**
   * The main body of the note, containing detailed information or commentary. This field holds the core message or information that the note is intended to convey, making it essential for understanding the note's purpose and context.
   */
  content?: string | null | undefined;
  /**
   * The identifier of the user who owns or created the note. This field is important for tracking note ownership and managing permissions or access rights within the CRM system.
   */
  ownerId?: string | null | undefined;
  /**
   * The unique identifier of the contact associated with this note. This ID helps link the note to a specific contact within the CRM, allowing developers to retrieve or manipulate contact-related notes efficiently. The format is a string, typically a UUID or similar unique string identifier.
   */
  contactId?: string | null | undefined;
  /**
   * The unique identifier of the company associated with this note. This property allows the note to be linked to a specific company, facilitating the organization and retrieval of company-related notes. The value is a string, usually formatted as a UUID or another unique string identifier.
   */
  companyId?: string | null | undefined;
  /**
   * The unique identifier of the opportunity linked to this note. This ID is crucial for associating the note with a particular sales opportunity, enabling developers to track notes related to specific opportunities. The format is a string, often a UUID or similar unique identifier.
   */
  opportunityId?: string | null | undefined;
  /**
   * The unique identifier of the lead associated with this note. This property connects the note to a specific lead, which is essential for managing and retrieving notes related to potential sales leads. The format is a string, typically a UUID or another unique identifier.
   */
  leadId?: string | null | undefined;
  /**
   * Indicates whether the note is currently active. This boolean value helps developers determine if the note should be considered in active operations or if it has been archived or deactivated. The value is either true (active) or false (inactive).
   */
  active?: boolean | null | undefined;
  /**
   * Contains any custom mappings configured for the note resource. This object provides additional metadata or configuration details that are specific to the note, allowing for customized data handling or display. Useful for applications that need to interpret or transform note data based on custom settings.
   */
  customMappings?: ListNotesResponseCustomMappings | null | undefined;
  /**
   * The identifier of the user who last modified the note. This string typically represents a user ID or username, providing traceability for changes made to the note. It helps in auditing and understanding the history of modifications within the CRM system.
   */
  updatedBy?: string | null | undefined;
  /**
   * The identifier of the user who originally created the note. This string usually contains a user ID or username, offering insight into the origin of the note. It is essential for tracking the source of information within the CRM.
   */
  createdBy?: string | null | undefined;
  /**
   * The date and time when the note was last updated, formatted as an ISO 8601 string. This timestamp is crucial for determining the recency of the note's content and for synchronizing data updates across systems.
   */
  updatedAt?: string | null | undefined;
  /**
   * The date and time when the note was initially created, formatted as an ISO 8601 string. This timestamp provides a historical reference for when the note was added to the CRM, aiding in chronological data analysis and reporting.
   */
  createdAt?: string | null | undefined;
  /**
   * An array that holds service-specific custom data or structured modifications. This property is used to pass additional data when fetching notes, allowing for enhanced customization and integration with other services.
   */
  passThrough?: Array<ListNotesResponsePassThrough> | undefined;
};

/**
 * This property contains cursor information used for navigating through paginated API responses. It includes pointers to the previous and next pages, facilitating efficient data retrieval and seamless integration of paginated data into applications.
 */
export type ListNotesResponseCursors = {
  /**
   * This property contains the cursor string used to navigate to the previous page of results in the API response. It is used for pagination control, allowing developers to efficiently traverse through paginated data sets. The format is a string that represents the position in the data set.
   */
  previous?: string | null | undefined;
  /**
   * This property holds the cursor string representing the current page of results in the API response. It is essential for maintaining the current position within a paginated data set, enabling consistent data retrieval. The value is a string indicating the current location in the sequence of results.
   */
  current?: string | null | undefined;
  /**
   * This property provides the cursor string to navigate to the next page of results in the API response. It facilitates pagination by allowing seamless movement to subsequent data pages. The format is a string that indicates the next position in the data sequence.
   */
  next?: string | null | undefined;
};

/**
 * This property provides metadata about the API response, including additional information that may not be directly related to the data payload. It serves as a container for supplementary details that can aid in understanding and processing the response effectively.
 */
export type ListNotesResponseMeta = {
  /**
   * This property indicates the number of items included in the 'data' section of the response. It helps developers understand the volume of data returned in a single API call, which is particularly useful for managing pagination and data processing tasks.
   */
  itemsOnPage?: number | undefined;
  /**
   * This property contains cursor information used for navigating through paginated API responses. It includes pointers to the previous and next pages, facilitating efficient data retrieval and seamless integration of paginated data into applications.
   */
  cursors?: ListNotesResponseCursors | undefined;
};

/**
 * This object contains links that facilitate navigation between different pages of results in the API response. It includes URLs that point to the previous and next pages, aiding in efficient data traversal. The structure is an object with properties for each navigational link.
 */
export type ListNotesResponseLinks = {
  /**
   * This property contains the URL link to navigate to the previous page of results in the API response. It is part of the pagination mechanism, allowing backward navigation through the data set. The format is a string URL pointing to the prior page of results.
   */
  previous?: string | null | undefined;
  /**
   * This property contains the URL link to the current page of notes in the CRM system. It is used to retrieve the current set of notes data when navigating through paginated results. The format is a standard URL string, which can be used in subsequent API requests to access the same page of data.
   */
  current?: string | undefined;
  /**
   * This property provides the URL link to the next page of notes in the CRM system. It facilitates navigation to the subsequent set of notes data in a paginated response. The value is a URL string that can be used in API requests to continue fetching additional pages of notes.
   */
  next?: string | null | undefined;
};

/**
 * Notes
 */
export type ListNotesResponse = {
  /**
   * The HTTP response status code returned by the server, indicating the result of the GET request to fetch all notes. This integer value helps determine if the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is crucial for error handling and debugging.
   */
  statusCode: number;
  /**
   * A textual representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an unsuccessful one. This string provides a human-readable explanation of the status code, aiding in understanding the outcome of the request.
   */
  status: string;
  /**
   * The Apideck ID of the service provider from which the notes data is retrieved. This string uniquely identifies the service within the Apideck ecosystem, ensuring that the data source is correctly recognized and attributed.
   */
  service: string;
  /**
   * The name of the unified API resource being accessed, in this case, 'notes'. This string indicates the type of data being retrieved, helping developers understand the context and structure of the returned data.
   */
  resource: string;
  /**
   * The specific operation performed by the API, identified as 'notesAll' for this request. This string helps in tracking and logging the type of operation executed, which is useful for auditing and debugging purposes.
   */
  operation: string;
  /**
   * An array containing all the notes retrieved from the CRM system. Each element in the array represents a single note object, which includes detailed information such as the note's ID, title, content, and owner. This array is the primary container for the notes data returned by the 'notesAll' operation, facilitating easy access and manipulation of multiple notes at once.
   */
  data: Array<ListNotesResponseData>;
  /**
   * This property provides metadata about the API response, including additional information that may not be directly related to the data payload. It serves as a container for supplementary details that can aid in understanding and processing the response effectively.
   */
  meta?: ListNotesResponseMeta | undefined;
  /**
   * This object contains links that facilitate navigation between different pages of results in the API response. It includes URLs that point to the previous and next pages, aiding in efficient data traversal. The structure is an object with properties for each navigational link.
   */
  links?: ListNotesResponseLinks | undefined;
};

/** @internal */
export const ListNotesResponseCustomMappings$inboundSchema: z.ZodType<
  ListNotesResponseCustomMappings,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListNotesResponseCustomMappings$Outbound = {};

/** @internal */
export const ListNotesResponseCustomMappings$outboundSchema: z.ZodType<
  ListNotesResponseCustomMappings$Outbound,
  z.ZodTypeDef,
  ListNotesResponseCustomMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNotesResponseCustomMappings$ {
  /** @deprecated use `ListNotesResponseCustomMappings$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponseCustomMappings$inboundSchema;
  /** @deprecated use `ListNotesResponseCustomMappings$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponseCustomMappings$outboundSchema;
  /** @deprecated use `ListNotesResponseCustomMappings$Outbound` instead. */
  export type Outbound = ListNotesResponseCustomMappings$Outbound;
}

export function listNotesResponseCustomMappingsToJSON(
  listNotesResponseCustomMappings: ListNotesResponseCustomMappings,
): string {
  return JSON.stringify(
    ListNotesResponseCustomMappings$outboundSchema.parse(
      listNotesResponseCustomMappings,
    ),
  );
}

export function listNotesResponseCustomMappingsFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponseCustomMappings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponseCustomMappings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponseCustomMappings' from JSON`,
  );
}

/** @internal */
export const ListNotesResponseExtendPaths$inboundSchema: z.ZodType<
  ListNotesResponseExtendPaths,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/** @internal */
export type ListNotesResponseExtendPaths$Outbound = {
  path: string;
  value?: any | undefined;
};

/** @internal */
export const ListNotesResponseExtendPaths$outboundSchema: z.ZodType<
  ListNotesResponseExtendPaths$Outbound,
  z.ZodTypeDef,
  ListNotesResponseExtendPaths
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNotesResponseExtendPaths$ {
  /** @deprecated use `ListNotesResponseExtendPaths$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponseExtendPaths$inboundSchema;
  /** @deprecated use `ListNotesResponseExtendPaths$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponseExtendPaths$outboundSchema;
  /** @deprecated use `ListNotesResponseExtendPaths$Outbound` instead. */
  export type Outbound = ListNotesResponseExtendPaths$Outbound;
}

export function listNotesResponseExtendPathsToJSON(
  listNotesResponseExtendPaths: ListNotesResponseExtendPaths,
): string {
  return JSON.stringify(
    ListNotesResponseExtendPaths$outboundSchema.parse(
      listNotesResponseExtendPaths,
    ),
  );
}

export function listNotesResponseExtendPathsFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponseExtendPaths, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponseExtendPaths$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponseExtendPaths' from JSON`,
  );
}

/** @internal */
export const ListNotesResponsePassThrough$inboundSchema: z.ZodType<
  ListNotesResponsePassThrough,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  operation_id: z.string().optional(),
  extend_object: z.record(z.any()).optional(),
  extend_paths: z.array(
    z.lazy(() => ListNotesResponseExtendPaths$inboundSchema),
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
export type ListNotesResponsePassThrough$Outbound = {
  service_id: string;
  operation_id?: string | undefined;
  extend_object?: { [k: string]: any } | undefined;
  extend_paths?: Array<ListNotesResponseExtendPaths$Outbound> | undefined;
};

/** @internal */
export const ListNotesResponsePassThrough$outboundSchema: z.ZodType<
  ListNotesResponsePassThrough$Outbound,
  z.ZodTypeDef,
  ListNotesResponsePassThrough
> = z.object({
  serviceId: z.string(),
  operationId: z.string().optional(),
  extendObject: z.record(z.any()).optional(),
  extendPaths: z.array(
    z.lazy(() => ListNotesResponseExtendPaths$outboundSchema),
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
export namespace ListNotesResponsePassThrough$ {
  /** @deprecated use `ListNotesResponsePassThrough$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponsePassThrough$inboundSchema;
  /** @deprecated use `ListNotesResponsePassThrough$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponsePassThrough$outboundSchema;
  /** @deprecated use `ListNotesResponsePassThrough$Outbound` instead. */
  export type Outbound = ListNotesResponsePassThrough$Outbound;
}

export function listNotesResponsePassThroughToJSON(
  listNotesResponsePassThrough: ListNotesResponsePassThrough,
): string {
  return JSON.stringify(
    ListNotesResponsePassThrough$outboundSchema.parse(
      listNotesResponsePassThrough,
    ),
  );
}

export function listNotesResponsePassThroughFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponsePassThrough, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponsePassThrough$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponsePassThrough' from JSON`,
  );
}

/** @internal */
export const ListNotesResponseData$inboundSchema: z.ZodType<
  ListNotesResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  title: z.nullable(z.string()).optional(),
  content: z.nullable(z.string()).optional(),
  owner_id: z.nullable(z.string()).optional(),
  contact_id: z.nullable(z.string()).optional(),
  company_id: z.nullable(z.string()).optional(),
  opportunity_id: z.nullable(z.string()).optional(),
  lead_id: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  custom_mappings: z.nullable(
    z.lazy(() => ListNotesResponseCustomMappings$inboundSchema),
  ).optional(),
  updated_by: z.nullable(z.string()).optional(),
  created_by: z.nullable(z.string()).optional(),
  updated_at: z.nullable(z.string()).optional(),
  created_at: z.nullable(z.string()).optional(),
  pass_through: z.array(
    z.lazy(() => ListNotesResponsePassThrough$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "owner_id": "ownerId",
    "contact_id": "contactId",
    "company_id": "companyId",
    "opportunity_id": "opportunityId",
    "lead_id": "leadId",
    "custom_mappings": "customMappings",
    "updated_by": "updatedBy",
    "created_by": "createdBy",
    "updated_at": "updatedAt",
    "created_at": "createdAt",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type ListNotesResponseData$Outbound = {
  id?: string | undefined;
  title?: string | null | undefined;
  content?: string | null | undefined;
  owner_id?: string | null | undefined;
  contact_id?: string | null | undefined;
  company_id?: string | null | undefined;
  opportunity_id?: string | null | undefined;
  lead_id?: string | null | undefined;
  active?: boolean | null | undefined;
  custom_mappings?: ListNotesResponseCustomMappings$Outbound | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<ListNotesResponsePassThrough$Outbound> | undefined;
};

/** @internal */
export const ListNotesResponseData$outboundSchema: z.ZodType<
  ListNotesResponseData$Outbound,
  z.ZodTypeDef,
  ListNotesResponseData
> = z.object({
  id: z.string().optional(),
  title: z.nullable(z.string()).optional(),
  content: z.nullable(z.string()).optional(),
  ownerId: z.nullable(z.string()).optional(),
  contactId: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  opportunityId: z.nullable(z.string()).optional(),
  leadId: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  customMappings: z.nullable(
    z.lazy(() => ListNotesResponseCustomMappings$outboundSchema),
  ).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.string()).optional(),
  passThrough: z.array(
    z.lazy(() => ListNotesResponsePassThrough$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    ownerId: "owner_id",
    contactId: "contact_id",
    companyId: "company_id",
    opportunityId: "opportunity_id",
    leadId: "lead_id",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNotesResponseData$ {
  /** @deprecated use `ListNotesResponseData$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponseData$inboundSchema;
  /** @deprecated use `ListNotesResponseData$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponseData$outboundSchema;
  /** @deprecated use `ListNotesResponseData$Outbound` instead. */
  export type Outbound = ListNotesResponseData$Outbound;
}

export function listNotesResponseDataToJSON(
  listNotesResponseData: ListNotesResponseData,
): string {
  return JSON.stringify(
    ListNotesResponseData$outboundSchema.parse(listNotesResponseData),
  );
}

export function listNotesResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponseData' from JSON`,
  );
}

/** @internal */
export const ListNotesResponseCursors$inboundSchema: z.ZodType<
  ListNotesResponseCursors,
  z.ZodTypeDef,
  unknown
> = z.object({
  previous: z.nullable(z.string()).optional(),
  current: z.nullable(z.string()).optional(),
  next: z.nullable(z.string()).optional(),
});

/** @internal */
export type ListNotesResponseCursors$Outbound = {
  previous?: string | null | undefined;
  current?: string | null | undefined;
  next?: string | null | undefined;
};

/** @internal */
export const ListNotesResponseCursors$outboundSchema: z.ZodType<
  ListNotesResponseCursors$Outbound,
  z.ZodTypeDef,
  ListNotesResponseCursors
> = z.object({
  previous: z.nullable(z.string()).optional(),
  current: z.nullable(z.string()).optional(),
  next: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNotesResponseCursors$ {
  /** @deprecated use `ListNotesResponseCursors$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponseCursors$inboundSchema;
  /** @deprecated use `ListNotesResponseCursors$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponseCursors$outboundSchema;
  /** @deprecated use `ListNotesResponseCursors$Outbound` instead. */
  export type Outbound = ListNotesResponseCursors$Outbound;
}

export function listNotesResponseCursorsToJSON(
  listNotesResponseCursors: ListNotesResponseCursors,
): string {
  return JSON.stringify(
    ListNotesResponseCursors$outboundSchema.parse(listNotesResponseCursors),
  );
}

export function listNotesResponseCursorsFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponseCursors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponseCursors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponseCursors' from JSON`,
  );
}

/** @internal */
export const ListNotesResponseMeta$inboundSchema: z.ZodType<
  ListNotesResponseMeta,
  z.ZodTypeDef,
  unknown
> = z.object({
  items_on_page: z.number().int().optional(),
  cursors: z.lazy(() => ListNotesResponseCursors$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "items_on_page": "itemsOnPage",
  });
});

/** @internal */
export type ListNotesResponseMeta$Outbound = {
  items_on_page?: number | undefined;
  cursors?: ListNotesResponseCursors$Outbound | undefined;
};

/** @internal */
export const ListNotesResponseMeta$outboundSchema: z.ZodType<
  ListNotesResponseMeta$Outbound,
  z.ZodTypeDef,
  ListNotesResponseMeta
> = z.object({
  itemsOnPage: z.number().int().optional(),
  cursors: z.lazy(() => ListNotesResponseCursors$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    itemsOnPage: "items_on_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNotesResponseMeta$ {
  /** @deprecated use `ListNotesResponseMeta$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponseMeta$inboundSchema;
  /** @deprecated use `ListNotesResponseMeta$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponseMeta$outboundSchema;
  /** @deprecated use `ListNotesResponseMeta$Outbound` instead. */
  export type Outbound = ListNotesResponseMeta$Outbound;
}

export function listNotesResponseMetaToJSON(
  listNotesResponseMeta: ListNotesResponseMeta,
): string {
  return JSON.stringify(
    ListNotesResponseMeta$outboundSchema.parse(listNotesResponseMeta),
  );
}

export function listNotesResponseMetaFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponseMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponseMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponseMeta' from JSON`,
  );
}

/** @internal */
export const ListNotesResponseLinks$inboundSchema: z.ZodType<
  ListNotesResponseLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  previous: z.nullable(z.string()).optional(),
  current: z.string().optional(),
  next: z.nullable(z.string()).optional(),
});

/** @internal */
export type ListNotesResponseLinks$Outbound = {
  previous?: string | null | undefined;
  current?: string | undefined;
  next?: string | null | undefined;
};

/** @internal */
export const ListNotesResponseLinks$outboundSchema: z.ZodType<
  ListNotesResponseLinks$Outbound,
  z.ZodTypeDef,
  ListNotesResponseLinks
> = z.object({
  previous: z.nullable(z.string()).optional(),
  current: z.string().optional(),
  next: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNotesResponseLinks$ {
  /** @deprecated use `ListNotesResponseLinks$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponseLinks$inboundSchema;
  /** @deprecated use `ListNotesResponseLinks$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponseLinks$outboundSchema;
  /** @deprecated use `ListNotesResponseLinks$Outbound` instead. */
  export type Outbound = ListNotesResponseLinks$Outbound;
}

export function listNotesResponseLinksToJSON(
  listNotesResponseLinks: ListNotesResponseLinks,
): string {
  return JSON.stringify(
    ListNotesResponseLinks$outboundSchema.parse(listNotesResponseLinks),
  );
}

export function listNotesResponseLinksFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponseLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponseLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponseLinks' from JSON`,
  );
}

/** @internal */
export const ListNotesResponse$inboundSchema: z.ZodType<
  ListNotesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(z.lazy(() => ListNotesResponseData$inboundSchema)),
  meta: z.lazy(() => ListNotesResponseMeta$inboundSchema).optional(),
  links: z.lazy(() => ListNotesResponseLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type ListNotesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<ListNotesResponseData$Outbound>;
  meta?: ListNotesResponseMeta$Outbound | undefined;
  links?: ListNotesResponseLinks$Outbound | undefined;
};

/** @internal */
export const ListNotesResponse$outboundSchema: z.ZodType<
  ListNotesResponse$Outbound,
  z.ZodTypeDef,
  ListNotesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(z.lazy(() => ListNotesResponseData$outboundSchema)),
  meta: z.lazy(() => ListNotesResponseMeta$outboundSchema).optional(),
  links: z.lazy(() => ListNotesResponseLinks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNotesResponse$ {
  /** @deprecated use `ListNotesResponse$inboundSchema` instead. */
  export const inboundSchema = ListNotesResponse$inboundSchema;
  /** @deprecated use `ListNotesResponse$outboundSchema` instead. */
  export const outboundSchema = ListNotesResponse$outboundSchema;
  /** @deprecated use `ListNotesResponse$Outbound` instead. */
  export type Outbound = ListNotesResponse$Outbound;
}

export function listNotesResponseToJSON(
  listNotesResponse: ListNotesResponse,
): string {
  return JSON.stringify(
    ListNotesResponse$outboundSchema.parse(listNotesResponse),
  );
}

export function listNotesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListNotesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNotesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNotesResponse' from JSON`,
  );
}
