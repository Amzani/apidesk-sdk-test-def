/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmOpportunitiesCreate } from "../funcs/crmOpportunitiesCreate.js";
import { crmOpportunitiesDelete } from "../funcs/crmOpportunitiesDelete.js";
import { crmOpportunitiesGet } from "../funcs/crmOpportunitiesGet.js";
import { crmOpportunitiesList } from "../funcs/crmOpportunitiesList.js";
import { crmOpportunitiesUpdate } from "../funcs/crmOpportunitiesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Opportunities extends ClientSDK {
  /**
   * Retrieve a list of CRM opportunities.
   *
   * @remarks
   * The 'opportunitiesAll' operation fetches a comprehensive list of CRM opportunities from the specified service. This GET request to the '/crm/opportunities' endpoint allows developers to access detailed opportunity data, which is crucial for sales tracking and management. Key parameters include 'limit' for controlling the number of results, 'filter' for narrowing down opportunities based on criteria like 'title' or 'status', and 'sort' for ordering the results. The response is a JSON object containing the list of opportunities, with pagination supported via the 'cursor' parameter. Essential headers such as 'x-apideck-consumer-id' and 'x-apideck-app-id' are required for authentication and authorization. This operation is vital for integrating CRM data into applications, enabling efficient sales process management.
   */
  async list(
    request: operations.CrmOpportunitiesAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.CrmOpportunitiesAllResponse, { cursor: string }>
  > {
    return unwrapResultIterator(crmOpportunitiesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new opportunity to the CRM system.
   *
   * @remarks
   * The 'opportunitiesAdd' operation allows you to create a new opportunity within the CRM system by sending a POST request to the '/crm/opportunities' endpoint. This operation is essential for managing sales pipelines and tracking potential deals. The request must include a valid 'x-apideck-consumer-id' and 'x-apideck-app-id' in the headers for authentication. Optionally, specify 'x-apideck-service-id' to target a specific service integration. If 'raw' is set to true in the query, the response will include raw data for debugging purposes. Upon successful creation, the API returns a status code of 201 along with the ID of the newly created opportunity in a JSON object.
   */
  async create(
    request: operations.CrmOpportunitiesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmOpportunitiesAddResponse> {
    return unwrapAsync(crmOpportunitiesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a specific CRM opportunity by its ID.
   *
   * @remarks
   * The 'opportunitiesOne' operation allows developers to fetch detailed information about a specific opportunity within a CRM system using its unique ID. This GET request requires the 'id' parameter in the path to identify the opportunity record. Essential headers include 'x-apideck-consumer-id' and 'x-apideck-app-id' for authentication and authorization. Optionally, specify 'x-apideck-service-id' to target a particular service integration if multiple are active. Use the 'raw' query parameter to receive raw data for debugging, and 'fields' to customize the response by selecting specific data fields. The response is a JSON object containing the opportunity details, facilitating efficient data retrieval and integration into applications.
   */
  async get(
    request: operations.CrmOpportunitiesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmOpportunitiesOneResponse> {
    return unwrapAsync(crmOpportunitiesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an existing opportunity in the CRM system.
   *
   * @remarks
   * The opportunitiesUpdate operation allows you to modify an existing opportunity record in the CRM by sending a PATCH request to the /crm/opportunities/{id} endpoint. This operation is crucial for keeping opportunity data up-to-date, ensuring accurate tracking and management of sales processes. The request requires the opportunity ID in the path and authentication headers, including x-apideck-consumer-id and x-apideck-app-id. Optionally, specify x-apideck-service-id to target a specific service integration. The raw query parameter can be used to receive raw data for debugging. A successful update returns a 200 status code and the updated opportunity details in a JSON object.
   */
  async update(
    request: operations.CrmOpportunitiesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmOpportunitiesUpdateResponse> {
    return unwrapAsync(crmOpportunitiesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a specific opportunity record from the CRM system.
   *
   * @remarks
   * The opportunitiesDelete operation allows developers to remove an opportunity record from the CRM by specifying its unique ID in the endpoint path. This operation is crucial for maintaining accurate and up-to-date CRM data by enabling the deletion of obsolete or incorrect records. To execute this operation, the 'id' parameter is required in the path, along with necessary headers for authentication: 'x-apideck-consumer-id' and 'x-apideck-app-id'. Optionally, 'x-apideck-service-id' can be included to target a specific service integration. The operation does not require a request body and returns a status code of 200 upon successful deletion, indicating that the record has been successfully removed. This operation is essential for developers managing CRM data lifecycle efficiently.
   */
  async delete(
    request: operations.CrmOpportunitiesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmOpportunitiesDeleteResponse> {
    return unwrapAsync(crmOpportunitiesDelete(
      this,
      request,
      options,
    ));
  }
}
