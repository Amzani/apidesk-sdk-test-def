/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companiesCompaniesAdd } from "../funcs/companiesCompaniesAdd.js";
import { companiesCompaniesAll } from "../funcs/companiesCompaniesAll.js";
import { companiesCompaniesDelete } from "../funcs/companiesCompaniesDelete.js";
import { companiesCompaniesOne } from "../funcs/companiesCompaniesOne.js";
import { companiesCompaniesUpdate } from "../funcs/companiesCompaniesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Companies extends ClientSDK {
  /**
   * Add a new company to the CRM system.
   *
   * @remarks
   * The `companiesAdd` operation allows API consumers to add a new company to the CRM system by sending a POST request to the `/crm/companies` endpoint. This operation requires a request body containing the company details to be added. Key headers include `x-apideck-consumer-id` and `x-apideck-app-id`, which are mandatory for identifying the consumer and the application, respectively. The `x-apideck-service-id` header is optional and used when multiple integrations are active, specifying the target service (e.g., pipedrive). The `raw` query parameter can be included to receive a raw response, primarily for debugging purposes. Upon successful creation, the API returns a `201` status code, indicating that the company has been successfully added to the CRM. This operation does not support filtering or sorting of the request data. It is crucial for consumers to ensure that all required fields in the request body are correctly populated to avoid errors.
   */
  async companiesAdd(
    security: operations.CompaniesAddSecurity,
    request: operations.CompaniesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.CompaniesAddResponse> {
    return unwrapAsync(companiesCompaniesAdd(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list of companies from the CRM.
   *
   * @remarks
   * The `companiesAll` operation allows API consumers to retrieve a comprehensive list of companies stored within the CRM system. This GET request to the `/crm/companies` endpoint supports various query parameters to customize the response. Key parameters include `x-apideck-consumer-id` and `x-apideck-app-id`, which are mandatory headers for authentication and application identification. Optional query parameters such as `cursor` and `limit` enable pagination, while `filter` and `sort` allow for refined data retrieval based on specific criteria. The `fields` parameter lets users specify which fields to include in the response, optimizing data handling by returning only necessary information. The operation supports debugging through the `raw` parameter and can pass additional unmapped query parameters using `pass_through`. The response will include a list of companies, with pagination details available in the `meta.cursors` property. This operation is essential for integrating CRM data into applications, providing flexibility and control over the data retrieval process.
   */
  async companiesAll(
    security: operations.CompaniesAllSecurity,
    request: operations.CompaniesAllRequest,
    options?: RequestOptions,
  ): Promise<operations.CompaniesAllResponse> {
    return unwrapAsync(companiesCompaniesAll(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Get company
   *
   * @remarks
   * Get company
   */
  async companiesOne(
    security: operations.CompaniesOneSecurity,
    request: operations.CompaniesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.CompaniesOneResponse> {
    return unwrapAsync(companiesCompaniesOne(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Update company
   *
   * @remarks
   * Update company
   */
  async companiesUpdate(
    security: operations.CompaniesUpdateSecurity,
    request: operations.CompaniesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.CompaniesUpdateResponse> {
    return unwrapAsync(companiesCompaniesUpdate(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Delete company
   *
   * @remarks
   * Delete company
   */
  async companiesDelete(
    security: operations.CompaniesDeleteSecurity,
    request: operations.CompaniesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.CompaniesDeleteResponse> {
    return unwrapAsync(companiesCompaniesDelete(
      this,
      security,
      request,
      options,
    ));
  }
}
