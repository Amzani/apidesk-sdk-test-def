# HrisCompaniesDeleteResponse

## Example Usage

```typescript
import { HrisCompaniesDeleteResponse } from "apideck/models/operations";

let value: HrisCompaniesDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  twoHundredApplicationJsonObject: {
    statusCode: 200,
    status: "OK",
    service: "undefined",
    resource: "Companies",
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
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `twoHundredApplicationJsonObject`                                                                                                  | [operations.HrisCompaniesDeleteResponseBody](../../models/operations/hriscompaniesdeleteresponsebody.md)                           | :heavy_minus_sign:                                                                                                                 | Companies                                                                                                                          |
| `defaultApplicationJsonObject`                                                                                                     | [operations.HrisCompaniesDeleteHrisCompaniesResponseBody](../../models/operations/hriscompaniesdeletehriscompaniesresponsebody.md) | :heavy_minus_sign:                                                                                                                 | Unexpected error                                                                                                                   |