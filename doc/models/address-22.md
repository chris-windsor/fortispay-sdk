
# Address 22

Array of merchant addresses.

## Structure

`Address22`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string` | Required | Line 1 of address.<br>**Constraints**: *Maximum Length*: `100` |
| `addressLine2` | `string \| null \| undefined` | Optional | Line 2 of address.<br>**Constraints**: *Maximum Length*: `20` |
| `city` | `string` | Required | City of address.<br>**Constraints**: *Maximum Length*: `50` |
| `stateProvince` | `string` | Required | State or province of address.<br>**Constraints**: *Maximum Length*: `2` |
| `postalCode` | `string` | Required | Postal code of address.<br>**Constraints**: *Maximum Length*: `10` |
| `countryCode` | `string` | Required | Country of address.<br>**Constraints**: *Maximum Length*: `2` |
| `addressType` | [`AddressTypeEnum`](../../doc/models/address-type-enum.md) | Required | Address type of address.<br>**Constraints**: *Maximum Length*: `20` |

## Example (as JSON)

```json
{
  "address_line_1": "121 E Main",
  "address_line_2": "Apt 707",
  "city": "Dallas",
  "state_province": "TX",
  "postal_code": "75087",
  "country_code": "US",
  "address_type": "location"
}
```

