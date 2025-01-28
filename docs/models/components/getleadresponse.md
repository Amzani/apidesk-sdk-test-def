# GetLeadResponse

Lead

## Example Usage

```typescript
import { GetLeadResponse } from "apideck/models/components";

let value: GetLeadResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "one",
  data: {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The HTTP response status code returned by the server. This integer value indicates the result of the GET request, such as 200 for success or 404 if the lead is not found. It helps developers understand the outcome of their API call and handle responses accordingly.                                                   | 200                                                                                                                                                                                                                                                                                                                         |
| `status`                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | A textual representation of the HTTP response status. This string provides a human-readable description of the status code, such as 'OK' for a successful request or 'Not Found' if the lead does not exist. It complements the status code by offering a more descriptive context for the response.                        | OK                                                                                                                                                                                                                                                                                                                          |
| `service`                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The Apideck ID of the service provider used for this request. This string identifies which service integration was utilized to fetch the lead details, especially useful when multiple integrations are active. It ensures that developers can track and manage service-specific data retrieval.                            | zoho-crm                                                                                                                                                                                                                                                                                                                    |
| `resource`                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The name of the Unified API resource accessed during the operation. This string indicates the specific resource type, such as 'lead', that was queried in the CRM system. It helps developers understand the context of the data being retrieved and how it fits into the broader API structure.                            | companies                                                                                                                                                                                                                                                                                                                   |
| `operation`                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The specific operation performed by the API request. This string describes the action taken, such as 'fetch' or 'retrieve', to obtain the lead details. It provides clarity on the nature of the request and the expected outcome, aiding in debugging and integration processes.                                           | one                                                                                                                                                                                                                                                                                                                         |
| `data`                                                                                                                                                                                                                                                                                                                      | [components.Lead](../../models/components/lead.md)                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | This object contains all the detailed information about the lead retrieved from the CRM system. It serves as the primary container for the lead's data, including identifiers, names, and associated company details. The structure of this object allows developers to access specific attributes of the lead efficiently. |                                                                                                                                                                                                                                                                                                                             |