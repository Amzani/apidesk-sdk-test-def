# HrisTimeOffRequestsOneResponse


## Supported Types

### `operations.HrisTimeOffRequestsOneResponseBody`

```typescript
const value: operations.HrisTimeOffRequestsOneResponseBody = {
  statusCode: 200,
  status: "OK",
  service: "bamboohr",
  resource: "time-off-requests",
  operation: "one",
  data: {
    id: "12345",
    employeeId: "12345",
    policyId: "12345",
    status: "approved",
    description: "Enjoying some sun.",
    startDate: "2022-04-01",
    endDate: "2022-04-01",
    requestDate: "2022-03-21",
    requestType: "vacation",
    approvalDate: "2022-03-21",
    units: "hours",
    amount: 3.5,
    dayPart: "morning",
    notes: {
      employee: "Relaxing on the beach for a few hours.",
      manager: "Enjoy!",
    },
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
    policyType: "sick",
  },
};
```

### `operations.HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody`

```typescript
const value: operations.HrisTimeOffRequestsOneHrisTimeOffRequestsResponseBody =
  {
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

