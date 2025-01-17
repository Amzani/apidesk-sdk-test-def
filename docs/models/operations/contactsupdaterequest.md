# ContactsUpdateRequest

## Example Usage

```typescript
import { ContactsUpdateRequest } from "apideck/models/operations";

let value: ContactsUpdateRequest = {
  id: "<id>",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  serviceId: "salesforce",
  contactUpdateRequest: {
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

| Field                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | The unique identifier of the activity record to be deleted. This parameter is essential as it specifies which activity in the CRM system will be removed. Ensure that the ID corresponds to an existing activity to avoid errors.                            |                                                                                                                                                                                                                                                              |
| `consumerId`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | A unique identifier for the consumer making the request. This ID is crucial for authenticating the consumer and ensuring that the correct data is accessed or modified. It must be a valid consumer ID associated with your account.                         | test-consumer                                                                                                                                                                                                                                                |
| `appId`                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | The unique identifier of your Unify application. This ID is used to authenticate the application making the request and must match the ID assigned to your application in the Apideck platform.                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                                                                                                                                      |
| `serviceId`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                           | An optional parameter used to specify the target service when multiple integrations are active. This ID helps direct the request to the correct service, such as 'pipedrive' or 'salesforce'. It is only necessary if your setup includes multiple services. | salesforce                                                                                                                                                                                                                                                   |
| `raw`                                                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                           | A boolean flag that, when set to true, includes the raw response in the output. This is primarily used for debugging purposes to provide more detailed information about the response. By default, this is set to false.                                     |                                                                                                                                                                                                                                                              |
| `contactUpdateRequest`                                                                                                                                                                                                                                       | [components.ContactUpdateRequest](../../models/components/contactupdaterequest.md)                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                              |