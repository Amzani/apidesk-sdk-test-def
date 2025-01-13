# HrisDepartmentsDeleteResponse


## Supported Types

### `operations.HrisDepartmentsDeleteResponseBody`

```typescript
const value: operations.HrisDepartmentsDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "workday",
  resource: "Departments",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.HrisDepartmentsDeleteHrisDepartmentsResponseBody`

```typescript
const value: operations.HrisDepartmentsDeleteHrisDepartmentsResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

