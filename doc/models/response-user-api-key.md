
# Response User Api Key

## Structure

`ResponseUserApiKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Resource Type<br>**Default**: `'UserApiKey'` |
| `data` | [`Data28 \| undefined`](../../doc/models/data-28.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "UserApiKey",
  "data": {
    "user_api_key": "user_api_key2"
  }
}
```

