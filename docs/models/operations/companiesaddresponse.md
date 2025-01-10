# CompaniesAddResponse


## Supported Types

### `operations.CompaniesAddResponseBody`

```typescript
const value: operations.CompaniesAddResponseBody = {
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

### `operations.CompaniesAddCompaniesResponseBody`

```typescript
const value: operations.CompaniesAddCompaniesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

