# Users
(*users*)

## Overview

### Available Operations

* [usersAll](#usersall) - Retrieve a list of users from the CRM system.
* [usersAdd](#usersadd) - Add a new user to the CRM system.
* [usersOne](#usersone) - Retrieve a specific user's details from the CRM system.
* [usersUpdate](#usersupdate) - Update user details in the CRM system.
* [usersDelete](#usersdelete) - Delete a user from the CRM system.

## usersAll

The 'usersAll' operation is a GET request to the '/crm/users' endpoint, designed to retrieve a comprehensive list of users from the CRM system. This operation supports various query parameters to customize the response. The 'raw' parameter allows for the inclusion of raw response data, primarily for debugging. The 'x-apideck-consumer-id' and 'x-apideck-app-id' headers are mandatory, identifying the consumer and the Unify application, respectively. Optionally, the 'x-apideck-service-id' header specifies the service ID when multiple integrations are active. Pagination is facilitated through the 'cursor' parameter, which indicates the starting point for data retrieval, and the 'limit' parameter, which controls the number of results returned, with a default of 20 and a maximum of 200. The 'pass_through' parameter allows for additional unmapped query parameters to be forwarded downstream. The 'fields' parameter enables selective field retrieval in the response, supporting dot notation for nested properties. The operation returns a 200 status code upon successful execution, providing a structured list of user data based on the specified parameters. This operation is crucial for applications needing to access or synchronize user data from the CRM efficiently.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.users.usersAll({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { usersUsersAll } from "apideck/funcs/usersUsersAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await usersUsersAll(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UsersAllRequest](../../models/operations/usersallrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UsersAllSecurity](../../models/operations/usersallsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UsersAllResponse](../../models/operations/usersallresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## usersAdd

The 'usersAdd' operation allows API consumers to add a new user to the CRM system by sending a POST request to the '/crm/users' endpoint. This operation requires a request body containing the user details to be added. Key parameters include 'x-apideck-consumer-id' and 'x-apideck-app-id', which are mandatory headers identifying the consumer and the Unify application, respectively. The 'x-apideck-service-id' header is optional and specifies the service to call when multiple integrations are active. The 'raw' query parameter can be used to include a raw response, primarily for debugging purposes. Upon successful execution, the operation returns a 201 status code, indicating that the user has been created. This operation does not support filtering or sorting. Ensure that all required headers are correctly set to avoid authentication errors.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.users.usersAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    userCreateRequest: {
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
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { usersUsersAdd } from "apideck/funcs/usersUsersAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await usersUsersAdd(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    userCreateRequest: {
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
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UsersAddRequest](../../models/operations/usersaddrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UsersAddSecurity](../../models/operations/usersaddsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UsersAddResponse](../../models/operations/usersaddresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## usersOne

The 'usersOne' operation allows API consumers to retrieve detailed information about a specific user from the CRM system by using their unique ID. This GET request requires the 'id' parameter in the path to specify the user record to be accessed. Additionally, the request must include the 'x-apideck-consumer-id' and 'x-apideck-app-id' headers to authenticate and identify the consumer and application making the request. Optionally, the 'x-apideck-service-id' header can be provided if multiple integrations are active, specifying which service to call. The 'raw' query parameter can be used to include the raw response for debugging purposes. The 'fields' query parameter allows for selective data retrieval by specifying which fields to include in the response, using a comma-separated string and dot notation for nested properties. The operation returns a 200 status code upon successful retrieval of the user data. This operation does not support filtering or sorting beyond the specified fields parameter.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.users.usersOne({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { usersUsersOne } from "apideck/funcs/usersUsersOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await usersUsersOne(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UsersOneRequest](../../models/operations/usersonerequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UsersOneSecurity](../../models/operations/usersonesecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UsersOneResponse](../../models/operations/usersoneresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## usersUpdate

The `usersUpdate` operation allows you to modify existing user records in the CRM system by sending a PATCH request to the `/crm/users/{id}` endpoint. This operation is essential for keeping user information up-to-date and accurate. 

### Key Parameters:
- **id (path parameter)**: The unique identifier of the user record you wish to update. This parameter is mandatory.
- **x-apideck-consumer-id (header)**: Required header that specifies the consumer ID for data retrieval or submission.
- **x-apideck-app-id (header)**: Required header indicating the ID of your Unify application.
- **x-apideck-service-id (header)**: Optional header to specify the service ID when multiple integrations are active.
- **raw (query parameter)**: Optional parameter to include raw response data, useful for debugging.

### Request/Response Patterns:
- **Request**: The request must include a JSON body with the fields you wish to update. Only the fields provided in the request body will be updated.
- **Response**: A successful update returns a `200` status code, indicating that the user record has been successfully modified.

### Business Logic and Constraints:
- Ensure that the `id` provided corresponds to an existing user record.
- The operation supports partial updates, meaning you can update one or more fields without affecting others.
- Proper authentication and authorization are required to perform this operation, ensuring that only authorized users can update records. 

This operation is crucial for maintaining the integrity and accuracy of user data within the CRM, enabling seamless data management and integration across different services.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.users.usersUpdate({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    userUpdateRequest: {
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
        {
          id: "12345",
          countryCode: "1",
          areaCode: "323",
          number: "111-111-1111",
          extension: "105",
          type: "primary",
        },
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { usersUsersUpdate } from "apideck/funcs/usersUsersUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await usersUsersUpdate(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    userUpdateRequest: {
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
        {
          id: "12345",
          countryCode: "1",
          areaCode: "323",
          number: "111-111-1111",
          extension: "105",
          type: "primary",
        },
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UsersUpdateRequest](../../models/operations/usersupdaterequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UsersUpdateSecurity](../../models/operations/usersupdatesecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UsersUpdateResponse](../../models/operations/usersupdateresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## usersDelete

The `usersDelete` operation allows you to remove a user from the CRM system by specifying the user's unique ID in the path parameter. This operation is executed using the HTTP DELETE method at the endpoint `/crm/users/{id}`. Key parameters include the `id` path parameter, which is mandatory and identifies the specific user record to be deleted. Additionally, the request headers must include `x-apideck-consumer-id` and `x-apideck-app-id`, which are required to authenticate the request and specify the consumer and application context. The optional `x-apideck-service-id` header can be used if the consumer has multiple integrations, allowing you to specify which service to target. The `raw` query parameter can be included to receive a raw response, useful for debugging. Upon successful deletion, the operation returns a 200 status code, indicating that the user has been successfully removed. This operation does not support filtering or sorting, and it does not require a request body. Ensure that the user ID provided is correct, as this action is irreversible and will permanently remove the user from the system.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.users.usersDelete({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { usersUsersDelete } from "apideck/funcs/usersUsersDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await usersUsersDelete(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UsersDeleteRequest](../../models/operations/usersdeleterequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UsersDeleteSecurity](../../models/operations/usersdeletesecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UsersDeleteResponse](../../models/operations/usersdeleteresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |