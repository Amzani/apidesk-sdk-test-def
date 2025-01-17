/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Indicates the associated currency for an amount of money within the pipeline. This field uses ISO 4217 currency codes (e.g., USD, EUR) to standardize financial data across different regions and systems. While not mandatory, specifying a currency is essential for pipelines that involve financial transactions, ensuring that all monetary values are correctly interpreted and reported. This is particularly useful in multi-national operations where currency consistency is critical.
 */
export const PipelineCreateRequestCurrency = {
  UnknownCurrency: "UNKNOWN_CURRENCY",
  Aed: "AED",
  Afn: "AFN",
  All: "ALL",
  Amd: "AMD",
  Ang: "ANG",
  Aoa: "AOA",
  Ars: "ARS",
  Aud: "AUD",
  Awg: "AWG",
  Azn: "AZN",
  Bam: "BAM",
  Bbd: "BBD",
  Bdt: "BDT",
  Bgn: "BGN",
  Bhd: "BHD",
  Bif: "BIF",
  Bmd: "BMD",
  Bnd: "BND",
  Bob: "BOB",
  Bov: "BOV",
  Brl: "BRL",
  Bsd: "BSD",
  Btn: "BTN",
  Bwp: "BWP",
  Byr: "BYR",
  Bzd: "BZD",
  Cad: "CAD",
  Cdf: "CDF",
  Che: "CHE",
  Chf: "CHF",
  Chw: "CHW",
  Clf: "CLF",
  Clp: "CLP",
  Cny: "CNY",
  Cop: "COP",
  Cou: "COU",
  Crc: "CRC",
  Cuc: "CUC",
  Cup: "CUP",
  Cve: "CVE",
  Czk: "CZK",
  Djf: "DJF",
  Dkk: "DKK",
  Dop: "DOP",
  Dzd: "DZD",
  Egp: "EGP",
  Ern: "ERN",
  Etb: "ETB",
  Eur: "EUR",
  Fjd: "FJD",
  Fkp: "FKP",
  Gbp: "GBP",
  Gel: "GEL",
  Ghs: "GHS",
  Gip: "GIP",
  Gmd: "GMD",
  Gnf: "GNF",
  Gtq: "GTQ",
  Gyd: "GYD",
  Hkd: "HKD",
  Hnl: "HNL",
  Hrk: "HRK",
  Htg: "HTG",
  Huf: "HUF",
  Idr: "IDR",
  Ils: "ILS",
  Inr: "INR",
  Iqd: "IQD",
  Irr: "IRR",
  Isk: "ISK",
  Jmd: "JMD",
  Jod: "JOD",
  Jpy: "JPY",
  Kes: "KES",
  Kgs: "KGS",
  Khr: "KHR",
  Kmf: "KMF",
  Kpw: "KPW",
  Krw: "KRW",
  Kwd: "KWD",
  Kyd: "KYD",
  Kzt: "KZT",
  Lak: "LAK",
  Lbp: "LBP",
  Lkr: "LKR",
  Lrd: "LRD",
  Lsl: "LSL",
  Ltl: "LTL",
  Lvl: "LVL",
  Lyd: "LYD",
  Mad: "MAD",
  Mdl: "MDL",
  Mga: "MGA",
  Mkd: "MKD",
  Mmk: "MMK",
  Mnt: "MNT",
  Mop: "MOP",
  Mro: "MRO",
  Mur: "MUR",
  Mvr: "MVR",
  Mwk: "MWK",
  Mxn: "MXN",
  Mxv: "MXV",
  Myr: "MYR",
  Mzn: "MZN",
  Nad: "NAD",
  Ngn: "NGN",
  Nio: "NIO",
  Nok: "NOK",
  Npr: "NPR",
  Nzd: "NZD",
  Omr: "OMR",
  Pab: "PAB",
  Pen: "PEN",
  Pgk: "PGK",
  Php: "PHP",
  Pkr: "PKR",
  Pln: "PLN",
  Pyg: "PYG",
  Qar: "QAR",
  Ron: "RON",
  Rsd: "RSD",
  Rub: "RUB",
  Rwf: "RWF",
  Sar: "SAR",
  Sbd: "SBD",
  Scr: "SCR",
  Sdg: "SDG",
  Sek: "SEK",
  Sgd: "SGD",
  Shp: "SHP",
  Sll: "SLL",
  Sos: "SOS",
  Srd: "SRD",
  Ssp: "SSP",
  Std: "STD",
  Svc: "SVC",
  Syp: "SYP",
  Szl: "SZL",
  Thb: "THB",
  Tjs: "TJS",
  Tmt: "TMT",
  Tnd: "TND",
  Top: "TOP",
  Trc: "TRC",
  Try: "TRY",
  Ttd: "TTD",
  Twd: "TWD",
  Tzs: "TZS",
  Uah: "UAH",
  Ugx: "UGX",
  Usd: "USD",
  Usn: "USN",
  Uss: "USS",
  Uyi: "UYI",
  Uyu: "UYU",
  Uzs: "UZS",
  Vef: "VEF",
  Vnd: "VND",
  Vuv: "VUV",
  Wst: "WST",
  Xaf: "XAF",
  Xag: "XAG",
  Xau: "XAU",
  Xba: "XBA",
  Xbb: "XBB",
  Xbc: "XBC",
  Xbd: "XBD",
  Xcd: "XCD",
  Xdr: "XDR",
  Xof: "XOF",
  Xpd: "XPD",
  Xpf: "XPF",
  Xpt: "XPT",
  Xts: "XTS",
  Xxx: "XXX",
  Yer: "YER",
  Zar: "ZAR",
  Zmk: "ZMK",
  Zmw: "ZMW",
  Btc: "BTC",
  Eth: "ETH",
} as const;
/**
 * Indicates the associated currency for an amount of money within the pipeline. This field uses ISO 4217 currency codes (e.g., USD, EUR) to standardize financial data across different regions and systems. While not mandatory, specifying a currency is essential for pipelines that involve financial transactions, ensuring that all monetary values are correctly interpreted and reported. This is particularly useful in multi-national operations where currency consistency is critical.
 */
export type PipelineCreateRequestCurrency = ClosedEnum<
  typeof PipelineCreateRequestCurrency
>;

export type PipelineCreateRequestStages = {
  /**
   * The descriptive name assigned to each stage within the pipeline. This name should clearly convey the purpose or focus of the stage, aiding users in quickly understanding the stage's role within the pipeline. Naming conventions should be consistent and meaningful to ensure clarity and ease of use across the CRM system.
   */
  name?: string | null | undefined;
  /**
   * The name or label assigned to a specific stage within the pipeline. This value is used to identify and differentiate stages in the pipeline, allowing users to track the progress of opportunities as they move through various phases. It is crucial for organizing and managing the sales process effectively, ensuring that each stage is clearly defined and understood by all team members.
   */
  value?: string | null | undefined;
  /**
   * An integer representing the likelihood, expressed as a percentage, that an opportunity will be successfully closed at this stage of the pipeline. Valid values range from 0 to 100, where 0 indicates no chance of winning and 100 indicates certainty. This metric helps sales teams prioritize efforts and forecast potential revenue by assessing the probability of success at different stages.
   */
  winProbability?: number | null | undefined;
  /**
   * A numerical value that determines the sequence in which this pipeline stage appears in the user interface. Lower numbers typically indicate earlier stages in the pipeline, while higher numbers represent later stages. This ordering is essential for visualizing the sales process flow and ensuring that stages are presented in a logical and intuitive manner for users.
   */
  displayOrder?: number | null | undefined;
};

export type PipelineCreateRequestExtendPaths = {
  /**
   * A JSONPath string that specifies the exact location within the user record where the value should be applied. This is essential for making precise updates to nested fields, ensuring that changes are made only to the intended parts of the data structure. The path must be valid and correspond to an existing field within the user record.
   */
  path: string;
  /**
   * This property represents the specific value that you wish to assign to a designated path within the user record. It can be of any data type, such as a string, number, boolean, or object, depending on the field being updated. The flexibility of this property allows for a wide range of updates, from simple text changes to complex data structures. In the context of the `usersUpdate` operation, this property is crucial for specifying the exact data modification you intend to make, ensuring that only the targeted fields are altered without affecting other data. Proper validation should be applied to ensure the value is compatible with the field's expected data type and business rules. Common use cases include updating user contact information, preferences, or custom attributes specific to your CRM's schema.
   */
  value?: any | undefined;
};

export type PipelineCreateRequestPassThrough = {
  /**
   * The unique identifier for the specific service to which this pass_through should be applied. This is crucial for directing the update operation to the correct service within the CRM system, ensuring that the modifications are executed in the appropriate context. It must be a valid service ID that corresponds to an active service integration, and it is required for the operation to proceed.
   */
  serviceId: string;
  /**
   * An optional identifier for a specific workflow operation within the CRM system to which this pass_through should be applied. This is particularly useful for Unify calls that involve multiple downstream requests, allowing for precise targeting and execution of specific operations. If provided, it should match an existing operation ID to ensure correct processing.
   */
  operationId?: string | undefined;
  /**
   * A flexible object that allows for the inclusion of any additional properties needed for direct extension of the user record. This can be used to add custom fields or metadata that are not part of the standard user schema, providing a way to tailor the user data to specific business needs. The structure of this object should align with the CRM's data model to ensure compatibility.
   */
  extendObject?: { [k: string]: any } | undefined;
  /**
   * An array of objects designed for structured data modifications via specified paths. This allows for precise updates to nested data structures within the user record, enabling complex modifications without altering unrelated data. Each object in the array should define a clear path and value to be applied, ensuring targeted updates.
   */
  extendPaths?: Array<PipelineCreateRequestExtendPaths> | undefined;
};

export type PipelineCreateRequest = {
  /**
   * The unique identifier of the Pipeline. This ID is crucial for identifying which specific pipeline you wish to update within the CRM system. It must match an existing pipeline's ID to ensure the correct data is modified. Typically, this ID is generated by the system when the pipeline is created and is immutable. It is not required in the request body for this operation, as it is specified in the path parameter.
   */
  id?: string | undefined;
  /**
   * The name of the Pipeline. This is a mandatory field that serves as the primary label for the pipeline within the CRM. It should be descriptive enough to convey the purpose or stage of the pipeline, aiding users in quickly identifying and managing different sales or project processes. The name must be unique within the context of the CRM to avoid confusion and ensure accurate reporting and tracking.
   */
  name: string;
  /**
   * Indicates the associated currency for an amount of money within the pipeline. This field uses ISO 4217 currency codes (e.g., USD, EUR) to standardize financial data across different regions and systems. While not mandatory, specifying a currency is essential for pipelines that involve financial transactions, ensuring that all monetary values are correctly interpreted and reported. This is particularly useful in multi-national operations where currency consistency is critical.
   */
  currency?: PipelineCreateRequestCurrency | null | undefined;
  /**
   * Whether the Pipeline is archived or not. This boolean flag indicates the current status of the pipeline, where 'true' means the pipeline is archived and no longer active in day-to-day operations. Archiving a pipeline can help declutter the CRM interface by hiding pipelines that are no longer in use, while still retaining their data for historical analysis or compliance purposes. This field is optional but useful for lifecycle management of pipelines.
   */
  archived?: boolean | undefined;
  /**
   * Whether the Pipeline is active or not. This boolean field determines if the pipeline is currently in use and visible to users within the CRM. An active pipeline is one that is part of ongoing operations, such as sales processes or project management workflows. Setting this field to 'false' can help manage resources by deactivating pipelines that are temporarily not needed, without archiving them completely. This field is optional and can be used to toggle the operational status of a pipeline.
   */
  active?: boolean | undefined;
  /**
   * Defines the sequence in which the pipeline appears within the user interface. This property is crucial for organizing multiple pipelines in a logical order, enhancing user navigation and workflow efficiency. Typically, a lower number indicates a higher priority or earlier position in the list. Adjusting this value can help prioritize certain pipelines over others based on business needs or user preferences.
   */
  displayOrder?: number | null | undefined;
  /**
   * Indicates whether the pipeline has the win probability feature activated. This feature is used to estimate the likelihood of successfully closing deals within this pipeline, providing valuable insights for sales forecasting and strategy planning. Enabling this feature can help sales teams focus on high-probability deals, optimizing resource allocation and effort.
   */
  winProbabilityEnabled?: boolean | undefined;
  /**
   * An array representing the various stages within the pipeline. Each stage is a critical step in the sales or project process, and defining these stages helps in tracking progress and managing tasks effectively. This property allows for the customization of the pipeline to fit specific business processes or sales cycles.
   */
  stages?: Array<PipelineCreateRequestStages> | undefined;
  /**
   * The `pass_through` property is an array that allows you to include service-specific custom data or structured modifications directly within the request body. This is particularly useful when updating resources in a CRM system where additional, non-standard data needs to be sent to the service. By using this property, you can ensure that any unique requirements of the service are met without altering the core API structure. It supports flexibility in handling diverse data formats required by different services.
   */
  passThrough?: Array<PipelineCreateRequestPassThrough> | undefined;
};

/** @internal */
export const PipelineCreateRequestCurrency$inboundSchema: z.ZodNativeEnum<
  typeof PipelineCreateRequestCurrency
> = z.nativeEnum(PipelineCreateRequestCurrency);

/** @internal */
export const PipelineCreateRequestCurrency$outboundSchema: z.ZodNativeEnum<
  typeof PipelineCreateRequestCurrency
> = PipelineCreateRequestCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PipelineCreateRequestCurrency$ {
  /** @deprecated use `PipelineCreateRequestCurrency$inboundSchema` instead. */
  export const inboundSchema = PipelineCreateRequestCurrency$inboundSchema;
  /** @deprecated use `PipelineCreateRequestCurrency$outboundSchema` instead. */
  export const outboundSchema = PipelineCreateRequestCurrency$outboundSchema;
}

/** @internal */
export const PipelineCreateRequestStages$inboundSchema: z.ZodType<
  PipelineCreateRequestStages,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  win_probability: z.nullable(z.number().int()).optional(),
  display_order: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "win_probability": "winProbability",
    "display_order": "displayOrder",
  });
});

/** @internal */
export type PipelineCreateRequestStages$Outbound = {
  name?: string | null | undefined;
  value?: string | null | undefined;
  win_probability?: number | null | undefined;
  display_order?: number | null | undefined;
};

/** @internal */
export const PipelineCreateRequestStages$outboundSchema: z.ZodType<
  PipelineCreateRequestStages$Outbound,
  z.ZodTypeDef,
  PipelineCreateRequestStages
> = z.object({
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  winProbability: z.nullable(z.number().int()).optional(),
  displayOrder: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    winProbability: "win_probability",
    displayOrder: "display_order",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PipelineCreateRequestStages$ {
  /** @deprecated use `PipelineCreateRequestStages$inboundSchema` instead. */
  export const inboundSchema = PipelineCreateRequestStages$inboundSchema;
  /** @deprecated use `PipelineCreateRequestStages$outboundSchema` instead. */
  export const outboundSchema = PipelineCreateRequestStages$outboundSchema;
  /** @deprecated use `PipelineCreateRequestStages$Outbound` instead. */
  export type Outbound = PipelineCreateRequestStages$Outbound;
}

export function pipelineCreateRequestStagesToJSON(
  pipelineCreateRequestStages: PipelineCreateRequestStages,
): string {
  return JSON.stringify(
    PipelineCreateRequestStages$outboundSchema.parse(
      pipelineCreateRequestStages,
    ),
  );
}

export function pipelineCreateRequestStagesFromJSON(
  jsonString: string,
): SafeParseResult<PipelineCreateRequestStages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PipelineCreateRequestStages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PipelineCreateRequestStages' from JSON`,
  );
}

/** @internal */
export const PipelineCreateRequestExtendPaths$inboundSchema: z.ZodType<
  PipelineCreateRequestExtendPaths,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/** @internal */
export type PipelineCreateRequestExtendPaths$Outbound = {
  path: string;
  value?: any | undefined;
};

/** @internal */
export const PipelineCreateRequestExtendPaths$outboundSchema: z.ZodType<
  PipelineCreateRequestExtendPaths$Outbound,
  z.ZodTypeDef,
  PipelineCreateRequestExtendPaths
> = z.object({
  path: z.string(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PipelineCreateRequestExtendPaths$ {
  /** @deprecated use `PipelineCreateRequestExtendPaths$inboundSchema` instead. */
  export const inboundSchema = PipelineCreateRequestExtendPaths$inboundSchema;
  /** @deprecated use `PipelineCreateRequestExtendPaths$outboundSchema` instead. */
  export const outboundSchema = PipelineCreateRequestExtendPaths$outboundSchema;
  /** @deprecated use `PipelineCreateRequestExtendPaths$Outbound` instead. */
  export type Outbound = PipelineCreateRequestExtendPaths$Outbound;
}

export function pipelineCreateRequestExtendPathsToJSON(
  pipelineCreateRequestExtendPaths: PipelineCreateRequestExtendPaths,
): string {
  return JSON.stringify(
    PipelineCreateRequestExtendPaths$outboundSchema.parse(
      pipelineCreateRequestExtendPaths,
    ),
  );
}

export function pipelineCreateRequestExtendPathsFromJSON(
  jsonString: string,
): SafeParseResult<PipelineCreateRequestExtendPaths, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PipelineCreateRequestExtendPaths$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PipelineCreateRequestExtendPaths' from JSON`,
  );
}

/** @internal */
export const PipelineCreateRequestPassThrough$inboundSchema: z.ZodType<
  PipelineCreateRequestPassThrough,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  operation_id: z.string().optional(),
  extend_object: z.record(z.any()).optional(),
  extend_paths: z.array(
    z.lazy(() => PipelineCreateRequestExtendPaths$inboundSchema),
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
export type PipelineCreateRequestPassThrough$Outbound = {
  service_id: string;
  operation_id?: string | undefined;
  extend_object?: { [k: string]: any } | undefined;
  extend_paths?: Array<PipelineCreateRequestExtendPaths$Outbound> | undefined;
};

/** @internal */
export const PipelineCreateRequestPassThrough$outboundSchema: z.ZodType<
  PipelineCreateRequestPassThrough$Outbound,
  z.ZodTypeDef,
  PipelineCreateRequestPassThrough
> = z.object({
  serviceId: z.string(),
  operationId: z.string().optional(),
  extendObject: z.record(z.any()).optional(),
  extendPaths: z.array(
    z.lazy(() => PipelineCreateRequestExtendPaths$outboundSchema),
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
export namespace PipelineCreateRequestPassThrough$ {
  /** @deprecated use `PipelineCreateRequestPassThrough$inboundSchema` instead. */
  export const inboundSchema = PipelineCreateRequestPassThrough$inboundSchema;
  /** @deprecated use `PipelineCreateRequestPassThrough$outboundSchema` instead. */
  export const outboundSchema = PipelineCreateRequestPassThrough$outboundSchema;
  /** @deprecated use `PipelineCreateRequestPassThrough$Outbound` instead. */
  export type Outbound = PipelineCreateRequestPassThrough$Outbound;
}

export function pipelineCreateRequestPassThroughToJSON(
  pipelineCreateRequestPassThrough: PipelineCreateRequestPassThrough,
): string {
  return JSON.stringify(
    PipelineCreateRequestPassThrough$outboundSchema.parse(
      pipelineCreateRequestPassThrough,
    ),
  );
}

export function pipelineCreateRequestPassThroughFromJSON(
  jsonString: string,
): SafeParseResult<PipelineCreateRequestPassThrough, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PipelineCreateRequestPassThrough$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PipelineCreateRequestPassThrough' from JSON`,
  );
}

/** @internal */
export const PipelineCreateRequest$inboundSchema: z.ZodType<
  PipelineCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  currency: z.nullable(PipelineCreateRequestCurrency$inboundSchema).optional(),
  archived: z.boolean().optional(),
  active: z.boolean().optional(),
  display_order: z.nullable(z.number().int()).optional(),
  win_probability_enabled: z.boolean().optional(),
  stages: z.array(z.lazy(() => PipelineCreateRequestStages$inboundSchema))
    .optional(),
  pass_through: z.array(
    z.lazy(() => PipelineCreateRequestPassThrough$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "display_order": "displayOrder",
    "win_probability_enabled": "winProbabilityEnabled",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type PipelineCreateRequest$Outbound = {
  id?: string | undefined;
  name: string;
  currency?: string | null | undefined;
  archived?: boolean | undefined;
  active?: boolean | undefined;
  display_order?: number | null | undefined;
  win_probability_enabled?: boolean | undefined;
  stages?: Array<PipelineCreateRequestStages$Outbound> | undefined;
  pass_through?: Array<PipelineCreateRequestPassThrough$Outbound> | undefined;
};

/** @internal */
export const PipelineCreateRequest$outboundSchema: z.ZodType<
  PipelineCreateRequest$Outbound,
  z.ZodTypeDef,
  PipelineCreateRequest
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  currency: z.nullable(PipelineCreateRequestCurrency$outboundSchema).optional(),
  archived: z.boolean().optional(),
  active: z.boolean().optional(),
  displayOrder: z.nullable(z.number().int()).optional(),
  winProbabilityEnabled: z.boolean().optional(),
  stages: z.array(z.lazy(() => PipelineCreateRequestStages$outboundSchema))
    .optional(),
  passThrough: z.array(
    z.lazy(() => PipelineCreateRequestPassThrough$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    displayOrder: "display_order",
    winProbabilityEnabled: "win_probability_enabled",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PipelineCreateRequest$ {
  /** @deprecated use `PipelineCreateRequest$inboundSchema` instead. */
  export const inboundSchema = PipelineCreateRequest$inboundSchema;
  /** @deprecated use `PipelineCreateRequest$outboundSchema` instead. */
  export const outboundSchema = PipelineCreateRequest$outboundSchema;
  /** @deprecated use `PipelineCreateRequest$Outbound` instead. */
  export type Outbound = PipelineCreateRequest$Outbound;
}

export function pipelineCreateRequestToJSON(
  pipelineCreateRequest: PipelineCreateRequest,
): string {
  return JSON.stringify(
    PipelineCreateRequest$outboundSchema.parse(pipelineCreateRequest),
  );
}

export function pipelineCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<PipelineCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PipelineCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PipelineCreateRequest' from JSON`,
  );
}
