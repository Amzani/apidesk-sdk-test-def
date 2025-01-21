# Opportunities
(*crm.opportunities*)

## Overview

### Available Operations

* [list](#list) - Retrieve a list of CRM opportunities.
* [create](#create) - Add a new opportunity to the CRM system.
* [get](#get) - Retrieve a specific CRM opportunity by its ID.
* [update](#update) - Update an existing opportunity in the CRM system.
* [delete](#delete) - Delete an existing opportunity record in the CRM.

## list

The `opportunitiesAll` operation allows developers to retrieve a comprehensive list of opportunities from the CRM system. This GET request is essential for accessing sales opportunities data, enabling users to analyze and manage potential deals effectively. 

Key Parameters:
- `x-apideck-consumer-id` (header, required): Identifies the consumer for data retrieval.
- `x-apideck-app-id` (header, required): Specifies the Unify application ID.
- `x-apideck-service-id` (header, optional): Indicates the service ID for specific integrations.
- `cursor` (query): Used for pagination to navigate through results.
- `limit` (query): Defines the number of results per page, with a default of 20 and a maximum of 200.
- `fields` (query): Allows selection of specific fields to include in the response, optimizing data retrieval.

Response Behavior:
The operation returns a JSON object containing the list of opportunities, with pagination support through cursors. This enables efficient data handling and integration into applications, providing a streamlined approach to managing CRM opportunities.

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

The `opportunitiesAdd` operation allows developers to create a new opportunity within the CRM system by sending a POST request to the `/crm/opportunities` endpoint. This operation is essential for managing sales pipelines and tracking potential deals. 

Key Parameters:
- `x-apideck-consumer-id` (header, required): Specifies the consumer ID for data interaction.
- `x-apideck-app-id` (header, required): Identifies the Unify application in use.
- `x-apideck-service-id` (header, optional): Indicates the specific service ID to call, necessary when multiple integrations are active.
- `raw` (query, optional): Determines if the raw response should be included, useful for debugging.

Upon successful creation, the operation returns a `201` status code along with a JSON object containing the unique identifier of the newly created opportunity, confirming the addition to the CRM system.

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

The 'opportunitiesOne' operation allows developers to fetch detailed information about a specific opportunity within the CRM system by providing its unique ID. This operation is essential for accessing and managing individual opportunity records, enabling users to view and analyze specific sales opportunities.

Key Parameters:
- **id** (path): The unique identifier of the opportunity record to retrieve. This parameter is mandatory.
- **x-apideck-consumer-id** (header): Required to specify the consumer ID for data retrieval.
- **x-apideck-app-id** (header): Required to identify the Unify application making the request.
- **x-apideck-service-id** (header): Optional parameter to specify the service ID when multiple integrations are active.
- **raw** (query): Optional parameter to include the raw response, useful for debugging.
- **fields** (query): Optional parameter to specify which fields to include in the response, allowing for customized data retrieval.

Response Behavior:
This operation returns a JSON object representing the opportunity resource, including all requested fields. The response will include a status code of 200 upon successful retrieval of the opportunity data. This operation does not modify any data, ensuring that the integrity of the CRM records is maintained.

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

The `opportunitiesUpdate` operation allows developers to modify an existing opportunity record within the CRM system. This operation is crucial for maintaining up-to-date information on sales opportunities, enabling businesses to track and manage their sales pipeline effectively. 

Key Parameters:
- `id` (path): The unique identifier of the opportunity record to be updated. This parameter is mandatory.
- `x-apideck-consumer-id` (header): Required to specify the consumer ID for data retrieval or submission.
- `x-apideck-app-id` (header): Identifies the Unify application in use.
- `x-apideck-service-id` (header): Optional parameter to specify the service ID when multiple integrations are active.
- `raw` (query): Optional parameter to include raw response data, useful for debugging.

Upon successful execution, the operation returns a status code of 200, along with a JSON object representing the updated opportunity resource. This response includes the unique identifier of the updated resource, confirming the successful modification of the opportunity record. The operation ensures that the CRM data remains current and reflective of the latest sales activities.

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

The `opportunitiesDelete` operation allows developers to remove an existing opportunity record from the CRM system. This operation is crucial for maintaining accurate and up-to-date records by enabling the deletion of opportunities that are no longer relevant or were created in error. 

### Key Parameters:
- **id (path parameter)**: The unique identifier of the opportunity record to be deleted. This parameter is mandatory.
- **x-apideck-consumer-id (header)**: Required to specify the consumer ID from which data is being managed.
- **x-apideck-app-id (header)**: The ID of the Unify application making the request, also required.
- **x-apideck-service-id (header)**: Optional parameter to specify the service ID when multiple integrations are active.
- **raw (query parameter)**: Optional flag to include raw response data, useful for debugging.

### Response Behavior:
Upon successful deletion, the API returns a status code of 200, indicating that the opportunity record has been successfully removed. No content is returned in the response body, aligning with standard practices for delete operations.

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