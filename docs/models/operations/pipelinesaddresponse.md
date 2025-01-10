# PipelinesAddResponse


## Supported Types

### `operations.PipelinesAddResponseBody`

```typescript
const value: operations.PipelinesAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "pipelines",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.PipelinesAddPipelinesResponseBody`

```typescript
const value: operations.PipelinesAddPipelinesResponseBody = {
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

