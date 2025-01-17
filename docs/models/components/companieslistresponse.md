# CompaniesListResponse

Companies

## Example Usage

```typescript
import { CompaniesListResponse } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: CompaniesListResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "all",
  data: [
    {
      id: "12345",
      name: "SpaceX",
      interactionCount: 1,
      ownerId: "12345",
      image: "https://www.spacex.com/static/images/share.jpg",
      description:
        "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
      vatNumber: "BE0689615164",
      currency: "USD",
      status: "Open",
      fax: "+12129876543",
      annualRevenue: "+$35m",
      numberOfEmployees: "500-1000",
      industry: "Apparel",
      ownership: "Public",
      salesTaxNumber: "12456EN",
      payeeNumber: "78932EN",
      abnOrTfn: "46 115 614 695",
      abnBranch: "123",
      acn: "XXX XXX XXX",
      firstName: "Elon",
      lastName: "Musk",
      parentId: "22345",
      bankAccounts: [
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
      ],
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
      rowType: {
        id: "12345",
        name: "Customer Account",
      },
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: true,
        },
      ],
      tags: [
        "New",
      ],
      readOnly: false,
      lastActivityAt: new Date("2020-09-30T07:43:32.000Z"),
      deleted: false,
      salutation: "Mr",
      birthday: new RFCDate("2000-08-12"),
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                       | The HTTP response status code indicating the result of the API request. This integer value represents the outcome of the request, such as 200 for success, 404 for not found, or 500 for server error. It is included in every response to inform the client about the success or failure of the operation.                                                                                              | 200                                                                                                                                                                                                                                                                                                                                                                                                      |
| `status`                                                                                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                       | A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for 200 or 'Not Found' for 404. It is included to give a clear, concise description of the response outcome.                                                                                                                                                    | OK                                                                                                                                                                                                                                                                                                                                                                                                       |
| `service`                                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                       | The Apideck ID of the service provider that processed the request. This string uniquely identifies which service within the Apideck ecosystem handled the API call, especially important when multiple services are integrated. It is always included to ensure traceability and clarity in multi-service environments.                                                                                  | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                                 |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                       | The name of the unified API resource that was accessed. This string indicates the specific resource within the Apideck Unified API that the operation was performed on, such as 'companies'. It is included to confirm the target resource of the request and is essential for understanding the context of the response.                                                                                | companies                                                                                                                                                                                                                                                                                                                                                                                                |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                       | The specific operation that was performed as part of the API request. This string describes the action taken, such as 'retrieve' or 'update', and is included to provide clarity on what was executed in response to the request. It helps in understanding the nature of the API interaction.                                                                                                           | all                                                                                                                                                                                                                                                                                                                                                                                                      |
| `data`                                                                                                                                                                                                                                                                                                                                                                                                   | [components.Data](../../models/components/data.md)[]                                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                       | An array containing the list of companies retrieved from the CRM system. Each entry in this array represents a single company object with detailed information. This array is always included in the response to provide the requested company data.                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                          |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                   | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                       | This object contains metadata about the API response, providing additional context and information about the data returned. It is included in the response to help consumers understand the structure and status of the data, such as pagination details and cursors for navigation. Although not required, it enhances the usability of the API by offering insights into the response characteristics. |                                                                                                                                                                                                                                                                                                                                                                                                          |
| `links`                                                                                                                                                                                                                                                                                                                                                                                                  | [components.Links](../../models/components/links.md)                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                       | The 'links' object contains URLs that facilitate navigation between different pages of results within the API. This object is included in the response to provide direct access to pagination controls, enabling clients to move forward or backward through the dataset efficiently. It is particularly useful in user interfaces that require quick navigation between pages.                          |                                                                                                                                                                                                                                                                                                                                                                                                          |