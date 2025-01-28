# Pipelines
(*crm.pipelines*)

## Overview

### Available Operations

* [list](#list) - Retrieve all CRM pipelines for a specified consumer.

## list

The 'pipelinesAll' operation fetches a list of CRM pipelines associated with a specified consumer. This GET request to the '/crm/pipelines' endpoint is essential for developers needing to access pipeline data for integration or analysis purposes. Key parameters include 'x-apideck-consumer-id' for consumer identification, 'limit' for controlling the number of results, and 'cursor' for pagination. The response is a JSON object containing pipeline details, which can be tailored using the 'fields' parameter to include specific data fields. This operation is crucial for applications that require comprehensive pipeline data from CRM systems.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.pipelines.list({
    raw: false,
    serviceId: "salesforce",
    limit: 20,
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
import { crmPipelinesList } from "apideck/funcs/crmPipelinesList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmPipelinesList(apideck, {
    raw: false,
    serviceId: "salesforce",
    limit: 20,
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
| `request`                                                                                                                                                                      | [operations.CrmPipelinesAllRequest](../../models/operations/crmpipelinesallrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmPipelinesAllResponse](../../models/operations/crmpipelinesallresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |