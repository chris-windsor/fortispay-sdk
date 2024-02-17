/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Level3Data5, level3Data5Schema } from './level3Data5';

export interface V1TransactionsLevel3MasterCardRequest {
  /** Level 3 data object */
  level3Data: Level3Data5;
  [key: string]: unknown;
}

export const v1TransactionsLevel3MasterCardRequestSchema: Schema<V1TransactionsLevel3MasterCardRequest> = expandoObject(
  { level3Data: ['level3_data', lazy(() => level3Data5Schema)] }
);
