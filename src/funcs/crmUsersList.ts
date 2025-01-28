/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApideckCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import {
  encodeDeepObjectQuery,
  encodeFormQuery,
  encodeSimple,
  queryJoin,
} from "../lib/encodings.js";
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
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * Retrieve a list of CRM users with customizable data fields.
 *
 * @remarks
 * The 'usersAll' operation fetches a list of users from the CRM system, allowing developers to access user data efficiently. This GET request to the '/crm/users' endpoint supports various query parameters to tailor the response, such as 'fields' for selecting specific data fields, 'limit' for controlling the number of users returned, and 'cursor' for pagination. Essential headers like 'x-apideck-consumer-id' and 'x-apideck-app-id' are required for authentication and routing. The response is typically a JSON object containing user details, and the 'raw' parameter can be used to include raw data for debugging purposes. This operation is crucial for applications needing to integrate or display CRM user information dynamically.
 */
export async function crmUsersList(
  client: ApideckCore,
  request: operations.CrmUsersAllRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.CrmUsersAllResponse,
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
    >,
    { cursor: string }
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.CrmUsersAllRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/crm/users")();

  const query = queryJoin(
    encodeDeepObjectQuery({
      "pass_through": payload.pass_through,
    }),
    encodeFormQuery({
      "cursor": payload.cursor,
      "fields": payload.fields,
      "limit": payload.limit,
      "raw": payload.raw,
    }),
  );

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
    operationID: "crm.usersAll",
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
    return haltIterator(requestRes);
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "402", "404", "422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.CrmUsersAllResponse,
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
    M.json(200, operations.CrmUsersAllResponse$inboundSchema, {
      key: "ListUsersResponse",
    }),
    M.jsonErr(400, errors.BadRequestResponse$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedResponse$inboundSchema),
    M.jsonErr(402, errors.PaymentRequiredResponse$inboundSchema),
    M.jsonErr(404, errors.NotFoundResponse$inboundSchema),
    M.jsonErr(422, errors.UnprocessableEntityResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
    M.json("default", operations.CrmUsersAllResponse$inboundSchema, {
      key: "UnexpectedErrorResponse",
    }),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.CrmUsersAllResponse,
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
    >;
    "~next"?: { cursor: string };
  } => {
    const nextCursor = dlv(responseData, "meta.cursors.next");
    if (nextCursor == null) {
      return { next: () => null };
    }

    const nextVal = () =>
      crmUsersList(
        client,
        {
          ...request,
          cursor: nextCursor,
        },
        options,
      );

    return { next: nextVal, "~next": { cursor: nextCursor } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
