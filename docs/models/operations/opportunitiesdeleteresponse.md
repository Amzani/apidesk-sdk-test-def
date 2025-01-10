# OpportunitiesDeleteResponse


## Supported Types

### `operations.OpportunitiesDeleteResponseBody`

```typescript
const value: operations.OpportunitiesDeleteResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "delete",
  data: {
    id: "12345",
  },
};
```

### `operations.OpportunitiesDeleteOpportunitiesResponseBody`

```typescript
const value: operations.OpportunitiesDeleteOpportunitiesResponseBody = {
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

