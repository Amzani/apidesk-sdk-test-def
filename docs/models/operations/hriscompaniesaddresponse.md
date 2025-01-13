# HrisCompaniesAddResponse


## Supported Types

### `operations.HrisCompaniesAddResponseBody`

```typescript
const value: operations.HrisCompaniesAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "undefined",
  resource: "Companies",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.HrisCompaniesAddHrisCompaniesResponseBody`

```typescript
const value: operations.HrisCompaniesAddHrisCompaniesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

