# ContactsUpdateResponseBody

Contact updated

## Example Usage

```typescript
import { ContactsUpdateResponseBody } from "apideck/models/operations";

let value: ContactsUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "contacts",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | HTTP Response Status Code                                                                | 200                                                                                      |
| `status`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | HTTP Response Status                                                                     | OK                                                                                       |
| `service`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Apideck ID of service provider                                                           | zoho-crm                                                                                 |
| `resource`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | Unified API resource name                                                                | contacts                                                                                 |
| `operation`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Operation performed                                                                      | update                                                                                   |
| `data`                                                                                   | [operations.ContactsUpdateUnifiedId](../../models/operations/contactsupdateunifiedid.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |