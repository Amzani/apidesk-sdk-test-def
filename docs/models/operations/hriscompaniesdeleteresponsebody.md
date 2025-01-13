# HrisCompaniesDeleteResponseBody

Companies

## Example Usage

```typescript
import { HrisCompaniesDeleteResponseBody } from "apideck/models/operations";

let value: HrisCompaniesDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "undefined",
  resource: "Companies",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | HTTP Response Status Code                                                                          | 200                                                                                                |
| `status`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | HTTP Response Status                                                                               | OK                                                                                                 |
| `service`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Apideck ID of service provider                                                                     | undefined                                                                                          |
| `resource`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unified API resource name                                                                          | Companies                                                                                          |
| `operation`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Operation performed                                                                                | delete                                                                                             |
| `data`                                                                                             | [operations.HrisCompaniesDeleteUnifiedId](../../models/operations/hriscompaniesdeleteunifiedid.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |