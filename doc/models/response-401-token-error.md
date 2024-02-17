
# Response 401 Token Error

## Structure

`Response401tokenError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statusCode` | `number \| undefined` | Optional | Response code |
| `error` | `string \| undefined` | Optional | Unauthorized |
| `message` | `string \| undefined` | Optional | Invalid token |

## Example (as JSON)

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Invalid token"
}
```

