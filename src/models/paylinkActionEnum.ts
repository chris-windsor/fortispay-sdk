/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaylinkActionEnum
 */
export enum PaylinkActionEnum {
  Sale = 'sale',
  Authonly = 'auth-only',
}

/**
 * Schema for PaylinkActionEnum
 */
export const paylinkActionEnumSchema: Schema<PaylinkActionEnum> = stringEnum(PaylinkActionEnum);
