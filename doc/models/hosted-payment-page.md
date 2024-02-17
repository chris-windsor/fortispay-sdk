
# Hosted Payment Page

Hosted Payment Page Information on `expand`

## Structure

`HostedPaymentPage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| null \| undefined` | Optional | User ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api Id |
| `productTransactionId` | `string` | Required | Product Transaction ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `title` | `string` | Required | Title<br>**Constraints**: *Maximum Length*: `64` |
| `redirectUrlDelay` | `number \| null \| undefined` | Optional | Redirect Url Delay<br>**Default**: `15`<br>**Constraints**: `<= 15` |
| `minPaymentAmount` | `number \| null \| undefined` | Optional | Min Payment Amount<br>**Constraints**: `>= 0` |
| `maxPaymentAmount` | `bigint \| null \| undefined` | Optional | Max Payment Amount<br>**Default**: `9999999999`<br>**Constraints**: `<= 9999999999` |
| `redirectUrlOnApprove` | `string \| null \| undefined` | Optional | Redirect Url On Approval |
| `redirectUrlOnDecline` | `string \| null \| undefined` | Optional | Redirect Url On Decline |
| `fieldConfiguration` | [`FieldConfiguration`](../../doc/models/field-configuration.md) | Required | field_configuration |
| `encryptionKey` | `string \| null \| undefined` | Optional | Encryption Key<br>**Constraints**: *Minimum Length*: `32`, *Maximum Length*: `32` |
| `stylesheetUrl` | `string \| null \| undefined` | Optional | Stylesheet Url |
| `parentSendMessage` | `boolean \| undefined` | Optional | Parent Send Message |
| `hideOptionalFields` | `boolean \| undefined` | Optional | Hide Optional Fields |
| `id` | `string` | Required | Hosted Payment Page Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `modifiedTs` | `number` | Required | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | System generated id for user who created record<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| null \| undefined` | Optional | System generated id for user who created record<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "user_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "title": "Sample title",
  "redirect_url_delay": 15.0,
  "min_payment_amount": 0,
  "max_payment_amount": 9999999999,
  "field_configuration": {
    "css_mini": true,
    "stack": "vertical",
    "body": {
      "settings": {
        "enabled": true,
        "columns": 1,
        "rows": 1
      },
      "fields": [
        {
          "id": "transaction_amount",
          "label": "Header",
          "field_type": "heading",
          "position": [
            "1",
            "0",
            "1",
            "1"
          ],
          "required": true,
          "readonly": true,
          "visible": true
        }
      ]
    },
    "footer": {
      "settings": {
        "enabled": true,
        "columns": 1,
        "rows": 1
      },
      "fields": [
        {
          "id": "transaction_amount",
          "label": "Header",
          "field_type": "heading",
          "position": [
            "1",
            "0",
            "1",
            "1"
          ],
          "required": true,
          "readonly": true,
          "visible": true
        }
      ]
    },
    "header": {
      "settings": {
        "enabled": false,
        "columns": 202.28,
        "rows": 235.78
      },
      "fields": [
        {
          "id": "id8",
          "label": "label8",
          "field_type": "field_type4",
          "position": [
            "position7",
            "position8",
            "position9"
          ],
          "required": false,
          "readonly": false,
          "visible": false,
          "value": "value0"
        }
      ]
    }
  },
  "parent_send_message": true,
  "hide_optional_fields": true,
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_api_id": "location_api_id2"
}
```

