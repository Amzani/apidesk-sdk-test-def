/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Specify the field by which to sort the activities, such as 'date' or 'type'. This determines the order in which the activities are returned.
 */
export const ContactsSortBy = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  Name: "name",
  FirstName: "first_name",
  LastName: "last_name",
  Email: "email",
} as const;
/**
 * Specify the field by which to sort the activities, such as 'date' or 'type'. This determines the order in which the activities are returned.
 */
export type ContactsSortBy = ClosedEnum<typeof ContactsSortBy>;

/**
 * Specifies the order in which the results should be sorted. Use 'asc' for ascending order or 'desc' for descending order. This parameter helps in organizing the retrieved activities based on a specified field.
 */
export const ContactsSortDirection = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * Specifies the order in which the results should be sorted. Use 'asc' for ascending order or 'desc' for descending order. This parameter helps in organizing the retrieved activities based on a specified field.
 */
export type ContactsSortDirection = ClosedEnum<typeof ContactsSortDirection>;

export type ContactsSort = {
  /**
   * Specify the field by which to sort the activities, such as 'date' or 'type'. This determines the order in which the activities are returned.
   */
  by?: ContactsSortBy | undefined;
  /**
   * Specifies the order in which the results should be sorted. Use 'asc' for ascending order or 'desc' for descending order. This parameter helps in organizing the retrieved activities based on a specified field.
   */
  direction?: ContactsSortDirection | undefined;
};

/** @internal */
export const ContactsSortBy$inboundSchema: z.ZodNativeEnum<
  typeof ContactsSortBy
> = z.nativeEnum(ContactsSortBy);

/** @internal */
export const ContactsSortBy$outboundSchema: z.ZodNativeEnum<
  typeof ContactsSortBy
> = ContactsSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactsSortBy$ {
  /** @deprecated use `ContactsSortBy$inboundSchema` instead. */
  export const inboundSchema = ContactsSortBy$inboundSchema;
  /** @deprecated use `ContactsSortBy$outboundSchema` instead. */
  export const outboundSchema = ContactsSortBy$outboundSchema;
}

/** @internal */
export const ContactsSortDirection$inboundSchema: z.ZodNativeEnum<
  typeof ContactsSortDirection
> = z.nativeEnum(ContactsSortDirection);

/** @internal */
export const ContactsSortDirection$outboundSchema: z.ZodNativeEnum<
  typeof ContactsSortDirection
> = ContactsSortDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactsSortDirection$ {
  /** @deprecated use `ContactsSortDirection$inboundSchema` instead. */
  export const inboundSchema = ContactsSortDirection$inboundSchema;
  /** @deprecated use `ContactsSortDirection$outboundSchema` instead. */
  export const outboundSchema = ContactsSortDirection$outboundSchema;
}

/** @internal */
export const ContactsSort$inboundSchema: z.ZodType<
  ContactsSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: ContactsSortBy$inboundSchema.optional(),
  direction: ContactsSortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type ContactsSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const ContactsSort$outboundSchema: z.ZodType<
  ContactsSort$Outbound,
  z.ZodTypeDef,
  ContactsSort
> = z.object({
  by: ContactsSortBy$outboundSchema.optional(),
  direction: ContactsSortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactsSort$ {
  /** @deprecated use `ContactsSort$inboundSchema` instead. */
  export const inboundSchema = ContactsSort$inboundSchema;
  /** @deprecated use `ContactsSort$outboundSchema` instead. */
  export const outboundSchema = ContactsSort$outboundSchema;
  /** @deprecated use `ContactsSort$Outbound` instead. */
  export type Outbound = ContactsSort$Outbound;
}

export function contactsSortToJSON(contactsSort: ContactsSort): string {
  return JSON.stringify(ContactsSort$outboundSchema.parse(contactsSort));
}

export function contactsSortFromJSON(
  jsonString: string,
): SafeParseResult<ContactsSort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContactsSort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContactsSort' from JSON`,
  );
}
