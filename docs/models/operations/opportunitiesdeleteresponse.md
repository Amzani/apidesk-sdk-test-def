# OpportunitiesDeleteResponse

## Example Usage

```typescript
import { OpportunitiesDeleteResponse } from "apideck/models/operations";

let value: OpportunitiesDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  opportunityDeleteResponse: {
    statusCode: 200,
    status: "OK",
    service: "zoho-crm",
    resource: "companies",
    operation: "delete",
    data: {
      id: "12345",
    },
  },
  unexpectedErrorResponse: {
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `opportunityDeleteResponse`                                                                  | [components.OpportunityDeleteResponse](../../models/components/opportunitydeleteresponse.md) | :heavy_minus_sign:                                                                           | Opportunity deleted                                                                          |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |