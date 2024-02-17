
# User

User

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `username` | `string \| null \| undefined` | Optional | Username |
| `firstName` | `string \| null \| undefined` | Optional | First Name |
| `lastName` | `string \| null \| undefined` | Optional | Last Name |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "username": "email@domain.com",
  "first_name": "Bob",
  "last_name": "Fairview"
}
```

