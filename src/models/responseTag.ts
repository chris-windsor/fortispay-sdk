/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data18, data18Schema } from './data18';

export interface ResponseTag {
  /** Resource Type */
  type: string;
  data?: Data18;
  [key: string]: unknown;
}

export const responseTagSchema: Schema<ResponseTag> = expandoObject({
  type: ['type', string()],
  data: ['data', optional(lazy(() => data18Schema))],
});
