
# Sort

Sort information used on the results

## Structure

`Sort`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Object type<br>**Default**: `'Sorting'` |
| `fields` | [`Field[]`](../../doc/models/field.md) | Required | [object Object] |

## Example (as JSON)

```json
{
  "type": "Sorting",
  "fields": [
    {
      "field": "last_name",
      "order": "asc"
    }
  ]
}
```

