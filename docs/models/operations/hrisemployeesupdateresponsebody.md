# HrisEmployeesUpdateResponseBody

Employees

## Example Usage

```typescript
import { HrisEmployeesUpdateResponseBody } from "apideck/models/operations";

let value: HrisEmployeesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "sage-hr",
  resource: "Employees",
  operation: "update",
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
| `service`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Apideck ID of service provider                                                                     | sage-hr                                                                                            |
| `resource`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unified API resource name                                                                          | Employees                                                                                          |
| `operation`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Operation performed                                                                                | update                                                                                             |
| `data`                                                                                             | [operations.HrisEmployeesUpdateUnifiedId](../../models/operations/hrisemployeesupdateunifiedid.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |