# CompaniesAddRequest

## Example Usage

```typescript
import { CompaniesAddRequest } from "apideck/models/operations";
import { RFCDate } from "apideck/types";

let value: CompaniesAddRequest = {
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  serviceId: "salesforce",
  companyCreateRequest: {
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

| Field                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `raw`                                                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                           | A boolean flag that, when set to true, includes the raw response in the output. This is primarily used for debugging purposes to provide more detailed information about the response. By default, this is set to false.                                     |                                                                                                                                                                                                                                                              |
| `consumerId`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | A unique identifier for the consumer making the request. This ID is crucial for authenticating the consumer and ensuring that the correct data is accessed or modified. It must be a valid consumer ID associated with your account.                         | test-consumer                                                                                                                                                                                                                                                |
| `appId`                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | The unique identifier of your Unify application. This ID is used to authenticate the application making the request and must match the ID assigned to your application in the Apideck platform.                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                                                                                                                                      |
| `serviceId`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                           | An optional parameter used to specify the target service when multiple integrations are active. This ID helps direct the request to the correct service, such as 'pipedrive' or 'salesforce'. It is only necessary if your setup includes multiple services. | salesforce                                                                                                                                                                                                                                                   |
| `companyCreateRequest`                                                                                                                                                                                                                                       | [components.CompanyCreateRequest](../../models/components/companycreaterequest.md)                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                              |