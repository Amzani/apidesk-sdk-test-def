# NotesDeleteResponseBody

Note deleted

## Example Usage

```typescript
import { NotesDeleteResponseBody } from "apideck/models/operations";

let value: NotesDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "notes",
  operation: "delete",
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
| `resource`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | Unified API resource name                                                          | notes                                                                              |
| `operation`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Operation performed                                                                | delete                                                                             |
| `data`                                                                             | [operations.NotesDeleteUnifiedId](../../models/operations/notesdeleteunifiedid.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |