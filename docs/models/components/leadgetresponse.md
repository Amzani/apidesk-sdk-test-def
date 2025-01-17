# LeadGetResponse

Lead

## Example Usage

```typescript
import { LeadGetResponse } from "apideck/models/components";

let value: LeadGetResponse = {
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
        value: [
          "<value>",
        ],
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

| Field                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                      | The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request, such as 200 for success or 404 for not found. It is always included in the response to inform the client about the outcome of their request, helping in error handling and debugging.                                | 200                                                                                                                                                                                                                                                                                                                                     |
| `status`                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                      | A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for a 200 status code. It is included to give a quick understanding of the request's result, complementing the numeric status code.                                                            | OK                                                                                                                                                                                                                                                                                                                                      |
| `service`                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                      | The Apideck ID of the service provider that processed the request. This string identifies which third-party service was used to retrieve the lead information, such as 'pipedrive'. It is crucial when multiple integrations are active, ensuring the correct service's data is accessed and returned.                                  | zoho-crm                                                                                                                                                                                                                                                                                                                                |
| `resource`                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                      | The name of the unified API resource accessed during the operation. This string indicates the specific resource within the Apideck ecosystem, such as 'leads', that was queried. It helps in understanding the context of the data returned and is always included to clarify the resource involved in the operation.                   | companies                                                                                                                                                                                                                                                                                                                               |
| `operation`                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                      | The specific operation performed during the API request. This string describes the action taken, such as 'retrieve' or 'update', providing clarity on what was done with the resource. It is included to document the type of interaction that occurred, aiding in tracking and logging API usage.                                      | one                                                                                                                                                                                                                                                                                                                                     |
| `data`                                                                                                                                                                                                                                                                                                                                  | [components.LeadGetResponseData](../../models/components/leadgetresponsedata.md)                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                      | The main container object for all lead-related information. This object encapsulates all the details about the lead retrieved from the CRM, including identifiers, names, and associations. It is always included in the response to ensure that all relevant lead data is structured and accessible for further processing or display. |                                                                                                                                                                                                                                                                                                                                         |