/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmUsersCreate } from "../funcs/crmUsersCreate.js";
import { crmUsersDelete } from "../funcs/crmUsersDelete.js";
import { crmUsersGet } from "../funcs/crmUsersGet.js";
import { crmUsersList } from "../funcs/crmUsersList.js";
import { crmUsersUpdate } from "../funcs/crmUsersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Users extends ClientSDK {
  /**
   * Retrieve a list of users from the CRM system.
   *
   * @remarks
   * The `usersAll` operation allows developers to retrieve a comprehensive list of users from the CRM system using a GET request to the `/crm/users` endpoint. This operation is essential for applications that need to access user data for various purposes, such as displaying user information or integrating with other systems.
   *
   * Key parameters include:
   * - `x-apideck-consumer-id` (required): Identifies the consumer from which data is being accessed.
   * - `x-apideck-app-id` (required): Specifies the Unify application ID.
   * - `x-apideck-service-id`: Optional parameter to specify the service ID when multiple integrations are active.
   * - `limit`: Controls the number of results returned, with a default of 20 and a maximum of 200.
   * - `fields`: Allows selection of specific fields to include in the response, enhancing performance by reducing payload size.
   *
   * The response returns a JSON object containing user data, which can be filtered and paginated using the provided parameters. This operation supports debugging with the `raw` parameter and allows additional query parameters through `pass_through`. It is designed to be efficient and flexible, catering to various application needs.
   */
  async list(
    request: operations.CrmUsersAllRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.CrmUsersAllResponse, { cursor: string }>> {
    return unwrapResultIterator(crmUsersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new user to the CRM system.
   *
   * @remarks
   * The `usersAdd` operation allows developers to add a new user to the CRM system by sending a POST request to the `/crm/users` endpoint. This operation is essential for integrating user management capabilities into applications that interact with the CRM.
   *
   * Key Parameters:
   * - `x-apideck-consumer-id` (header, required): Identifies the consumer from which data is being pushed or retrieved.
   * - `x-apideck-app-id` (header, required): Specifies the ID of the Unify application making the request.
   * - `x-apideck-service-id` (header, optional): Indicates the specific service to call, necessary when multiple integrations are active.
   * - `raw` (query, optional): Determines if the raw response should be included, useful for debugging.
   *
   * Upon successful creation, the operation returns a 201 status code along with a JSON object containing the unique identifier of the newly created user. This response confirms the successful addition of the user to the CRM system.
   */
  async create(
    request: operations.CrmUsersAddRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersAddResponse> {
    return unwrapAsync(crmUsersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a specific user's details from the CRM system.
   *
   * @remarks
   * The `usersOne` operation allows developers to fetch detailed information about a specific user from the CRM system using their unique ID. This operation is crucial for applications that need to display or process user-specific data.
   *
   * ### Key Parameters:
   * - **id (path)**: The unique identifier of the user whose details are being retrieved. This parameter is mandatory.
   * - **x-apideck-consumer-id (header)**: Required header specifying the consumer ID for data retrieval.
   * - **x-apideck-app-id (header)**: Required header indicating the Unify application ID.
   * - **x-apideck-service-id (header)**: Optional header to specify the service ID when multiple integrations are active.
   * - **raw (query)**: Optional parameter to include raw response data, useful for debugging.
   * - **fields (query)**: Optional parameter to specify which fields to include in the response, using a comma-separated string. Supports nested properties with dot notation.
   *
   * ### Response Behavior:
   * The operation returns a JSON object containing the user's details, including all available fields unless specified otherwise by the `fields` parameter. The response is typically a 200 status code, indicating successful retrieval of the user data.
   */
  async get(
    request: operations.CrmUsersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersOneResponse> {
    return unwrapAsync(crmUsersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update user details in the CRM system.
   *
   * @remarks
   * The `usersUpdate` operation allows developers to modify existing user records in the CRM system using a PATCH request to the `/crm/users/{id}` endpoint. This operation is crucial for maintaining up-to-date user information, ensuring data accuracy and relevance.
   *
   * Key Parameters:
   * - `id` (path): The unique identifier of the user record to be updated. This is a required parameter.
   * - `x-apideck-consumer-id` (header): Specifies the consumer ID for data retrieval or submission. This is mandatory.
   * - `x-apideck-app-id` (header): Identifies the Unify application in use. This is also required.
   * - `x-apideck-service-id` (header): Optional parameter to specify the service ID when multiple integrations are active.
   * - `raw` (query): Optional parameter to include raw response data, useful for debugging.
   *
   * Upon successful execution, the operation returns a status code of 200, indicating that the user record has been updated. The response includes a JSON object with the updated user details, confirming the changes made. This operation is essential for developers needing to ensure that user data within the CRM remains current and accurate.
   */
  async update(
    request: operations.CrmUsersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersUpdateResponse> {
    return unwrapAsync(crmUsersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a user from the CRM system.
   *
   * @remarks
   * The `usersDelete` operation allows developers to remove a user from the CRM system by specifying the user's unique identifier in the endpoint path. This operation is crucial for maintaining an up-to-date and accurate user database by enabling the deletion of obsolete or incorrect user records.
   *
   * Key Parameters:
   * - `id` (path parameter, required): The unique identifier of the user to be deleted.
   * - `x-apideck-consumer-id` (header, required): Identifies the consumer from which data is being managed.
   * - `x-apideck-app-id` (header, required): The ID of the Unify application making the request.
   * - `x-apideck-service-id` (header, optional): Specifies the service ID when multiple integrations are active.
   * - `raw` (query parameter, optional): When set, includes the raw response for debugging purposes.
   *
   * Upon successful deletion, the operation returns a status code of 200, indicating that the user has been successfully removed from the system. This operation does not return a response body, ensuring a streamlined and efficient API interaction.
   */
  async delete(
    request: operations.CrmUsersDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersDeleteResponse> {
    return unwrapAsync(crmUsersDelete(
      this,
      request,
      options,
    ));
  }
}
