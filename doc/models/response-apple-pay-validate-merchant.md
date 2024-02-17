
# Response Apple Pay Validate Merchant

## Structure

`ResponseApplePayValidateMerchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Resource Type<br>**Default**: `'ApplePayValidateMerchant'` |
| `data` | [`Data33 \| undefined`](../../doc/models/data-33.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "ApplePayValidateMerchant",
  "data": {
    "merchantSession": "merchantSession0"
  }
}
```

