# PipelinesUpdateResponse


## Supported Types

### `operations.PipelinesUpdateResponseBody`

```typescript
const value: operations.PipelinesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "pipelines",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.PipelinesUpdatePipelinesResponseBody`

```typescript
const value: operations.PipelinesUpdatePipelinesResponseBody = {
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

