
# Primary Principal

The Primary Principal.

## Structure

`PrimaryPrincipal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | Signer's first name<br>**Constraints**: *Maximum Length*: `20` |
| `lastName` | `string` | Required | Signer's last name<br>**Constraints**: *Maximum Length*: `20` |
| `middleName` | `string \| null \| undefined` | Optional | Signer's middle name<br>**Constraints**: *Maximum Length*: `20` |
| `title` | `string \| null \| undefined` | Optional | Signer's title<br>**Constraints**: *Maximum Length*: `20` |
| `dateOfBirth` | `string \| null \| undefined` | Optional | Signer's date of birth<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `addressLine1` | `string \| null \| undefined` | Optional | Signer's residential address line 1<br>**Constraints**: *Maximum Length*: `100` |
| `addressLine2` | `string \| null \| undefined` | Optional | Signer's residential address line 2<br>**Constraints**: *Maximum Length*: `20` |
| `city` | `string \| null \| undefined` | Optional | Signer's city<br>**Constraints**: *Maximum Length*: `50` |
| `stateProvince` | `string \| null \| undefined` | Optional | Signer's two-digit state code<br>**Constraints**: *Maximum Length*: `2` |
| `postalCode` | `string \| null \| undefined` | Optional | Signer's postal code<br>**Constraints**: *Maximum Length*: `10` |
| `ssn` | `string \| null \| undefined` | Optional | Last four digits of the primary principal or Signer's social security number<br>**Constraints**: *Maximum Length*: `4` |
| `ownershipPercent` | `number \| null \| undefined` | Optional | Percentage of business owned by primary principal or signer<br>**Constraints**: `>= 0`, `<= 100` |
| `phoneNumber` | `string \| null \| undefined` | Optional | Signer's phone number<br>**Constraints**: *Maximum Length*: `20` |

## Example (as JSON)

```json
{
  "first_name": "Bob",
  "last_name": "Fairview",
  "middle_name": "Nathaniel",
  "title": "Dr",
  "date_of_birth": "2021-12-01",
  "address_line_1": "1354 Oak St.",
  "address_line_2": "Unit 203",
  "city": "Dover",
  "state_province": "DE",
  "postal_code": "55022",
  "ownership_percent": 100,
  "phone_number": "555-555-1234"
}
```

