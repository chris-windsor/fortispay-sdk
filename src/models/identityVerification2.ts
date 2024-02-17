/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

/** Identity verification */
export interface IdentityVerification2 {
  /** Used for certain ACH transactions where Driver's License is required by the terminal being used. */
  dlState?: string | null;
  /** Used for certain ACH transactions where Driver's License is required by the terminal being used. */
  dlNumber?: string | null;
  /** The last four of the account_holder social security number. */
  ssn4?: string | null;
  /** Used for certain ACH transactions where Identity Verification is enabled on the terminal being used. */
  dobYear?: string | null;
  [key: string]: unknown;
}

export const identityVerification2Schema: Schema<IdentityVerification2> = expandoObject(
  {
    dlState: ['dl_state', optional(nullable(string()))],
    dlNumber: ['dl_number', optional(nullable(string()))],
    ssn4: ['ssn4', optional(nullable(string()))],
    dobYear: ['dob_year', optional(nullable(string()))],
  }
);
