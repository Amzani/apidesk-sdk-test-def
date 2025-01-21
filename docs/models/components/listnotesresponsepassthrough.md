# ListNotesResponsePassThrough

## Example Usage

```typescript
import { ListNotesResponsePassThrough } from "apideck/models/components";

let value: ListNotesResponsePassThrough = {
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

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | A string identifier for the service to which the pass_through data should be applied. This ensures that the custom data is correctly routed to the appropriate service during the retrieval of notes.                         |
| `operationId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | An optional string identifier for a specific workflow operation. This is useful when the retrieval of notes involves multiple downstream requests, allowing for precise tracking and application of the pass_through data.    |
| `extendObject`                                                                                                                                                                                                                | Record<string, *any*>                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                            | An object that allows for direct extension with any properties. This flexible structure supports the inclusion of additional data fields that may be necessary for specific service integrations when retrieving notes.       |
| `extendPaths`                                                                                                                                                                                                                 | [components.ListNotesResponseExtendPaths](../../models/components/listnotesresponseextendpaths.md)[]                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                            | An array of objects used for structured data modifications via paths. This property enables precise alterations to the data structure, facilitating advanced customization and integration capabilities when accessing notes. |