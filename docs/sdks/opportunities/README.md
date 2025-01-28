# Opportunities
(*crm.opportunities*)

## Overview

### Available Operations

* [list](#list) - Retrieve a list of CRM opportunities.
* [create](#create) - Add a new opportunity to the CRM system.
* [get](#get) - Retrieve a specific CRM opportunity by its ID.
* [update](#update) - Update an existing opportunity in the CRM system.
* [delete](#delete) - Deletes a specific opportunity record from the CRM system.

## list

The 'opportunitiesAll' operation fetches a comprehensive list of CRM opportunities from the specified service. This GET request to the '/crm/opportunities' endpoint allows developers to access detailed opportunity data, which is crucial for sales tracking and management. Key parameters include 'limit' for controlling the number of results, 'filter' for narrowing down opportunities based on criteria like 'title' or 'status', and 'sort' for ordering the results. The response is a JSON object containing the list of opportunities, with pagination supported via the 'cursor' parameter. Essential headers such as 'x-apideck-consumer-id' and 'x-apideck-app-id' are required for authentication and authorization. This operation is vital for integrating CRM data into applications, enabling efficient sales process management.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.opportunities.list({
    raw: false,
    serviceId: "salesforce",
    limit: 20,
    filter: {
      status: "Completed",
      monetaryAmount: 75000,
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
import { crmOpportunitiesList } from "apideck/funcs/crmOpportunitiesList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmOpportunitiesList(apideck, {
    raw: false,
    serviceId: "salesforce",
    limit: 20,
    filter: {
      status: "Completed",
      monetaryAmount: 75000,
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
| `request`                                                                                                                                                                      | [operations.CrmOpportunitiesAllRequest](../../models/operations/crmopportunitiesallrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmOpportunitiesAllResponse](../../models/operations/crmopportunitiesallresponse.md)\>**

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

The 'opportunitiesAdd' operation allows you to create a new opportunity within the CRM system by sending a POST request to the '/crm/opportunities' endpoint. This operation is essential for managing sales pipelines and tracking potential deals. The request must include a valid 'x-apideck-consumer-id' and 'x-apideck-app-id' in the headers for authentication. Optionally, specify 'x-apideck-service-id' to target a specific service integration. If 'raw' is set to true in the query, the response will include raw data for debugging purposes. Upon successful creation, the API returns a status code of 201 along with the ID of the newly created opportunity in a JSON object.

### Example Usage

```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.opportunities.create({
    raw: false,
    serviceId: "salesforce",
    createOpportunityRequest: {
      title: "New Rocket",
      primaryContactId: "12345",
      description: "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
      type: "Existing Customer - Upgrade",
      monetaryAmount: 75000,
      currency: "USD",
      winProbability: 40,
      closeDate: new RFCDate("2020-10-30"),
      lossReasonId: "12345",
      lossReason: "No budget",
      wonReasonId: "12345",
      wonReason: "Best pitch",
      pipelineId: "12345",
      pipelineStageId: "12345",
      sourceId: "12345",
      leadId: "12345",
      leadSource: "Website",
      contactId: "12345",
      contactIds: [
        "12345",
      ],
      companyId: "12345",
      companyName: "Copper",
      ownerId: "12345",
      priority: "None",
      status: "Open",
      statusId: "12345",
      tags: [
        "New",
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
          value: true,
        },
      ],
      stageLastChangedAt: new Date("2020-09-30T07:43:32.000Z"),
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
import { crmOpportunitiesCreate } from "apideck/funcs/crmOpportunitiesCreate.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmOpportunitiesCreate(apideck, {
    raw: false,
    serviceId: "salesforce",
    createOpportunityRequest: {
      title: "New Rocket",
      primaryContactId: "12345",
      description: "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
      type: "Existing Customer - Upgrade",
      monetaryAmount: 75000,
      currency: "USD",
      winProbability: 40,
      closeDate: new RFCDate("2020-10-30"),
      lossReasonId: "12345",
      lossReason: "No budget",
      wonReasonId: "12345",
      wonReason: "Best pitch",
      pipelineId: "12345",
      pipelineStageId: "12345",
      sourceId: "12345",
      leadId: "12345",
      leadSource: "Website",
      contactId: "12345",
      contactIds: [
        "12345",
      ],
      companyId: "12345",
      companyName: "Copper",
      ownerId: "12345",
      priority: "None",
      status: "Open",
      statusId: "12345",
      tags: [
        "New",
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
          value: true,
        },
      ],
      stageLastChangedAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `request`                                                                                                                                                                      | [operations.CrmOpportunitiesAddRequest](../../models/operations/crmopportunitiesaddrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmOpportunitiesAddResponse](../../models/operations/crmopportunitiesaddresponse.md)\>**

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

The 'opportunitiesOne' operation allows developers to fetch detailed information about a specific opportunity within a CRM system using its unique ID. This GET request requires the 'id' parameter in the path to identify the opportunity record. Essential headers include 'x-apideck-consumer-id' and 'x-apideck-app-id' for authentication and authorization. Optionally, specify 'x-apideck-service-id' to target a particular service integration if multiple are active. Use the 'raw' query parameter to receive raw data for debugging, and 'fields' to customize the response by selecting specific data fields. The response is a JSON object containing the opportunity details, facilitating efficient data retrieval and integration into applications.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.opportunities.get({
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
import { crmOpportunitiesGet } from "apideck/funcs/crmOpportunitiesGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmOpportunitiesGet(apideck, {
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
| `request`                                                                                                                                                                      | [operations.CrmOpportunitiesOneRequest](../../models/operations/crmopportunitiesonerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmOpportunitiesOneResponse](../../models/operations/crmopportunitiesoneresponse.md)\>**

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

The opportunitiesUpdate operation allows you to modify an existing opportunity record in the CRM by sending a PATCH request to the /crm/opportunities/{id} endpoint. This operation is crucial for keeping opportunity data up-to-date, ensuring accurate tracking and management of sales processes. The request requires the opportunity ID in the path and authentication headers, including x-apideck-consumer-id and x-apideck-app-id. Optionally, specify x-apideck-service-id to target a specific service integration. The raw query parameter can be used to receive raw data for debugging. A successful update returns a 200 status code and the updated opportunity details in a JSON object.

### Example Usage

```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.opportunities.update({
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
    updateOpportunityRequest: {
      title: "New Rocket",
      primaryContactId: "12345",
      description: "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
      type: "Existing Customer - Upgrade",
      monetaryAmount: 75000,
      currency: "USD",
      winProbability: 40,
      closeDate: new RFCDate("2020-10-30"),
      lossReasonId: "12345",
      lossReason: "No budget",
      wonReasonId: "12345",
      wonReason: "Best pitch",
      pipelineId: "12345",
      pipelineStageId: "12345",
      sourceId: "12345",
      leadId: "12345",
      leadSource: "Website",
      contactId: "12345",
      contactIds: [
        "12345",
      ],
      companyId: "12345",
      companyName: "Copper",
      ownerId: "12345",
      priority: "None",
      status: "Open",
      statusId: "12345",
      tags: [
        "New",
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
          value: true,
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            {},
            {},
          ],
        },
      ],
      stageLastChangedAt: new Date("2020-09-30T07:43:32.000Z"),
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
import { crmOpportunitiesUpdate } from "apideck/funcs/crmOpportunitiesUpdate.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmOpportunitiesUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    raw: false,
    updateOpportunityRequest: {
      title: "New Rocket",
      primaryContactId: "12345",
      description: "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
      type: "Existing Customer - Upgrade",
      monetaryAmount: 75000,
      currency: "USD",
      winProbability: 40,
      closeDate: new RFCDate("2020-10-30"),
      lossReasonId: "12345",
      lossReason: "No budget",
      wonReasonId: "12345",
      wonReason: "Best pitch",
      pipelineId: "12345",
      pipelineStageId: "12345",
      sourceId: "12345",
      leadId: "12345",
      leadSource: "Website",
      contactId: "12345",
      contactIds: [
        "12345",
      ],
      companyId: "12345",
      companyName: "Copper",
      ownerId: "12345",
      priority: "None",
      status: "Open",
      statusId: "12345",
      tags: [
        "New",
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
          value: true,
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            {},
            {},
          ],
        },
      ],
      stageLastChangedAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `request`                                                                                                                                                                      | [operations.CrmOpportunitiesUpdateRequest](../../models/operations/crmopportunitiesupdaterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmOpportunitiesUpdateResponse](../../models/operations/crmopportunitiesupdateresponse.md)\>**

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

The opportunitiesDelete operation allows developers to remove an opportunity record from the CRM by specifying its unique ID in the endpoint path. This operation is crucial for maintaining accurate and up-to-date CRM data by enabling the deletion of obsolete or incorrect records. To execute this operation, the 'id' parameter is required in the path, along with necessary headers for authentication: 'x-apideck-consumer-id' and 'x-apideck-app-id'. Optionally, 'x-apideck-service-id' can be included to target a specific service integration. The operation does not require a request body and returns a status code of 200 upon successful deletion, indicating that the record has been successfully removed. This operation is essential for developers managing CRM data lifecycle efficiently.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.opportunities.delete({
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
import { crmOpportunitiesDelete } from "apideck/funcs/crmOpportunitiesDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmOpportunitiesDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.CrmOpportunitiesDeleteRequest](../../models/operations/crmopportunitiesdeleterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmOpportunitiesDeleteResponse](../../models/operations/crmopportunitiesdeleteresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |