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
import { AdditionalAmount, additionalAmountSchema } from './additionalAmount';
import { BillingAddress, billingAddressSchema } from './billingAddress';
import { EntryModeIdEnum, entryModeIdEnumSchema } from './entryModeIdEnum';
import {
  IdentityVerification,
  identityVerificationSchema,
} from './identityVerification';
import { IiasIndEnum, iiasIndEnumSchema } from './iiasIndEnum';
import { WalletTypeEnum, walletTypeEnumSchema } from './walletTypeEnum';

export interface V1TransactionsCcSaleKeyedRequest {
  /** Additional amounts */
  additionalAmounts?: AdditionalAmount[];
  /** Billing Address Object */
  billingAddress?: BillingAddress;
  /** Checkin Date - The time difference between checkin_date and checkout_date must be less than or equal to 99 days. */
  checkinDate?: string | null;
  /** Checkout Date - The time difference between checkin_date and checkout_date must be less than or equal to 99 days. */
  checkoutDate?: string | null;
  /** Clerk or Employee Identifier */
  clerkNumber?: string | null;
  /** This can be supplied in place of contact_id if you would like to use a contact for the transaction and are using your own custom api_id's to track contacts in the system. */
  contactApiId?: string | null;
  /** If contact_id is provided, ensure it belongs to the same location as the transaction. You cannot move transaction across locations. */
  contactId?: string | null;
  /** A field that allows custom JSON to be entered to store extra data. */
  customData?: unknown;
  /** Can be used by Merchants to identify Contacts in our system by an ID from another system. */
  customerId?: string | null;
  /** Description */
  description?: string | null;
  /** Identity Verification */
  identityVerification?: IdentityVerification;
  /** Possible values are '0', '1','2' */
  iiasInd?: IiasIndEnum | null;
  /** A base64 encoded string for the image.  Used with Check21 ACH transactions. */
  imageFront?: string | null;
  /** A base64 encoded string for the image.  Used with Check21 ACH transactions. */
  imageBack?: string | null;
  /** Flag that is allowed to be passed on card not present industries to signify the transaction is a fixed installment plan transaction. */
  installment?: boolean;
  /** If this is a fixed installment plan and installment field is being passed as 1, then this field must have a vlue of 1-999 specifying the current installment number that is running. */
  installmentNumber?: number | null;
  /** If this is a fixed installment plan and installment field is being passed as 1, then this field must have a vlue of 1-999 specifying the total number of installments on the plan. This number must be grater than or equal to installment_number. */
  installmentCount?: number | null;
  /** This can be supplied in place of location_id for the transaction if you are using your own custom api_id's for your locations. */
  locationApiId?: string | null;
  /** A valid Location Id to associate the transaction with. */
  locationId?: string | null;
  /** The Product's method (cc/ach) has to match the action. If not provided, the API will use the default configured for the Location. */
  productTransactionId?: string | null;
  /** Advance Deposit */
  advanceDeposit?: boolean;
  /** Used in Lodging */
  noShow?: boolean;
  /** If email is supplied then receipt will be emailed */
  notificationEmailAddress?: string | null;
  /** Required for CC transactions , if merchant's deposit account's duplicate check per batch has 'order_number' field */
  orderNumber?: string | null;
  /** Purchase Order number */
  poNumber?: string | null;
  /** Can be used to associate a transaction to a Quick Invoice.  Quick Invoice transactions will have a value for this field automatically. */
  quickInvoiceId?: string | null;
  /** Flag that is allowed to be passed on card not present industries to signify the transaction is an ongoing recurring transaction. Possible values to send are 0 or 1. This field must be 0 or not present if installment is sent as 1. */
  recurring?: boolean;
  /** If this is an ongoing recurring and recurring field is being passed as 1, then this field must have a vlue of 1-999 specifying the current recurring number that is running. */
  recurringNumber?: number | null;
  /** Used in Lodging */
  roomNum?: string | null;
  /** Required if merchant industry type is lodging. */
  roomRate?: number | null;
  /** Specifies to save account to contacts profile if account_number/track_data is present with either contact_id or contact_api_id in params. */
  saveAccount?: boolean;
  /** If saving token while running a transaction, this will be the title of the token. */
  saveAccountTitle?: string | null;
  /** This field is allowed and required for transactions that have a product where surcharge is configured. Use only integer numbers, so $10.99 will be 1099. */
  subtotalAmount?: number | null;
  /** This field is allowed and required for transactions that have a product where surcharge is configured. Use only integer numbers, so $10.99 will be 1099. */
  surchargeAmount?: number | null;
  /** Tags */
  tags?: string[] | null;
  /** Amount of Sales tax - If supplied, this amount should be included in the total transaction_amount field. Use only integer numbers, so $10.99 will be 1099. */
  tax?: number | null;
  /** Optional tip amount. Tip is not supported for lodging and ecommerce merchants. Use only integer numbers, so $10.99 will be 1099. */
  tipAmount?: number | null;
  /** Amount of the transaction. This should always be the desired settle amount of the transaction. Use only integer numbers, so $10.99 will be 1099. */
  transactionAmount: number;
  /** Retained Amount of the transaction. This should always be less than transaction amount. Use only integer numbers, so $10.99 will be 1099 */
  secondaryAmount?: number | null;
  /** See api_id page for more details */
  transactionApiId?: string | null;
  /** Custom field 1 for api users to store custom data */
  transactionC1?: string | null;
  /** Custom field 2 for api users to store custom data */
  transactionC2?: string | null;
  /** Custom field 3 for api users to store custom data */
  transactionC3?: string | null;
  /** Bank Funded Only Override */
  bankFundedOnlyOverride?: boolean;
  /** Allow Partial Authorization Override */
  allowPartialAuthorizationOverride?: boolean;
  /** Auto Decline CVV Override */
  autoDeclineCvvOverride?: boolean;
  /** Auto Decline Street Override */
  autoDeclineStreetOverride?: boolean;
  /** Auto Decline Zip Override */
  autoDeclineZipOverride?: boolean;
  /** If the cardholder is present at the point of service */
  cardholderPresent?: boolean;
  /** A POST only field to specify whether or not the card is present. */
  cardPresent?: boolean;
  /** (ECOMM) The token authentication value associated with 3D secure transactions (Such as CAVV, UCAF auth data) */
  secureAuthData?: string | null;
  /** (ECOMM)  Secure Program Protocol Version */
  secureProtocolVersion?: number | null;
  /** (ECOMM) Used for UCAF collection indicator or Discover Autentication type */
  secureCollectionIndicator?: number | null;
  /** (ECOMM) Used to supply the Digital Payment Cryptogram obtained from a Digital Secure Remote Payment (DSRP) transaction */
  secureCrytogram?: string | null;
  /** (ECOMM) Directory Server Transaction ID (Such as XID, TAVV) */
  secureDirectoryServerTransactionId?: string | null;
  /** (ECOMM) This field is used to enter a merchant identifier such as the Merchant URL or reverse domain name as presented to the consumer during the checkout process for a Digital Secure Remote payment transaction */
  secureEcommUrl?: string | null;
  /** If transaction was processed using a terminal, this field would contain the terminal's serial number */
  terminalSerialNumber?: string | null;
  /** Specifies to save account to contacts profile if account_number/track_data is present with either contact_id or contact_api_id in params. */
  threedsecure?: boolean;
  /**
   * This value provides information from where the transaction was initialized (Such as In-App provider)
   * >000 - Unknown wallet type (i.e., Discover PayButton)
   * >
   * >101 - MasterPass by MasterCard
   * >
   * >103 - Apple Pay
   * >
   * >216 - Google Pay
   * >
   * >217 - Samsung Pay
   * >
   * >327 - Merchant tokenization program
   * >
   */
  walletType?: WalletTypeEnum | null;
  /** For CC, this is the 'Name (as it appears) on Card'. For ACH, this is the 'Name on Account'. */
  accountHolderName?: string | null;
  /** For CC transactions, a credit card number. For ACH transactions, a bank account number. */
  accountNumber: string;
  /** Required for CC transactions if vt_require_cvv is true on producttransaction(Merchant Deposit Account). */
  cvv?: string | null;
  /** Entry Mode - See entry mode section for more detail */
  entryModeId?: EntryModeIdEnum | null;
  /** Required for CC. The Expiration Date for the credit card. (MMYY format). */
  expDate: string;
  /** Track Data from a magnetic card swipe. */
  trackData?: string | null;
  [key: string]: unknown;
}

export const v1TransactionsCcSaleKeyedRequestSchema: Schema<V1TransactionsCcSaleKeyedRequest> = expandoObject(
  {
    additionalAmounts: [
      'additional_amounts',
      optional(array(lazy(() => additionalAmountSchema))),
    ],
    billingAddress: [
      'billing_address',
      optional(lazy(() => billingAddressSchema)),
    ],
    checkinDate: ['checkin_date', optional(nullable(string()))],
    checkoutDate: ['checkout_date', optional(nullable(string()))],
    clerkNumber: ['clerk_number', optional(nullable(string()))],
    contactApiId: ['contact_api_id', optional(nullable(string()))],
    contactId: ['contact_id', optional(nullable(string()))],
    customData: ['custom_data', optional(unknown())],
    customerId: ['customer_id', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    identityVerification: [
      'identity_verification',
      optional(lazy(() => identityVerificationSchema)),
    ],
    iiasInd: ['iias_ind', optional(nullable(iiasIndEnumSchema))],
    imageFront: ['image_front', optional(nullable(string()))],
    imageBack: ['image_back', optional(nullable(string()))],
    installment: ['installment', optional(boolean())],
    installmentNumber: ['installment_number', optional(nullable(number()))],
    installmentCount: ['installment_count', optional(nullable(number()))],
    locationApiId: ['location_api_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    productTransactionId: [
      'product_transaction_id',
      optional(nullable(string())),
    ],
    advanceDeposit: ['advance_deposit', optional(boolean())],
    noShow: ['no_show', optional(boolean())],
    notificationEmailAddress: [
      'notification_email_address',
      optional(nullable(string())),
    ],
    orderNumber: ['order_number', optional(nullable(string()))],
    poNumber: ['po_number', optional(nullable(string()))],
    quickInvoiceId: ['quick_invoice_id', optional(nullable(string()))],
    recurring: ['recurring', optional(boolean())],
    recurringNumber: ['recurring_number', optional(nullable(number()))],
    roomNum: ['room_num', optional(nullable(string()))],
    roomRate: ['room_rate', optional(nullable(number()))],
    saveAccount: ['save_account', optional(boolean())],
    saveAccountTitle: ['save_account_title', optional(nullable(string()))],
    subtotalAmount: ['subtotal_amount', optional(nullable(number()))],
    surchargeAmount: ['surcharge_amount', optional(nullable(number()))],
    tags: ['tags', optional(nullable(array(string())))],
    tax: ['tax', optional(nullable(number()))],
    tipAmount: ['tip_amount', optional(nullable(number()))],
    transactionAmount: ['transaction_amount', number()],
    secondaryAmount: ['secondary_amount', optional(nullable(number()))],
    transactionApiId: ['transaction_api_id', optional(nullable(string()))],
    transactionC1: ['transaction_c1', optional(nullable(string()))],
    transactionC2: ['transaction_c2', optional(nullable(string()))],
    transactionC3: ['transaction_c3', optional(nullable(string()))],
    bankFundedOnlyOverride: ['bank_funded_only_override', optional(boolean())],
    allowPartialAuthorizationOverride: [
      'allow_partial_authorization_override',
      optional(boolean()),
    ],
    autoDeclineCvvOverride: ['auto_decline_cvv_override', optional(boolean())],
    autoDeclineStreetOverride: [
      'auto_decline_street_override',
      optional(boolean()),
    ],
    autoDeclineZipOverride: ['auto_decline_zip_override', optional(boolean())],
    cardholderPresent: ['cardholder_present', optional(boolean())],
    cardPresent: ['card_present', optional(boolean())],
    secureAuthData: ['secure_auth_data', optional(nullable(string()))],
    secureProtocolVersion: [
      'secure_protocol_version',
      optional(nullable(number())),
    ],
    secureCollectionIndicator: [
      'secure_collection_indicator',
      optional(nullable(number())),
    ],
    secureCrytogram: ['secure_crytogram', optional(nullable(string()))],
    secureDirectoryServerTransactionId: [
      'secure_directory_server_transaction_id',
      optional(nullable(string())),
    ],
    secureEcommUrl: ['secure_ecomm_url', optional(nullable(string()))],
    terminalSerialNumber: [
      'terminal_serial_number',
      optional(nullable(string())),
    ],
    threedsecure: ['threedsecure', optional(boolean())],
    walletType: ['wallet_type', optional(nullable(walletTypeEnumSchema))],
    accountHolderName: ['account_holder_name', optional(nullable(string()))],
    accountNumber: ['account_number', string()],
    cvv: ['cvv', optional(nullable(string()))],
    entryModeId: ['entry_mode_id', optional(nullable(entryModeIdEnumSchema))],
    expDate: ['exp_date', string()],
    trackData: ['track_data', optional(nullable(string()))],
  }
);
