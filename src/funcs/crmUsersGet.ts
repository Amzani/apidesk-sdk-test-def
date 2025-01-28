/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApideckCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Retrieve detailed information about a specific user in the CRM system.
 *
 * @remarks
 * The 'usersOne' operation allows developers to fetch detailed information about a specific user in the CRM system by using their unique ID. This GET request requires the 'id' parameter in the path to specify the user record to retrieve. Additionally, headers such as 'x-apideck-consumer-id' and 'x-apideck-app-id' are mandatory for authentication and routing purposes. Optionally, the 'x-apideck-service-id' header can be used to target a specific service integration, and query parameters like 'raw' and 'fields' can be utilized to customize the response. The response is typically a JSON object containing the user's details, facilitating seamless integration and data retrieval for CRM applications.
 */
export async function crmUsersGet(
  client: ApideckCore,
  request: operations.CrmUsersOneRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.CrmUsersOneResponse,
    | errors.BadRequestResponse
    | errors.UnauthorizedResponse
    | errors.PaymentRequiredResponse
    | errors.NotFoundResponse
    | errors.UnprocessableEntityResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.CrmUsersOneRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    id: encodeSimple("id", payload.id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/crm/users/{id}")(pathParams);

  const query = encodeFormQuery({
    "fields": payload.fields,
    "raw": payload.raw,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
    "x-apideck-app-id": encodeSimple(
      "x-apideck-app-id",
      payload.appId ?? client._options.appId,
      { explode: false, charEncoding: "none" },
    ),
    "x-apideck-consumer-id": encodeSimple(
      "x-apideck-consumer-id",
      payload.consumerId ?? client._options.consumerId,
      { explode: false, charEncoding: "none" },
    ),
    "x-apideck-service-id": encodeSimple(
      "x-apideck-service-id",
      payload.serviceId,
      { explode: false, charEncoding: "none" },
    ),
  }));

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "crm.usersOne",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "402", "404", "422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.CrmUsersOneResponse,
    | errors.BadRequestResponse
    | errors.UnauthorizedResponse
    | errors.PaymentRequiredResponse
    | errors.NotFoundResponse
    | errors.UnprocessableEntityResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.CrmUsersOneResponse$inboundSchema, {
      key: "GetUserResponse",
    }),
    M.jsonErr(400, errors.BadRequestResponse$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedResponse$inboundSchema),
    M.jsonErr(402, errors.PaymentRequiredResponse$inboundSchema),
    M.jsonErr(404, errors.NotFoundResponse$inboundSchema),
    M.jsonErr(422, errors.UnprocessableEntityResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
    M.json("default", operations.CrmUsersOneResponse$inboundSchema, {
      key: "UnexpectedErrorResponse",
    }),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
