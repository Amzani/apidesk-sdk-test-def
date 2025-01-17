# UserGetResponse

User

## Example Usage

```typescript
import { UserGetResponse } from "apideck/models/components";

let value: UserGetResponse = {
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

| Field                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request, such as 200 for success or 404 for not found. It is always included in the response to inform the client about the outcome of their request.                                     | 200                                                                                                                                                                                                                                                                                                 |
| `status`                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for a 200 status code. It is included to give a clear understanding of the request's result.                                                               | OK                                                                                                                                                                                                                                                                                                  |
| `service`                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | The Apideck ID of the service provider that processed the request. This string uniquely identifies which service handled the operation, especially useful when multiple integrations are active. It is always included to ensure clarity about the source of the data.                              | zoho-crm                                                                                                                                                                                                                                                                                            |
| `resource`                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | The name of the unified API resource that was accessed. This string indicates the specific resource within the API that the operation targeted, such as 'users' for a user-related request. It is included to confirm the resource context of the response.                                         | companies                                                                                                                                                                                                                                                                                           |
| `operation`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | The specific operation that was performed as part of the API request. This string describes the action taken, such as 'retrieve' for fetching data. It is included to provide context about what was done during the request.                                                                       | one                                                                                                                                                                                                                                                                                                 |
| `data`                                                                                                                                                                                                                                                                                              | [components.UserGetResponseData](../../models/components/usergetresponsedata.md)                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | The main container object for all user-related data returned in the response. This object encapsulates all the detailed information about the user specified by the unique ID in the request path. It is always included in the response to ensure that the user data is structured and accessible. |                                                                                                                                                                                                                                                                                                     |