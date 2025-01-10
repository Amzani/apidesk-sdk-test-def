# ContactsAddResponse


## Supported Types

### `operations.ContactsAddResponseBody`

```typescript
const value: operations.ContactsAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "contacts",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.ContactsAddContactsResponseBody`

```typescript
const value: operations.ContactsAddContactsResponseBody = {
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

