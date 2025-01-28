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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                              | The HTTP response status code returned by the server. This integer value indicates the result of the GET request, such as 200 for success or 404 if the contact is not found. It helps in determining the outcome of the API call and handling responses accordingly.                                                                                           | 200                                                                                                                                                                                                                                                                                                                                                             |
| `status`                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                              | A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for a successful request or 'Not Found' if the contact does not exist. It complements the status code by offering a more descriptive context.                                                                          | OK                                                                                                                                                                                                                                                                                                                                                              |
| `service`                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                              | The Apideck ID of the service provider from which the contact information is retrieved. This string uniquely identifies the service within the Apideck ecosystem, ensuring that the data source is clearly specified in the response.                                                                                                                           | zoho-crm                                                                                                                                                                                                                                                                                                                                                        |
| `resource`                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                              | The name of the unified API resource accessed by this operation. This string indicates the type of resource, such as 'contact', that the GET request is interacting with, providing clarity on the data structure being returned.                                                                                                                               | companies                                                                                                                                                                                                                                                                                                                                                       |
| `operation`                                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                              | The specific operation performed by the API call, represented as a string. In this context, it indicates the 'contactsOne' operation, which fetches detailed information about a specific contact. This helps in understanding the action taken by the API request.                                                                                             | one                                                                                                                                                                                                                                                                                                                                                             |
| `data`                                                                                                                                                                                                                                                                                                                                                          | [components.Contact](../../models/components/contact.md)                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                              | This object contains all the detailed information about the contact retrieved from the CRM system. It serves as the main container for the contact's attributes, ensuring that all related data is organized under this single property. The structure of this object allows for easy access and manipulation of the contact's details within your application. |                                                                                                                                                                                                                                                                                                                                                                 |