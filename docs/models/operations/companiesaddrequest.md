# CompaniesAddRequest

## Example Usage

```typescript
import { CompaniesAddRequest } from "apideck/models/operations";
import { RFCDate } from "apideck/types";

let value: CompaniesAddRequest = {
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  serviceId: "salesforce",
  requestBody: {
    name: "SpaceX",
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
        value: {},
      },
    ],
    tags: [
      "New",
    ],
    readOnly: false,
    salutation: "Mr",
    birthday: new RFCDate("2000-08-12"),
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `raw`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | The 'raw' query parameter allows the API consumer to request the response in its raw format. This is particularly useful for debugging purposes, as it provides the unprocessed data returned by the server. By default, this parameter is set to 'false', meaning the response will be processed and formatted according to standard API conventions. Setting this parameter to 'true' can help developers troubleshoot issues by examining the exact data structure and content returned by the API. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `consumerId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | The 'x-apideck-consumer-id' header is a mandatory field that uniquely identifies the consumer making the API request. This ID is crucial for authentication and authorization processes, ensuring that the request is associated with the correct consumer account. It must be a valid string that corresponds to an existing consumer in the system. This parameter is hidden from global settings to maintain security and integrity of consumer data.                                               | test-consumer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `appId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | The 'x-apideck-app-id' header is required to identify the specific Unify application making the request. This ID is essential for routing the request to the appropriate application context within the API infrastructure. It should be a valid string that matches the application's unique identifier, ensuring that the operations are executed within the correct application environment. This parameter is also hidden from global settings to protect application-specific data.               | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `serviceId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | The 'x-apideck-service-id' header is an optional parameter used when a consumer has multiple integrations active within the Unified API. It specifies the target service for the API request, such as 'pipedrive' or 'salesforce'. This parameter is necessary only when directing the request to a specific service among several active integrations, ensuring that the data is processed by the intended service. It should be a valid string representing the service ID.                          | salesforce                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `requestBody`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [operations.CompaniesAddRequestBody](../../models/operations/companiesaddrequestbody.md)                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |