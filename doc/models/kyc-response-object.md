
# Kyc Response Object

Array of KYC response objects.

## Structure

`KycResponseObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `string` | Required | KYC object value. |
| `type` | `string` | Required | KYC oject type.<br>**Constraints**: *Maximum Length*: `32` |

## Example (as JSON)

```json
{
  "value": "KYC value.",
  "type": "KYC type"
}
```

