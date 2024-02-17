/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

/** Product Invoice Information on `expand` */
export interface ProductInvoice {
  /** Title */
  title: string;
  /** Quote Number Format */
  quoteNumberFormat?: string | null;
  /** Quote Number Start */
  quoteNumberStart?: number | null;
  /** Quote Number Increment */
  quoteNumberIncrement?: number | null;
  /** Quote Number Current */
  quoteNumberCurrent?: number | null;
  /** Invoice Number Format */
  invoiceNumberFormat?: string | null;
  /** Invoice Number Start */
  invoiceNumberStart?: number | null;
  /** Invoice Number Increment */
  invoiceNumberIncrement?: number | null;
  /** Invoice Number Current */
  invoiceNumberCurrent?: number | null;
  /** Tax Rate */
  taxRate: number;
  /** Tax Fee */
  taxFee?: number | null;
  /** Monthly Fees */
  monthlyFee?: number | null;
  /** Per Invoice Fee */
  perInvoiceFee: number;
  /** Per Quote fee */
  perQuoteFee: number;
  /** Require Pay In Full */
  requirePayInFull: boolean;
  /** Selectable */
  selectable?: number | null;
  /** Reportable */
  reportable?: number | null;
  /** Portfolio Id */
  portfolioId?: string | null;
  /** Location ID */
  locationId: string;
  /** Product Invoice Id */
  id: string;
  /** Created Time Stamp */
  createdTs: number;
  /** Modified Time Stamp */
  modifiedTs: number;
  /** User ID Created the register */
  createdUserId?: string | null;
  /** Last User ID that updated the register */
  modifiedUserId?: string | null;
  [key: string]: unknown;
}

export const productInvoiceSchema: Schema<ProductInvoice> = expandoObject({
  title: ['title', string()],
  quoteNumberFormat: ['quote_number_format', optional(nullable(string()))],
  quoteNumberStart: ['quote_number_start', optional(nullable(number()))],
  quoteNumberIncrement: [
    'quote_number_increment',
    optional(nullable(number())),
  ],
  quoteNumberCurrent: ['quote_number_current', optional(nullable(number()))],
  invoiceNumberFormat: ['invoice_number_format', optional(nullable(string()))],
  invoiceNumberStart: ['invoice_number_start', optional(nullable(number()))],
  invoiceNumberIncrement: [
    'invoice_number_increment',
    optional(nullable(number())),
  ],
  invoiceNumberCurrent: [
    'invoice_number_current',
    optional(nullable(number())),
  ],
  taxRate: ['tax_rate', number()],
  taxFee: ['tax_fee', optional(nullable(number()))],
  monthlyFee: ['monthly_fee', optional(nullable(number()))],
  perInvoiceFee: ['per_invoice_fee', number()],
  perQuoteFee: ['per_quote_fee', number()],
  requirePayInFull: ['require_pay_in_full', boolean()],
  selectable: ['selectable', optional(nullable(number()))],
  reportable: ['reportable', optional(nullable(number()))],
  portfolioId: ['portfolio_id', optional(nullable(string()))],
  locationId: ['location_id', string()],
  id: ['id', string()],
  createdTs: ['created_ts', number()],
  modifiedTs: ['modified_ts', number()],
  createdUserId: ['created_user_id', optional(nullable(string()))],
  modifiedUserId: ['modified_user_id', optional(nullable(string()))],
});
