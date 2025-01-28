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
        value: 10,
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

| Field                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                    | The HTTP response status code returned by the server. This integer value indicates the result of the GET request, such as 200 for success or 404 if the opportunity is not found. It helps developers understand the outcome of their API call.                                                                                                       | 200                                                                                                                                                                                                                                                                                                                                                   |
| `status`                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                    | A textual representation of the HTTP response status. This string provides a human-readable status message, such as 'OK' for a successful request or 'Not Found' if the opportunity does not exist. It complements the status_code by offering a more descriptive explanation.                                                                        | OK                                                                                                                                                                                                                                                                                                                                                    |
| `service`                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                    | The Apideck ID of the service provider handling the request. This string identifies which service integration processed the opportunity data, useful in environments with multiple service integrations. It ensures developers can trace the source of the data.                                                                                      | zoho-crm                                                                                                                                                                                                                                                                                                                                              |
| `resource`                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                    | The name of the Unified API resource accessed by this operation. This string specifies the type of resource, such as 'opportunity', that the GET request is targeting. It helps developers understand the context of the data being retrieved.                                                                                                        | opportunities                                                                                                                                                                                                                                                                                                                                         |
| `operation`                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                    | The specific operation performed by the API request. This string indicates the action taken, such as 'retrieve', reflecting the nature of the GET request to fetch opportunity details. It provides clarity on the API's function within the CRM system.                                                                                              | one                                                                                                                                                                                                                                                                                                                                                   |
| `data`                                                                                                                                                                                                                                                                                                                                                | [components.Opportunity](../../models/components/opportunity.md)                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                    | This object contains all the detailed information about the specific opportunity retrieved from the CRM system. It serves as the main container for the opportunity's data, including identifiers, titles, and associated contacts. This structure allows developers to access and integrate opportunity details efficiently into their applications. |                                                                                                                                                                                                                                                                                                                                                       |