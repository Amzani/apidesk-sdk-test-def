# ListLeadsResponse

Leads

## Example Usage

```typescript
import { ListLeadsResponse } from "apideck/models/components";

let value: ListLeadsResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "all",
  data: [
    {
      id: "12345",
      name: "Elon Musk",
      companyName: "Spacex",
      ownerId: "54321",
      ownerName: "John Doe",
      companyId: "2",
      leadId: "2",
      leadSource: "Cold Call",
      firstName: "Elon",
      lastName: "Musk",
      description: "A thinker",
      prefix: "Sir",
      title: "CEO",
      language: "EN",
      status: "New",
      monetaryAmount: 75000,
      currency: "USD",
      fax: "+12129876543",
      websites: [
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
      ],
      addresses: [
        {
          id: "123",
          type: "primary",
          string: "25 Spring Street, Blackburn, VIC 3130",
          name: "HQ US",
          line1: "Main street",
          line2: "apt #",
          line3: "Suite #",
          line4: "delivery instructions",
          streetNumber: "25",
          city: "San Francisco",
          state: "CA",
          postalCode: "94104",
          country: "US",
          latitude: "40.759211",
          longitude: "-73.984638",
          county: "Santa Clara",
          contactName: "Elon Musk",
          salutation: "Mr",
          phoneNumber: "111-111-1111",
          fax: "122-111-1111",
          email: "elon@musk.com",
          website: "https://elonmusk.com",
          notes: "Address notes or delivery instructions.",
          rowVersion: "1-12345",
        },
      ],
      socialLinks: [
        {
          id: "12345",
          url: "https://www.twitter.com/apideck",
          type: "twitter",
        },
      ],
      phoneNumbers: [
        {
          id: "12345",
          countryCode: "1",
          areaCode: "323",
          number: "111-111-1111",
          extension: "105",
          type: "primary",
        },
      ],
      emails: [
        {
          id: "123",
          email: "elon@musk.com",
          type: "primary",
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: "Uses Salesforce and Marketo",
        },
      ],
      tags: [
        "New",
      ],
      updatedAt: "2020-09-30T07:43:32.000Z",
      createdAt: "2020-09-30T07:43:32.000Z",
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

| Field                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The HTTP response status code indicating the result of the API request. This integer value helps determine if the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is essential for error handling and debugging in client applications.                               | 200                                                                                                                                                                                                                                                                                                                         |
| `status`                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | A textual representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This string provides a human-readable explanation of the status code, aiding in understanding the outcome of the API call.                                                                         | OK                                                                                                                                                                                                                                                                                                                          |
| `service`                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The unique identifier for the service provider within the Apideck ecosystem. This string helps in identifying which third-party service the leads data is being fetched from, ensuring proper integration and data mapping.                                                                                                 | zoho-crm                                                                                                                                                                                                                                                                                                                    |
| `resource`                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The name of the unified API resource being accessed, in this case, 'leads'. This string indicates the type of data being retrieved, which is crucial for developers to understand the context of the response and how to handle the data appropriately.                                                                     | companies                                                                                                                                                                                                                                                                                                                   |
| `operation`                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The specific operation performed by the API, identified as 'leadsAll' in this context. This string helps developers understand the action taken by the API, which is fetching all leads, and is useful for logging and tracking API usage.                                                                                  | all                                                                                                                                                                                                                                                                                                                         |
| `data`                                                                                                                                                                                                                                                                                                                      | [components.ListLeadsResponseData](../../models/components/listleadsresponsedata.md)[]                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | An array containing the list of leads retrieved from the CRM system. Each element in the array represents a single lead with detailed information such as name, company, and owner. This array is the primary container for the lead data returned by the 'leadsAll' operation, facilitating easy iteration and processing. |                                                                                                                                                                                                                                                                                                                             |
| `meta`                                                                                                                                                                                                                                                                                                                      | [components.ListLeadsResponseMeta](../../models/components/listleadsresponsemeta.md)                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                          | This object contains metadata about the response, providing additional context and information about the data returned. It includes details such as pagination cursors and the number of items on the current page, helping developers manage and navigate through large sets of data efficiently.                          |                                                                                                                                                                                                                                                                                                                             |
| `links`                                                                                                                                                                                                                                                                                                                     | [components.ListLeadsResponseLinks](../../models/components/listleadsresponselinks.md)                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                          | This object contains navigational links that help in traversing through paginated API responses. It typically includes URLs or endpoints that direct to the previous, current, or next pages of data, facilitating easy navigation and data retrieval in a structured manner.                                               |                                                                                                                                                                                                                                                                                                                             |