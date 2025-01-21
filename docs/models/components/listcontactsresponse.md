# ListContactsResponse

Contacts

## Example Usage

```typescript
import { ListContactsResponse } from "apideck/models/components";

let value: ListContactsResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "contacts",
  operation: "all",
  data: [
    {
      id: "12345",
      name: "Elon Musk",
      ownerId: "54321",
      type: "personal",
      companyId: "23456",
      companyName: "23456",
      leadId: "34567",
      firstName: "Elon",
      middleName: "D.",
      lastName: "Musk",
      prefix: "Mr.",
      suffix: "PhD",
      title: "CEO",
      department: "Engineering",
      language: "EN",
      gender: "female",
      birthday: "2000-08-12",
      photoUrl: "https://unavatar.io/elon-musk",
      leadSource: "Cold Call",
      fax: "+12129876543",
      description: "Internal champion",
      currentBalance: 10.5,
      status: "open",
      active: true,
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
      emailDomain: "gmail.com",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            {},
          ],
        },
      ],
      tags: [
        "New",
      ],
      firstCallAt: new Date("2020-09-30T07:43:32.000Z"),
      firstEmailAt: new Date("2020-09-30T07:43:32.000Z"),
      lastActivityAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2017-08-12T20:43:21.291Z"),
      createdAt: new Date("2017-08-12T20:43:21.291Z"),
      opportunityIds: [
        "12345",
      ],
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

| Field                                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                               | The HTTP response status code indicating the result of the API request. This integer value helps determine whether the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is crucial for error handling and debugging in client applications.                                                                 | 200                                                                                                                                                                                                                                                                                                                                                              |
| `status`                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                               | A string representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This provides a human-readable status that complements the status code, aiding in quick understanding of the request outcome.                                                                                                            | OK                                                                                                                                                                                                                                                                                                                                                               |
| `service`                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                               | The Apideck ID of the service provider from which the contact data is retrieved. This string identifier is essential for distinguishing between different service providers integrated into the CRM system, ensuring the correct source of data is referenced.                                                                                                   | zoho-crm                                                                                                                                                                                                                                                                                                                                                         |
| `resource`                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                               | The name of the Unified API resource being accessed, in this case, 'contacts'. This string value helps identify the specific resource type involved in the API operation, facilitating resource-specific processing and handling in applications.                                                                                                                | contacts                                                                                                                                                                                                                                                                                                                                                         |
| `operation`                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                               | The specific operation performed by the API request, represented as a string. For this endpoint, it typically indicates a 'GET' operation, reflecting the retrieval of contact data from the CRM system. This helps in logging and tracking the type of API interactions performed.                                                                              | all                                                                                                                                                                                                                                                                                                                                                              |
| `data`                                                                                                                                                                                                                                                                                                                                                           | [components.ListContactsResponseData](../../models/components/listcontactsresponsedata.md)[]                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                               | An array containing the list of contact objects retrieved from the CRM. Each object within the array represents a single contact and includes detailed information such as the contact's ID, name, owner, and type. This array is the primary data structure returned by the 'contactsAll' operation, facilitating easy access and manipulation of contact data. |                                                                                                                                                                                                                                                                                                                                                                  |
| `meta`                                                                                                                                                                                                                                                                                                                                                           | [components.ListContactsResponseMeta](../../models/components/listcontactsresponsemeta.md)                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                               | An object containing metadata about the response, such as pagination details or request processing information. This metadata helps in understanding the context of the response and managing subsequent data retrieval operations efficiently.                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                  |
| `links`                                                                                                                                                                                                                                                                                                                                                          | [components.ListContactsResponseLinks](../../models/components/listcontactsresponselinks.md)                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                               | This object contains hypermedia links that facilitate navigation to previous or next pages in the API response. It provides URLs that can be used directly to access other pages, supporting RESTful navigation patterns in client applications.                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                  |