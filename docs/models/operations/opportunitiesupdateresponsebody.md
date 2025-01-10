# OpportunitiesUpdateResponseBody

Opportunity updated

## Example Usage

```typescript
import { OpportunitiesUpdateResponseBody } from "apideck/models/operations";

let value: OpportunitiesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
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
| `service`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Apideck ID of service provider                                                                     | zoho-crm                                                                                           |
| `resource`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unified API resource name                                                                          | companies                                                                                          |
| `operation`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Operation performed                                                                                | update                                                                                             |
| `data`                                                                                             | [operations.OpportunitiesUpdateUnifiedId](../../models/operations/opportunitiesupdateunifiedid.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |