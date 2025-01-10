# ActivitiesUpdateResponse


## Supported Types

### `operations.ActivitiesUpdateResponseBody`

```typescript
const value: operations.ActivitiesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.ActivitiesUpdateActivitiesResponseBody`

```typescript
const value: operations.ActivitiesUpdateActivitiesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

