# HrisDepartmentsOneResponse


## Supported Types

### `operations.HrisDepartmentsOneResponseBody`

```typescript
const value: operations.HrisDepartmentsOneResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "workday",
  resource: "Departments",
  operation: "one",
  data: {
    id: "12345",
    parentId: "22345",
    name: "R&D",
    code: "2",
    description: "R&D",
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    passThrough: [
      {
        serviceId: "<id>",
        extendPaths: [
          {
            path: "$.nested.property",
            value: {
              "TaxClassificationRef": {
                "value": "EUC-99990201-V1-00020000",
              },
            },
          },
        ],
      },
    ],
  },
};
```

### `operations.HrisDepartmentsOneHrisDepartmentsResponseBody`

```typescript
const value: operations.HrisDepartmentsOneHrisDepartmentsResponseBody = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

