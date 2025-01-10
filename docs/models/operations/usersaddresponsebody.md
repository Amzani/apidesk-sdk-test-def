# UsersAddResponseBody

User created

## Example Usage

```typescript
import { UsersAddResponseBody } from "apideck/models/operations";

let value: UsersAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "users",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status Code                                                    | 200                                                                          |
| `status`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status                                                         | OK                                                                           |
| `service`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Apideck ID of service provider                                               | zoho-crm                                                                     |
| `resource`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Unified API resource name                                                    | users                                                                        |
| `operation`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Operation performed                                                          | add                                                                          |
| `data`                                                                       | [operations.UsersAddUnifiedId](../../models/operations/usersaddunifiedid.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |