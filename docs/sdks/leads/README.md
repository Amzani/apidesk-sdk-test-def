# Leads
(*crm.leads*)

## Overview

### Available Operations

* [list](#list) - Retrieve all CRM leads with optional filtering and sorting.
* [create](#create) - Add a new lead to the CRM system.
* [get](#get) - Retrieve detailed information about a specific lead in the CRM.
* [update](#update) - Updates an existing lead record in the CRM system.
* [delete](#delete) - Deletes a lead record from the CRM system using its unique ID.

## list

The 'leadsAll' operation fetches a list of CRM leads from the specified service integration. This GET request allows developers to retrieve comprehensive lead data, which can be filtered, sorted, and paginated according to specific needs. Key parameters include 'raw' for debugging, 'cursor' for pagination, 'limit' to control the number of results, and 'fields' to specify which data fields to include in the response. Authentication is required via 'x-apideck-consumer-id' and 'x-apideck-app-id' headers. The response is a JSON object containing lead details, facilitating efficient data handling and integration into CRM systems.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.leads.list({
    raw: false,
    serviceId: "salesforce",
    limit: 20,
    filter: {
      firstName: "Elon",
      lastName: "Musk",
      email: "elon@tesla.com",
      phoneNumber: "1234567890",
    },
    sort: {
      by: "created_at",
      direction: "desc",
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { crmLeadsList } from "apideck/funcs/crmLeadsList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmLeadsList(apideck, {
    raw: false,
    serviceId: "salesforce",
    limit: 20,
    filter: {
      firstName: "Elon",
      lastName: "Musk",
      email: "elon@tesla.com",
      phoneNumber: "1234567890",
    },
    sort: {
      by: "created_at",
      direction: "desc",
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CrmLeadsAllRequest](../../models/operations/crmleadsallrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmLeadsAllResponse](../../models/operations/crmleadsallresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## create

The leadsAdd operation allows you to add a new lead to your CRM system by sending a POST request to the /crm/leads endpoint. This operation is essential for capturing potential customer information and expanding your sales pipeline. The request must include a valid x-apideck-consumer-id and x-apideck-app-id in the headers for authentication. Optionally, specify the x-apideck-service-id if targeting a specific service integration. The raw query parameter can be set to true to receive raw data for debugging purposes. Upon successful creation, the API returns a 201 status code along with the ID of the newly created lead in a JSON object. This operation is crucial for maintaining an up-to-date and comprehensive lead database.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.leads.create({
    raw: false,
    serviceId: "salesforce",
    createLeadRequest: {
      name: "Elon Musk",
      companyName: "Spacex",
      ownerId: "54321",
      ownerName: "John Doe",
      companyId: "2",
      leadId: "2",
      leadSource: "Cold Call",
      firstName: "Elon",
      lastName: "Musk",
      description: "A thinker",
      prefix: "Sir",
      title: "CEO",
      language: "EN",
      status: "New",
      monetaryAmount: 75000,
      currency: "USD",
      fax: "+12129876543",
      websites: [
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
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
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: {},
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: 10,
        },
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
import { crmLeadsCreate } from "apideck/funcs/crmLeadsCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmLeadsCreate(apideck, {
    raw: false,
    serviceId: "salesforce",
    createLeadRequest: {
      name: "Elon Musk",
      companyName: "Spacex",
      ownerId: "54321",
      ownerName: "John Doe",
      companyId: "2",
      leadId: "2",
      leadSource: "Cold Call",
      firstName: "Elon",
      lastName: "Musk",
      description: "A thinker",
      prefix: "Sir",
      title: "CEO",
      language: "EN",
      status: "New",
      monetaryAmount: 75000,
      currency: "USD",
      fax: "+12129876543",
      websites: [
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
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
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: {},
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: 10,
        },
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
| `request`                                                                                                                                                                      | [operations.CrmLeadsAddRequest](../../models/operations/crmleadsaddrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmLeadsAddResponse](../../models/operations/crmleadsaddresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## get

The 'leadsOne' operation allows developers to fetch comprehensive details of a specific lead by its unique ID from the CRM system. This GET request requires the lead's ID as a path parameter and mandates the inclusion of 'x-apideck-consumer-id' and 'x-apideck-app-id' in the headers for authentication and authorization. Optionally, specify 'x-apideck-service-id' to target a specific service integration if multiple are active. Use the 'raw' query parameter to receive unprocessed data for debugging, and 'fields' to customize the response by selecting specific data fields. The response is a JSON object containing the lead's details, facilitating efficient data retrieval and integration into applications.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.leads.get({
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
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
import { crmLeadsGet } from "apideck/funcs/crmLeadsGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmLeadsGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
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
| `request`                                                                                                                                                                      | [operations.CrmLeadsOneRequest](../../models/operations/crmleadsonerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmLeadsOneResponse](../../models/operations/crmleadsoneresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## update

The leadsUpdate operation allows you to modify an existing lead's information in the CRM by sending a PATCH request to the /crm/leads/{id} endpoint. This operation is crucial for keeping lead data current and accurate, which is essential for effective customer relationship management. You must provide the lead's unique ID in the path parameter to specify which record to update. Additionally, the request requires headers for authentication, including x-apideck-consumer-id and x-apideck-app-id. Optionally, you can specify x-apideck-service-id if targeting a specific service integration. The request body should contain the fields you wish to update. Upon successful update, the API returns a 200 status code along with the updated lead data in JSON format, confirming the changes made.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.leads.update({
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
    updateLeadRequest: {
      name: "Elon Musk",
      companyName: "Spacex",
      ownerId: "54321",
      ownerName: "John Doe",
      companyId: "2",
      leadId: "2",
      leadSource: "Cold Call",
      firstName: "Elon",
      lastName: "Musk",
      description: "A thinker",
      prefix: "Sir",
      title: "CEO",
      language: "EN",
      status: "New",
      monetaryAmount: 75000,
      currency: "USD",
      fax: "+12129876543",
      websites: [
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
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
        {
          id: "123",
          email: "elon@musk.com",
          type: "primary",
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: {},
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            {},
          ],
        },
      ],
      tags: [
        "New",
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
import { crmLeadsUpdate } from "apideck/funcs/crmLeadsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmLeadsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
    updateLeadRequest: {
      name: "Elon Musk",
      companyName: "Spacex",
      ownerId: "54321",
      ownerName: "John Doe",
      companyId: "2",
      leadId: "2",
      leadSource: "Cold Call",
      firstName: "Elon",
      lastName: "Musk",
      description: "A thinker",
      prefix: "Sir",
      title: "CEO",
      language: "EN",
      status: "New",
      monetaryAmount: 75000,
      currency: "USD",
      fax: "+12129876543",
      websites: [
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
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
        {
          id: "123",
          email: "elon@musk.com",
          type: "primary",
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: {},
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            {},
          ],
        },
      ],
      tags: [
        "New",
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
| `request`                                                                                                                                                                      | [operations.CrmLeadsUpdateRequest](../../models/operations/crmleadsupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmLeadsUpdateResponse](../../models/operations/crmleadsupdateresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## delete

The leadsDelete operation allows you to remove a specific lead from your CRM system by providing the lead's unique ID in the endpoint path. This operation is crucial for maintaining an up-to-date and accurate database by removing outdated or irrelevant lead information. To execute this operation, you must include the 'x-apideck-consumer-id' and 'x-apideck-app-id' headers for authentication and authorization purposes. Optionally, you can specify the 'x-apideck-service-id' if targeting a specific service integration. The operation does not require a request body and will return a status code of 200 upon successful deletion, indicating that the lead has been successfully removed from the system. This operation is essential for data management and ensuring the CRM reflects current business needs.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.leads.delete({
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
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
import { crmLeadsDelete } from "apideck/funcs/crmLeadsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmLeadsDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
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
| `request`                                                                                                                                                                      | [operations.CrmLeadsDeleteRequest](../../models/operations/crmleadsdeleterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmLeadsDeleteResponse](../../models/operations/crmleadsdeleteresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |