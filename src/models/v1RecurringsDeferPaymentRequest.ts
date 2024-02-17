/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema } from '../schema';

export interface V1RecurringsDeferPaymentRequest {
  /** Defer Count */
  deferCount: number;
  [key: string]: unknown;
}

export const v1RecurringsDeferPaymentRequestSchema: Schema<V1RecurringsDeferPaymentRequest> = expandoObject(
  { deferCount: ['defer_count', number()] }
);
