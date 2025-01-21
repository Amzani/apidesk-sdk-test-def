# GetUserResponsePassThrough

## Example Usage

```typescript
import { GetUserResponsePassThrough } from "apideck/models/components";

let value: GetUserResponsePassThrough = {
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

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                                                                              | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | A string identifier for the specific service to which the pass_through data should be applied. This ensures that the custom data is directed to the correct service when retrieving user information.    |
| `operationId`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | An optional string identifier for a specific workflow operation. This is useful when the user data retrieval involves multiple downstream requests, allowing for precise operation targeting.            |
| `extendObject`                                                                                                                                                                                           | Record<string, *any*>                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                       | An object that allows for direct extension with any properties. This is used to include additional, non-standard data fields in the user details response, providing flexibility in data representation. |
| `extendPaths`                                                                                                                                                                                            | [components.GetUserResponseExtendPaths](../../models/components/getuserresponseextendpaths.md)[]                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                       | An array of objects used for structured data modifications via paths. This allows for precise alterations to the user data structure, enabling customized data retrieval based on specific paths.        |