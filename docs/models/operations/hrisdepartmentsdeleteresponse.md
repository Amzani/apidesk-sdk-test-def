# HrisDepartmentsDeleteResponse

## Example Usage

```typescript
import { HrisDepartmentsDeleteResponse } from "apideck/models/operations";

let value: HrisDepartmentsDeleteResponse = {
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
    operation: "delete",
    data: {
      id: "12345",
    },
  },
  defaultApplicationJsonObject: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `twoHundredApplicationJsonObject`                                                                                                          | [operations.HrisDepartmentsDeleteResponseBody](../../models/operations/hrisdepartmentsdeleteresponsebody.md)                               | :heavy_minus_sign:                                                                                                                         | Departments                                                                                                                                |
| `defaultApplicationJsonObject`                                                                                                             | [operations.HrisDepartmentsDeleteHrisDepartmentsResponseBody](../../models/operations/hrisdepartmentsdeletehrisdepartmentsresponsebody.md) | :heavy_minus_sign:                                                                                                                         | Unexpected error                                                                                                                           |