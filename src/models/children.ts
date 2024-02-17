/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';
import {
  UpdateIfExistsEnum,
  updateIfExistsEnumSchema,
} from './updateIfExistsEnum';

/** Children Information on `expand` */
export interface Children {
  /** Location ID */
  locationId: string;
  /** Contact Account Number */
  accountNumber?: string | null;
  /** Contact API Id */
  contactApiId?: string | null;
  /** First Name */
  firstName?: string | null;
  /** Last Name */
  lastName: string;
  /** Cell phone of contact */
  cellPhone?: string | null;
  /** Balance */
  balance?: number | null;
  /** Address of contact */
  address?: Address;
  /** Company Name */
  companyName?: string | null;
  /** Header Message */
  headerMessage?: string | null;
  /** Contacts DOB, Format: yyyy-MM-dd */
  dateOfBirth?: string | null;
  /** Whether or not to email all transactions receipts to contact (1 or 0) */
  emailTrxReceipt: boolean;
  /** Contacts home phone */
  homePhone?: string | null;
  /** Contacts office phone */
  officePhone?: string | null;
  /** Contacts office phone extension for office phone */
  officePhoneExt?: string | null;
  /** Header Message Type */
  headerMessageType: number;
  /** Update If Exists */
  updateIfExists?: UpdateIfExistsEnum | null;
  /** Custom field 1 for api users to store custom data */
  contactC1?: string | null;
  /** Custom field 2 for api users to store custom data */
  contactC2?: string | null;
  /** Custom field 3 for api users to store custom data */
  contactC3?: string | null;
  /** Parent Id */
  parentId?: string | null;
  /** Email of contact */
  email?: string | null;
  /** Contact ID */
  id: string;
  /** Created Time Stamp */
  createdTs: number;
  /** Modified Time Stamp */
  modifiedTs: number;
  /** Active */
  active: boolean;
  /** User ID Created the register */
  createdUserId?: string | null;
  [key: string]: unknown;
}

export const childrenSchema: Schema<Children> = expandoObject({
  locationId: ['location_id', string()],
  accountNumber: ['account_number', optional(nullable(string()))],
  contactApiId: ['contact_api_id', optional(nullable(string()))],
  firstName: ['first_name', optional(nullable(string()))],
  lastName: ['last_name', string()],
  cellPhone: ['cell_phone', optional(nullable(string()))],
  balance: ['balance', optional(nullable(number()))],
  address: ['address', optional(lazy(() => addressSchema))],
  companyName: ['company_name', optional(nullable(string()))],
  headerMessage: ['header_message', optional(nullable(string()))],
  dateOfBirth: ['date_of_birth', optional(nullable(string()))],
  emailTrxReceipt: ['email_trx_receipt', boolean()],
  homePhone: ['home_phone', optional(nullable(string()))],
  officePhone: ['office_phone', optional(nullable(string()))],
  officePhoneExt: ['office_phone_ext', optional(nullable(string()))],
  headerMessageType: ['header_message_type', number()],
  updateIfExists: [
    'update_if_exists',
    optional(nullable(updateIfExistsEnumSchema)),
  ],
  contactC1: ['contact_c1', optional(nullable(string()))],
  contactC2: ['contact_c2', optional(nullable(string()))],
  contactC3: ['contact_c3', optional(nullable(string()))],
  parentId: ['parent_id', optional(nullable(string()))],
  email: ['email', optional(nullable(string()))],
  id: ['id', string()],
  createdTs: ['created_ts', number()],
  modifiedTs: ['modified_ts', number()],
  active: ['active', boolean()],
  createdUserId: ['created_user_id', optional(nullable(string()))],
});
