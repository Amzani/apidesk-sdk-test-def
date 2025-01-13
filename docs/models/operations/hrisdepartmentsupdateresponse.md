# HrisDepartmentsUpdateResponse


## Supported Types

### `operations.HrisDepartmentsUpdateResponseBody`

```typescript
const value: operations.HrisDepartmentsUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "workday",
  resource: "Departments",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.HrisDepartmentsUpdateHrisDepartmentsResponseBody`

```typescript
const value: operations.HrisDepartmentsUpdateHrisDepartmentsResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

