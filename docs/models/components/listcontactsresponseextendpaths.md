# ListContactsResponseExtendPaths

## Example Usage

```typescript
import { ListContactsResponseExtendPaths } from "apideck/models/components";

let value: ListContactsResponseExtendPaths = {
  path: "$.nested.property",
  value: {
    "TaxClassificationRef": {
      "value": "EUC-99990201-V1-00020000",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           | Example                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                                                                                | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | A JSONPath string that indicates the specific location within the data structure where the value should be applied. This path is crucial for accurately targeting data modifications. | $.nested.property                                                                                                                                                                     |
| `value`                                                                                                                                                                               | *any*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                    | The value to be set at the specified JSONPath. This can be of any data type, allowing for flexible data updates based on the path provided.                                           | {<br/>"TaxClassificationRef": {<br/>"value": "EUC-99990201-V1-00020000"<br/>}<br/>}                                                                                                   |