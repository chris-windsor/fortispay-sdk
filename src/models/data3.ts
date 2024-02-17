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
import { Status3Enum, status3EnumSchema } from './status3Enum';

export interface Data3 {
  /** Id */
  id?: string;
  /** Declined Transaction Id */
  declinedTransactionId?: string | null;
  /** Payment Transaction Id */
  paymentTransactionId?: string | null;
  /** Status */
  status?: Status3Enum;
  /** Recurring Id */
  recurringId?: string | null;
  /** Created Time Stamp */
  createdTs?: number | null;
  /** User ID Created the register */
  createdUserId?: string | null;
  /** Modified Time Stamp */
  modifiedTs?: number | null;
  /** Last User ID that updated the register */
  modifiedUserId?: string | null;
  [key: string]: unknown;
}

export const data3Schema: Schema<Data3> = expandoObject({
  id: ['id', optional(string())],
  declinedTransactionId: [
    'declined_transaction_id',
    optional(nullable(string())),
  ],
  paymentTransactionId: [
    'payment_transaction_id',
    optional(nullable(string())),
  ],
  status: ['status', optional(status3EnumSchema)],
  recurringId: ['recurring_id', optional(nullable(string()))],
  createdTs: ['created_ts', optional(nullable(number()))],
  createdUserId: ['created_user_id', optional(nullable(string()))],
  modifiedTs: ['modified_ts', optional(nullable(number()))],
  modifiedUserId: ['modified_user_id', optional(nullable(string()))],
});
