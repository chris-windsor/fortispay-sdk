
# Pagination

Pagination info

## Structure

`Pagination`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Object type<br>**Default**: `'Pagination'` |
| `totalCount` | `number \| undefined` | Optional | Total records count |
| `pageCount` | `number \| undefined` | Optional | Total page count |
| `pageNumber` | `number \| undefined` | Optional | Current page |
| `pageSize` | `number \| undefined` | Optional | Page size |

## Example (as JSON)

```json
{
  "type": "Pagination",
  "total_count": 423,
  "page_count": 42,
  "page_number": 6,
  "page_size": 10
}
```

