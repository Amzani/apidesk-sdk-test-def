# ListUsersResponsePassThrough

## Example Usage

```typescript
import { ListUsersResponsePassThrough } from "apideck/models/components";

let value: ListUsersResponsePassThrough = {
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

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | A string identifier for the specific service to which the pass_through data should be applied. This ensures that the custom data is directed to the correct service within the CRM system.                       |
| `operationId`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                               | An optional string identifier for a specific workflow operation. This is particularly useful for Unify calls that involve multiple downstream requests, allowing for precise targeting of the pass_through data. |
| `extendObject`                                                                                                                                                                                                   | Record<string, *any*>                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                               | An object that can contain any properties for direct extension. This allows developers to add custom fields or data structures to the response, providing additional flexibility in handling API responses.      |
| `extendPaths`                                                                                                                                                                                                    | [components.ListUsersResponseExtendPaths](../../models/components/listusersresponseextendpaths.md)[]                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                               | An array of objects used for structured data modifications via paths. This property enables developers to specify precise modifications to the data structure, enhancing the customization of the API response.  |