# LeadsListResponse

Leads

## Example Usage

```typescript
import { LeadsListResponse } from "apideck/models/components";

let value: LeadsListResponse = {
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
          value: {},
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                          | The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request made to the '/crm/leads' endpoint. A status code of 200 signifies a successful retrieval of lead data, while other codes may indicate various errors or issues with the request. This property is always included in the response to provide immediate feedback on the request's outcome. | 200                                                                                                                                                                                                                                                                                                                                                                                                         |
| `status`                                                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                          | The HTTP response status message accompanying the status code. This string provides a textual representation of the status code, offering a human-readable explanation of the request's result. For example, 'OK' typically accompanies a 200 status code, indicating success. This property is essential for understanding the context of the response and is always included.                             | OK                                                                                                                                                                                                                                                                                                                                                                                                          |
| `service`                                                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                          | The Apideck ID of the service provider that processed the request. This string uniquely identifies the service within the Apideck ecosystem, allowing users to track which service handled the lead retrieval operation. It is crucial for debugging and auditing purposes, especially in environments with multiple integrated services. This property is always included in the response.                 | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                                    |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                          | The name of the unified API resource accessed during the operation. This string identifies the specific resource within the Apideck platform, in this case, 'leads', which was queried to retrieve lead data. It helps in understanding the context of the API call and is always included to clarify the resource involved in the operation.                                                               | companies                                                                                                                                                                                                                                                                                                                                                                                                   |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                          | The specific operation performed by the API request. This string describes the action taken, such as 'retrieve' for fetching lead data from the CRM. It provides clarity on what the API call was intended to do, aiding in tracking and logging API usage. This property is always included to ensure transparency in the operation performed.                                                             | all                                                                                                                                                                                                                                                                                                                                                                                                         |
| `data`                                                                                                                                                                                                                                                                                                                                                                                                      | [components.LeadsListResponseData](../../models/components/leadslistresponsedata.md)[]                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                          | An array containing the list of lead objects retrieved from the CRM. Each object in this array represents a single lead with its associated details. This property is always included in the response to provide the complete set of leads that match the query parameters specified in the request. It is essential for iterating over the leads data and accessing individual lead information.           |                                                                                                                                                                                                                                                                                                                                                                                                             |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                      | [components.LeadsListResponseMeta](../../models/components/leadslistresponsemeta.md)                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                          | The 'meta' object contains metadata about the response, providing additional context and information about the data returned. This object is included to help clients understand the structure and status of the response, especially in cases involving pagination or filtering.                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                             |
| `links`                                                                                                                                                                                                                                                                                                                                                                                                     | [components.LeadsListResponseLinks](../../models/components/leadslistresponselinks.md)                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                          | The 'links' object contains navigational URLs that facilitate easy access to different pages of the API response. This object is included when pagination is applied, providing structured links to move between pages. It enhances user experience by offering direct links to the previous, current, and next pages, thus simplifying the process of data retrieval across multiple pages.                |                                                                                                                                                                                                                                                                                                                                                                                                             |