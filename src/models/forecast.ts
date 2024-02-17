/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

/** Forecast Information on `expand` */
export interface Forecast {
  /** ID */
  id?: string;
  /** Recurring ID */
  recurringId: string;
  /** Recurring Type */
  recurringType?: number | null;
  /** Amount */
  amount?: number | null;
  /** Month */
  month?: string | null;
  /** Created Time Stamp */
  createdTs?: number | null;
  /** Modified Time Stamp */
  modifiedTs?: number | null;
  [key: string]: unknown;
}

export const forecastSchema: Schema<Forecast> = expandoObject({
  id: ['id', optional(string())],
  recurringId: ['recurring_id', string()],
  recurringType: ['recurring_type', optional(nullable(number()))],
  amount: ['amount', optional(nullable(number()))],
  month: ['month', optional(nullable(string()))],
  createdTs: ['created_ts', optional(nullable(number()))],
  modifiedTs: ['modified_ts', optional(nullable(number()))],
});
