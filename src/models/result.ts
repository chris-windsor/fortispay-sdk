/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface Result {
  /** Client Issues Id to track that can be used to track each submitted merchant application. This id should be generated and sent in the request payload, and will be returned in the response payload. If no id is submitted in the payload request, this field will be null in the response. */
  clientAppId?: string;
  /** Internal application ID returned from a successful request. */
  epicAppId?: string;
  /** Merchant 'Doing Business As' name. */
  dbaName?: string;
  /** Merchant email address. */
  email?: string;
  [key: string]: unknown;
}

export const resultSchema: Schema<Result> = expandoObject({
  clientAppId: ['client_app_id', optional(string())],
  epicAppId: ['epic_app_id', optional(string())],
  dbaName: ['dba_name', optional(string())],
  email: ['email', optional(string())],
});
