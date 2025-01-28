# CrmOpportunitiesUpdateRequest

## Example Usage

```typescript
import { CrmOpportunitiesUpdateRequest } from "apideck/models/operations";
import { RFCDate } from "apideck/types";

let value: CrmOpportunitiesUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  updateOpportunityRequest: {
    title: "New Rocket",
    primaryContactId: "12345",
    description:
      "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
    type: "Existing Customer - Upgrade",
    monetaryAmount: 75000,
    currency: "USD",
    winProbability: 40,
    closeDate: new RFCDate("2020-10-30"),
    lossReasonId: "12345",
    lossReason: "No budget",
    wonReasonId: "12345",
    wonReason: "Best pitch",
    pipelineId: "12345",
    pipelineStageId: "12345",
    sourceId: "12345",
    leadId: "12345",
    leadSource: "Website",
    contactId: "12345",
    contactIds: [
      "12345",
    ],
    companyId: "12345",
    companyName: "Copper",
    ownerId: "12345",
    priority: "None",
    status: "Open",
    statusId: "12345",
    tags: [
      "New",
    ],
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
    stageLastChangedAt: new Date("2020-09-30T07:43:32.000Z"),
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

## Fields

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | The unique identifier of the activity record you wish to delete. This ID is crucial for specifying which record should be removed from the CRM system.                                                                        |                                                                                                                                                                                                                               |
| `consumerId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.                                    | test-consumer                                                                                                                                                                                                                 |
| `appId`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | The unique identifier for your Unify application, required to authenticate API requests and ensure they are processed within the correct application context.                                                                 | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                                                                                                       |
| `serviceId`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | Optional header to specify the service ID for targeting a specific service integration, such as 'pipedrive'. This is useful when multiple integrations are active and you need to direct the request to a particular service. | salesforce                                                                                                                                                                                                                    |
| `raw`                                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                            | A boolean flag that, when set to true, returns the raw data as received from the service. This is primarily useful for debugging and development purposes, allowing you to see the unprocessed response.                      |                                                                                                                                                                                                                               |
| `updateOpportunityRequest`                                                                                                                                                                                                    | [components.UpdateOpportunityRequest](../../models/components/updateopportunityrequest.md)                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                           |                                                                                                                                                                                                                               |