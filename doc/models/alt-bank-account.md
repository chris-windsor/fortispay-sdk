
# Alt Bank Account

The Alternative Bank Account.

## Structure

`AltBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string \| null \| undefined` | Optional | Nine-digit Bank routing number.<br>**Constraints**: *Maximum Length*: `9` |
| `accountNumber` | `string \| null \| undefined` | Optional | Bank account number.<br>**Constraints**: *Maximum Length*: `17` |
| `accountHolderName` | `string \| null \| undefined` | Optional | Name on bank account.<br>**Constraints**: *Maximum Length*: `40` |
| `depositType` | `string \| null \| undefined` | Optional | Deposit type. |

## Example (as JSON)

```json
{
  "routing_number": "011103093",
  "account_number": "01234567890123",
  "account_holder_name": "Bob Fairview",
  "deposit_type": "fees_adjustments"
}
```

