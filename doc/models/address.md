
# Address

Address of contact

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| null \| undefined` | Optional | City of contact<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[\w\#\,\.\-\'\&\s\/]+$` |
| `state` | `string \| null \| undefined` | Optional | State of contact<br>**Constraints**: *Maximum Length*: `24` |
| `postalCode` | `string \| null \| undefined` | Optional | Postal code of contact<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `10`, *Pattern*: `^[a-zA-Z0-9\-\s]+$` |
| `country` | [`CountryEnum \| null \| undefined`](../../doc/models/country-enum.md) | Optional | An alpha 2 format country code of US or CA. |
| `street` | `string \| null \| undefined` | Optional | Street of contact<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[\w\#\,\.\-\'\&\s\/]+$` |

## Example (as JSON)

```json
{
  "city": "Novi",
  "state": "Michigan",
  "postal_code": "48375",
  "country": "US",
  "street": "street8"
}
```

