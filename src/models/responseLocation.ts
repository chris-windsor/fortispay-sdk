/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data10, data10Schema } from './data10';

export interface ResponseLocation {
  /** Resource Type */
  type: string;
  data?: Data10;
  [key: string]: unknown;
}

export const responseLocationSchema: Schema<ResponseLocation> = expandoObject({
  type: ['type', string()],
  data: ['data', optional(lazy(() => data10Schema))],
});
