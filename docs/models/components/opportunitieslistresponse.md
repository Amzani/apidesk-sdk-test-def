# OpportunitiesListResponse

Opportunities

## Example Usage

```typescript
import { OpportunitiesListResponse } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: OpportunitiesListResponse = {
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                | The HTTP response status code indicating the result of the API request. This integer value is crucial for determining the success or failure of the request. A status code of 200 signifies a successful retrieval of CRM opportunities, while other codes may indicate errors or issues that need to be addressed. It is always included in the response to provide immediate feedback on the request's outcome. | 200                                                                                                                                                                                                                                                                                                                                                                                                               |
| `status`                                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                | A textual representation of the HTTP response status, providing a human-readable explanation of the status code. This string helps in quickly understanding the nature of the response, such as 'OK' for successful requests or descriptive error messages for failed ones. It complements the status code by offering more context and is always included in the response.                                       | OK                                                                                                                                                                                                                                                                                                                                                                                                                |
| `service`                                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                | The Apideck ID of the service provider that processed the request. This string uniquely identifies which service within Apideck's ecosystem handled the API call, especially important when multiple services are integrated. It is included in the response to ensure transparency and traceability of the data source.                                                                                          | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                                          |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                | The name of the unified API resource that was accessed. This string indicates the specific resource within the Apideck platform that the operation targeted, such as 'opportunities' in this context. It is included to confirm the resource being interacted with, ensuring clarity in multi-resource environments.                                                                                              | opportunities                                                                                                                                                                                                                                                                                                                                                                                                     |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                | The specific operation that was performed during the API request. This string describes the action taken, such as 'retrieve' for fetching data, and is crucial for understanding the context of the response. It is always included to provide a clear record of what operation was executed.                                                                                                                     | all                                                                                                                                                                                                                                                                                                                                                                                                               |
| `data`                                                                                                                                                                                                                                                                                                                                                                                                            | [components.OpportunitiesListResponseData](../../models/components/opportunitieslistresponsedata.md)[]                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                | An array containing the list of opportunities retrieved from the CRM. Each element in the array represents a single opportunity with its associated details. This property is always included in the response to provide a structured collection of opportunity data, enabling consumers to iterate over and process each opportunity individually.                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                            | [components.OpportunitiesListResponseMeta](../../models/components/opportunitieslistresponsemeta.md)                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                | The 'meta' object contains metadata about the response, providing additional context and information about the data returned. This object is included to help consumers understand the structure and pagination of the response, especially useful in large datasets where navigation and data management are crucial.                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `links`                                                                                                                                                                                                                                                                                                                                                                                                           | [components.OpportunitiesListResponseLinks](../../models/components/opportunitieslistresponselinks.md)                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                | The 'links' object contains URLs that facilitate navigation between different pages of the API response. This object is particularly useful in paginated responses, providing direct access to the previous, current, and next pages of data. It helps clients manage data retrieval efficiently by offering structured navigation links.                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                   |