# ListCompaniesResponse

Companies

## Example Usage

```typescript
import { ListCompaniesResponse } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: ListCompaniesResponse = {
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
          value: "Uses Salesforce and Marketo",
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

| Field                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | The HTTP response status code indicating the result of the API request. This integer value helps determine if the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is crucial for error handling and debugging purposes.                                          | 200                                                                                                                                                                                                                                                                                                                    |
| `status`                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | A textual representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This string provides a human-readable explanation of the status code, aiding in quick understanding of the response outcome.                                                                  | OK                                                                                                                                                                                                                                                                                                                     |
| `service`                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | The unique Apideck identifier for the service provider from which the data is being fetched. This string helps in identifying the source of the data within the unified API ecosystem, ensuring clarity in multi-service environments.                                                                                 | zoho-crm                                                                                                                                                                                                                                                                                                               |
| `resource`                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | The name of the unified API resource being accessed, such as 'companies'. This string indicates the specific type of data returned by the API, helping developers understand the context of the response data.                                                                                                         | companies                                                                                                                                                                                                                                                                                                              |
| `operation`                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | The specific operation performed by the API, in this case, 'companiesAll'. This string helps in identifying the action taken by the API, which is crucial for logging and tracking API usage.                                                                                                                          | all                                                                                                                                                                                                                                                                                                                    |
| `data`                                                                                                                                                                                                                                                                                                                 | [components.Data](../../models/components/data.md)[]                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | An array containing the list of companies retrieved from the CRM system. Each element in the array represents a company object with detailed information such as ID, name, interaction count, and owner ID. This array is the primary container for the company data returned by the API.                              |                                                                                                                                                                                                                                                                                                                        |
| `meta`                                                                                                                                                                                                                                                                                                                 | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                     | This object holds metadata about the API response, providing additional context and information about the data returned. It typically includes details like pagination cursors and item counts, which are essential for navigating through large datasets efficiently.                                                 |                                                                                                                                                                                                                                                                                                                        |
| `links`                                                                                                                                                                                                                                                                                                                | [components.Links](../../models/components/links.md)                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                     | This object contains navigational links that facilitate moving between pages of results in the API response. It includes links to the current and previous pages, providing a structured way to access different parts of the dataset. The object format ensures easy integration with hypermedia-driven applications. |                                                                                                                                                                                                                                                                                                                        |