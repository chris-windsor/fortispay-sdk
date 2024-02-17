/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, number, Schema } from '../../schema';

/** This is a container type for any-of types. */
export type Data8AmountCase1 = number;

export const data8AmountCase1Schema: Schema<Data8AmountCase1> = anyOf([
  number(),
]);

export namespace Data8AmountCase1 {
  /**
  * Validation method to narrow down union type to number type case.
  *
  * This is Number case.
  */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
}
