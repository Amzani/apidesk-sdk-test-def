# ContactsListResponse

Contacts

## Example Usage

```typescript
import { ContactsListResponse } from "apideck/models/components";

let value: ContactsListResponse = {
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
            "<value>",
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                      | The HTTP response status code returned by the server, indicating the result of the API request. A status code of 200 signifies a successful retrieval of contacts, while other codes may indicate errors or issues with the request. This code is essential for understanding the outcome of the operation and is always included in the response.                                                                                                      | 200                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `status`                                                                                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                      | A textual representation of the HTTP response status, providing a human-readable explanation of the status code. For example, 'OK' corresponds to a 200 status code, indicating a successful operation. This property helps in quickly understanding the result of the API call without needing to interpret numeric codes.                                                                                                                             | OK                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `service`                                                                                                                                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                      | The Apideck ID of the service provider that processed the request. This identifier is crucial when multiple service integrations are active, as it specifies which service handled the operation. It ensures clarity in multi-service environments and is always included in the response for tracking purposes.                                                                                                                                        | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                      | The name of the unified API resource that was accessed or manipulated during the operation. In this context, it typically refers to 'contacts', indicating that the operation involved retrieving contact data. This property is included to confirm the specific resource targeted by the request.                                                                                                                                                     | contacts                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                      | The specific operation performed by the API, such as 'retrieve' or 'list'. This property provides context about the action taken on the resource, helping users understand what was done during the API call. It is always included to clarify the nature of the request and response.                                                                                                                                                                  | all                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `data`                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [components.ContactsListResponseData](../../models/components/contactslistresponsedata.md)[]                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                      | An array containing the list of contact objects retrieved from the CRM system. Each object in this array represents a single contact with its associated details, such as name, ID, and type. This array is always included in the response to provide the requested contact data, and its presence is crucial for iterating over the contact information returned by the API.                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [components.ContactsListResponseMeta](../../models/components/contactslistresponsemeta.md)                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                      | This object contains metadata about the response, providing additional context and information about the data returned. It may include details such as pagination cursors, timestamps, or other relevant metadata that help in understanding the scope and nature of the response. This property is included to assist in managing and interpreting the response data, especially in complex or paginated queries.                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `links`                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [components.ContactsListResponseLinks](../../models/components/contactslistresponselinks.md)                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                      | The 'links' object contains hypermedia links that facilitate navigation to previous or next pages within the API response. These links are included in paginated responses to provide direct URLs for accessing adjacent pages, enhancing the ease of navigation through large datasets. This is particularly beneficial for developers implementing client-side pagination, as it simplifies the process of linking to subsequent or prior data pages. |                                                                                                                                                                                                                                                                                                                                                                                                                                                         |