/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data19, data19Schema } from './data19';

export interface ResponseTerminal {
  /** Resource Type */
  type: string;
  data?: Data19;
  [key: string]: unknown;
}

export const responseTerminalSchema: Schema<ResponseTerminal> = expandoObject({
  type: ['type', string()],
  data: ['data', optional(lazy(() => data19Schema))],
});
