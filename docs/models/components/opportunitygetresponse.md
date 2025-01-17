# OpportunityGetResponse

Opportunity

## Example Usage

```typescript
import { OpportunityGetResponse } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: OpportunityGetResponse = {
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
        value: [
          "<value>",
        ],
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

| Field                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request, such as 200 for a successful retrieval of the opportunity data. It is always included in the response to inform the client about the outcome of their request, allowing them to handle different scenarios programmatically. | 200                                                                                                                                                                                                                                                                                                                                             |
| `status`                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for a successful request. It is included to offer clarity and context about the response, complementing the numerical status code for easier interpretation by developers.                             | OK                                                                                                                                                                                                                                                                                                                                              |
| `service`                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The Apideck ID of the service provider that processed the request. This string uniquely identifies which service within the Apideck ecosystem handled the opportunity retrieval. It is crucial when multiple services are integrated, ensuring that the response is correctly attributed to the appropriate service provider.                   | zoho-crm                                                                                                                                                                                                                                                                                                                                        |
| `resource`                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The name of the Unified API resource that was accessed. This string specifies the type of resource involved in the operation, such as 'opportunity', and is essential for understanding the context of the data returned. It helps in identifying the nature of the resource being interacted with in the CRM system.                           | opportunities                                                                                                                                                                                                                                                                                                                                   |
| `operation`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The specific operation that was performed during the API request. This string indicates the action taken, such as 'retrieve' for fetching opportunity details. It provides insight into what the API call achieved, helping developers understand the purpose and result of the request within the broader context of their application logic.  | one                                                                                                                                                                                                                                                                                                                                             |
| `data`                                                                                                                                                                                                                                                                                                                                          | [components.OpportunityGetResponseData](../../models/components/opportunitygetresponsedata.md)                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The main container object that holds all the detailed information about the specific opportunity retrieved from the CRM system. This object is always included in the response to encapsulate all related properties and ensure structured data delivery.                                                                                       |                                                                                                                                                                                                                                                                                                                                                 |