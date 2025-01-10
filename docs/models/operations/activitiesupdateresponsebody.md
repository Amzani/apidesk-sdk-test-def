# ActivitiesUpdateResponseBody

Activity updated

## Example Usage

```typescript
import { ActivitiesUpdateResponseBody } from "apideck/models/operations";

let value: ActivitiesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | HTTP Response Status Code                                                                    | 200                                                                                          |
| `status`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | HTTP Response Status                                                                         | OK                                                                                           |
| `service`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Apideck ID of service provider                                                               | zoho-crm                                                                                     |
| `resource`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | Unified API resource name                                                                    | activities                                                                                   |
| `operation`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | Operation performed                                                                          | update                                                                                       |
| `data`                                                                                       | [operations.ActivitiesUpdateUnifiedId](../../models/operations/activitiesupdateunifiedid.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |