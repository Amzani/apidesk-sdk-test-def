# OpportunitiesAddResponse


## Supported Types

### `operations.OpportunitiesAddResponseBody`

```typescript
const value: operations.OpportunitiesAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "opportunities",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.OpportunitiesAddOpportunitiesResponseBody`

```typescript
const value: operations.OpportunitiesAddOpportunitiesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

