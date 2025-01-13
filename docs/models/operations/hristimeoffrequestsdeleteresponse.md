# HrisTimeOffRequestsDeleteResponse


## Supported Types

### `operations.HrisTimeOffRequestsDeleteResponseBody`

```typescript
const value: operations.HrisTimeOffRequestsDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "bamboohr",
  resource: "time-off-requests",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.HrisTimeOffRequestsDeleteHrisTimeOffRequestsResponseBody`

```typescript
const value:
  operations.HrisTimeOffRequestsDeleteHrisTimeOffRequestsResponseBody = {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  };
```

