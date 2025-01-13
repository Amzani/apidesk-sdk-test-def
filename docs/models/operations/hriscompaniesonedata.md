# HrisCompaniesOneData

## Example Usage

```typescript
import { HrisCompaniesOneData } from "apideck/models/operations";

let value: HrisCompaniesOneData = {
  id: "12345",
  legalName: "SpaceX",
  displayName: "SpaceX",
  subdomain: "company",
  status: "active",
  companyNumber: "123456-AB",
  currency: "USD",
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
  websites: [
    {
      id: "12345",
      url: "http://example.com",
      type: "primary",
    },
  ],
  debtorId: "12345",
  deleted: false,
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for an object.                                                                                                                      | 12345                                                                                                                                                   |
| `legalName`                                                                                                                                             | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     | SpaceX                                                                                                                                                  |
| `displayName`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | SpaceX                                                                                                                                                  |
| `subdomain`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | company                                                                                                                                                 |
| `status`                                                                                                                                                | [operations.HrisCompaniesOneStatus](../../models/operations/hriscompaniesonestatus.md)                                                                  | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | active                                                                                                                                                  |
| `companyNumber`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.                                               | 123456-AB                                                                                                                                               |
| `currency`                                                                                                                                              | [operations.HrisCompaniesOneCurrency](../../models/operations/hriscompaniesonecurrency.md)                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `addresses`                                                                                                                                             | [operations.HrisCompaniesOneAddresses](../../models/operations/hriscompaniesoneaddresses.md)[]                                                          | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `phoneNumbers`                                                                                                                                          | [operations.HrisCompaniesOnePhoneNumbers](../../models/operations/hriscompaniesonephonenumbers.md)[]                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `emails`                                                                                                                                                | [operations.HrisCompaniesOneEmails](../../models/operations/hriscompaniesoneemails.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `websites`                                                                                                                                              | [operations.HrisCompaniesOneWebsites](../../models/operations/hriscompaniesonewebsites.md)[]                                                            | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `debtorId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 12345                                                                                                                                                   |
| `customMappings`                                                                                                                                        | [operations.HrisCompaniesOneCustomMappings](../../models/operations/hriscompaniesonecustommappings.md)                                                  | :heavy_minus_sign:                                                                                                                                      | When custom mappings are configured on the resource, the result is included here.                                                                       |                                                                                                                                                         |
| `deleted`                                                                                                                                               | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | false                                                                                                                                                   |
| `updatedBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who last updated the object.                                                                                                                   | 12345                                                                                                                                                   |
| `createdBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who created the object.                                                                                                                        | 12345                                                                                                                                                   |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was last updated.                                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was created.                                                                                                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [operations.HrisCompaniesOnePassThrough](../../models/operations/hriscompaniesonepassthrough.md)[]                                                      | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |