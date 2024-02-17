/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface Method3 {
  /** Payment type. Must be unique. */
  type: TypeEnum;
  /** The Product's method (cc/ach) has to match the type. */
  productTransactionId: string;
  [key: string]: unknown;
}

export const method3Schema: Schema<Method3> = expandoObject({
  type: ['type', typeEnumSchema],
  productTransactionId: ['product_transaction_id', string()],
});
