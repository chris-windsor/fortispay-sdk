
# Response Quick Invoice Resend

## Structure

`ResponseQuickInvoiceResend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Resource Type<br>**Default**: `'QuickInvoiceResend'` |
| `data` | [`Data15 \| undefined`](../../doc/models/data-15.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "QuickInvoiceResend",
  "data": {
    "id": "id0",
    "email_log_id": "email_log_id2",
    "sms_log_id": "sms_log_id4",
    "success": false,
    "sms_success": false,
    "email": "email6"
  }
}
```

