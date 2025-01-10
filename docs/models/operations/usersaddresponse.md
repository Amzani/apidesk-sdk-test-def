# UsersAddResponse


## Supported Types

### `operations.UsersAddResponseBody`

```typescript
const value: operations.UsersAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "users",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.UsersAddUsersResponseBody`

```typescript
const value: operations.UsersAddUsersResponseBody = {
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

