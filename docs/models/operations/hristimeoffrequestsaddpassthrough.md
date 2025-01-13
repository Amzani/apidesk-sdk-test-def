# HrisTimeOffRequestsAddPassThrough

## Example Usage

```typescript
import { HrisTimeOffRequestsAddPassThrough } from "apideck/models/operations";

let value: HrisTimeOffRequestsAddPassThrough = {
  serviceId: "<id>",
  extendPaths: [
    {
      path: "$.nested.property",
      value: {
        "TaxClassificationRef": {
          "value": "EUC-99990201-V1-00020000",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Identifier for the service to which this pass_through should be applied.                                                                                                    |
| `operationId`                                                                                                                                                               | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | Optional identifier for a workflow operation to which this pass_through should be applied. This is useful for Unify calls that are making more than one downstream request. |
| `extendObject`                                                                                                                                                              | Record<string, *any*>                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                          | Simple object allowing any properties for direct extension.                                                                                                                 |
| `extendPaths`                                                                                                                                                               | [operations.HrisTimeOffRequestsAddExtendPaths](../../models/operations/hristimeoffrequestsaddextendpaths.md)[]                                                              | :heavy_minus_sign:                                                                                                                                                          | Array of objects for structured data modifications via paths.                                                                                                               |