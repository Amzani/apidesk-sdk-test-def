# ActivitiesAddResponse


## Supported Types

### `operations.ActivitiesAddResponseBody`

```typescript
const value: operations.ActivitiesAddResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

### `operations.ActivitiesAddActivitiesResponseBody`

```typescript
const value: operations.ActivitiesAddActivitiesResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

