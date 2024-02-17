/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data6, data6Schema } from './data6';

export interface ResponseDeviceTerm {
  /** Resource Type */
  type: string;
  data?: Data6;
  [key: string]: unknown;
}

export const responseDeviceTermSchema: Schema<ResponseDeviceTerm> = expandoObject(
  {
    type: ['type', string()],
    data: ['data', optional(lazy(() => data6Schema))],
  }
);
