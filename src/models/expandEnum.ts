/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ExpandEnum
 */
export enum ExpandEnum {
  Changelogs = 'changelogs',
  PostbackLogs = 'postback_logs',
  ProductTransaction = 'product_transaction',
}

/**
 * Schema for ExpandEnum
 */
export const expandEnumSchema: Schema<ExpandEnum> = stringEnum(ExpandEnum);
