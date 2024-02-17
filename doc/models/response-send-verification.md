
# Response Send Verification

## Structure

`ResponseSendVerification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Resource Type<br>**Default**: `'SendVerification'` |
| `data` | [`Data27 \| undefined`](../../doc/models/data-27.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "SendVerification",
  "data": {
    "id": "id0",
    "user_id": "user_id8",
    "hash": "hash6",
    "created_ts": 114
  }
}
```

