# HrisTimeOffRequestsAddResponseBody

TimeOffRequests

## Example Usage

```typescript
import { HrisTimeOffRequestsAddResponseBody } from "apideck/models/operations";

let value: HrisTimeOffRequestsAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "bamboohr",
  resource: "time-off-requests",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP Response Status Code                                                                                | 200                                                                                                      |
| `status`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP Response Status                                                                                     | OK                                                                                                       |
| `service`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Apideck ID of service provider                                                                           | bamboohr                                                                                                 |
| `resource`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Unified API resource name                                                                                | time-off-requests                                                                                        |
| `operation`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Operation performed                                                                                      | add                                                                                                      |
| `data`                                                                                                   | [operations.HrisTimeOffRequestsAddUnifiedId](../../models/operations/hristimeoffrequestsaddunifiedid.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |