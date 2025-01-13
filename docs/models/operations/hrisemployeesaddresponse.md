# HrisEmployeesAddResponse


## Supported Types

### `operations.HrisEmployeesAddResponseBody`

```typescript
const value: operations.HrisEmployeesAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "sage-hr",
  resource: "Employees",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.HrisEmployeesAddHrisEmployeesResponseBody`

```typescript
const value: operations.HrisEmployeesAddHrisEmployeesResponseBody = {
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

