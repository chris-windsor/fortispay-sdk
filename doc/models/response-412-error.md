
# Response 412 Error

## Structure

`Response412Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `statusCode` | `number \| undefined` | Optional | Response code |
| `title` | `string \| undefined` | Optional | Error description |
| `detail` | `string \| undefined` | Optional | Error details |
| `meta` | [`Meta \| undefined`](../../doc/models/meta.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "clj4ge1234004t9ptdoz34567",
  "id": "clj4ge1234004t9ptdoz34567",
  "statusCode": 412,
  "title": "Precondition Failed",
  "detail": "\"fieldName\" is required"
}
```

