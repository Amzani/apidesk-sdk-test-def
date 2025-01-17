/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The field on which to sort the Companies
 */
export const By = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  Name: "name",
} as const;
/**
 * The field on which to sort the Companies
 */
export type By = ClosedEnum<typeof By>;

/**
 * The direction in which to sort the results
 */
export const Direction = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The direction in which to sort the results
 */
export type Direction = ClosedEnum<typeof Direction>;

export type CompaniesSort = {
  /**
   * The field on which to sort the Companies
   */
  by?: By | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: Direction | undefined;
};

/** @internal */
export const By$inboundSchema: z.ZodNativeEnum<typeof By> = z.nativeEnum(By);

/** @internal */
export const By$outboundSchema: z.ZodNativeEnum<typeof By> = By$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace By$ {
  /** @deprecated use `By$inboundSchema` instead. */
  export const inboundSchema = By$inboundSchema;
  /** @deprecated use `By$outboundSchema` instead. */
  export const outboundSchema = By$outboundSchema;
}

/** @internal */
export const Direction$inboundSchema: z.ZodNativeEnum<typeof Direction> = z
  .nativeEnum(Direction);

/** @internal */
export const Direction$outboundSchema: z.ZodNativeEnum<typeof Direction> =
  Direction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Direction$ {
  /** @deprecated use `Direction$inboundSchema` instead. */
  export const inboundSchema = Direction$inboundSchema;
  /** @deprecated use `Direction$outboundSchema` instead. */
  export const outboundSchema = Direction$outboundSchema;
}

/** @internal */
export const CompaniesSort$inboundSchema: z.ZodType<
  CompaniesSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: By$inboundSchema.optional(),
  direction: Direction$inboundSchema.default("asc"),
});

/** @internal */
export type CompaniesSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const CompaniesSort$outboundSchema: z.ZodType<
  CompaniesSort$Outbound,
  z.ZodTypeDef,
  CompaniesSort
> = z.object({
  by: By$outboundSchema.optional(),
  direction: Direction$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesSort$ {
  /** @deprecated use `CompaniesSort$inboundSchema` instead. */
  export const inboundSchema = CompaniesSort$inboundSchema;
  /** @deprecated use `CompaniesSort$outboundSchema` instead. */
  export const outboundSchema = CompaniesSort$outboundSchema;
  /** @deprecated use `CompaniesSort$Outbound` instead. */
  export type Outbound = CompaniesSort$Outbound;
}

export function companiesSortToJSON(companiesSort: CompaniesSort): string {
  return JSON.stringify(CompaniesSort$outboundSchema.parse(companiesSort));
}

export function companiesSortFromJSON(
  jsonString: string,
): SafeParseResult<CompaniesSort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompaniesSort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompaniesSort' from JSON`,
  );
}
