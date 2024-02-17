
# Additional Amount

## Structure

`AdditionalAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type1Enum \| null \| undefined`](../../doc/models/type-1-enum.md) | Optional | type of the amount [4S-Healthcare(Visa and MC Only), 4U-Prescription/Rx(Visa and MC Only), 4V-Vision/Optical(Visa Only), 4W-clinic/other qualified medical(Visa Only) ,4X-Dental(Visa Only)]. |
| `amount` | `number \| null \| undefined` | Optional | The amount of additional amount. |
| `accountType` | [`AccountType1Enum \| null \| undefined`](../../doc/models/account-type-1-enum.md) | Optional | Account Type |
| `currency` | `number \| null \| undefined` | Optional | Currency Code |

## Example (as JSON)

```json
{
  "type": "cashback",
  "amount": 10,
  "account_type": "credit",
  "currency": 840.0
}
```

