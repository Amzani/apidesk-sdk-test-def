# HrisDepartmentsAddResponse

## Example Usage

```typescript
import { HrisDepartmentsAddResponse } from "apideck/models/operations";

let value: HrisDepartmentsAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  twoHundredAndOneApplicationJsonObject: {
    statusCode: 200,
    status: "OK",
    service: "workday",
    resource: "Departments",
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `twoHundredAndOneApplicationJsonObject`                                                                                              | [operations.HrisDepartmentsAddResponseBody](../../models/operations/hrisdepartmentsaddresponsebody.md)                               | :heavy_minus_sign:                                                                                                                   | Departments                                                                                                                          |
| `defaultApplicationJsonObject`                                                                                                       | [operations.HrisDepartmentsAddHrisDepartmentsResponseBody](../../models/operations/hrisdepartmentsaddhrisdepartmentsresponsebody.md) | :heavy_minus_sign:                                                                                                                   | Unexpected error                                                                                                                     |