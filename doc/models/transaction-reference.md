
# Transaction Reference

## Structure

`TransactionReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `transactionId` | `string \| null \| undefined` | Optional | Transaction ID |
| `previousTransactionId` | `string \| null \| undefined` | Optional | Previous Transaction ID |
| `transactionAmount` | `number \| null \| undefined` | Optional | Transaction Amount |
| `previousTransactionAmount` | `number \| null \| undefined` | Optional | Previous Transaction Amount |
| `previousTransactionCreatedTs` | `number \| null \| undefined` | Optional | Previous Transaction Created Timestamp |
| `referenceType` | `string \| null \| undefined` | Optional | Reference Type |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "transaction_id": "transaction_id2",
  "previous_transaction_id": "previous_transaction_id8",
  "transaction_amount": 188,
  "previous_transaction_amount": 176
}
```

