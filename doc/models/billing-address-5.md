
# Billing Address 5

Billing Address Object

## Structure

`BillingAddress5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postalCode` | `string \| null \| undefined` | Optional | The Zip or 'Postal Code' portion of the address associated with the Credit Card.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `10`, *Pattern*: `^[a-zA-Z0-9\-\s]+$` |
| `street` | `string \| null \| undefined` | Optional | The Street portion of the address associated with the Credit Card.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[\w\#\,\.\-\'\&\s\/]+$` |

## Example (as JSON)

```json
{
  "postal_code": "48375",
  "street": "street4"
}
```

