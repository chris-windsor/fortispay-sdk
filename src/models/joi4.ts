/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import {
  Joi4Conditions,
  joi4ConditionsSchema,
} from './containers/joi4Conditions';

export interface Joi4 {
  conditions?: Joi4Conditions;
  [key: string]: unknown;
}

export const joi4Schema: Schema<Joi4> = expandoObject({
  conditions: ['conditions', optional(lazy(() => joi4ConditionsSchema))],
});
