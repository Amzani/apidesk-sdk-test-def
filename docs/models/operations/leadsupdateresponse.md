# LeadsUpdateResponse


## Supported Types

### `operations.LeadsUpdateResponseBody`

```typescript
const value: operations.LeadsUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.LeadsUpdateLeadsResponseBody`

```typescript
const value: operations.LeadsUpdateLeadsResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

