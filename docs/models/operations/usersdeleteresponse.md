# UsersDeleteResponse


## Supported Types

### `operations.UsersDeleteResponseBody`

```typescript
const value: operations.UsersDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "users",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.UsersDeleteUsersResponseBody`

```typescript
const value: operations.UsersDeleteUsersResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

