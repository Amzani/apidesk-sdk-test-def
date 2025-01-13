# HrisTimeOffRequestsAddResponse

## Example Usage

```typescript
import { HrisTimeOffRequestsAddResponse } from "apideck/models/operations";

let value: HrisTimeOffRequestsAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  twoHundredAndOneApplicationJsonObject: {
    statusCode: 200,
    status: "OK",
    service: "bamboohr",
    resource: "time-off-requests",
    operation: "add",
    data: {
      id: "12345",
    },
  },
  defaultApplicationJsonObject: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                   | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `twoHundredAndOneApplicationJsonObject`                                                                                                              | [operations.HrisTimeOffRequestsAddResponseBody](../../models/operations/hristimeoffrequestsaddresponsebody.md)                                       | :heavy_minus_sign:                                                                                                                                   | TimeOffRequests                                                                                                                                      |
| `defaultApplicationJsonObject`                                                                                                                       | [operations.HrisTimeOffRequestsAddHrisTimeOffRequestsResponseBody](../../models/operations/hristimeoffrequestsaddhristimeoffrequestsresponsebody.md) | :heavy_minus_sign:                                                                                                                                   | Unexpected error                                                                                                                                     |