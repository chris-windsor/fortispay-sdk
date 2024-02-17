
# V1 Elements Transaction Intention Request

## Structure

`V1ElementsTransactionIntentionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`ActionEnum \| null \| undefined`](../../doc/models/action-enum.md) | Optional | The action to be performed<br>**Default**: `ActionEnum.Sale` |
| `digitalWalletsOnly` | `boolean \| undefined` | Optional | **Default**: `false` |
| `methods` | [`Method3[] \| undefined`](../../doc/models/method-3.md) | Optional | By default the system will try to offer all the availables payment methods from your account. But if you like, you can specify exactly what services you want to use.<br>**Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `amount` | [`V1ElementsTransactionIntentionRequestAmount \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-amount.md) | Optional | This is a container for any-of cases. |
| `taxAmount` | [`V1ElementsTransactionIntentionRequestTaxAmount \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-tax-amount.md) | Optional | This is a container for any-of cases.<br>**Constraints**: `>= 1`, `<= 999999999` |
| `secondaryAmount` | [`V1ElementsTransactionIntentionRequestSecondaryAmount \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-secondary-amount.md) | Optional | This is a container for any-of cases.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactId` | `string \| null \| undefined` | Optional | Contact ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `saveAccount` | [`V1ElementsTransactionIntentionRequestSaveAccount \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-save-account.md) | Optional | This is a container for any-of cases. |
| `saveAccountTitle` | [`V1ElementsTransactionIntentionRequestSaveAccountTitle \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-save-account-title.md) | Optional | This is a container for any-of cases.<br>**Constraints**: *Maximum Length*: `16` |
| `title` | [`V1ElementsTransactionIntentionRequestTitle \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-title.md) | Optional | This is a container for any-of cases.<br>**Constraints**: *Maximum Length*: `16` |
| `achSecCode` | [`AchSecCodeEnum \| null \| undefined`](../../doc/models/ach-sec-code-enum.md) | Optional | SEC code for the transaction if it's an ACH transaction<br>**Default**: `AchSecCodeEnum.WEB` |
| `bankFundedOnlyOverride` | [`V1ElementsTransactionIntentionRequestBankFundedOnlyOverride \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-bank-funded-only-override.md) | Optional | This is a container for any-of cases. |
| `allowPartialAuthorizationOverride` | [`V1ElementsTransactionIntentionRequestAllowPartialAuthorizationOverride \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-allow-partial-authorization-override.md) | Optional | This is a container for any-of cases. |
| `autoDeclineCvvOverride` | [`V1ElementsTransactionIntentionRequestAutoDeclineCvvOverride \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-auto-decline-cvv-override.md) | Optional | This is a container for any-of cases. |
| `autoDeclineStreetOverride` | [`V1ElementsTransactionIntentionRequestAutoDeclineStreetOverride \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-auto-decline-street-override.md) | Optional | This is a container for any-of cases. |
| `autoDeclineZipOverride` | [`V1ElementsTransactionIntentionRequestAutoDeclineZipOverride \| undefined`](../../doc/models/containers/v1-elements-transaction-intention-request-auto-decline-zip-override.md) | Optional | This is a container for any-of cases. |
| `message` | `string \| null \| undefined` | Optional | A custom text message that displays after the payment is processed.<br>**Constraints**: *Maximum Length*: `120` |

## Example (as JSON)

```json
{
  "action": "sale",
  "digitalWalletsOnly": false,
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "ach_sec_code": "WEB",
  "methods": [
    {
      "type": "ach",
      "product_transaction_id": "product_transaction_id4"
    }
  ],
  "amount": 246,
  "tax_amount": 50
}
```

