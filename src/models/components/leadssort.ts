/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The field on which to sort the Leads
 */
export const LeadsSortBy = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  Name: "name",
  FirstName: "first_name",
  LastName: "last_name",
  Email: "email",
} as const;
/**
 * The field on which to sort the Leads
 */
export type LeadsSortBy = ClosedEnum<typeof LeadsSortBy>;

/**
 * The direction in which to sort the results
 */
export const LeadsSortDirection = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The direction in which to sort the results
 */
export type LeadsSortDirection = ClosedEnum<typeof LeadsSortDirection>;

export type LeadsSort = {
  /**
   * The field on which to sort the Leads
   */
  by?: LeadsSortBy | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: LeadsSortDirection | undefined;
};

/** @internal */
export const LeadsSortBy$inboundSchema: z.ZodNativeEnum<typeof LeadsSortBy> = z
  .nativeEnum(LeadsSortBy);

/** @internal */
export const LeadsSortBy$outboundSchema: z.ZodNativeEnum<typeof LeadsSortBy> =
  LeadsSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsSortBy$ {
  /** @deprecated use `LeadsSortBy$inboundSchema` instead. */
  export const inboundSchema = LeadsSortBy$inboundSchema;
  /** @deprecated use `LeadsSortBy$outboundSchema` instead. */
  export const outboundSchema = LeadsSortBy$outboundSchema;
}

/** @internal */
export const LeadsSortDirection$inboundSchema: z.ZodNativeEnum<
  typeof LeadsSortDirection
> = z.nativeEnum(LeadsSortDirection);

/** @internal */
export const LeadsSortDirection$outboundSchema: z.ZodNativeEnum<
  typeof LeadsSortDirection
> = LeadsSortDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsSortDirection$ {
  /** @deprecated use `LeadsSortDirection$inboundSchema` instead. */
  export const inboundSchema = LeadsSortDirection$inboundSchema;
  /** @deprecated use `LeadsSortDirection$outboundSchema` instead. */
  export const outboundSchema = LeadsSortDirection$outboundSchema;
}

/** @internal */
export const LeadsSort$inboundSchema: z.ZodType<
  LeadsSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: LeadsSortBy$inboundSchema.optional(),
  direction: LeadsSortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type LeadsSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const LeadsSort$outboundSchema: z.ZodType<
  LeadsSort$Outbound,
  z.ZodTypeDef,
  LeadsSort
> = z.object({
  by: LeadsSortBy$outboundSchema.optional(),
  direction: LeadsSortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsSort$ {
  /** @deprecated use `LeadsSort$inboundSchema` instead. */
  export const inboundSchema = LeadsSort$inboundSchema;
  /** @deprecated use `LeadsSort$outboundSchema` instead. */
  export const outboundSchema = LeadsSort$outboundSchema;
  /** @deprecated use `LeadsSort$Outbound` instead. */
  export type Outbound = LeadsSort$Outbound;
}

export function leadsSortToJSON(leadsSort: LeadsSort): string {
  return JSON.stringify(LeadsSort$outboundSchema.parse(leadsSort));
}

export function leadsSortFromJSON(
  jsonString: string,
): SafeParseResult<LeadsSort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadsSort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadsSort' from JSON`,
  );
}
