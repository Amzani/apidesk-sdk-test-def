# apideck

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *apideck* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=apideck&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/apideck-k2o/apideck). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

CRM API: Welcome to the CRM API.

You can use this API to access all CRM API endpoints.

## Base URL

The base URL for all API requests is `https://unify.apideck.com`

## Headers

Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.

| Name                  | Type    | Required | Description                                                                                                                                                    |
| --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. |
| x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             |
| x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      |
| x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             |
| Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |

## Authorization

You can interact with the API through the authorization methods below.

<!-- ReDoc-Inject: <security-definitions> -->

## Pagination

All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.

To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.

In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.

### Query Parameters

| Name   | Type   | Required | Description                                                                                                        |
| ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. |
| limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |

### Response Body

| Name                  | Type   | Description                                                        |
| --------------------- | ------ | ------------------------------------------------------------------ |
| meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API |
| meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  |
| meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     |
| meta.items_on_page    | Number | Number of items returned in the data property of the response      |
| links.previous        | String | Link to navigate to the previous page of results through the API   |
| links.current         | String | Link to navigate to the current page of results through the API    |
| links.next            | String | Link to navigate to the next page of results through the API       |

⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.

## SDKs and API Clients

We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php), [Python](https://developers.apideck.com/sdks/python) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK.
Need another SDK? [Request the SDK of your choice](https://requests.apideck.io/request).

## Debugging

Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.

## Errors

The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.

| Code | Title                | Description                                                                                                                                                                                              |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                |
| 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              |
| 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          |
| 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. |
| 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              |
| 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      |
| 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            |
| 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           |
| 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      |
| 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     |
| 429  | Too Many Requests    | You sent too many requests in a given amount of time ("rate limit"). Try again later                                                                                                                     |
| 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |

### Handling errors

The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.

### Error Types

#### RequestValidationError

Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.

#### UnsupportedFiltersError

Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.

#### UnsupportedSortFieldError

Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.

#### InvalidCursorError

Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.

#### ConnectorExecutionError

A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.

#### UnauthorizedError

We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`

#### ConnectorCredentialsError

A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.

#### ConnectorDisabledError

A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.

#### ConnectorRateLimitError

You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.

#### RequestLimitError

You have reached the number of requests included in your Free Tier Subscription. You will not be able to make further requests until you upgrade your subscription. Please reach out to sales@apideck.com to continue making requests.

#### EntityNotFoundError

You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.

#### OAuthCredentialsNotFoundError

When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.

#### IntegrationNotFoundError

The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.

#### ConnectionNotFoundError

A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.

#### ConnectionSettingsError

The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.

#### ConnectorNotFoundError

A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.

#### OAuthRedirectUriError

A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.

#### OAuthInvalidStateError

The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.

#### OAuthCodeExchangeError

When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.

#### OAuthConnectorError

It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### MappingError

There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.

#### ConnectorMappingNotFoundError

It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorResponseMappingNotFoundError

We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorOperationMappingNotFoundError

Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorWorkflowMappingError

The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorOperationUnsupportedError

You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.

#### PaginationNotSupportedError

Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

## API Design

### API Styles and data formats

#### REST API

The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.

##### Available HTTP methods

The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \_method.

```
POST /messages
GET /messages
GET /messages/{messageId}
PATCH /messages/{messageId}
DELETE /messages/{messageId}
```

Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.

### Schema

All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.

### Meta

Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.

### Request IDs

Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.

### Fixed field types

#### Dates

The dates returned by the API are all represented in UTC (ISO8601 format).

This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced "Zulu" per military/aviation tradition.

The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.

#### Prices and Currencies

All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).

For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.

All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

## Support

If you have problems or need help with your case, you can always reach out to our Support.

## Static IP

Some of the APIs you want to use can require a static IP. Apideck's static IP feature allows you to use Apideck with a fixed IP avoiding the need for you to set up your own infrastructure. This feature is currently available to all Apideck customers.
To use this feature, the API Vendor will need to whitelist the associated static IP addresses.
The provided static IP addresses are fixed to their specified region and shared by all customers who use this feature.

- EU Central 1: **18.197.244.247**, **18.156.9.3**, **3.65.139.215**
- Other: upcoming

  More info about our data security can be found at [https://compliance.apideck.com/](https://compliance.apideck.com/)



For more information about the API: [Apideck Developer Docs](https://developers.apideck.com)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [apideck](#apideck)
  * [Base URL](#base-url)
  * [Headers](#headers)
  * [Authorization](#authorization)
  * [SDKs and API Clients](#sdks-and-api-clients)
  * [Debugging](#debugging)
  * [Errors](#errors)
  * [API Design](#api-design)
  * [Support](#support)
  * [Static IP](#static-ip)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging-1)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck();

async function run() {
  const result = await apideck.companies.companiesAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    companyCreateRequest: {
      name: "SpaceX",
      ownerId: "12345",
      image: "https://www.spacex.com/static/images/share.jpg",
      description:
        "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
      vatNumber: "BE0689615164",
      currency: "USD",
      status: "Open",
      fax: "+12129876543",
      annualRevenue: "+$35m",
      numberOfEmployees: "500-1000",
      industry: "Apparel",
      ownership: "Public",
      salesTaxNumber: "12456EN",
      payeeNumber: "78932EN",
      abnOrTfn: "46 115 614 695",
      abnBranch: "123",
      acn: "XXX XXX XXX",
      firstName: "Elon",
      lastName: "Musk",
      bankAccounts: [
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
      ],
      websites: [
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
      ],
      rowType: {
        id: "12345",
        name: "Customer Account",
      },
      customFields: [
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
          value: 10,
        },
      ],
      tags: [
        "New",
      ],
      readOnly: false,
      salutation: "Mr",
      birthday: new RFCDate("2000-08-12"),
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name            | Type   | Scheme  | Environment Variable     |
| --------------- | ------ | ------- | ------------------------ |
| `apiKey`        | apiKey | API key | `APIDECK_API_KEY`        |
| `applicationId` | apiKey | API key | `APIDECK_APPLICATION_ID` |
| `consumerId`    | apiKey | API key | `APIDECK_CONSUMER_ID`    |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:


### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck();

async function run() {
  const result = await apideck.companies.companiesAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    companyCreateRequest: {
      name: "SpaceX",
      ownerId: "12345",
      image: "https://www.spacex.com/static/images/share.jpg",
      description:
        "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
      vatNumber: "BE0689615164",
      currency: "USD",
      status: "Open",
      fax: "+12129876543",
      annualRevenue: "+$35m",
      numberOfEmployees: "500-1000",
      industry: "Apparel",
      ownership: "Public",
      salesTaxNumber: "12456EN",
      payeeNumber: "78932EN",
      abnOrTfn: "46 115 614 695",
      abnBranch: "123",
      acn: "XXX XXX XXX",
      firstName: "Elon",
      lastName: "Musk",
      bankAccounts: [
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
      ],
      websites: [
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
      ],
      rowType: {
        id: "12345",
        name: "Customer Account",
      },
      customFields: [
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
          value: 10,
        },
      ],
      tags: [
        "New",
      ],
      readOnly: false,
      salutation: "Mr",
      birthday: new RFCDate("2000-08-12"),
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [activities](docs/sdks/activities/README.md)

* [activitiesAll](docs/sdks/activities/README.md#activitiesall) - Retrieve all CRM activities.
* [activitiesAdd](docs/sdks/activities/README.md#activitiesadd) - Add a new activity to the CRM system.
* [activitiesOne](docs/sdks/activities/README.md#activitiesone) - Retrieve a specific CRM activity by ID.
* [activitiesUpdate](docs/sdks/activities/README.md#activitiesupdate) - Update an existing activity record in the CRM system.
* [activitiesDelete](docs/sdks/activities/README.md#activitiesdelete) - Delete a specific CRM activity by ID.


### [companies](docs/sdks/companies/README.md)

* [companiesAdd](docs/sdks/companies/README.md#companiesadd) - Add a new company to the CRM system.
* [companiesAll](docs/sdks/companies/README.md#companiesall) - Retrieve a list of companies from the CRM.
* [companiesOne](docs/sdks/companies/README.md#companiesone) - Retrieve detailed information about a specific company.
* [companiesUpdate](docs/sdks/companies/README.md#companiesupdate) - Update a company's information in the CRM.
* [companiesDelete](docs/sdks/companies/README.md#companiesdelete) - Delete a company record from the CRM.

### [contacts](docs/sdks/contacts/README.md)

* [contactsAll](docs/sdks/contacts/README.md#contactsall) - Retrieve all contacts from the CRM system.
* [contactsAdd](docs/sdks/contacts/README.md#contactsadd) - Add a new contact to the CRM system.
* [contactsOne](docs/sdks/contacts/README.md#contactsone) - Retrieve a specific contact's details from the CRM.
* [contactsUpdate](docs/sdks/contacts/README.md#contactsupdate) - Update a contact record in the CRM system.
* [contactsDelete](docs/sdks/contacts/README.md#contactsdelete) - Delete a contact from the CRM system.

### [leads](docs/sdks/leads/README.md)

* [leadsAll](docs/sdks/leads/README.md#leadsall) - Retrieve a list of leads from the CRM system.
* [leadsAdd](docs/sdks/leads/README.md#leadsadd) - Add a new lead to the CRM system.
* [leadsOne](docs/sdks/leads/README.md#leadsone) - Retrieve a specific lead's details from the CRM.
* [leadsUpdate](docs/sdks/leads/README.md#leadsupdate) - Update a lead record in the CRM system.
* [leadsDelete](docs/sdks/leads/README.md#leadsdelete) - Delete a lead record from the CRM system.

### [notes](docs/sdks/notes/README.md)

* [notesAll](docs/sdks/notes/README.md#notesall) - Retrieve all CRM notes with optional filtering and field selection.
* [notesAdd](docs/sdks/notes/README.md#notesadd) - Add a new note to the CRM system.
* [notesOne](docs/sdks/notes/README.md#notesone) - Retrieve a specific note by ID from the CRM system.
* [notesUpdate](docs/sdks/notes/README.md#notesupdate) - Update an existing CRM note by ID.
* [notesDelete](docs/sdks/notes/README.md#notesdelete) - Delete a specific note from the CRM system.

### [opportunities](docs/sdks/opportunities/README.md)

* [opportunitiesAll](docs/sdks/opportunities/README.md#opportunitiesall) - Retrieve all CRM opportunities.
* [opportunitiesAdd](docs/sdks/opportunities/README.md#opportunitiesadd) - Add a new opportunity to the CRM system.
* [opportunitiesOne](docs/sdks/opportunities/README.md#opportunitiesone) - Retrieve a specific CRM opportunity by ID.
* [opportunitiesUpdate](docs/sdks/opportunities/README.md#opportunitiesupdate) - Update an existing opportunity in the CRM.
* [opportunitiesDelete](docs/sdks/opportunities/README.md#opportunitiesdelete) - Delete an opportunity record from the CRM.

### [pipelines](docs/sdks/pipelines/README.md)

* [pipelinesAll](docs/sdks/pipelines/README.md#pipelinesall) - Retrieve all CRM pipelines.
* [pipelinesAdd](docs/sdks/pipelines/README.md#pipelinesadd) - Add a new pipeline to the CRM system.
* [pipelinesOne](docs/sdks/pipelines/README.md#pipelinesone) - Retrieve a specific CRM pipeline by its ID.
* [pipelinesUpdate](docs/sdks/pipelines/README.md#pipelinesupdate) - Update an existing CRM pipeline.
* [pipelinesDelete](docs/sdks/pipelines/README.md#pipelinesdelete) - Delete a specific CRM pipeline by ID.

### [users](docs/sdks/users/README.md)

* [usersAll](docs/sdks/users/README.md#usersall) - Retrieve a list of users from the CRM system.
* [usersAdd](docs/sdks/users/README.md#usersadd) - Add a new user to the CRM system.
* [usersOne](docs/sdks/users/README.md#usersone) - Retrieve a specific user's details from the CRM system.
* [usersUpdate](docs/sdks/users/README.md#usersupdate) - Update user details in the CRM system.
* [usersDelete](docs/sdks/users/README.md#usersdelete) - Delete a user from the CRM system.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`activitiesActivitiesAdd`](docs/sdks/activities/README.md#activitiesadd) - Add a new activity to the CRM system.
- [`activitiesActivitiesAll`](docs/sdks/activities/README.md#activitiesall) - Retrieve all CRM activities.
- [`activitiesActivitiesDelete`](docs/sdks/activities/README.md#activitiesdelete) - Delete a specific CRM activity by ID.
- [`activitiesActivitiesOne`](docs/sdks/activities/README.md#activitiesone) - Retrieve a specific CRM activity by ID.
- [`activitiesActivitiesUpdate`](docs/sdks/activities/README.md#activitiesupdate) - Update an existing activity record in the CRM system.
- [`companiesCompaniesAdd`](docs/sdks/companies/README.md#companiesadd) - Add a new company to the CRM system.
- [`companiesCompaniesAll`](docs/sdks/companies/README.md#companiesall) - Retrieve a list of companies from the CRM.
- [`companiesCompaniesDelete`](docs/sdks/companies/README.md#companiesdelete) - Delete a company record from the CRM.
- [`companiesCompaniesOne`](docs/sdks/companies/README.md#companiesone) - Retrieve detailed information about a specific company.
- [`companiesCompaniesUpdate`](docs/sdks/companies/README.md#companiesupdate) - Update a company's information in the CRM.
- [`contactsContactsAdd`](docs/sdks/contacts/README.md#contactsadd) - Add a new contact to the CRM system.
- [`contactsContactsAll`](docs/sdks/contacts/README.md#contactsall) - Retrieve all contacts from the CRM system.
- [`contactsContactsDelete`](docs/sdks/contacts/README.md#contactsdelete) - Delete a contact from the CRM system.
- [`contactsContactsOne`](docs/sdks/contacts/README.md#contactsone) - Retrieve a specific contact's details from the CRM.
- [`contactsContactsUpdate`](docs/sdks/contacts/README.md#contactsupdate) - Update a contact record in the CRM system.
- [`leadsLeadsAdd`](docs/sdks/leads/README.md#leadsadd) - Add a new lead to the CRM system.
- [`leadsLeadsAll`](docs/sdks/leads/README.md#leadsall) - Retrieve a list of leads from the CRM system.
- [`leadsLeadsDelete`](docs/sdks/leads/README.md#leadsdelete) - Delete a lead record from the CRM system.
- [`leadsLeadsOne`](docs/sdks/leads/README.md#leadsone) - Retrieve a specific lead's details from the CRM.
- [`leadsLeadsUpdate`](docs/sdks/leads/README.md#leadsupdate) - Update a lead record in the CRM system.
- [`notesNotesAdd`](docs/sdks/notes/README.md#notesadd) - Add a new note to the CRM system.
- [`notesNotesAll`](docs/sdks/notes/README.md#notesall) - Retrieve all CRM notes with optional filtering and field selection.
- [`notesNotesDelete`](docs/sdks/notes/README.md#notesdelete) - Delete a specific note from the CRM system.
- [`notesNotesOne`](docs/sdks/notes/README.md#notesone) - Retrieve a specific note by ID from the CRM system.
- [`notesNotesUpdate`](docs/sdks/notes/README.md#notesupdate) - Update an existing CRM note by ID.
- [`opportunitiesOpportunitiesAdd`](docs/sdks/opportunities/README.md#opportunitiesadd) - Add a new opportunity to the CRM system.
- [`opportunitiesOpportunitiesAll`](docs/sdks/opportunities/README.md#opportunitiesall) - Retrieve all CRM opportunities.
- [`opportunitiesOpportunitiesDelete`](docs/sdks/opportunities/README.md#opportunitiesdelete) - Delete an opportunity record from the CRM.
- [`opportunitiesOpportunitiesOne`](docs/sdks/opportunities/README.md#opportunitiesone) - Retrieve a specific CRM opportunity by ID.
- [`opportunitiesOpportunitiesUpdate`](docs/sdks/opportunities/README.md#opportunitiesupdate) - Update an existing opportunity in the CRM.
- [`pipelinesPipelinesAdd`](docs/sdks/pipelines/README.md#pipelinesadd) - Add a new pipeline to the CRM system.
- [`pipelinesPipelinesAll`](docs/sdks/pipelines/README.md#pipelinesall) - Retrieve all CRM pipelines.
- [`pipelinesPipelinesDelete`](docs/sdks/pipelines/README.md#pipelinesdelete) - Delete a specific CRM pipeline by ID.
- [`pipelinesPipelinesOne`](docs/sdks/pipelines/README.md#pipelinesone) - Retrieve a specific CRM pipeline by its ID.
- [`pipelinesPipelinesUpdate`](docs/sdks/pipelines/README.md#pipelinesupdate) - Update an existing CRM pipeline.
- [`usersUsersAdd`](docs/sdks/users/README.md#usersadd) - Add a new user to the CRM system.
- [`usersUsersAll`](docs/sdks/users/README.md#usersall) - Retrieve a list of users from the CRM system.
- [`usersUsersDelete`](docs/sdks/users/README.md#usersdelete) - Delete a user from the CRM system.
- [`usersUsersOne`](docs/sdks/users/README.md#usersone) - Retrieve a specific user's details from the CRM system.
- [`usersUsersUpdate`](docs/sdks/users/README.md#usersupdate) - Update user details in the CRM system.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck();

async function run() {
  const result = await apideck.companies.companiesAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    companyCreateRequest: {
      name: "SpaceX",
      ownerId: "12345",
      image: "https://www.spacex.com/static/images/share.jpg",
      description:
        "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
      vatNumber: "BE0689615164",
      currency: "USD",
      status: "Open",
      fax: "+12129876543",
      annualRevenue: "+$35m",
      numberOfEmployees: "500-1000",
      industry: "Apparel",
      ownership: "Public",
      salesTaxNumber: "12456EN",
      payeeNumber: "78932EN",
      abnOrTfn: "46 115 614 695",
      abnBranch: "123",
      acn: "XXX XXX XXX",
      firstName: "Elon",
      lastName: "Musk",
      bankAccounts: [
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
      ],
      websites: [
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
      ],
      rowType: {
        id: "12345",
        name: "Customer Account",
      },
      customFields: [
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
          value: 10,
        },
      ],
      tags: [
        "New",
      ],
      readOnly: false,
      salutation: "Mr",
      birthday: new RFCDate("2000-08-12"),
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await apideck.companies.companiesAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    companyCreateRequest: {
      name: "SpaceX",
      ownerId: "12345",
      image: "https://www.spacex.com/static/images/share.jpg",
      description:
        "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
      vatNumber: "BE0689615164",
      currency: "USD",
      status: "Open",
      fax: "+12129876543",
      annualRevenue: "+$35m",
      numberOfEmployees: "500-1000",
      industry: "Apparel",
      ownership: "Public",
      salesTaxNumber: "12456EN",
      payeeNumber: "78932EN",
      abnOrTfn: "46 115 614 695",
      abnBranch: "123",
      acn: "XXX XXX XXX",
      firstName: "Elon",
      lastName: "Musk",
      bankAccounts: [
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
      ],
      websites: [
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
      ],
      rowType: {
        id: "12345",
        name: "Customer Account",
      },
      customFields: [
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
          value: 10,
        },
      ],
      tags: [
        "New",
      ],
      readOnly: false,
      salutation: "Mr",
      birthday: new RFCDate("2000-08-12"),
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `companiesAdd` method may throw the following errors:

| Error Type                         | Status Code | Content Type     |
| ---------------------------------- | ----------- | ---------------- |
| errors.BadRequestResponse          | 400         | application/json |
| errors.UnauthorizedResponse        | 401         | application/json |
| errors.PaymentRequiredResponse     | 402         | application/json |
| errors.NotFoundResponse            | 404         | application/json |
| errors.UnprocessableEntityResponse | 422         | application/json |
| errors.APIError                    | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Apideck } from "apideck";
import {
  BadRequestResponse,
  NotFoundResponse,
  PaymentRequiredResponse,
  SDKValidationError,
  UnauthorizedResponse,
  UnprocessableEntityResponse,
} from "apideck/models/errors";
import { RFCDate } from "apideck/types";

const apideck = new Apideck();

async function run() {
  let result;
  try {
    result = await apideck.companies.companiesAdd({
      apiKey: process.env["APIDECK_API_KEY"] ?? "",
    }, {
      consumerId: "test-consumer",
      appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
      serviceId: "salesforce",
      companyCreateRequest: {
        name: "SpaceX",
        ownerId: "12345",
        image: "https://www.spacex.com/static/images/share.jpg",
        description:
          "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
        vatNumber: "BE0689615164",
        currency: "USD",
        status: "Open",
        fax: "+12129876543",
        annualRevenue: "+$35m",
        numberOfEmployees: "500-1000",
        industry: "Apparel",
        ownership: "Public",
        salesTaxNumber: "12456EN",
        payeeNumber: "78932EN",
        abnOrTfn: "46 115 614 695",
        abnBranch: "123",
        acn: "XXX XXX XXX",
        firstName: "Elon",
        lastName: "Musk",
        bankAccounts: [
          {
            bankName: "Monzo",
            accountNumber: "123465",
            accountName: "SPACEX LLC",
            accountType: "credit_card",
            iban: "CH2989144532982975332",
            bic: "AUDSCHGGXXX",
            routingNumber: "012345678",
            bsbNumber: "062-001",
            branchIdentifier: "001",
            bankCode: "BNH",
            currency: "USD",
          },
          {
            bankName: "Monzo",
            accountNumber: "123465",
            accountName: "SPACEX LLC",
            accountType: "credit_card",
            iban: "CH2989144532982975332",
            bic: "AUDSCHGGXXX",
            routingNumber: "012345678",
            bsbNumber: "062-001",
            branchIdentifier: "001",
            bankCode: "BNH",
            currency: "USD",
          },
        ],
        websites: [
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
        ],
        rowType: {
          id: "12345",
          name: "Customer Account",
        },
        customFields: [
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
            value: 10,
          },
        ],
        tags: [
          "New",
        ],
        readOnly: false,
        salutation: "Mr",
        birthday: new RFCDate("2000-08-12"),
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
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequestResponse): {
        // Handle err.data$: BadRequestResponseData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedResponse): {
        // Handle err.data$: UnauthorizedResponseData
        console.error(err);
        return;
      }
      case (err instanceof PaymentRequiredResponse): {
        // Handle err.data$: PaymentRequiredResponseData
        console.error(err);
        return;
      }
      case (err instanceof NotFoundResponse): {
        // Handle err.data$: NotFoundResponseData
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableEntityResponse): {
        // Handle err.data$: UnprocessableEntityResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck({
  serverURL: "https://unify.apideck.com",
});

async function run() {
  const result = await apideck.companies.companiesAdd({
    apiKey: process.env["APIDECK_API_KEY"] ?? "",
  }, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    companyCreateRequest: {
      name: "SpaceX",
      ownerId: "12345",
      image: "https://www.spacex.com/static/images/share.jpg",
      description:
        "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
      vatNumber: "BE0689615164",
      currency: "USD",
      status: "Open",
      fax: "+12129876543",
      annualRevenue: "+$35m",
      numberOfEmployees: "500-1000",
      industry: "Apparel",
      ownership: "Public",
      salesTaxNumber: "12456EN",
      payeeNumber: "78932EN",
      abnOrTfn: "46 115 614 695",
      abnBranch: "123",
      acn: "XXX XXX XXX",
      firstName: "Elon",
      lastName: "Musk",
      bankAccounts: [
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
      ],
      websites: [
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
      ],
      rowType: {
        id: "12345",
        name: "Customer Account",
      },
      customFields: [
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
          value: 10,
        },
      ],
      tags: [
        "New",
      ],
      readOnly: false,
      salutation: "Mr",
      birthday: new RFCDate("2000-08-12"),
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Apideck } from "apideck";
import { HTTPClient } from "apideck/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Apideck({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Apideck } from "apideck";

const sdk = new Apideck({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `APIDECK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=apideck&utm_campaign=typescript)
