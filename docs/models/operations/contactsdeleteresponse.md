# ContactsDeleteResponse


## Supported Types

### `operations.ContactsDeleteResponseBody`

```typescript
const value: operations.ContactsDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "contacts",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.ContactsDeleteContactsResponseBody`

```typescript
const value: operations.ContactsDeleteContactsResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

