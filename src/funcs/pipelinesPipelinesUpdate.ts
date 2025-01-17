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
 * Update an existing CRM pipeline.
 *
 * @remarks
 * The `pipelinesUpdate` operation allows you to update an existing pipeline within the CRM system by specifying the pipeline's unique identifier in the path parameter. This operation uses the HTTP PATCH method, enabling partial updates to the pipeline's data. Key parameters include the `id` path parameter, which is mandatory and identifies the specific pipeline to update, and several header parameters such as `x-apideck-consumer-id` and `x-apideck-app-id`, which are required for authentication and authorization purposes. The `x-apideck-service-id` header is optional and should be used when multiple integrations are active, specifying the target service (e.g., Pipedrive). Additionally, the `raw` query parameter can be included to receive a raw response, useful for debugging. The request body must contain the fields to be updated, formatted in JSON. Upon successful update, the API returns a 200 status code with the updated pipeline details. This operation does not support filtering or sorting, and it is crucial to ensure that the provided `id` corresponds to an existing pipeline to avoid errors.
 */
export async function pipelinesPipelinesUpdate(
  client: ApideckCore,
  security: operations.PipelinesUpdateSecurity,
  request: operations.PipelinesUpdateRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.PipelinesUpdateResponse,
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
    (value) => operations.PipelinesUpdateRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.PipelineUpdateRequest, {
    explode: true,
  });

  const pathParams = {
    id: encodeSimple("id", payload.id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/crm/pipelines/{id}")(pathParams);

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
    operationID: "pipelinesUpdate",
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
    operations.PipelinesUpdateResponse,
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
    M.json(200, operations.PipelinesUpdateResponse$inboundSchema, {
      key: "PipelineUpdateResponse",
    }),
    M.jsonErr(400, errors.BadRequestResponse$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedResponse$inboundSchema),
    M.jsonErr(402, errors.PaymentRequiredResponse$inboundSchema),
    M.jsonErr(404, errors.NotFoundResponse$inboundSchema),
    M.jsonErr(422, errors.UnprocessableEntityResponse$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json("default", operations.PipelinesUpdateResponse$inboundSchema, {
      key: "UnexpectedErrorResponse",
    }),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
