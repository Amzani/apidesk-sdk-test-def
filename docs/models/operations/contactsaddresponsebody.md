# ContactsAddResponseBody

Contact created

## Example Usage

```typescript
import { ContactsAddResponseBody } from "apideck/models/operations";

let value: ContactsAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "contacts",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `statusCode`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | HTTP Response Status Code                                                          | 200                                                                                |
| `status`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | HTTP Response Status                                                               | OK                                                                                 |
| `service`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Apideck ID of service provider                                                     | zoho-crm                                                                           |
| `resource`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | Unified API resource name                                                          | contacts                                                                           |
| `operation`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Operation performed                                                                | add                                                                                |
| `data`                                                                             | [operations.ContactsAddUnifiedId](../../models/operations/contactsaddunifiedid.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |