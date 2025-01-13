# HrisEmployeesDeleteResponse


## Supported Types

### `operations.HrisEmployeesDeleteResponseBody`

```typescript
const value: operations.HrisEmployeesDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "sage-hr",
  resource: "Employees",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.HrisEmployeesDeleteHrisEmployeesResponseBody`

```typescript
const value: operations.HrisEmployeesDeleteHrisEmployeesResponseBody = {
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

