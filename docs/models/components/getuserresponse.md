# GetUserResponse

User

## Example Usage

```typescript
import { GetUserResponse } from "apideck/models/components";

let value: GetUserResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "companies",
  operation: "one",
  data: {
    id: "12345",
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
    updatedAt: "2017-08-12T20:43:21.291Z",
    createdAt: "2017-08-12T20:43:21.291Z",
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

| Field                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                           | The HTTP response status code indicating the result of the API request. This integer value helps determine whether the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is crucial for error handling and debugging.    | 200                                                                                                                                                                                                                                                                          |
| `status`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                           | A textual representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This string provides a human-readable explanation of the status code, aiding in understanding the outcome of the API call.                          | OK                                                                                                                                                                                                                                                                           |
| `service`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                           | The unique Apideck identifier for the service provider from which the user data is retrieved. This string helps in identifying the source of the data, especially when multiple service providers are integrated within the application.                                     | zoho-crm                                                                                                                                                                                                                                                                     |
| `resource`                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                           | The name of the Unified API resource that was accessed, in this case, typically representing the user entity. This string indicates the type of resource involved in the operation, helping developers understand the context of the data returned.                          | companies                                                                                                                                                                                                                                                                    |
| `operation`                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                           | The specific operation performed by the API, such as 'get' for retrieving user details. This string clarifies the action taken, providing context about the API request and its purpose within the CRM system.                                                               | one                                                                                                                                                                                                                                                                          |
| `data`                                                                                                                                                                                                                                                                       | [components.GetUserResponseData](../../models/components/getuserresponsedata.md)                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                           | The main container object that holds all the detailed information about the user. This object includes various properties such as the user's ID, username, and personal details. It is the primary structure returned in the response, encapsulating all user-specific data. |                                                                                                                                                                                                                                                                              |