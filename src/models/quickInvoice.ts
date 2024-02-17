/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { ItemList, itemListSchema } from './itemList';
import { StatusCode12Enum, statusCode12EnumSchema } from './statusCode12Enum';
import { StatusIdEnum, statusIdEnumSchema } from './statusIdEnum';

/** Quick Invoice Information on `expand` */
export interface QuickInvoice {
  /** Location ID */
  locationId?: string | null;
  /** Title */
  title: string;
  /** Transaction ID */
  ccProductTransactionId?: string | null;
  /** ACH Product Transaction Id */
  achProductTransactionId?: string | null;
  /** Due Date, Format: Y-m-d */
  dueDate: string;
  /** Item List */
  itemList: ItemList[];
  /** Allow Overpayment. */
  allowOverpayment?: boolean;
  /** Bank Funded Only override */
  bankFundedOnlyOverride?: boolean | null;
  /** Email */
  email?: string | null;
  /** Contact ID */
  contactId?: string | null;
  /** Contact API Id */
  contactApiId?: string | null;
  /** Quick Invoice API Id */
  quickInvoiceApiId?: string | null;
  /** Customer Id */
  customerId?: string | null;
  /** Expire Date. */
  expireDate?: string | null;
  /** Allow partial pay */
  allowPartialPay?: boolean;
  /** Attach Files to Email */
  attachFilesToEmail?: boolean;
  /** Send Email */
  sendEmail?: boolean;
  /** Invoice number */
  invoiceNumber?: string | null;
  /** Item Header */
  itemHeader?: string | null;
  /** Item footer */
  itemFooter?: string | null;
  /** Amount Due */
  amountDue?: number | null;
  /** Notification email */
  notificationEmail?: string | null;
  /** (DEPRECATED) Status Id */
  statusId?: StatusIdEnum | null;
  /** Status Code */
  statusCode?: StatusCode12Enum | null;
  /** Note */
  note?: string | null;
  /** Notification days before due date */
  notificationDaysBeforeDueDate?: number | null;
  /** Notification days after due date */
  notificationDaysAfterDueDate?: number | null;
  /** Notification on due date */
  notificationOnDueDate?: boolean;
  /** Send Text To Pay */
  sendTextToPay?: boolean;
  /** Files */
  files?: unknown[];
  /** Remaining Balance */
  remainingBalance?: number | null;
  /** Single Payment Min Amount */
  singlePaymentMinAmount?: number | null;
  /** Single Payment Max Amount */
  singlePaymentMaxAmount?: number | null;
  /** Cell Phone */
  cellPhone?: string | null;
  /** Tags */
  tags?: string[] | null;
  /** Quick Invoice ID */
  id: string;
  /** Created Time Stamp */
  createdTs: number;
  /** Modified Time Stamp */
  modifiedTs: number;
  /** Created User Id */
  createdUserId?: string | null;
  /** Modified User Id */
  modifiedUserId?: string | null;
  /** Active status */
  active?: boolean;
  /** Payment Status Id */
  paymentStatusId?: number | null;
  /** Register is active */
  isActive?: boolean;
  [key: string]: unknown;
}

export const quickInvoiceSchema: Schema<QuickInvoice> = expandoObject({
  locationId: ['location_id', optional(nullable(string()))],
  title: ['title', string()],
  ccProductTransactionId: [
    'cc_product_transaction_id',
    optional(nullable(string())),
  ],
  achProductTransactionId: [
    'ach_product_transaction_id',
    optional(nullable(string())),
  ],
  dueDate: ['due_date', string()],
  itemList: ['item_list', array(lazy(() => itemListSchema))],
  allowOverpayment: ['allow_overpayment', optional(boolean())],
  bankFundedOnlyOverride: [
    'bank_funded_only_override',
    optional(nullable(boolean())),
  ],
  email: ['email', optional(nullable(string()))],
  contactId: ['contact_id', optional(nullable(string()))],
  contactApiId: ['contact_api_id', optional(nullable(string()))],
  quickInvoiceApiId: ['quick_invoice_api_id', optional(nullable(string()))],
  customerId: ['customer_id', optional(nullable(string()))],
  expireDate: ['expire_date', optional(nullable(string()))],
  allowPartialPay: ['allow_partial_pay', optional(boolean())],
  attachFilesToEmail: ['attach_files_to_email', optional(boolean())],
  sendEmail: ['send_email', optional(boolean())],
  invoiceNumber: ['invoice_number', optional(nullable(string()))],
  itemHeader: ['item_header', optional(nullable(string()))],
  itemFooter: ['item_footer', optional(nullable(string()))],
  amountDue: ['amount_due', optional(nullable(number()))],
  notificationEmail: ['notification_email', optional(nullable(string()))],
  statusId: ['status_id', optional(nullable(statusIdEnumSchema))],
  statusCode: ['status_code', optional(nullable(statusCode12EnumSchema))],
  note: ['note', optional(nullable(string()))],
  notificationDaysBeforeDueDate: [
    'notification_days_before_due_date',
    optional(nullable(number())),
  ],
  notificationDaysAfterDueDate: [
    'notification_days_after_due_date',
    optional(nullable(number())),
  ],
  notificationOnDueDate: ['notification_on_due_date', optional(boolean())],
  sendTextToPay: ['send_text_to_pay', optional(boolean())],
  files: ['files', optional(array(unknown()))],
  remainingBalance: ['remaining_balance', optional(nullable(number()))],
  singlePaymentMinAmount: [
    'single_payment_min_amount',
    optional(nullable(number())),
  ],
  singlePaymentMaxAmount: [
    'single_payment_max_amount',
    optional(nullable(number())),
  ],
  cellPhone: ['cell_phone', optional(nullable(string()))],
  tags: ['tags', optional(nullable(array(string())))],
  id: ['id', string()],
  createdTs: ['created_ts', number()],
  modifiedTs: ['modified_ts', number()],
  createdUserId: ['created_user_id', optional(nullable(string()))],
  modifiedUserId: ['modified_user_id', optional(nullable(string()))],
  active: ['active', optional(boolean())],
  paymentStatusId: ['payment_status_id', optional(nullable(number()))],
  isActive: ['is_active', optional(boolean())],
});
