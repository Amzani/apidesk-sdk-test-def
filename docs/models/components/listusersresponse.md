# ListUsersResponse

Users

## Example Usage

```typescript
import { ListUsersResponse } from "apideck/models/components";

let value: ListUsersResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "users",
  operation: "all",
  data: [
    {
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

| Field                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The HTTP response status code indicating the result of the API request. This integer value helps determine if the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is essential for error handling and debugging.                                                                      | 200                                                                                                                                                                                                                                                                                                                                         |
| `status`                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | A string representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This provides a human-readable explanation of the status code and is useful for logging and user feedback.                                                                                                          | OK                                                                                                                                                                                                                                                                                                                                          |
| `service`                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The Apideck ID of the service provider from which the user data is retrieved. This string uniquely identifies the service within the Apideck ecosystem, ensuring that the correct integration is accessed.                                                                                                                                  | zoho-crm                                                                                                                                                                                                                                                                                                                                    |
| `resource`                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The name of the unified API resource being accessed, such as 'users'. This string indicates the type of data returned by the API and is crucial for understanding the context of the response.                                                                                                                                              | users                                                                                                                                                                                                                                                                                                                                       |
| `operation`                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The specific operation performed by the API, in this case, 'usersAll'. This string helps identify the action taken, which is useful for tracking and auditing API usage.                                                                                                                                                                    | all                                                                                                                                                                                                                                                                                                                                         |
| `data`                                                                                                                                                                                                                                                                                                                                      | [components.ListUsersResponseData](../../models/components/listusersresponsedata.md)[]                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | An array containing user objects retrieved from the CRM system. Each object in the array represents a user and includes detailed information such as user ID, username, and personal details. This array is the primary container for user data in the response, allowing applications to iterate over and process each user's information. |                                                                                                                                                                                                                                                                                                                                             |
| `meta`                                                                                                                                                                                                                                                                                                                                      | [components.ListUsersResponseMeta](../../models/components/listusersresponsemeta.md)                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | An object containing metadata about the response, such as pagination details or request identifiers. This information helps in understanding the context of the response and managing subsequent API calls effectively.                                                                                                                     |                                                                                                                                                                                                                                                                                                                                             |
| `links`                                                                                                                                                                                                                                                                                                                                     | [components.ListUsersResponseLinks](../../models/components/listusersresponselinks.md)                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | An object containing links for navigating between pages of results in the API response. This object typically includes URLs for accessing previous and next pages, aiding in efficient data traversal.                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                             |