# ActivitiesDeleteResponse


## Supported Types

### `operations.ActivitiesDeleteResponseBody`

```typescript
const value: operations.ActivitiesDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.ActivitiesDeleteActivitiesResponseBody`

```typescript
const value: operations.ActivitiesDeleteActivitiesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

