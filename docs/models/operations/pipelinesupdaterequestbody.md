# PipelinesUpdateRequestBody

## Example Usage

```typescript
import { PipelinesUpdateRequestBody } from "apideck/models/operations";

let value: PipelinesUpdateRequestBody = {
  id: "default",
  name: "Sales Pipeline",
  currency: "USD",
  archived: false,
  active: false,
  displayOrder: 1,
  winProbabilityEnabled: true,
  stages: [
    {
      name: "Contract Sent",
      value: "CONTRACT_SENT",
      winProbability: 50,
      displayOrder: 1,
    },
  ],
  passThrough: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier of the Pipeline.                                                                                                                  | default                                                                                                                                                 |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The name of the Pipeline.                                                                                                                               | Sales Pipeline                                                                                                                                          |
| `currency`                                                                                                                                              | [operations.PipelinesUpdateCurrency](../../models/operations/pipelinesupdatecurrency.md)                                                                | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `archived`                                                                                                                                              | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the Pipeline is archived or not.                                                                                                                | false                                                                                                                                                   |
| `active`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the Pipeline is active or not.                                                                                                                  | false                                                                                                                                                   |
| `displayOrder`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The order in which the Pipeline is displayed in the UI.                                                                                                 | 1                                                                                                                                                       |
| `winProbabilityEnabled`                                                                                                                                 | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the Pipeline has win probability enabled or not.                                                                                                | true                                                                                                                                                    |
| `stages`                                                                                                                                                | [operations.PipelinesUpdateStages](../../models/operations/pipelinesupdatestages.md)[]                                                                  | :heavy_minus_sign:                                                                                                                                      | The Pipeline Stages.                                                                                                                                    |                                                                                                                                                         |
| `passThrough`                                                                                                                                           | [operations.PipelinesUpdatePassThrough](../../models/operations/pipelinesupdatepassthrough.md)[]                                                        | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |