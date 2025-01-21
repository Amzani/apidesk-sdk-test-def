# GetOpportunityResponse

Opportunity

## Example Usage

```typescript
import { GetOpportunityResponse } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: GetOpportunityResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "opportunities",
  operation: "one",
  data: {
    id: "12345",
    title: "New Rocket",
    primaryContactId: "12345",
    description:
      "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
    type: "Existing Customer - Upgrade",
    monetaryAmount: 75000,
    currency: "USD",
    winProbability: 40,
    expectedRevenue: 75000,
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
    interactionCount: 0,
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
    stageLastChangedAt: new Date("2020-09-30T07:43:32.000Z"),
    lastActivityAt: "2020-09-30T07:43:32.000Z",
    deleted: false,
    dateStageChanged: new Date("2020-09-30T00:00:00.000Z"),
    dateLastContacted: new Date("2020-09-30T00:00:00.000Z"),
    dateLeadCreated: new Date("2020-09-30T00:00:00.000Z"),
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

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                  | The HTTP response status code indicating the result of the API request. A status code of 200 signifies a successful retrieval of the opportunity data. This integer value helps developers understand the outcome of their request at a glance.                                                                                                                                                     | 200                                                                                                                                                                                                                                                                                                                                                                                                 |
| `status`                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                  | A textual representation of the HTTP response status, such as 'OK' for a successful request. This string provides a human-readable status that complements the numeric status code, aiding in quick interpretation of the response.                                                                                                                                                                 | OK                                                                                                                                                                                                                                                                                                                                                                                                  |
| `service`                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                  | The unique Apideck identifier for the service provider from which the opportunity data is retrieved. This string helps in identifying the source of the data, especially useful in environments with multiple service integrations.                                                                                                                                                                 | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                            |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                  | The name of the unified API resource, which in this context is 'opportunity'. This string indicates the type of resource being accessed, ensuring developers know which data structure to expect in the response.                                                                                                                                                                                   | opportunities                                                                                                                                                                                                                                                                                                                                                                                       |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                  | The specific operation performed, in this case, 'opportunitiesOne', which denotes fetching a single opportunity record. This string helps developers track the action executed by the API call, useful for logging and debugging purposes.                                                                                                                                                          | one                                                                                                                                                                                                                                                                                                                                                                                                 |
| `data`                                                                                                                                                                                                                                                                                                                                                                                              | [components.GetOpportunityResponseData](../../models/components/getopportunityresponsedata.md)                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                  | The 'data' object contains all the detailed information about the specific opportunity retrieved from the CRM. It serves as the primary container for the opportunity's attributes, ensuring that all relevant details are encapsulated within a single structure. This object is essential for accessing the individual fields of the opportunity, such as its ID, title, and associated contacts. |                                                                                                                                                                                                                                                                                                                                                                                                     |