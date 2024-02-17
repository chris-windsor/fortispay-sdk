/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Values7Enum
 */
export enum Values7Enum {
  AccountvaultC3 = 'accountvault_c3',
  TokenC3 = 'token_c3',
}

/**
 * Schema for Values7Enum
 */
export const values7EnumSchema: Schema<Values7Enum> = stringEnum(Values7Enum);
