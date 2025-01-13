# HrisEmployeesUpdateResponse


## Supported Types

### `operations.HrisEmployeesUpdateResponseBody`

```typescript
const value: operations.HrisEmployeesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "sage-hr",
  resource: "Employees",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.HrisEmployeesUpdateHrisEmployeesResponseBody`

```typescript
const value: operations.HrisEmployeesUpdateHrisEmployeesResponseBody = {
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

