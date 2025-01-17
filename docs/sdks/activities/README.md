# Activities
(*activities*)

## Overview

### Available Operations

* [activitiesAll](#activitiesall) - Retrieve all CRM activities.
* [activitiesAdd](#activitiesadd) - Add a new activity to the CRM system.
* [activitiesOne](#activitiesone) - Retrieve a specific CRM activity by ID.
* [activitiesUpdate](#activitiesupdate) - Update an existing activity record in the CRM system.
* [activitiesDelete](#activitiesdelete) - Delete a specific CRM activity by ID.

## activitiesAll

The 'activitiesAll' operation is a GET request to the '/crm/activities' endpoint, designed to retrieve a comprehensive list of CRM activities. This operation supports various query parameters to customize the response, including 'raw' for debugging purposes, 'cursor' for pagination, 'limit' to control the number of results (ranging from 1 to 200, defaulting to 20), and 'fields' to specify which fields to include in the response. Additionally, it allows filtering and sorting of results through the 'filter' and 'sort' parameters, respectively. The request must include the 'x-apideck-consumer-id' and 'x-apideck-app-id' headers to identify the consumer and application. Optionally, the 'x-apideck-service-id' header can be used when multiple integrations are active. The 'pass_through' parameter enables the inclusion of additional unmapped query parameters. The response will include a list of activities, with pagination supported via cursors found in the response metadata. This operation is crucial for accessing and managing CRM activities efficiently, providing flexibility through its extensive parameter support.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.activities.activitiesAll({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { activitiesActivitiesAll } from "apideck/funcs/activitiesActivitiesAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await activitiesActivitiesAll(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
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

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ActivitiesAllRequest](../../models/operations/activitiesallrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ActivitiesAllSecurity](../../models/operations/activitiesallsecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivitiesAllResponse](../../models/operations/activitiesallresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## activitiesAdd

The `activitiesAdd` operation allows API consumers to add new activities to the CRM system by sending a POST request to the `/crm/activities` endpoint. This operation is essential for integrating and managing customer relationship activities within the CRM platform. 

Key Parameters:
- `raw` (query): Optional parameter to include the raw response, primarily used for debugging purposes.
- `x-apideck-consumer-id` (header): Required parameter that specifies the ID of the consumer from which data is being retrieved or pushed.
- `x-apideck-app-id` (header): Required parameter that identifies the Unify application being used.
- `x-apideck-service-id` (header): Optional parameter to specify the service ID to be called, such as 'pipedrive'. This is necessary when a consumer has multiple integrations activated for a Unified API.

The request body must contain the details of the activity to be added. Upon successful creation, the API returns a `201 Created` response, indicating that the activity has been successfully added to the CRM system. This operation does not support filtering or sorting of activities during the creation process. It is crucial to ensure that all required headers are correctly set to avoid authentication errors or misrouting of requests.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.activities.activitiesAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    activityCreateRequest: {
      activityDatetime: "2021-05-01T12:00:00.000Z",
      durationSeconds: 1800,
      userId: "12345",
      accountId: "12345",
      contactId: "12345",
      companyId: "12345",
      opportunityId: "12345",
      leadId: "12345",
      ownerId: "12345",
      campaignId: "12345",
      caseId: "12345",
      assetId: "12345",
      contractId: "12345",
      productId: "12345",
      solutionId: "12345",
      customObjectId: "12345",
      type: "meeting",
      title: "Meeting",
      description: "More info about the meeting",
      note: "An internal note about the meeting",
      location: "Space",
      locationAddress: {
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
      allDayEvent: false,
      private: true,
      groupEvent: true,
      eventSubType: "debrief",
      groupEventType: "Proposed",
      child: false,
      archived: false,
      deleted: false,
      showAs: "busy",
      done: false,
      startDatetime: "2021-05-01T12:00:00.000Z",
      endDatetime: "2021-05-01T12:30:00.000Z",
      activityDate: "2021-05-01",
      endDate: "2021-05-01",
      recurrent: false,
      reminderDatetime: "2021-05-01T17:00:00.000Z",
      reminderSet: false,
      videoConferenceUrl: "https://us02web.zoom.us/j/88120759396",
      videoConferenceId: "zoom:88120759396",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: "Uses Salesforce and Marketo",
        },
      ],
      attendees: [
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
        },
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
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
import { activitiesActivitiesAdd } from "apideck/funcs/activitiesActivitiesAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await activitiesActivitiesAdd(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    activityCreateRequest: {
      activityDatetime: "2021-05-01T12:00:00.000Z",
      durationSeconds: 1800,
      userId: "12345",
      accountId: "12345",
      contactId: "12345",
      companyId: "12345",
      opportunityId: "12345",
      leadId: "12345",
      ownerId: "12345",
      campaignId: "12345",
      caseId: "12345",
      assetId: "12345",
      contractId: "12345",
      productId: "12345",
      solutionId: "12345",
      customObjectId: "12345",
      type: "meeting",
      title: "Meeting",
      description: "More info about the meeting",
      note: "An internal note about the meeting",
      location: "Space",
      locationAddress: {
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
      allDayEvent: false,
      private: true,
      groupEvent: true,
      eventSubType: "debrief",
      groupEventType: "Proposed",
      child: false,
      archived: false,
      deleted: false,
      showAs: "busy",
      done: false,
      startDatetime: "2021-05-01T12:00:00.000Z",
      endDatetime: "2021-05-01T12:30:00.000Z",
      activityDate: "2021-05-01",
      endDate: "2021-05-01",
      recurrent: false,
      reminderDatetime: "2021-05-01T17:00:00.000Z",
      reminderSet: false,
      videoConferenceUrl: "https://us02web.zoom.us/j/88120759396",
      videoConferenceId: "zoom:88120759396",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: "Uses Salesforce and Marketo",
        },
      ],
      attendees: [
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
        },
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
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
| `request`                                                                                                                                                                      | [operations.ActivitiesAddRequest](../../models/operations/activitiesaddrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ActivitiesAddSecurity](../../models/operations/activitiesaddsecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivitiesAddResponse](../../models/operations/activitiesaddresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## activitiesOne

The 'activitiesOne' operation allows API consumers to retrieve detailed information about a specific CRM activity using its unique ID. This GET request requires the 'id' parameter in the path to specify the activity record to be fetched. Additionally, the request must include headers such as 'x-apideck-consumer-id' and 'x-apideck-app-id' to authenticate and identify the consumer and application making the request. Optionally, the 'x-apideck-service-id' header can be provided if multiple integrations are activated, specifying which service to query. The operation supports query parameters like 'raw' for debugging purposes and 'fields' to filter the response data by specifying which fields to include. The response will return a 200 status code upon successful retrieval of the activity details. This operation is essential for accessing specific CRM activity data, enabling users to integrate and utilize this information within their applications effectively. No request body is required for this operation.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.activities.activitiesOne({
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
import { activitiesActivitiesOne } from "apideck/funcs/activitiesActivitiesOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await activitiesActivitiesOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.ActivitiesOneRequest](../../models/operations/activitiesonerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ActivitiesOneSecurity](../../models/operations/activitiesonesecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivitiesOneResponse](../../models/operations/activitiesoneresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## activitiesUpdate

The `activitiesUpdate` operation allows you to modify an existing activity record within the CRM system using a PATCH request. This operation requires the unique identifier (`id`) of the activity to be updated, which must be included in the path parameter. Additionally, the request must include the `x-apideck-consumer-id` and `x-apideck-app-id` headers to authenticate the consumer and application making the request. Optionally, the `x-apideck-service-id` header can be provided if the consumer has multiple integrations activated, specifying which service to target (e.g., Pipedrive). The `raw` query parameter can be used to include the raw response for debugging purposes. The request body should contain the fields to be updated in JSON format. Upon successful execution, the operation returns a 200 status code, indicating that the activity record has been successfully updated. This operation is crucial for maintaining up-to-date and accurate activity records in the CRM, ensuring that all changes are reflected in real-time across integrated services. Note that this operation does not support filtering or sorting of activities; it is solely intended for updating specific records identified by their ID.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.activities.activitiesUpdate({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    activityUpdateRequest: {
      activityDatetime: "2021-05-01T12:00:00.000Z",
      durationSeconds: 1800,
      userId: "12345",
      accountId: "12345",
      contactId: "12345",
      companyId: "12345",
      opportunityId: "12345",
      leadId: "12345",
      ownerId: "12345",
      campaignId: "12345",
      caseId: "12345",
      assetId: "12345",
      contractId: "12345",
      productId: "12345",
      solutionId: "12345",
      customObjectId: "12345",
      type: "meeting",
      title: "Meeting",
      description: "More info about the meeting",
      note: "An internal note about the meeting",
      location: "Space",
      locationAddress: {
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
      allDayEvent: false,
      private: true,
      groupEvent: true,
      eventSubType: "debrief",
      groupEventType: "Proposed",
      child: false,
      archived: false,
      deleted: false,
      showAs: "busy",
      done: false,
      startDatetime: "2021-05-01T12:00:00.000Z",
      endDatetime: "2021-05-01T12:30:00.000Z",
      activityDate: "2021-05-01",
      endDate: "2021-05-01",
      recurrent: false,
      reminderDatetime: "2021-05-01T17:00:00.000Z",
      reminderSet: false,
      videoConferenceUrl: "https://us02web.zoom.us/j/88120759396",
      videoConferenceId: "zoom:88120759396",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            "<value>",
            "<value>",
            "<value>",
          ],
        },
      ],
      attendees: [
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
        },
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
        },
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
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
import { activitiesActivitiesUpdate } from "apideck/funcs/activitiesActivitiesUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await activitiesActivitiesUpdate(apideck, {
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    activityUpdateRequest: {
      activityDatetime: "2021-05-01T12:00:00.000Z",
      durationSeconds: 1800,
      userId: "12345",
      accountId: "12345",
      contactId: "12345",
      companyId: "12345",
      opportunityId: "12345",
      leadId: "12345",
      ownerId: "12345",
      campaignId: "12345",
      caseId: "12345",
      assetId: "12345",
      contractId: "12345",
      productId: "12345",
      solutionId: "12345",
      customObjectId: "12345",
      type: "meeting",
      title: "Meeting",
      description: "More info about the meeting",
      note: "An internal note about the meeting",
      location: "Space",
      locationAddress: {
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
      allDayEvent: false,
      private: true,
      groupEvent: true,
      eventSubType: "debrief",
      groupEventType: "Proposed",
      child: false,
      archived: false,
      deleted: false,
      showAs: "busy",
      done: false,
      startDatetime: "2021-05-01T12:00:00.000Z",
      endDatetime: "2021-05-01T12:30:00.000Z",
      activityDate: "2021-05-01",
      endDate: "2021-05-01",
      recurrent: false,
      reminderDatetime: "2021-05-01T17:00:00.000Z",
      reminderSet: false,
      videoConferenceUrl: "https://us02web.zoom.us/j/88120759396",
      videoConferenceId: "zoom:88120759396",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            "<value>",
            "<value>",
            "<value>",
          ],
        },
      ],
      attendees: [
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
        },
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
        },
        {
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
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
| `request`                                                                                                                                                                      | [operations.ActivitiesUpdateRequest](../../models/operations/activitiesupdaterequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ActivitiesUpdateSecurity](../../models/operations/activitiesupdatesecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivitiesUpdateResponse](../../models/operations/activitiesupdateresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## activitiesDelete

The `activitiesDelete` operation allows API consumers to remove a specific activity from the CRM system by providing its unique ID. This DELETE request requires the `id` parameter in the path, which specifies the activity record to be deleted. Additionally, the request must include the `x-apideck-consumer-id` and `x-apideck-app-id` headers to authenticate the consumer and identify the Unify application, respectively. Optionally, the `x-apideck-service-id` header can be provided if the consumer has multiple integrations activated, specifying which service to target (e.g., Pipedrive). The `raw` query parameter can be used to include the raw response, primarily for debugging purposes. The operation does not support filtering or sorting, as it targets a single resource by ID. Upon successful deletion, a 200 status code is returned, indicating the activity has been successfully removed from the CRM.

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck();

async function run() {
  const result = await apideck.activities.activitiesDelete({
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
import { activitiesActivitiesDelete } from "apideck/funcs/activitiesActivitiesDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore();

async function run() {
  const res = await activitiesActivitiesDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.ActivitiesDeleteRequest](../../models/operations/activitiesdeleterequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ActivitiesDeleteSecurity](../../models/operations/activitiesdeletesecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivitiesDeleteResponse](../../models/operations/activitiesdeleteresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.PaymentRequiredResponse     | 402                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |