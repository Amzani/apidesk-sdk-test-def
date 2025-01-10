# LeadsDeleteResponse


## Supported Types

### `operations.LeadsDeleteResponseBody`

```typescript
const value: operations.LeadsDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.LeadsDeleteLeadsResponseBody`

```typescript
const value: operations.LeadsDeleteLeadsResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

