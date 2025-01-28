/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApideckCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
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
 * Update user details in the CRM system using a PATCH request.
 *
 * @remarks
 * The usersUpdate operation allows you to modify existing user records in the CRM system by sending a PATCH request to the /crm/users/{id} endpoint. This operation is crucial for keeping user information up-to-date and accurate. You must provide the user's ID in the path parameter to specify which record to update. Additionally, the request requires headers for authentication and authorization, including x-apideck-consumer-id and x-apideck-app-id. Optionally, you can specify x-apideck-service-id if targeting a specific service integration. The request body should contain the fields you wish to update. Upon successful execution, the operation returns a status code of 200, indicating the user record has been updated. The response typically includes the updated user details in a JSON format.
 */
export async function crmUsersUpdate(
  client: ApideckCore,
  request: operations.CrmUsersUpdateRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.CrmUsersUpdateResponse,
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
    (value) => operations.CrmUsersUpdateRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.UpdateUserRequest, { explode: true });

  const pathParams = {
    id: encodeSimple("id", payload.id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/crm/users/{id}")(pathParams);

  const query = encodeFormQuery({
    "raw": payload.raw,
  });

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
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
    operationID: "crm.usersUpdate",
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
    method: "PATCH",
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
    operations.CrmUsersUpdateResponse,
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
    M.json(200, operations.CrmUsersUpdateResponse$inboundSchema, {
      key: "UpdateUserResponse",
    }),
    M.jsonErr(400, errors.BadRequestResponse$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedResponse$inboundSchema),
    M.jsonErr(402, errors.PaymentRequiredResponse$inboundSchema),
    M.jsonErr(404, errors.NotFoundResponse$inboundSchema),
    M.jsonErr(422, errors.UnprocessableEntityResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
    M.json("default", operations.CrmUsersUpdateResponse$inboundSchema, {
      key: "UnexpectedErrorResponse",
    }),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
