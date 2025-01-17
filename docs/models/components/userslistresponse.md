# UsersListResponse

Users

## Example Usage

```typescript
import { UsersListResponse } from "apideck/models/components";

let value: UsersListResponse = {
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                    | The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request, such as 200 for success or 404 for not found. It is always included in the response to inform the client of the outcome of their request, allowing for appropriate handling of the response based on the code received.                                                            | 200                                                                                                                                                                                                                                                                                                                                                                                                   |
| `status`                                                                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                    | A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for a 200 status code or 'Not Found' for a 404 status code. It is included to give a clear, concise description of the response outcome, aiding in debugging and logging processes.                                                                          | OK                                                                                                                                                                                                                                                                                                                                                                                                    |
| `service`                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                    | The Apideck ID of the service provider that processed the request. This string uniquely identifies the service within the Apideck ecosystem, ensuring that the response can be traced back to the correct service provider. It is crucial when multiple services are integrated, as it helps in identifying which service handled the request.                                                        | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                              |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                    | The name of the Unified API resource that was accessed. This string indicates which specific resource within the API was targeted by the request, such as 'users' for the '/crm/users' endpoint. It helps in understanding the context of the response, especially when dealing with multiple API resources.                                                                                          | users                                                                                                                                                                                                                                                                                                                                                                                                 |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                    | The specific operation that was performed as part of the API request. This string describes the action taken, such as 'retrieve' for fetching data or 'update' for modifying data. It provides clarity on what the API call was intended to achieve, which is essential for tracking and auditing purposes.                                                                                           | all                                                                                                                                                                                                                                                                                                                                                                                                   |
| `data`                                                                                                                                                                                                                                                                                                                                                                                                | [components.UsersListResponseData](../../models/components/userslistresponsedata.md)[]                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                    | An array containing user objects, each representing a unique user retrieved from the CRM system. This array is the main body of the response and includes detailed user information based on the specified query parameters. It is always included in the response to provide a structured list of users.                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                       |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                | [components.UsersListResponseMeta](../../models/components/userslistresponsemeta.md)                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                    | This property contains metadata about the response, providing additional context and information about the data returned by the API. It is not always required but is included when there is a need to convey supplementary details such as pagination information or request processing time. This helps in understanding the response structure and any additional operations that might be needed. |                                                                                                                                                                                                                                                                                                                                                                                                       |
| `links`                                                                                                                                                                                                                                                                                                                                                                                               | [components.UsersListResponseLinks](../../models/components/userslistresponselinks.md)                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                    | The 'links' object contains hypermedia links that provide URLs for navigating between pages of results in the API. It is included in the response to offer direct access to previous or next pages, enhancing the ease of data traversal in client applications. This object is particularly beneficial for implementing intuitive user interfaces that require seamless pagination controls.         |                                                                                                                                                                                                                                                                                                                                                                                                       |