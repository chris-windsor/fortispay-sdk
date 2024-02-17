/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

/** Do not store the Async Code for long term use, it expires after 30 days. */
export interface Async {
  /** A [UUID v4](https://datatracker.ietf.org/doc/html/rfc4122) that's unique for the Async Request */
  code: string;
  /** Link to the status check endpoint */
  link: string;
  [key: string]: unknown;
}

export const asyncSchema: Schema<Async> = expandoObject({
  code: ['code', string()],
  link: ['link', string()],
});
