# CompaniesUpdateResponse


## Supported Types

### `operations.CompaniesUpdateResponseBody`

```typescript
const value: operations.CompaniesUpdateResponseBody = {
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

### `operations.CompaniesUpdateCompaniesResponseBody`

```typescript
const value: operations.CompaniesUpdateCompaniesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

