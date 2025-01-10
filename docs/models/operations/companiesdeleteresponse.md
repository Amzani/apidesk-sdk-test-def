# CompaniesDeleteResponse


## Supported Types

### `operations.CompaniesDeleteResponseBody`

```typescript
const value: operations.CompaniesDeleteResponseBody = {
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

### `operations.CompaniesDeleteCompaniesResponseBody`

```typescript
const value: operations.CompaniesDeleteCompaniesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

