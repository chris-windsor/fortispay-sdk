
# V1 Tokens Ach Request

## Structure

`V1TokensAchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderName` | `string \| null \| undefined` | Optional | Account holder name<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
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
| `termsAgree` | `boolean \| undefined` | Optional | Terms agreement. |
| `termsAgreeIp` | `string \| null \| undefined` | Optional | The ip address of the client that agreed to terms. |
| `title` | `string \| null \| undefined` | Optional | Used to describe the Token for easier identification within our UI.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `joi` | [`Joi16 \| undefined`](../../doc/models/joi-16.md) | Optional | - |
| `accountType` | [`AccountType8Enum \| null \| undefined`](../../doc/models/account-type-8-enum.md) | Optional | Account type |
| `isCompany` | `boolean \| undefined` | Optional | This identifies whether the ACH account belongs to a company or individual. This can affect which SEC code is used when attempting to run a transaction.<br>**Default**: `false` |
| `routingNumber` | `string \| null \| undefined` | Optional | Required for ACH. The Routing Number for the bank account being used. |

## Example (as JSON)

```json
{
  "account_holder_name": "John Smith",
  "account_number": "545454545454545",
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
  "terms_agree": true,
  "terms_agree_ip": "192.168.0.10",
  "title": "Test CC Account",
  "account_type": "savings",
  "is_company": false,
  "routing_number": "100020200"
}
```

