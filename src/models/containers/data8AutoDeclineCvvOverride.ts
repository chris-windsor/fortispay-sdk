/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, boolean, Schema } from '../../schema';

/** This is a container type for any-of types. */
export type Data8AutoDeclineCvvOverride = boolean;

export const data8AutoDeclineCvvOverrideSchema: Schema<Data8AutoDeclineCvvOverride> = anyOf(
  [boolean()]
);

export namespace Data8AutoDeclineCvvOverride {
  /**
  * Validation method to narrow down union type to boolean type case.
  *
  * This is Boolean case.
  */
  export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }
}
