
# Response Transaction Intention

## Structure

`ResponseTransactionIntention`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Resource Type<br>**Default**: `'TransactionIntention'` |
| `data` | [`Data8 \| undefined`](../../doc/models/data-8.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionIntention",
  "data": {
    "action": "refund",
    "digitalWalletsOnly": false,
    "methods": [
      {
        "type": "ach",
        "product_transaction_id": "product_transaction_id4"
      }
    ],
    "amount": 158,
    "tax_amount": 62,
    "client_token": "client_token0"
  }
}
```

