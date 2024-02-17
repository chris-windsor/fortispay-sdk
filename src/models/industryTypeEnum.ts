/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IndustryTypeEnum
 */
export enum IndustryTypeEnum {
  Ecommerce = 'ecommerce',
  Restaurant = 'restaurant',
  Lodging = 'lodging',
  Moto = 'moto',
  Retail = 'retail',
  EnumRetailSelfServe = 'retail self serve',
}

/**
 * Schema for IndustryTypeEnum
 */
export const industryTypeEnumSchema: Schema<IndustryTypeEnum> = stringEnum(IndustryTypeEnum);
