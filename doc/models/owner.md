
# Owner

Array of merchant owners.

## Structure

`Owner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | Owner's first name.<br>**Constraints**: *Maximum Length*: `20` |
| `lastName` | `string` | Required | Owner's last name.<br>**Constraints**: *Maximum Length*: `20` |
| `middleName` | `string \| null \| undefined` | Optional | Owner's middle name.<br>**Constraints**: *Maximum Length*: `20` |
| `title` | `string` | Required | Owner's title.<br>**Constraints**: *Maximum Length*: `20` |
| `dateOfBirth` | `string` | Required | Owner's date of birth.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `addressLine1` | `string` | Required | Owner's street address.<br>**Constraints**: *Maximum Length*: `100` |
| `addressLine2` | `string` | Required | Line 2 of owner's address.<br>**Constraints**: *Maximum Length*: `20` |
| `city` | `string` | Required | Owner's address city.<br>**Constraints**: *Maximum Length*: `50` |
| `stateProvince` | `string` | Required | Owner's address state/province.<br>**Constraints**: *Maximum Length*: `2` |
| `postalCode` | `string` | Required | Owner's address postal code.<br>**Constraints**: *Maximum Length*: `10` |
| `countryCode` | `string` | Required | Owner's address country.<br>**Constraints**: *Maximum Length*: `2` |
| `ssn` | `string` | Required | Owner's full SSN.<br>**Constraints**: *Maximum Length*: `10` |
| `ownershipPercent` | `number` | Required | Owner's ownership percent.<br>**Constraints**: `>= 0`, `<= 100` |
| `phoneNumber` | `string` | Required | Owner's phone number.<br>**Constraints**: *Maximum Length*: `20` |
| `emailAddress` | `string` | Required | Owner's email address.<br>**Constraints**: *Maximum Length*: `100` |
| `isController` | `boolean` | Required | Flag indicating whether this owner is the control owner. Maximum of 1 owner can be marked as control.. |
| `isSigner` | `boolean` | Required | Flag indicating whether or not the owner is a signer for the business. Maximum of 1 owner can be marked as signer. |

## Example (as JSON)

```json
{
  "first_name": "James",
  "last_name": "Bond",
  "middle_name": "Tyler",
  "title": "CEO",
  "date_of_birth": "2021-12-01",
  "address_line_1": "133 S Goliad St",
  "address_line_2": "Suite 120",
  "city": "Rockwall",
  "state_province": "TX",
  "postal_code": "75429",
  "country_code": "US",
  "ssn": "000000000",
  "ownership_percent": 100,
  "phone_number": "9042142323",
  "email_address": "james@example.com",
  "is_controller": true,
  "is_signer": true
}
```

