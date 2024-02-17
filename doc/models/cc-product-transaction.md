
# Cc Product Transaction

Cc Product Transaction Information on `expand`

## Structure

`CcProductTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processorVersion` | `string \| null \| undefined` | Optional | Processor Version |
| `industryType` | [`IndustryTypeEnum \| null \| undefined`](../../doc/models/industry-type-enum.md) | Optional | Industry Type<br>**Constraints**: *Maximum Length*: `45` |
| `title` | `string` | Required | Title<br>**Constraints**: *Maximum Length*: `64` |
| `paymentMethod` | [`PaymentMethodEnum`](../../doc/models/payment-method-enum.md) | Required | Payment method |
| `processor` | [`ProcessorEnum \| null \| undefined`](../../doc/models/processor-enum.md) | Optional | Processor |
| `mcc` | `string \| null \| undefined` | Optional | MCC<br>**Constraints**: *Maximum Length*: `4`, *Pattern*: `^\d+$` |
| `taxSurchargeConfig` | [`TaxSurchargeConfigEnum \| null \| undefined`](../../doc/models/tax-surcharge-config-enum.md) | Optional | Tax Surcharge Config<br>**Default**: `TaxSurchargeConfigEnum.Enum2` |
| `terminalId` | `string \| null \| undefined` | Optional | Terminal ID<br>**Constraints**: *Maximum Length*: `24` |
| `partner` | [`PartnerEnum \| null \| undefined`](../../doc/models/partner-enum.md) | Optional | Partner<br>**Constraints**: *Maximum Length*: `24` |
| `productAchPvStoreId` | `string \| null \| undefined` | Optional | Product Ach Pv Store ID |
| `invoiceAdjustmentTitle` | `string \| null \| undefined` | Optional | Invoice Adjustment Title |
| `locationId` | `string` | Required | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api ID |
| `billingLocationApiId` | `string \| null \| undefined` | Optional | Billing Location API ID |
| `portfolioId` | `string \| null \| undefined` | Optional | Portfolio ID |
| `portfolioValidationRule` | `string \| null \| undefined` | Optional | Product Validation Rule |
| `subProcessor` | `string \| null \| undefined` | Optional | Sub Processor<br>**Constraints**: *Maximum Length*: `48` |
| `surcharge` | `unknown \| undefined` | Optional | Surcharge |
| `processorData` | `unknown \| undefined` | Optional | - |
| `vtClerkNumber` | `boolean \| undefined` | Optional | Vt Clerk Number |
| `vtBillingPhone` | `boolean \| undefined` | Optional | Card Type JCB |
| `vtEnableTip` | `boolean \| undefined` | Optional | VT Enable Tip |
| `achAllowDebit` | `boolean \| undefined` | Optional | Ach Allow Debit |
| `achAllowCredit` | `boolean \| undefined` | Optional | Ach Allow Credit |
| `achAllowRefund` | `boolean \| undefined` | Optional | Ach Allow Refund |
| `vtCvv` | `boolean \| undefined` | Optional | VT CVV |
| `vtStreet` | `boolean \| undefined` | Optional | VT Street |
| `vtZip` | `boolean \| undefined` | Optional | VT Zip |
| `vtOrderNum` | `boolean \| undefined` | Optional | VT Order Num |
| `vtEnable` | `boolean \| undefined` | Optional | VT Enable |
| `receiptShowContactName` | `boolean \| undefined` | Optional | Receipt Show Contact Name |
| `displayAvs` | `boolean \| undefined` | Optional | Display Avs |
| `cardTypeVisa` | `boolean \| undefined` | Optional | Card Type Visa |
| `cardTypeMc` | `boolean \| undefined` | Optional | Card Type Mc |
| `cardTypeDisc` | `boolean \| undefined` | Optional | Card Type Disc |
| `cardTypeAmex` | `boolean \| undefined` | Optional | Card Type Amex |
| `cardTypeDiners` | `boolean \| undefined` | Optional | Card Type Dinners |
| `cardTypeJcb` | `boolean \| undefined` | Optional | - |
| `invoiceLocation` | `boolean \| undefined` | Optional | Invoice Location |
| `allowPartialAuthorization` | `boolean \| undefined` | Optional | Allow Partial Authorization |
| `allowRecurringPartialAuthorization` | `boolean \| undefined` | Optional | Allow Recurring Partial Authorization |
| `autoDeclineCvv` | `boolean \| undefined` | Optional | Auto Decline Cvv |
| `autoDeclineStreet` | `boolean \| undefined` | Optional | Auto Decline Street |
| `autoDeclineZip` | `boolean \| undefined` | Optional | Auto Decline ZIP |
| `splitPaymentsAllow` | `boolean \| undefined` | Optional | Split Payments Allow |
| `vtShowCustomFields` | `boolean \| undefined` | Optional | Vt Show Custom Fields |
| `receiptShowCustomFields` | `boolean \| undefined` | Optional | Receipt Show Custom Fields |
| `vtOverrideSalesTaxAllowed` | `boolean \| undefined` | Optional | Vt Override Sales Tax Allowed |
| `vtEnableSalesTax` | `boolean \| undefined` | Optional | Vt Enable Sales Tax |
| `vtRequireZip` | `boolean \| undefined` | Optional | Vt Require ZIP |
| `vtRequireStreet` | `boolean \| undefined` | Optional | Vt Require Street |
| `autoDeclineCavv` | `boolean \| undefined` | Optional | Auto Decline Cavv |
| `merchantId` | `string \| null \| undefined` | Optional | Merchant ID<br>**Constraints**: *Maximum Length*: `24` |
| `receiptHeader` | `string \| null \| undefined` | Optional | Receipt Header<br>**Constraints**: *Maximum Length*: `255` |
| `receiptFooter` | `string \| null \| undefined` | Optional | Receipt Footer<br>**Constraints**: *Maximum Length*: `255` |
| `receiptAddAccountAboveSignature` | `string \| null \| undefined` | Optional | Receipt Add Account Above Signature<br>**Constraints**: *Maximum Length*: `1032` |
| `receiptAddRecurringAboveSignature` | `string \| null \| undefined` | Optional | Receipt Add Recurring Above Signature<br>**Constraints**: *Maximum Length*: `1032` |
| `receiptVtAboveSignature` | `string \| null \| undefined` | Optional | Receipt VT Above Signature<br>**Constraints**: *Maximum Length*: `1032` |
| `defaultTransactionType` | [`DefaultTransactionTypeEnum \| null \| undefined`](../../doc/models/default-transaction-type-enum.md) | Optional | Default Transaction Type |
| `username` | `string \| null \| undefined` | Optional | Username<br>**Constraints**: *Maximum Length*: `512` |
| `password` | `string \| null \| undefined` | Optional | Passowrd<br>**Constraints**: *Maximum Length*: `512` |
| `currentBatch` | `number \| null \| undefined` | Optional | Current Batch<br>**Default**: `1`<br>**Constraints**: `>= 1`, `<= 9999` |
| `dupCheckPerBatch` | `string \| null \| undefined` | Optional | Dup Check Per Batch<br>**Constraints**: *Maximum Length*: `500` |
| `agentCode` | `string \| null \| undefined` | Optional | Agent Code<br>**Constraints**: *Maximum Length*: `16`, *Pattern*: `^[\w\-]+$` |
| `paylinkAllow` | `boolean \| undefined` | Optional | Paylink Allow |
| `quickInvoiceAllow` | `boolean \| undefined` | Optional | Quick Invoice Allow |
| `level3Allow` | `boolean \| undefined` | Optional | Level3 Allow |
| `payfacEnable` | `boolean \| undefined` | Optional | Payfac Enable |
| `salesOfficeId` | `string \| null \| undefined` | Optional | Sales Office ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `hostedPaymentPageMaxAllowed` | `number \| null \| undefined` | Optional | Hosted Payment Page Max Allowed<br>**Default**: `5`<br>**Constraints**: `>= 1`, `<= 999` |
| `hostedPaymentPageAllow` | `boolean \| undefined` | Optional | Hosted Payment Page Allow |
| `surchargeId` | `string \| null \| undefined` | Optional | Surcharge ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `level3Default` | `unknown \| undefined` | Optional | Level3 Default |
| `cauSubscribeTypeId` | [`CauSubscribeTypeIdEnum \| null \| undefined`](../../doc/models/cau-subscribe-type-id-enum.md) | Optional | Cau Subscribe Type ID |
| `cauAccountNumber` | `string \| null \| undefined` | Optional | Cau Account Number<br>**Constraints**: *Minimum Length*: `32`, *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-]+$` |
| `locationBillingAccountId` | `string \| null \| undefined` | Optional | Location Billing Account ID |
| `productBillingGroupId` | `string \| null \| undefined` | Optional | Product Billing Group ID |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `runAvsOnAccountvaultCreate` | `boolean \| undefined` | Optional | Run Avs On Accountvault Create |
| `accountvaultExpireNotificationEmailEnable` | `boolean \| undefined` | Optional | Accountvault Expire Notification Email Enable |
| `debitAllowVoid` | `boolean \| undefined` | Optional | Debit Allow Void |
| `quickInvoiceTextToPay` | `boolean \| undefined` | Optional | Quick Invoice Text To Pay |
| `authenticationCode` | `string \| null \| undefined` | Optional | Authentication Code |
| `smsEnable` | `boolean \| undefined` | Optional | SMS Enable |
| `vtShowCurrency` | `boolean \| undefined` | Optional | Vt Show Currency |
| `receiptShowCurrency` | `boolean \| undefined` | Optional | Receipt Show Currency |
| `allowBlindRefund` | `boolean \| undefined` | Optional | Allow Blind Refund |
| `vtShowCompanyName` | `boolean \| undefined` | Optional | Vt Show Company Name |
| `receiptShowCompanyName` | `boolean \| undefined` | Optional | Receipt Show Company Name |
| `bankFundedOnly` | `boolean \| undefined` | Optional | Bank Funded Only |
| `requireCvvOnKeyedCnp` | `boolean \| undefined` | Optional | Require CVV on keyed CNP |
| `requireCvvOnTokenizedCnp` | `boolean \| undefined` | Optional | Require CVV on tokenized CNP |
| `showSecondaryAmount` | `boolean \| undefined` | Optional | Show Retained Amount |
| `allowSecondaryAmount` | `boolean \| undefined` | Optional | Allow Retained Amount |
| `showGooglePay` | `boolean \| undefined` | Optional | Vt Require Street |
| `showApplePay` | `boolean \| undefined` | Optional | Vt Require Street |
| `id` | `string` | Required | User Reports ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `receiptLogo` | `string \| undefined` | Optional | Receipt Logo |
| `active` | `boolean \| undefined` | Optional | Active |
| `tz` | `string \| null \| undefined` | Optional | TZ |
| `currencyCode` | `number \| null \| undefined` | Optional | Currency Code<br>**Default**: `840` |
| `currentStan` | `number \| null \| undefined` | Optional | Current Stan<br>**Default**: `1` |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| null \| undefined` | Optional | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| null \| undefined` | Optional | Last User ID that updated the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `productTransactionApiId` | `string \| null \| undefined` | Optional | Product Transaction API ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `transactionAmountNotificationThreshold` | `number \| undefined` | Optional | Transaction Amount Notification Treshold |
| `isSecondaryAmountAllowed` | `boolean \| undefined` | Optional | Allow Retained Amount |
| `batchRiskConfig` | `unknown \| undefined` | Optional | Batch Risk Config |
| `fortisId` | `string \| null \| undefined` | Optional | - |
| `productBillingGroupCode` | `string \| null \| undefined` | Optional | Product Billing Group Code |
| `cauSubscribeTypeCode` | [`CauSubscribeTypeCodeEnum \| null \| undefined`](../../doc/models/cau-subscribe-type-code-enum.md) | Optional | Cau Subscribe Type Code |
| `merchantCode` | `string \| null \| undefined` | Optional | Merchant Code<br>**Constraints**: *Maximum Length*: `24` |

## Example (as JSON)

```json
{
  "processor_version": "1_0_0",
  "title": "My terminal",
  "payment_method": "cc",
  "processor": "zgate",
  "mcc": "1111",
  "tax_surcharge_config": 2,
  "partner": "standalone",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "vt_clerk_number": true,
  "vt_billing_phone": true,
  "vt_enable_tip": true,
  "ach_allow_debit": true,
  "ach_allow_credit": true,
  "ach_allow_refund": true,
  "vt_cvv": true,
  "vt_street": true,
  "vt_zip": true,
  "vt_order_num": true,
  "vt_enable": true,
  "receipt_show_contact_name": true,
  "display_avs": true,
  "card_type_visa": true,
  "card_type_mc": true,
  "card_type_disc": true,
  "card_type_amex": true,
  "card_type_diners": true,
  "card_type_jcb": true,
  "invoice_location": true,
  "allow_partial_authorization": true,
  "allow_recurring_partial_authorization": true,
  "auto_decline_cvv": true,
  "auto_decline_street": true,
  "auto_decline_zip": true,
  "split_payments_allow": true,
  "vt_show_custom_fields": true,
  "receipt_show_custom_fields": true,
  "vt_override_sales_tax_allowed": true,
  "vt_enable_sales_tax": true,
  "vt_require_zip": true,
  "vt_require_street": true,
  "auto_decline_cavv": true,
  "current_batch": 34,
  "paylink_allow": false,
  "quick_invoice_allow": false,
  "level3_allow": false,
  "payfac_enable": false,
  "sales_office_id": "11e95f8ec39de8fbdb0a4f1a",
  "hosted_payment_page_max_allowed": 5,
  "hosted_payment_page_allow": false,
  "surcharge_id": "11e95f8ec39de8fbdb0a4f1a",
  "level3_default": {},
  "cau_subscribe_type_id": 0,
  "location_billing_account_id": "11eb88b873980c64a21e5fd2",
  "product_billing_group_id": "nofees",
  "account_number": "12345678",
  "run_avs_on_accountvault_create": false,
  "accountvault_expire_notification_email_enable": false,
  "debit_allow_void": false,
  "quick_invoice_text_to_pay": false,
  "sms_enable": false,
  "vt_show_currency": true,
  "receipt_show_currency": false,
  "allow_blind_refund": false,
  "vt_show_company_name": false,
  "receipt_show_company_name": false,
  "bank_funded_only": false,
  "require_cvv_on_keyed_cnp": true,
  "require_cvv_on_tokenized_cnp": true,
  "show_secondary_amount": false,
  "allow_secondary_amount": false,
  "show_google_pay": true,
  "show_apple_pay": true,
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "active": true,
  "currency_code": 840,
  "current_stan": 1,
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "product_transaction_api_id": "11e95f8ec39de8fbdb0a4f1a",
  "is_secondary_amount_allowed": false,
  "fortis_id": "8149742",
  "product_billing_group_code": "nofees",
  "cau_subscribe_type_code": 0,
  "industry_type": "lodging"
}
```

