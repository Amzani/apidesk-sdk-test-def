# ListOpportunitiesResponse

Opportunities

## Example Usage

```typescript
import { ListOpportunitiesResponse } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: ListOpportunitiesResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "opportunities",
  operation: "all",
  data: [
    {
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
          value: true,
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The HTTP response status code indicating the result of the API request. This integer value helps determine if the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is crucial for error handling and debugging.                          | 200                                                                                                                                                                                                                                                                                           |
| `status`                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | A brief textual representation of the HTTP response status. This string provides a human-readable status message, such as 'OK' for successful requests or 'Not Found' for errors, complementing the status_code for easier interpretation.                                                    | OK                                                                                                                                                                                                                                                                                            |
| `service`                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The Apideck ID of the service provider from which the opportunities data is retrieved. This string uniquely identifies the service within the Apideck ecosystem, ensuring the correct integration and data source are used.                                                                   | zoho-crm                                                                                                                                                                                                                                                                                      |
| `resource`                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The name of the Unified API resource being accessed, in this case, 'opportunities'. This string indicates the specific type of data returned by the API, helping developers understand the context of the response.                                                                           | opportunities                                                                                                                                                                                                                                                                                 |
| `operation`                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The specific operation performed by the API, represented as a string. For this endpoint, it typically indicates a 'GET' operation, reflecting the retrieval of opportunities data from the CRM system.                                                                                        | all                                                                                                                                                                                                                                                                                           |
| `data`                                                                                                                                                                                                                                                                                        | [components.ListOpportunitiesResponseData](../../models/components/listopportunitiesresponsedata.md)[]                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                            | An array containing all the opportunity objects retrieved from the CRM system. Each element in the array represents a distinct sales opportunity, providing a comprehensive view of potential deals. This array is essential for iterating over and analyzing multiple opportunities at once. |                                                                                                                                                                                                                                                                                               |
| `meta`                                                                                                                                                                                                                                                                                        | [components.ListOpportunitiesResponseMeta](../../models/components/listopportunitiesresponsemeta.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                            | Contains metadata about the response, including pagination details and cursors for navigating through pages of results. This object helps in understanding the context of the data returned and managing large datasets efficiently.                                                          |                                                                                                                                                                                                                                                                                               |
| `links`                                                                                                                                                                                                                                                                                       | [components.ListOpportunitiesResponseLinks](../../models/components/listopportunitiesresponselinks.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                            | An object containing URLs that facilitate navigation between different pages of the API response. This includes links to the current, previous, and next pages, aiding in seamless data traversal and integration.                                                                            |                                                                                                                                                                                                                                                                                               |