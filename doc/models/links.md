
# Links

Pagination page links

## Structure

`Links`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Object type<br>**Default**: `'Links'` |
| `first` | `string` | Required | Link to the first page |
| `previous` | `string` | Required | Link to the previous page |
| `last` | `string` | Required | Link to the last page |

## Example (as JSON)

```json
{
  "type": "Links",
  "first": "/v1/endpoint?page[size]=10&page[number]=1",
  "previous": "/v1/endpoint?page[size]=10&page[number]=5",
  "last": "/v1/endpoint?page[size]=10&page[number]=42"
}
```

