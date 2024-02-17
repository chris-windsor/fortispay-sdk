/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type V1TokensWalletRequestAccountNumber = string;

export const v1TokensWalletRequestAccountNumberSchema: Schema<V1TokensWalletRequestAccountNumber> = oneOf(
  [string()]
);

export namespace V1TokensWalletRequestAccountNumber {
  /**
  * Validation method to narrow down union type to string type case.
  *
  * This is String case.
  */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}
