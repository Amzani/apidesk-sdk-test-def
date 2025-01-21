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

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The unique identifier of the activity to be deleted. This parameter is required to specify which activity record should be removed from the CRM system. Ensure that the ID corresponds to an existing activity to avoid errors. |                                                                                                                                                                                                                                 |
| `serviceId`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service.               | salesforce                                                                                                                                                                                                                      |
| `raw`                                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                              | A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.                                             |                                                                                                                                                                                                                                 |
| `updateOpportunityRequest`                                                                                                                                                                                                      | [components.UpdateOpportunityRequest](../../models/components/updateopportunityrequest.md)                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |                                                                                                                                                                                                                                 |