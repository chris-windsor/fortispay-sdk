
# Data 4

## Structure

`Data4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `declinedRecurringTransactionId` | `string` | Required | Declined Recurring Transaction Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `accountNumber` | `string` | Required | Account Number<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `19` |
| `accountHolderName` | `string \| null \| undefined` | Optional | Account Holder Name |
| `expDate` | `string` | Required | Exp Date<br>**Constraints**: *Maximum Length*: `4` |
| `transactionAmount` | `number` | Required | Transaction Amount<br>**Constraints**: `>= 0`, `<= 999999999` |
| `description` | `string \| undefined` | Optional | Description<br>**Constraints**: *Maximum Length*: `255` |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Billing Address Object |
| `tags` | `string[] \| null \| undefined` | Optional | Tags |
| `id` | `string \| undefined` | Optional | Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `firstSix` | `string` | Required | First Six<br>**Constraints**: *Maximum Length*: `6` |
| `lastFour` | `string` | Required | Last Four<br>**Constraints**: *Maximum Length*: `4` |
| `routing` | `string \| null \| undefined` | Optional | Routing |
| `statusId` | `number \| undefined` | Optional | Status Id |
| `reasonCodeId` | [`ReasonCodeIdEnum \| null \| undefined`](../../doc/models/reason-code-id-enum.md) | Optional | Reason Code Id |
| `typeId` | `number \| undefined` | Optional | Type Id |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `createdUserId` | `string \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "declined_recurring_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "account_number": "5454545454545454",
  "account_holder_name": "John Doe",
  "exp_date": "0722",
  "transaction_amount": 0,
  "description": "Description",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "first_six": "700953",
  "last_four": "3657",
  "reason_code_id": 1000,
  "created_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "billing_address": {
    "postal_code": "postal_code0",
    "street": "street8",
    "city": "city2",
    "state": "state6",
    "phone": "phone2"
  },
  "tags": [
    "tags5",
    "tags6"
  ]
}
```

