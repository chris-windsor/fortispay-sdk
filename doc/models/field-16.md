
# Field 16

## Structure

`Field16`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | id |
| `label` | `string` | Required | Label |
| `fieldType` | `string` | Required | Field Type |
| `position` | `string[]` | Required | Position<br>**Constraints**: *Minimum Items*: `1` |
| `required` | `boolean \| undefined` | Optional | Required |
| `readonly` | `boolean \| undefined` | Optional | Read Only |
| `visible` | `boolean \| undefined` | Optional | Visible |
| `value` | `string \| null \| undefined` | Optional | Value |

## Example (as JSON)

```json
{
  "id": "transaction_amount",
  "label": "Header",
  "field_type": "heading",
  "position": [
    "1",
    "0",
    "1",
    "1"
  ],
  "required": true,
  "readonly": true,
  "visible": true,
  "value": "value0"
}
```

