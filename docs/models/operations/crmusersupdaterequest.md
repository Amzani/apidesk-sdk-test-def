# CrmUsersUpdateRequest

## Example Usage

```typescript
import { CrmUsersUpdateRequest } from "apideck/models/operations";

let value: CrmUsersUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  updateUserRequest: {
    parentId: "54321",
    username: "masterofcoin",
    firstName: "Elon",
    lastName: "Musk",
    title: "CEO",
    division: "Europe",
    companyName: "SpaceX",
    employeeNumber: "123456-AB",
    description: "A description",
    image: "https://logo.clearbit.com/spacex.com?s=128",
    language: "EN",
    status: "active",
    password: "supersecretpassword",
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

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The unique identifier of the activity to be deleted. This parameter is required to specify which activity record should be removed from the CRM system. Ensure that the ID corresponds to an existing activity to avoid errors. |                                                                                                                                                                                                                                 |
| `serviceId`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service.               | salesforce                                                                                                                                                                                                                      |
| `raw`                                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                              | A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.                                             |                                                                                                                                                                                                                                 |
| `updateUserRequest`                                                                                                                                                                                                             | [components.UpdateUserRequest](../../models/components/updateuserrequest.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |                                                                                                                                                                                                                                 |