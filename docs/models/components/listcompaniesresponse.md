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
          value: 10,
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

| Field                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                        | This property contains the HTTP response status code as an integer, indicating the result of the GET request to the '/crm/companies' endpoint. It helps developers understand whether the request was successful (e.g., 200) or encountered an error (e.g., 404 for not found). The status code is crucial for error handling and debugging API interactions.                             | 200                                                                                                                                                                                                                                                                                                                                                                                       |
| `status`                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                        | This property provides a human-readable string that describes the HTTP response status. It complements the status code by offering a textual explanation, such as 'OK' for a successful request or 'Not Found' for a missing resource, aiding developers in quickly understanding the outcome of their API call.                                                                          | OK                                                                                                                                                                                                                                                                                                                                                                                        |
| `service`                                                                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                        | This property identifies the unique Apideck service provider handling the request as a string. It indicates which third-party service or CRM system is accessed through the unified API, helping developers trace the source of the data and ensuring proper integration with the correct service.                                                                                        | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                  |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                        | This property specifies the name of the unified API resource being accessed, represented as a string. It indicates that the resource in question is 'companies', aligning with the endpoint '/crm/companies', and helps developers understand the type of data being retrieved from the API.                                                                                              | companies                                                                                                                                                                                                                                                                                                                                                                                 |
| `operation`                                                                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                        | This property describes the specific operation performed by the API call as a string. It details the action taken, such as 'fetch' or 'retrieve', and is essential for logging and debugging purposes to track the intended function of the API request.                                                                                                                                  | all                                                                                                                                                                                                                                                                                                                                                                                       |
| `data`                                                                                                                                                                                                                                                                                                                                                                                    | [components.Data](../../models/components/data.md)[]                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                        | This property contains an array of company objects retrieved from the CRM system. Each object within the array represents a company and includes detailed information such as the company's unique identifier (ID), name, and interaction count. This array serves as the main component of the response, enabling developers to access and manipulate the list of companies efficiently. |                                                                                                                                                                                                                                                                                                                                                                                           |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                    | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                        | This object holds metadata about the API response, offering additional context and information about the data returned. It helps developers understand the structure of the response and any supplementary parameters included, facilitating better integration and data handling within applications.                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                                                                                                                                   | [components.Links](../../models/components/links.md)                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                        | The 'links' object contains navigational URLs that assist in moving between pages of results within the API response. It includes properties for links to the previous and current pages, which are crucial for managing the retrieval of paginated company data. The structure is an object with string URL properties for different page links.                                         |                                                                                                                                                                                                                                                                                                                                                                                           |