# OpportunitiesUpdateResponse


## Supported Types

### `operations.OpportunitiesUpdateResponseBody`

```typescript
const value: operations.OpportunitiesUpdateResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `operations.OpportunitiesUpdateOpportunitiesResponseBody`

```typescript
const value: operations.OpportunitiesUpdateOpportunitiesResponseBody = {
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

