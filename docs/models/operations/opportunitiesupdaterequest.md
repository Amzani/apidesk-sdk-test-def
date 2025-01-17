# OpportunitiesUpdateRequest

## Example Usage

```typescript
import { OpportunitiesUpdateRequest } from "apideck/models/operations";
import { RFCDate } from "apideck/types";

let value: OpportunitiesUpdateRequest = {
  id: "<id>",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  serviceId: "salesforce",
  opportunityUpdateRequest: {
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

| Field                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | The unique identifier of the activity record to be deleted. This parameter is essential as it specifies which activity in the CRM system will be removed. Ensure that the ID corresponds to an existing activity to avoid errors.                            |                                                                                                                                                                                                                                                              |
| `consumerId`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | A unique identifier for the consumer making the request. This ID is crucial for authenticating the consumer and ensuring that the correct data is accessed or modified. It must be a valid consumer ID associated with your account.                         | test-consumer                                                                                                                                                                                                                                                |
| `appId`                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | The unique identifier of your Unify application. This ID is used to authenticate the application making the request and must match the ID assigned to your application in the Apideck platform.                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                                                                                                                                      |
| `serviceId`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                           | An optional parameter used to specify the target service when multiple integrations are active. This ID helps direct the request to the correct service, such as 'pipedrive' or 'salesforce'. It is only necessary if your setup includes multiple services. | salesforce                                                                                                                                                                                                                                                   |
| `raw`                                                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                           | A boolean flag that, when set to true, includes the raw response in the output. This is primarily used for debugging purposes to provide more detailed information about the response. By default, this is set to false.                                     |                                                                                                                                                                                                                                                              |
| `opportunityUpdateRequest`                                                                                                                                                                                                                                   | [components.OpportunityUpdateRequest](../../models/components/opportunityupdaterequest.md)                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                              |