/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leadsLeadsAdd } from "../funcs/leadsLeadsAdd.js";
import { leadsLeadsAll } from "../funcs/leadsLeadsAll.js";
import { leadsLeadsDelete } from "../funcs/leadsLeadsDelete.js";
import { leadsLeadsOne } from "../funcs/leadsLeadsOne.js";
import { leadsLeadsUpdate } from "../funcs/leadsLeadsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Leads extends ClientSDK {
  /**
   * Retrieve a list of leads from the CRM system.
   *
   * @remarks
   * The 'leadsAll' operation allows API consumers to retrieve a comprehensive list of leads from the CRM system using a GET request to the '/crm/leads' endpoint. This operation supports various query parameters to customize the response, including 'raw' for debugging purposes, 'cursor' for pagination, 'limit' to control the number of results, 'filter' for applying specific criteria, and 'sort' for ordering the results. Additionally, the 'fields' parameter enables users to specify which fields to include in the response, allowing for efficient data retrieval. Required headers include 'x-apideck-consumer-id' and 'x-apideck-app-id', ensuring proper authentication and application context. The operation supports integration with multiple services through the optional 'x-apideck-service-id' header. The response will include a 200 status code upon successful retrieval of leads, with optional pagination cursors provided in the response metadata for navigating through large datasets. This operation is essential for accessing and managing lead data within the CRM, facilitating seamless integration and data handling across different platforms.
   */
  async leadsAll(
    security: operations.LeadsAllSecurity,
    request: operations.LeadsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.LeadsAllResponse> {
    return unwrapAsync(leadsLeadsAll(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Add a new lead to the CRM system.
   *
   * @remarks
   * The 'leadsAdd' operation allows API consumers to add a new lead to the CRM system by sending a POST request to the '/crm/leads' endpoint. This operation requires the inclusion of specific headers such as 'x-apideck-consumer-id' and 'x-apideck-app-id' to authenticate and identify the consumer and application making the request. Optionally, the 'x-apideck-service-id' header can be used to specify the service ID when multiple integrations are active. The 'raw' query parameter can be included to receive a raw response, primarily for debugging purposes. The request body must contain the lead details to be added. Upon successful creation, the API returns a 201 status code, indicating that the lead has been successfully added to the CRM. This operation does not support filtering or sorting of leads during the creation process. It is crucial for consumers to ensure that all required fields in the request body are correctly populated to avoid errors.
   */
  async leadsAdd(
    security: operations.LeadsAddSecurity,
    request: operations.LeadsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.LeadsAddResponse> {
    return unwrapAsync(leadsLeadsAdd(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Retrieve a specific lead's details from the CRM.
   *
   * @remarks
   * The 'leadsOne' operation allows API consumers to retrieve detailed information about a specific lead from the CRM by using the lead's unique identifier. This GET request requires the 'id' parameter in the path to specify the lead record to be accessed. Additionally, the request must include the 'x-apideck-consumer-id' and 'x-apideck-app-id' headers to authenticate and identify the consumer and application making the request. Optionally, the 'x-apideck-service-id' header can be provided if the consumer has multiple integrations activated, specifying which service to call (e.g., pipedrive). The operation supports query parameters such as 'raw' to include a raw response for debugging, and 'fields' to filter the response to include only specified fields, using a comma-separated string with optional dot notation for nested properties. The response will return a 200 status code upon successful retrieval of the lead's details. This operation is crucial for accessing specific lead data efficiently and can be tailored to return only the necessary information, optimizing data handling and processing.
   */
  async leadsOne(
    security: operations.LeadsOneSecurity,
    request: operations.LeadsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.LeadsOneResponse> {
    return unwrapAsync(leadsLeadsOne(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Update a lead record in the CRM system.
   *
   * @remarks
   * The `leadsUpdate` operation allows you to modify an existing lead record in the CRM system using a PATCH request. This operation requires the `id` parameter in the path to specify which lead record to update. Additionally, the request must include the `x-apideck-consumer-id` and `x-apideck-app-id` headers to authenticate the consumer and application making the request. Optionally, the `x-apideck-service-id` header can be provided if the consumer has multiple integrations activated, specifying which service to target (e.g., Pipedrive). The `raw` query parameter can be used to include the raw response, which is useful for debugging. The request body should contain the fields to be updated in JSON format. Upon successful update, the operation returns a 200 status code with the updated lead data. This operation does not support filtering or sorting, and it is crucial to ensure that the correct `id` is provided to avoid unintended data modifications.
   */
  async leadsUpdate(
    security: operations.LeadsUpdateSecurity,
    request: operations.LeadsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.LeadsUpdateResponse> {
    return unwrapAsync(leadsLeadsUpdate(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Delete a lead record from the CRM system.
   *
   * @remarks
   * The `leadsDelete` operation allows API consumers to remove a specific lead record from the CRM system by providing the unique lead ID in the path parameter. This operation is executed using the HTTP DELETE method at the endpoint `/crm/leads/{id}`.
   *
   * Key Parameters:
   * - `id` (path, required): The unique identifier of the lead record to be deleted.
   * - `x-apideck-consumer-id` (header, required): Specifies the consumer ID for data retrieval or submission.
   * - `x-apideck-app-id` (header, required): Identifies the Unify application making the request.
   * - `x-apideck-service-id` (header, optional): Indicates the specific service to call, necessary when multiple integrations are active.
   * - `raw` (query, optional): When set to true, includes the raw response, useful for debugging.
   *
   * The operation does not support filtering or sorting as it targets a specific resource identified by the `id` parameter. Upon successful deletion, the API returns a status code of 200, indicating the lead has been successfully removed. It is important to ensure that the lead ID provided is valid and exists in the system to avoid errors. This operation is crucial for maintaining up-to-date and accurate CRM data by allowing the removal of obsolete or incorrect lead records.
   */
  async leadsDelete(
    security: operations.LeadsDeleteSecurity,
    request: operations.LeadsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.LeadsDeleteResponse> {
    return unwrapAsync(leadsLeadsDelete(
      this,
      security,
      request,
      options,
    ));
  }
}
