# CrmContactsUpdateRequest

## Example Usage

```typescript
import { CrmContactsUpdateRequest } from "apideck/models/operations";

let value: CrmContactsUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  updateContactRequest: {
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
        value: "Uses Salesforce and Marketo",
      },
    ],
    tags: [
      "New",
    ],
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

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | The unique identifier of the activity record you wish to delete. This ID is crucial for specifying which record should be removed from the CRM system.                                                                        |                                                                                                                                                                                                                               |
| `consumerId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | A unique identifier assigned to the consumer, necessary for authenticating and authorizing the API request. This ensures that the request is associated with the correct consumer account.                                    | test-consumer                                                                                                                                                                                                                 |
| `appId`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | The unique identifier for your Unify application, required to authenticate API requests and ensure they are processed within the correct application context.                                                                 | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                                                                                                       |
| `serviceId`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | Optional header to specify the service ID for targeting a specific service integration, such as 'pipedrive'. This is useful when multiple integrations are active and you need to direct the request to a particular service. | salesforce                                                                                                                                                                                                                    |
| `raw`                                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                            | A boolean flag that, when set to true, returns the raw data as received from the service. This is primarily useful for debugging and development purposes, allowing you to see the unprocessed response.                      |                                                                                                                                                                                                                               |
| `updateContactRequest`                                                                                                                                                                                                        | [components.UpdateContactRequest](../../models/components/updatecontactrequest.md)                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                           |                                                                                                                                                                                                                               |