# UsersUpdateResponse


## Supported Types

### `operations.UsersUpdateResponseBody`

```typescript
const value: operations.UsersUpdateResponseBody = {
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

### `operations.UsersUpdateUsersResponseBody`

```typescript
const value: operations.UsersUpdateUsersResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

