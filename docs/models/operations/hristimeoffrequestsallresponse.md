# HrisTimeOffRequestsAllResponse

## Example Usage

```typescript
import { HrisTimeOffRequestsAllResponse } from "apideck/models/operations";

let value: HrisTimeOffRequestsAllResponse = {
  result: {
    statusCode: 200,
    status: "OK",
    service: "bamboohr",
    resource: "time-off-requests",
    operation: "all",
    data: [
      {
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
    ],
    meta: {
      itemsOnPage: 50,
      cursors: {
        previous: "em9oby1jcm06OnBhZ2U6OjE=",
        current: "em9oby1jcm06OnBhZ2U6OjI=",
        next: "em9oby1jcm06OnBhZ2U6OjM=",
      },
    },
    links: {
      previous:
        "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
      current: "https://unify.apideck.com/crm/companies",
      next:
        "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
    },
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `result`                                          | *operations.HrisTimeOffRequestsAllResponseResult* | :heavy_check_mark:                                | N/A                                               |