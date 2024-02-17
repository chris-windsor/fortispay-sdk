/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TaxExemptEnum
 */
export enum TaxExemptEnum {
  Enum0 = '0',
  Enum1 = '1',
}

/**
 * Schema for TaxExemptEnum
 */
export const taxExemptEnumSchema: Schema<TaxExemptEnum> = stringEnum(TaxExemptEnum);
