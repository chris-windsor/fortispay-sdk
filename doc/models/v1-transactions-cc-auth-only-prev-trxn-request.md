
# V1 Transactions Cc Auth Only Prev Trxn Request

## Structure

`V1TransactionsCcAuthOnlyPrevTrxnRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalAmounts` | [`AdditionalAmount[] \| undefined`](../../doc/models/additional-amount.md) | Optional | Additional amounts |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Billing Address Object |
| `checkinDate` | `string \| null \| undefined` | Optional | Checkin Date - The time difference between checkin_date and checkout_date must be less than or equal to 99 days.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `checkoutDate` | `string \| null \| undefined` | Optional | Checkout Date - The time difference between checkin_date and checkout_date must be less than or equal to 99 days.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `clerkNumber` | `string \| null \| undefined` | Optional | Clerk or Employee Identifier<br>**Constraints**: *Maximum Length*: `16` |
| `contactApiId` | `string \| null \| undefined` | Optional | This can be supplied in place of contact_id if you would like to use a contact for the transaction and are using your own custom api_id's to track contacts in the system.<br>**Constraints**: *Maximum Length*: `36` |
| `contactId` | `string \| null \| undefined` | Optional | If contact_id is provided, ensure it belongs to the same location as the transaction. You cannot move transaction across locations.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `customData` | `unknown \| undefined` | Optional | A field that allows custom JSON to be entered to store extra data. |
| `customerId` | `string \| null \| undefined` | Optional | Can be used by Merchants to identify Contacts in our system by an ID from another system.<br>**Constraints**: *Maximum Length*: `64` |
| `description` | `string \| null \| undefined` | Optional | Description<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `identityVerification` | [`IdentityVerification \| undefined`](../../doc/models/identity-verification.md) | Optional | Identity Verification |
| `iiasInd` | [`IiasIndEnum \| null \| undefined`](../../doc/models/iias-ind-enum.md) | Optional | Possible values are '0', '1','2' |
| `imageFront` | `string \| null \| undefined` | Optional | A base64 encoded string for the image.  Used with Check21 ACH transactions. |
| `imageBack` | `string \| null \| undefined` | Optional | A base64 encoded string for the image.  Used with Check21 ACH transactions. |
| `installment` | `boolean \| undefined` | Optional | Flag that is allowed to be passed on card not present industries to signify the transaction is a fixed installment plan transaction. |
| `installmentNumber` | `number \| null \| undefined` | Optional | If this is a fixed installment plan and installment field is being passed as 1, then this field must have a vlue of 1-999 specifying the current installment number that is running.<br>**Constraints**: `>= 1`, `<= 999` |
| `installmentCount` | `number \| null \| undefined` | Optional | If this is a fixed installment plan and installment field is being passed as 1, then this field must have a vlue of 1-999 specifying the total number of installments on the plan. This number must be grater than or equal to installment_number.<br>**Constraints**: `>= 1`, `<= 999` |
| `locationApiId` | `string \| null \| undefined` | Optional | This can be supplied in place of location_id for the transaction if you are using your own custom api_id's for your locations.<br>**Constraints**: *Maximum Length*: `36` |
| `locationId` | `string \| null \| undefined` | Optional | A valid Location Id to associate the transaction with.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `productTransactionId` | `string \| null \| undefined` | Optional | The Product's method (cc/ach) has to match the action. If not provided, the API will use the default configured for the Location.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `advanceDeposit` | `boolean \| undefined` | Optional | Advance Deposit |
| `noShow` | `boolean \| undefined` | Optional | Used in Lodging |
| `notificationEmailAddress` | `string \| null \| undefined` | Optional | If email is supplied then receipt will be emailed |
| `orderNumber` | `string \| null \| undefined` | Optional | Required for CC transactions , if merchant's deposit account's duplicate check per batch has 'order_number' field<br>**Constraints**: *Maximum Length*: `32` |
| `poNumber` | `string \| null \| undefined` | Optional | Purchase Order number<br>**Constraints**: *Maximum Length*: `36` |
| `quickInvoiceId` | `string \| null \| undefined` | Optional | Can be used to associate a transaction to a Quick Invoice.  Quick Invoice transactions will have a value for this field automatically.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `recurring` | `boolean \| undefined` | Optional | Flag that is allowed to be passed on card not present industries to signify the transaction is an ongoing recurring transaction. Possible values to send are 0 or 1. This field must be 0 or not present if installment is sent as 1. |
| `recurringNumber` | `number \| null \| undefined` | Optional | If this is an ongoing recurring and recurring field is being passed as 1, then this field must have a vlue of 1-999 specifying the current recurring number that is running.<br>**Constraints**: `>= 1`, `<= 999` |
| `roomNum` | `string \| null \| undefined` | Optional | Used in Lodging<br>**Constraints**: *Maximum Length*: `12` |
| `roomRate` | `number \| null \| undefined` | Optional | Required if merchant industry type is lodging. |
| `saveAccount` | `boolean \| undefined` | Optional | Specifies to save account to contacts profile if account_number/track_data is present with either contact_id or contact_api_id in params. |
| `saveAccountTitle` | `string \| null \| undefined` | Optional | If saving token while running a transaction, this will be the title of the token.<br>**Constraints**: *Maximum Length*: `16` |
| `subtotalAmount` | `number \| null \| undefined` | Optional | This field is allowed and required for transactions that have a product where surcharge is configured. Use only integer numbers, so $10.99 will be 1099.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `surchargeAmount` | `number \| null \| undefined` | Optional | This field is allowed and required for transactions that have a product where surcharge is configured. Use only integer numbers, so $10.99 will be 1099.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `tags` | `string[] \| null \| undefined` | Optional | Tags |
| `tax` | `number \| null \| undefined` | Optional | Amount of Sales tax - If supplied, this amount should be included in the total transaction_amount field. Use only integer numbers, so $10.99 will be 1099.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `tipAmount` | `number \| null \| undefined` | Optional | Optional tip amount. Tip is not supported for lodging and ecommerce merchants. Use only integer numbers, so $10.99 will be 1099.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `transactionAmount` | `number \| null \| undefined` | Optional | Amount of the transaction. This should always be the desired settle amount of the transaction. Use only integer numbers, so $10.99 will be 1099.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `secondaryAmount` | `number \| null \| undefined` | Optional | Retained Amount of the transaction. This should always be less than transaction amount. Use only integer numbers, so $10.99 will be 1099<br>**Constraints**: `>= 0`, `<= 999999999` |
| `transactionApiId` | `string \| null \| undefined` | Optional | See api_id page for more details<br>**Constraints**: *Maximum Length*: `64` |
| `transactionC1` | `string \| null \| undefined` | Optional | Custom field 1 for api users to store custom data<br>**Constraints**: *Maximum Length*: `128` |
| `transactionC2` | `string \| null \| undefined` | Optional | Custom field 2 for api users to store custom data<br>**Constraints**: *Maximum Length*: `128` |
| `transactionC3` | `string \| null \| undefined` | Optional | Custom field 3 for api users to store custom data<br>**Constraints**: *Maximum Length*: `128` |
| `bankFundedOnlyOverride` | `boolean \| undefined` | Optional | Bank Funded Only Override |
| `allowPartialAuthorizationOverride` | `boolean \| undefined` | Optional | Allow Partial Authorization Override |
| `autoDeclineCvvOverride` | `boolean \| undefined` | Optional | Auto Decline CVV Override |
| `autoDeclineStreetOverride` | `boolean \| undefined` | Optional | Auto Decline Street Override |
| `autoDeclineZipOverride` | `boolean \| undefined` | Optional | Auto Decline Zip Override |
| `cardholderPresent` | `boolean \| undefined` | Optional | If the cardholder is present at the point of service |
| `cardPresent` | `boolean \| undefined` | Optional | A POST only field to specify whether or not the card is present. |
| `secureAuthData` | `string \| null \| undefined` | Optional | (ECOMM) The token authentication value associated with 3D secure transactions (Such as CAVV, UCAF auth data) |
| `secureProtocolVersion` | `number \| null \| undefined` | Optional | (ECOMM)  Secure Program Protocol Version |
| `secureCollectionIndicator` | `number \| null \| undefined` | Optional | (ECOMM) Used for UCAF collection indicator or Discover Autentication type |
| `secureCrytogram` | `string \| null \| undefined` | Optional | (ECOMM) Used to supply the Digital Payment Cryptogram obtained from a Digital Secure Remote Payment (DSRP) transaction |
| `secureDirectoryServerTransactionId` | `string \| null \| undefined` | Optional | (ECOMM) Directory Server Transaction ID (Such as XID, TAVV) |
| `secureEcommUrl` | `string \| null \| undefined` | Optional | (ECOMM) This field is used to enter a merchant identifier such as the Merchant URL or reverse domain name as presented to the consumer during the checkout process for a Digital Secure Remote payment transaction |
| `terminalSerialNumber` | `string \| null \| undefined` | Optional | If transaction was processed using a terminal, this field would contain the terminal's serial number<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `threedsecure` | `boolean \| undefined` | Optional | Specifies to save account to contacts profile if account_number/track_data is present with either contact_id or contact_api_id in params. |
| `walletType` | [`WalletTypeEnum \| null \| undefined`](../../doc/models/wallet-type-enum.md) | Optional | This value provides information from where the transaction was initialized (Such as In-App provider)<br><br>> 000 - Unknown wallet type (i.e., Discover PayButton)<br>> <br>> 101 - MasterPass by MasterCard<br>> <br>> 103 - Apple Pay<br>> <br>> 216 - Google Pay<br>> <br>> 217 - Samsung Pay<br>> <br>> 327 - Merchant tokenization program |
| `previousTransactionId` | `string` | Required | previous_transaction_id is used as token to run transaction. Account details OR previous_transaction_id should be passed to run transaction.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `previousTransactionApiId` | `string \| null \| undefined` | Optional | previous_transaction_api_id is used as token to run transaction. Account details OR previous_transaction_api_id should be passed to run transaction.<br>**Constraints**: *Maximum Length*: `36` |
| `cvv` | `string \| null \| undefined` | Optional | Required for CC transactions if vt_require_cvv is true on producttransaction(Merchant Deposit Account).<br>**Constraints**: *Maximum Length*: `4` |

## Example (as JSON)

```json
{
  "checkin_date": "2021-12-01",
  "checkout_date": "2021-12-01",
  "clerk_number": "AE1234",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "custom_data": {
    "data1": "custom1",
    "data2": "custom2"
  },
  "customer_id": "customerid",
  "description": "some description",
  "iias_ind": 1,
  "image_front": "U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=",
  "image_back": "U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=",
  "installment": true,
  "installment_number": 1,
  "installment_count": 1,
  "location_api_id": "location-api-id-florida-2",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "advance_deposit": false,
  "no_show": false,
  "notification_email_address": "johnsmith@smiths.com",
  "order_number": "433659378839",
  "po_number": "555555553123",
  "quick_invoice_id": "11e95f8ec39de8fbdb0a4f1a",
  "recurring": false,
  "recurring_number": 1,
  "room_num": "303",
  "room_rate": 95,
  "save_account": false,
  "save_account_title": "John Account",
  "subtotal_amount": 599,
  "surcharge_amount": 100,
  "tax": 0,
  "tip_amount": 0,
  "transaction_amount": 0,
  "secondary_amount": 0,
  "transaction_api_id": "transaction-payment-abcd123",
  "transaction_c1": "custom-data-1",
  "transaction_c2": "custom-data-2",
  "transaction_c3": "custom-data-3",
  "bank_funded_only_override": false,
  "allow_partial_authorization_override": false,
  "auto_decline_cvv_override": false,
  "auto_decline_street_override": false,
  "auto_decline_zip_override": false,
  "secure_auth_data": "vVwL7UNHCf8W8M2LAfvRChNHN7c%3D",
  "secure_protocol_version": 2,
  "secure_crytogram": "ZVVEVDJITHpTNE9yNlNHMUh0R0E=",
  "secure_directory_server_transaction_id": "d65e93c3-35ab-41ba-b307-767bfc19eae",
  "terminal_serial_number": "1234567890",
  "threedsecure": true,
  "previous_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "additional_amounts": [
    {
      "type": "cashback",
      "amount": 6,
      "account_type": "cash_benefit",
      "currency": 154.64
    },
    {
      "type": "cashback",
      "amount": 6,
      "account_type": "cash_benefit",
      "currency": 154.64
    },
    {
      "type": "cashback",
      "amount": 6,
      "account_type": "cash_benefit",
      "currency": 154.64
    }
  ],
  "billing_address": {
    "postal_code": "postal_code0",
    "street": "street8",
    "city": "city2",
    "state": "state6",
    "phone": "phone2"
  }
}
```

