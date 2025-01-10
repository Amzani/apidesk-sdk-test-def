# ContactsUpdateResponse


## Supported Types

### `operations.ContactsUpdateResponseBody`

```typescript
const value: operations.ContactsUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "contacts",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.ContactsUpdateContactsResponseBody`

```typescript
const value: operations.ContactsUpdateContactsResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

