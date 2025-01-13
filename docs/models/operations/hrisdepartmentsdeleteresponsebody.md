# HrisDepartmentsDeleteResponseBody

Departments

## Example Usage

```typescript
import { HrisDepartmentsDeleteResponseBody } from "apideck/models/operations";

let value: HrisDepartmentsDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "workday",
  resource: "Departments",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP Response Status Code                                                                              | 200                                                                                                    |
| `status`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP Response Status                                                                                   | OK                                                                                                     |
| `service`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | Apideck ID of service provider                                                                         | workday                                                                                                |
| `resource`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unified API resource name                                                                              | Departments                                                                                            |
| `operation`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Operation performed                                                                                    | delete                                                                                                 |
| `data`                                                                                                 | [operations.HrisDepartmentsDeleteUnifiedId](../../models/operations/hrisdepartmentsdeleteunifiedid.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |