# Pipelines
(*pipelines*)

## Overview

### Available Operations

* [pipelinesAll](#pipelinesall) - List pipelines
* [pipelinesAdd](#pipelinesadd) - Create pipeline
* [pipelinesOne](#pipelinesone) - Get pipeline
* [pipelinesUpdate](#pipelinesupdate) - Update pipeline
* [pipelinesDelete](#pipelinesdelete) - Delete pipeline

## pipelinesAll

List pipelines

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.pipelines.pipelinesAll({
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
import { pipelinesPipelinesAll } from "apideck/funcs/pipelinesPipelinesAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await pipelinesPipelinesAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PipelinesAllRequest](../../models/operations/pipelinesallrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PipelinesAllSecurity](../../models/operations/pipelinesallsecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PipelinesAllResponse](../../models/operations/pipelinesallresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.PipelinesAllResponseBody                     | 400                                                 | application/json                                    |
| errors.PipelinesAllPipelinesResponseBody            | 401                                                 | application/json                                    |
| errors.PipelinesAllPipelinesResponseResponseBody    | 402                                                 | application/json                                    |
| errors.PipelinesAllPipelinesResponse404ResponseBody | 404                                                 | application/json                                    |
| errors.PipelinesAllPipelinesResponse422ResponseBody | 422                                                 | application/json                                    |
| errors.APIError                                     | 4XX, 5XX                                            | \*/\*                                               |

## pipelinesAdd

Create pipeline

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.pipelines.pipelinesAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    requestBody: {
      id: "default",
      name: "Sales Pipeline",
      currency: "USD",
      archived: false,
      active: false,
      displayOrder: 1,
      winProbabilityEnabled: true,
      stages: [
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
        },
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
        },
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
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
import { pipelinesPipelinesAdd } from "apideck/funcs/pipelinesPipelinesAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await pipelinesPipelinesAdd(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    requestBody: {
      id: "default",
      name: "Sales Pipeline",
      currency: "USD",
      archived: false,
      active: false,
      displayOrder: 1,
      winProbabilityEnabled: true,
      stages: [
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
        },
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
        },
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
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
| `request`                                                                                                                                                                      | [operations.PipelinesAddRequest](../../models/operations/pipelinesaddrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PipelinesAddSecurity](../../models/operations/pipelinesaddsecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PipelinesAddResponse](../../models/operations/pipelinesaddresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.PipelinesAddResponseBody                     | 400                                                 | application/json                                    |
| errors.PipelinesAddPipelinesResponseBody            | 401                                                 | application/json                                    |
| errors.PipelinesAddPipelinesResponseResponseBody    | 402                                                 | application/json                                    |
| errors.PipelinesAddPipelinesResponse404ResponseBody | 404                                                 | application/json                                    |
| errors.PipelinesAddPipelinesResponse422ResponseBody | 422                                                 | application/json                                    |
| errors.APIError                                     | 4XX, 5XX                                            | \*/\*                                               |

## pipelinesOne

Get pipeline

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.pipelines.pipelinesOne({
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
import { pipelinesPipelinesOne } from "apideck/funcs/pipelinesPipelinesOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await pipelinesPipelinesOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PipelinesOneRequest](../../models/operations/pipelinesonerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PipelinesOneSecurity](../../models/operations/pipelinesonesecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PipelinesOneResponse](../../models/operations/pipelinesoneresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.PipelinesOneResponseBody                     | 400                                                 | application/json                                    |
| errors.PipelinesOnePipelinesResponseBody            | 401                                                 | application/json                                    |
| errors.PipelinesOnePipelinesResponseResponseBody    | 402                                                 | application/json                                    |
| errors.PipelinesOnePipelinesResponse404ResponseBody | 404                                                 | application/json                                    |
| errors.PipelinesOnePipelinesResponse422ResponseBody | 422                                                 | application/json                                    |
| errors.APIError                                     | 4XX, 5XX                                            | \*/\*                                               |

## pipelinesUpdate

Update pipeline

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.pipelines.pipelinesUpdate({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    requestBody: {
      id: "default",
      name: "Sales Pipeline",
      currency: "USD",
      archived: false,
      active: false,
      displayOrder: 1,
      winProbabilityEnabled: true,
      stages: [
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
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
import { pipelinesPipelinesUpdate } from "apideck/funcs/pipelinesPipelinesUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await pipelinesPipelinesUpdate(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    requestBody: {
      id: "default",
      name: "Sales Pipeline",
      currency: "USD",
      archived: false,
      active: false,
      displayOrder: 1,
      winProbabilityEnabled: true,
      stages: [
        {
          name: "Contract Sent",
          value: "CONTRACT_SENT",
          winProbability: 50,
          displayOrder: 1,
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
| `request`                                                                                                                                                                      | [operations.PipelinesUpdateRequest](../../models/operations/pipelinesupdaterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PipelinesUpdateSecurity](../../models/operations/pipelinesupdatesecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PipelinesUpdateResponse](../../models/operations/pipelinesupdateresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.PipelinesUpdateResponseBody                     | 400                                                    | application/json                                       |
| errors.PipelinesUpdatePipelinesResponseBody            | 401                                                    | application/json                                       |
| errors.PipelinesUpdatePipelinesResponseResponseBody    | 402                                                    | application/json                                       |
| errors.PipelinesUpdatePipelinesResponse404ResponseBody | 404                                                    | application/json                                       |
| errors.PipelinesUpdatePipelinesResponse422ResponseBody | 422                                                    | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## pipelinesDelete

Delete pipeline

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.pipelines.pipelinesDelete({
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
import { pipelinesPipelinesDelete } from "apideck/funcs/pipelinesPipelinesDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await pipelinesPipelinesDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PipelinesDeleteRequest](../../models/operations/pipelinesdeleterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PipelinesDeleteSecurity](../../models/operations/pipelinesdeletesecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PipelinesDeleteResponse](../../models/operations/pipelinesdeleteresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.PipelinesDeleteResponseBody                     | 400                                                    | application/json                                       |
| errors.PipelinesDeletePipelinesResponseBody            | 401                                                    | application/json                                       |
| errors.PipelinesDeletePipelinesResponseResponseBody    | 402                                                    | application/json                                       |
| errors.PipelinesDeletePipelinesResponse404ResponseBody | 404                                                    | application/json                                       |
| errors.PipelinesDeletePipelinesResponse422ResponseBody | 422                                                    | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |