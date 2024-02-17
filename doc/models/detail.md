
# Detail

## Structure

`Detail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | - |
| `path` | `string[] \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `context` | [`Context \| undefined`](../../doc/models/context.md) | Optional | - |

## Example (as JSON)

```json
{
  "message": "\"fieldName\" is required",
  "type": "any.required",
  "path": [
    "path8",
    "path9"
  ],
  "context": {
    "key": "key2",
    "label": "label2"
  }
}
```

