/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApideckCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
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
 * Update user
 *
 * @remarks
 * Update user
 */
export async function usersUsersUpdate(
  client: ApideckCore,
  security: operations.UsersUpdateSecurity,
  request: operations.UsersUpdateRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.UsersUpdateResponse,
    | errors.UsersUpdateResponseBody
    | errors.UsersUpdateUsersResponseBody
    | errors.UsersUpdateUsersResponseResponseBody
    | errors.UsersUpdateUsersResponse404ResponseBody
    | errors.UsersUpdateUsersResponse422ResponseBody
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
    (value) => operations.UsersUpdateRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

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

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-apideck-app-id": encodeSimple("x-apideck-app-id", payload.appId, {
      explode: false,
      charEncoding: "none",
    }),
    "x-apideck-consumer-id": encodeSimple(
      "x-apideck-consumer-id",
      payload.consumerId,
      { explode: false, charEncoding: "none" },
    ),
    "x-apideck-service-id": encodeSimple(
      "x-apideck-service-id",
      payload.serviceId,
      { explode: false, charEncoding: "none" },
    ),
  });

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "Authorization",
        type: "apiKey:header",
        value: security?.apiKey,
      },
    ],
  );

  const context = {
    operationID: "usersUpdate",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
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
    operations.UsersUpdateResponse,
    | errors.UsersUpdateResponseBody
    | errors.UsersUpdateUsersResponseBody
    | errors.UsersUpdateUsersResponseResponseBody
    | errors.UsersUpdateUsersResponse404ResponseBody
    | errors.UsersUpdateUsersResponse422ResponseBody
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.UsersUpdateResponse$inboundSchema),
    M.jsonErr(400, errors.UsersUpdateResponseBody$inboundSchema),
    M.jsonErr(401, errors.UsersUpdateUsersResponseBody$inboundSchema),
    M.jsonErr(402, errors.UsersUpdateUsersResponseResponseBody$inboundSchema),
    M.jsonErr(
      404,
      errors.UsersUpdateUsersResponse404ResponseBody$inboundSchema,
    ),
    M.jsonErr(
      422,
      errors.UsersUpdateUsersResponse422ResponseBody$inboundSchema,
    ),
    M.fail(["4XX", "5XX"]),
    M.json("default", operations.UsersUpdateResponse$inboundSchema),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
