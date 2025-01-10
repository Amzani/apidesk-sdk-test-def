# NotesUpdateResponse


## Supported Types

### `operations.NotesUpdateResponseBody`

```typescript
const value: operations.NotesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "notes",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.NotesUpdateNotesResponseBody`

```typescript
const value: operations.NotesUpdateNotesResponseBody = {
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

