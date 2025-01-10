# NotesAddResponse


## Supported Types

### `operations.NotesAddResponseBody`

```typescript
const value: operations.NotesAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "notes",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.NotesAddNotesResponseBody`

```typescript
const value: operations.NotesAddNotesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

