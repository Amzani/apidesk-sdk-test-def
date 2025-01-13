# HrisEmployeesAddResponseBody

Employees

## Example Usage

```typescript
import { HrisEmployeesAddResponseBody } from "apideck/models/operations";

let value: HrisEmployeesAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "sage-hr",
  resource: "Employees",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | HTTP Response Status Code                                    | 200                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | HTTP Response Status                                         | OK                                                           |
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | sage-hr                                                      |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | Employees                                                    |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | add                                                          |
| `data`                                                       | [operations.UnifiedId](../../models/operations/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |