/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notesNotesAdd } from "../funcs/notesNotesAdd.js";
import { notesNotesAll } from "../funcs/notesNotesAll.js";
import { notesNotesDelete } from "../funcs/notesNotesDelete.js";
import { notesNotesOne } from "../funcs/notesNotesOne.js";
import { notesNotesUpdate } from "../funcs/notesNotesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Notes extends ClientSDK {
  /**
   * List notes
   *
   * @remarks
   * List notes
   */
  async notesAll(
    security: operations.NotesAllSecurity,
    request: operations.NotesAllRequest,
    options?: RequestOptions,
  ): Promise<operations.NotesAllResponse> {
    return unwrapAsync(notesNotesAll(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Create note
   *
   * @remarks
   * Create note
   */
  async notesAdd(
    security: operations.NotesAddSecurity,
    request: operations.NotesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.NotesAddResponse> {
    return unwrapAsync(notesNotesAdd(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Get note
   *
   * @remarks
   * Get note
   */
  async notesOne(
    security: operations.NotesOneSecurity,
    request: operations.NotesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.NotesOneResponse> {
    return unwrapAsync(notesNotesOne(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Update note
   *
   * @remarks
   * Update note
   */
  async notesUpdate(
    security: operations.NotesUpdateSecurity,
    request: operations.NotesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.NotesUpdateResponse> {
    return unwrapAsync(notesNotesUpdate(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Delete note
   *
   * @remarks
   * Delete note
   */
  async notesDelete(
    security: operations.NotesDeleteSecurity,
    request: operations.NotesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.NotesDeleteResponse> {
    return unwrapAsync(notesNotesDelete(
      this,
      security,
      request,
      options,
    ));
  }
}
