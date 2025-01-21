# GetContactResponse

Contact

## Example Usage

```typescript
import { GetContactResponse } from "apideck/models/components";

let value: GetContactResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "one",
  data: {
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
        value: 10,
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `statusCode`                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The HTTP response status code indicating the result of the API request. This integer value helps determine whether the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is crucial for error handling and debugging in client applications. | 200                                                                                                                                                                                                                                                                                              |
| `status`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | A string representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This provides a human-readable status that complements the numeric status code, aiding in quick understanding of the response outcome.                                   | OK                                                                                                                                                                                                                                                                                               |
| `service`                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The Apideck ID of the service provider from which the contact data is retrieved. This string uniquely identifies the service within the Apideck ecosystem, ensuring that the data source is clear and traceable for integration purposes.                                                        | zoho-crm                                                                                                                                                                                                                                                                                         |
| `resource`                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The name of the unified API resource accessed, in this case, 'contacts'. This string indicates the type of resource being interacted with, helping developers understand the context of the data returned in the response.                                                                       | companies                                                                                                                                                                                                                                                                                        |
| `operation`                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | The specific operation performed by the API, represented as a string. For this endpoint, it would typically be 'retrieve' or similar, indicating that the operation involved fetching data rather than modifying it.                                                                             | one                                                                                                                                                                                                                                                                                              |
| `data`                                                                                                                                                                                                                                                                                           | [components.GetContactResponseData](../../models/components/getcontactresponsedata.md)                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                               | This object contains all the detailed information about the specific contact retrieved from the CRM system. It serves as the main container for the contact's attributes, ensuring that all related data is encapsulated within a single structure for easy access and manipulation.             |                                                                                                                                                                                                                                                                                                  |