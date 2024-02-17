
# Contact

The Contact.

## Structure

`Contact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| null \| undefined` | Optional | Contact's first name.<br>**Constraints**: *Maximum Length*: `20` |
| `lastName` | `string \| null \| undefined` | Optional | Contact's last name.<br>**Constraints**: *Maximum Length*: `20` |
| `email` | `string \| null \| undefined` | Optional | Contact's email address.<br>**Constraints**: *Maximum Length*: `100` |
| `phoneNumber` | `string` | Required | Contact's phone.<br>**Constraints**: *Maximum Length*: `20` |

## Example (as JSON)

```json
{
  "first_name": "Jeffery",
  "last_name": "Todd",
  "email": "jtodd@example.com",
  "phone_number": "555-555-3456"
}
```

