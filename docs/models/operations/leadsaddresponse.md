# LeadsAddResponse


## Supported Types

### `operations.LeadsAddResponseBody`

```typescript
const value: operations.LeadsAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.LeadsAddLeadsResponseBody`

```typescript
const value: operations.LeadsAddLeadsResponseBody = {
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

