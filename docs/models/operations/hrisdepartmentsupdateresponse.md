# HrisDepartmentsUpdateResponse

## Example Usage

```typescript
import { HrisDepartmentsUpdateResponse } from "apideck/models/operations";

let value: HrisDepartmentsUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  twoHundredApplicationJsonObject: {
    statusCode: 200,
    status: "OK",
    service: "workday",
    resource: "Departments",
    operation: "update",
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `twoHundredApplicationJsonObject`                                                                                                          | [operations.HrisDepartmentsUpdateResponseBody](../../models/operations/hrisdepartmentsupdateresponsebody.md)                               | :heavy_minus_sign:                                                                                                                         | Departments                                                                                                                                |
| `defaultApplicationJsonObject`                                                                                                             | [operations.HrisDepartmentsUpdateHrisDepartmentsResponseBody](../../models/operations/hrisdepartmentsupdatehrisdepartmentsresponsebody.md) | :heavy_minus_sign:                                                                                                                         | Unexpected error                                                                                                                           |