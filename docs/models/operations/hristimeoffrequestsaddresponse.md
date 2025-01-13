# HrisTimeOffRequestsAddResponse


## Supported Types

### `operations.HrisTimeOffRequestsAddResponseBody`

```typescript
const value: operations.HrisTimeOffRequestsAddResponseBody = {
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

### `operations.HrisTimeOffRequestsAddHrisTimeOffRequestsResponseBody`

```typescript
const value: operations.HrisTimeOffRequestsAddHrisTimeOffRequestsResponseBody =
  {
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
  };
```

