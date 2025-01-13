# HrisCompaniesUpdateResponse

## Example Usage

```typescript
import { HrisCompaniesUpdateResponse } from "apideck/models/operations";

let value: HrisCompaniesUpdateResponse = {
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `twoHundredApplicationJsonObject`                                                                                                  | [operations.HrisCompaniesUpdateResponseBody](../../models/operations/hriscompaniesupdateresponsebody.md)                           | :heavy_minus_sign:                                                                                                                 | Companies                                                                                                                          |
| `defaultApplicationJsonObject`                                                                                                     | [operations.HrisCompaniesUpdateHrisCompaniesResponseBody](../../models/operations/hriscompaniesupdatehriscompaniesresponsebody.md) | :heavy_minus_sign:                                                                                                                 | Unexpected error                                                                                                                   |