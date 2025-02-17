# GetCompanyResponse

Company

## Example Usage

```typescript
import { GetCompanyResponse } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: GetCompanyResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "one",
  data: {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The HTTP response status code returned by the server. This integer value indicates the result of the GET request, such as 200 for success or 404 if the company is not found. It helps developers understand the outcome of their API call.                                                                                                     | 200                                                                                                                                                                                                                                                                                                                                             |
| `status`                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | A textual representation of the HTTP response status. This string provides a human-readable status message, such as 'OK' for a successful request or 'Not Found' if the company ID does not exist. It complements the status_code by offering a more descriptive explanation of the response.                                                   | OK                                                                                                                                                                                                                                                                                                                                              |
| `service`                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The unique Apideck identifier for the service provider handling the request. This string helps identify which service within the Apideck ecosystem processed the company data request, ensuring clarity in multi-service environments.                                                                                                          | zoho-crm                                                                                                                                                                                                                                                                                                                                        |
| `resource`                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The name of the Unified API resource that was accessed. This string indicates the specific resource type, such as 'companies', that the GET request targeted, helping developers understand the context of the data retrieved.                                                                                                                  | companies                                                                                                                                                                                                                                                                                                                                       |
| `operation`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | The specific operation performed by the API, in this case, a 'GET' request to retrieve company details. This string helps developers track the type of action executed, ensuring they understand the nature of the API interaction.                                                                                                             | one                                                                                                                                                                                                                                                                                                                                             |
| `data`                                                                                                                                                                                                                                                                                                                                          | [components.Company](../../models/components/company.md)                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | This object contains all the detailed information about the company retrieved from the CRM system. It serves as the main container for the company's data, including identifiers, names, and other relevant attributes. The structure of this object is crucial for applications that need to process or display comprehensive company details. |                                                                                                                                                                                                                                                                                                                                                 |