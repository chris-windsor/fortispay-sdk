
# List 15

## Structure

`List15`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderName` | `string \| null \| undefined` | Optional | Account holder name<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `accountVaultApiId` | `string \| null \| undefined` | Optional | This field can be used to correlate Tokens in our system to data within an outside software integration<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `tokenApiId` | `string \| null \| undefined` | Optional | This field can be used to correlate Tokens in our system to data within an outside software integration<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `accountvaultC1` | `string \| null \| undefined` | Optional | DEPRECATED (Use token_c1 instead)<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `accountvaultC2` | `string \| null \| undefined` | Optional | DEPRECATED (Use token_c2 instead)<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `accountvaultC3` | `string \| null \| undefined` | Optional | DEPRECATED (Use token_c3 instead)<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `tokenC1` | `string \| null \| undefined` | Optional | Custom field 1 for API users to store custom data<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `tokenC2` | `string \| null \| undefined` | Optional | Custom field 2 for API users to store custom data<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `tokenC3` | `string \| null \| undefined` | Optional | Custom field 3 for API users to store custom data<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `achSecCode` | [`AchSecCode3Enum \| null \| undefined`](../../doc/models/ach-sec-code-3-enum.md) | Optional | SEC code for the account |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Billing Address Object |
| `contactId` | `string \| null \| undefined` | Optional | Used to associate the Token with a Contact.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `customerId` | `string \| null \| undefined` | Optional | Used to store a customer identification number.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `identityVerification` | [`IdentityVerification2 \| undefined`](../../doc/models/identity-verification-2.md) | Optional | Identity verification |
| `locationId` | `string` | Required | A valid Location Id associated with the Contact for this Token<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `previousAccountVaultApiId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token api id.<br>**Constraints**: *Maximum Length*: `64` |
| `previousTokenApiId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token api id.<br>**Constraints**: *Maximum Length*: `64` |
| `previousAccountVaultId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `previousTokenId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `previousTransactionId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous transaction.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `accountNumber` | [`List15AccountNumber \| null \| undefined`](../../doc/models/containers/list-15-account-number.md) | Optional | This is a container for one-of cases.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19`, *Pattern*: `^[\d]+$` |
| `termsAgree` | `boolean \| undefined` | Optional | Terms agreement. |
| `termsAgreeIp` | `string \| null \| undefined` | Optional | The ip address of the client that agreed to terms. |
| `title` | `string \| null \| undefined` | Optional | Used to describe the Token for easier identification within our UI.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `joi` | [`Joi4 \| undefined`](../../doc/models/joi-4.md) | Optional | - |
| `id` | `string` | Required | A unique, system-generated identifier for the Token.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `accountType` | `string` | Required | Account type<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `active` | `boolean \| undefined` | Optional | Register is Active |
| `cauSummaryStatusId` | [`CauSummaryStatusIdEnum`](../../doc/models/cau-summary-status-id-enum.md) | Required | CAU Summary Status ID. |
| `createdTs` | `number` | Required | Created Time Stamp |
| `eSerialNumber` | `string \| null \| undefined` | Optional | E Serial Number<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `eTrackData` | `string \| null \| undefined` | Optional | E Track Data |
| `eFormat` | `string \| null \| undefined` | Optional | E Format |
| `eKeyedData` | `string \| null \| undefined` | Optional | E Keyed Data |
| `expiringInMonths` | `number \| null \| undefined` | Optional | Determined by API based on card exp_date. |
| `expDate` | `string \| null \| undefined` | Optional | Required for CC. The Expiration Date for the credit card. (MMYY format).<br>**Constraints**: *Maximum Length*: `4` |
| `firstSix` | `string` | Required | The first six numbers of an account number.  System will generate a value for this field automatically.<br>**Constraints**: *Maximum Length*: `6` |
| `hasRecurring` | `boolean` | Required | True indicates that this token is tied to a Recurring Payment |
| `lastFour` | `string` | Required | The last four numbers of an account number.  System will generate a value for this field automatically.<br>**Constraints**: *Maximum Length*: `4` |
| `modifiedTs` | `number` | Required | Modified Time Stamp |
| `paymentMethod` | [`PaymentMethod13Enum`](../../doc/models/payment-method-13-enum.md) | Required | Must be provided as either 'cc' or 'ach'. |
| `ticket` | `string \| null \| undefined` | Optional | A valid ticket that was created to store the token.<br>**Constraints**: *Maximum Length*: `36` |
| `trackData` | `string \| null \| undefined` | Optional | Track Data from a magnetic card swipe.<br>**Constraints**: *Maximum Length*: `256` |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `cauLastUpdatedTs` | `number \| null \| undefined` | Optional | CAU Last Updated Timestamp |
| `cardBin` | `string \| null \| undefined` | Optional | Card bin |
| `routingNumber` | `string \| null \| undefined` | Optional | Required for ACH. The Routing Number for the bank account being used. |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location Information on `expand` |
| `contact` | [`Contact1 \| undefined`](../../doc/models/contact-1.md) | Optional | Contact Information on `expand` |
| `transactions` | [`Transaction[] \| undefined`](../../doc/models/transaction.md) | Optional | Transaction Information on `expand` |
| `activeRecurrings` | [`ActiveRecurring[] \| undefined`](../../doc/models/active-recurring.md) | Optional | ActiveRecurring Information on `expand` |
| `isDeletable` | `boolean \| undefined` | Optional | Is Deletable Information on `expand` |
| `signature` | [`Signature \| undefined`](../../doc/models/signature.md) | Optional | Signature Information on `expand` |
| `createdUser` | [`CreatedUser \| undefined`](../../doc/models/created-user.md) | Optional | User Information on `expand` |
| `changelogs` | [`Changelog[] \| undefined`](../../doc/models/changelog.md) | Optional | Changelog Information on `expand` |
| `accountVaultCauLogs` | [`AccountVaultCauLog[] \| undefined`](../../doc/models/account-vault-cau-log.md) | Optional | Token Cau Log Information on `expand` |
| `accountVaultCauProductTransactions` | [`AccountVaultCauProductTransaction[] \| undefined`](../../doc/models/account-vault-cau-product-transaction.md) | Optional | Token Cau Product Transaction Information on `expand` |

## Example (as JSON)

```json
{
  "account_holder_name": "John Smith",
  "account_vault_api_id": "accountvaultabcd",
  "token_api_id": "tokenabcd",
  "accountvault_c1": "accountvault custom 1",
  "accountvault_c2": "accountvault custom 2",
  "accountvault_c3": "accountvault custom 3",
  "token_c1": "token custom 1",
  "token_c2": "token custom 2",
  "token_c3": "token custom 3",
  "ach_sec_code": "WEB",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "customer_id": "123456",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "previous_account_vault_api_id": "previousaccountvault123456",
  "previous_token_api_id": "previousaccountvault123456",
  "previous_account_vault_id": "11e95f8ec39de8fbdb0a4f1a",
  "previous_token_id": "11e95f8ec39de8fbdb0a4f1a",
  "previous_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "account_number": 545454545454545,
  "terms_agree": true,
  "terms_agree_ip": "192.168.0.10",
  "title": "Test CC Account",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "account_type": "checking",
  "active": true,
  "cau_summary_status_id": 1,
  "created_ts": 1422040992,
  "e_serial_number": "1234567890",
  "exp_date": "0722",
  "first_six": "700953",
  "has_recurring": false,
  "last_four": "3657",
  "modified_ts": 1422040992,
  "payment_method": "cc",
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "cau_last_updated_ts": 1422040992,
  "routing_number": "051904524",
  "is_deletable": true
}
```

