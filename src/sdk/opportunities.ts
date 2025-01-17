/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { opportunitiesOpportunitiesAdd } from "../funcs/opportunitiesOpportunitiesAdd.js";
import { opportunitiesOpportunitiesAll } from "../funcs/opportunitiesOpportunitiesAll.js";
import { opportunitiesOpportunitiesDelete } from "../funcs/opportunitiesOpportunitiesDelete.js";
import { opportunitiesOpportunitiesOne } from "../funcs/opportunitiesOpportunitiesOne.js";
import { opportunitiesOpportunitiesUpdate } from "../funcs/opportunitiesOpportunitiesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Opportunities extends ClientSDK {
  /**
   * Retrieve all CRM opportunities.
   *
   * @remarks
   * The 'opportunitiesAll' operation allows API consumers to retrieve a comprehensive list of CRM opportunities. This GET request to the '/crm/opportunities' endpoint supports various query parameters to customize the response. Key parameters include 'raw' for debugging purposes, 'x-apideck-consumer-id' and 'x-apideck-app-id' which are mandatory headers for authentication, and 'x-apideck-service-id' for specifying the service when multiple integrations are active. Consumers can paginate results using 'cursor' and 'limit', apply 'filter' and 'sort' for refined data retrieval, and use 'fields' to specify which fields to include in the response. The 'pass_through' parameter allows additional unmapped query parameters to be sent downstream. The operation returns a 200 status code upon successful retrieval of opportunities, with the response containing the requested data fields.
   */
  async opportunitiesAll(
    security: operations.OpportunitiesAllSecurity,
    request: operations.OpportunitiesAllRequest,
    options?: RequestOptions,
  ): Promise<operations.OpportunitiesAllResponse> {
    return unwrapAsync(opportunitiesOpportunitiesAll(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Add a new opportunity to the CRM system.
   *
   * @remarks
   * The 'opportunitiesAdd' operation allows API consumers to create a new opportunity within the CRM system by sending a POST request to the '/crm/opportunities' endpoint. This operation requires several headers to be included in the request: 'x-apideck-consumer-id' and 'x-apideck-app-id' are mandatory, ensuring the request is associated with the correct consumer and application. Optionally, 'x-apideck-service-id' can be provided if the consumer has multiple integrations activated, specifying which service to target (e.g., Pipedrive). The 'raw' query parameter can be used to include the raw response, primarily for debugging purposes. The request body must contain the opportunity details to be added. Upon successful creation, the API responds with a 201 status code, indicating that the opportunity has been successfully added to the CRM. This operation does not support filtering or sorting, and it is crucial to ensure that all required fields in the request body are correctly populated to avoid errors.
   */
  async opportunitiesAdd(
    security: operations.OpportunitiesAddSecurity,
    request: operations.OpportunitiesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.OpportunitiesAddResponse> {
    return unwrapAsync(opportunitiesOpportunitiesAdd(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Retrieve a specific CRM opportunity by ID.
   *
   * @remarks
   * The 'opportunitiesOne' operation allows API consumers to retrieve detailed information about a specific opportunity within the CRM system by providing its unique ID. This GET request requires the 'id' parameter in the path to specify the opportunity record to be fetched. Additionally, the request must include the 'x-apideck-consumer-id' and 'x-apideck-app-id' headers to authenticate the consumer and identify the Unify application, respectively. Optionally, the 'x-apideck-service-id' header can be used if multiple integrations are active, specifying which service to query. The 'raw' query parameter can be included to receive the raw API response, useful for debugging. The 'fields' query parameter allows users to customize the response by specifying which fields to include, using a comma-separated list and dot notation for nested properties. The operation returns a 200 status code upon successful retrieval of the opportunity data. This operation is crucial for accessing specific opportunity details, enabling targeted data retrieval and integration with other systems.
   */
  async opportunitiesOne(
    security: operations.OpportunitiesOneSecurity,
    request: operations.OpportunitiesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.OpportunitiesOneResponse> {
    return unwrapAsync(opportunitiesOpportunitiesOne(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Update an existing opportunity in the CRM.
   *
   * @remarks
   * The 'opportunitiesUpdate' operation allows users to modify an existing opportunity record within the CRM system. This operation is performed using the HTTP PATCH method at the endpoint '/crm/opportunities/{id}', where '{id}' is the unique identifier of the opportunity to be updated.
   *
   * Key Parameters:
   * - 'id' (path parameter, required): The unique identifier of the opportunity record to be updated.
   * - 'x-apideck-consumer-id' (header, required): The unique identifier of the consumer accessing the API.
   * - 'x-apideck-app-id' (header, required): The identifier of the Unify application making the request.
   * - 'x-apideck-service-id' (header, optional): Specifies the service ID to be called, necessary when multiple integrations are active.
   * - 'raw' (query parameter, optional): When set to true, the response will include raw data, useful for debugging.
   *
   * Request Body: The request must include a body with the fields to be updated in the opportunity record. The fields and their data types should conform to the CRM's schema.
   *
   * Response: A successful update returns a 200 status code, indicating that the opportunity record has been successfully modified.
   *
   * Business Logic: Ensure that the 'id' provided corresponds to an existing opportunity. The operation does not support filtering or sorting, as it targets a specific record by ID. Proper authentication and authorization are required to perform this operation.
   */
  async opportunitiesUpdate(
    security: operations.OpportunitiesUpdateSecurity,
    request: operations.OpportunitiesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.OpportunitiesUpdateResponse> {
    return unwrapAsync(opportunitiesOpportunitiesUpdate(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Delete an opportunity record from the CRM.
   *
   * @remarks
   * The `opportunitiesDelete` operation allows API consumers to remove a specific opportunity record from the CRM system. This operation is performed using the HTTP DELETE method on the endpoint `/crm/opportunities/{id}`, where `{id}` is a required path parameter representing the unique identifier of the opportunity to be deleted.
   *
   * Key Parameters:
   * - `id` (path): The unique identifier of the opportunity record to be deleted. This parameter is mandatory.
   * - `x-apideck-consumer-id` (header): A required header parameter that specifies the ID of the consumer accessing the API.
   * - `x-apideck-app-id` (header): A required header parameter indicating the ID of the Unify application making the request.
   * - `x-apideck-service-id` (header): An optional header parameter used to specify the service ID when multiple integrations are active.
   * - `raw` (query): An optional query parameter that, when set, includes the raw response for debugging purposes.
   *
   * The operation does not support filtering or sorting as it targets a specific record identified by the `id` parameter. Upon successful deletion, the API returns a status code of 200, indicating that the operation was successful. No request body is required for this operation. It is important to ensure that the `id` provided corresponds to an existing opportunity record, as attempting to delete a non-existent record may result in an error. This operation is crucial for maintaining data integrity by allowing the removal of outdated or incorrect opportunity records from the CRM.
   */
  async opportunitiesDelete(
    security: operations.OpportunitiesDeleteSecurity,
    request: operations.OpportunitiesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.OpportunitiesDeleteResponse> {
    return unwrapAsync(opportunitiesOpportunitiesDelete(
      this,
      security,
      request,
      options,
    ));
  }
}
