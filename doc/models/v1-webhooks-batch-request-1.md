
# V1 Webhooks Batch Request 1

## Structure

`V1WebhooksBatchRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attemptInterval` | `number \| null \| undefined` | Optional | Number of seconds before another retry is submitted<br>**Default**: `300`<br>**Constraints**: `>= 300`, `<= 86400` |
| `basicAuthUsername` | `string \| null \| undefined` | Optional | The Basic authorization username for the URL, if not supplied, the postback will be submitted without Basic authorization headers<br>**Constraints**: *Maximum Length*: `512` |
| `basicAuthPassword` | `string \| null \| undefined` | Optional | The basic authorization password<br>**Constraints**: *Maximum Length*: `512` |
| `expands` | `string \| null \| undefined` | Optional | An option list of expanded data to send with base data. (i.e. set this field to “contact,account_vault” to get the contact an accountvault used to run a transaction.)<br>**Constraints**: *Maximum Length*: `512` |
| `format` | [`FormatEnum \| null \| undefined`](../../doc/models/format-enum.md) | Optional | Options include: api-default |
| `isActive` | `boolean \| undefined` | Optional | Flag to indicate whether configuration is active (in effect). |
| `locationId` | `string \| null \| undefined` | Optional | The location identifier of the resource you want to recieve postbacks from.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api ID |
| `onCreate` | `boolean \| undefined` | Optional | To receive postbacks on the creation of a resource |
| `onUpdate` | `boolean \| undefined` | Optional | To receive postbacks on the updating of a resource |
| `onDelete` | `boolean \| undefined` | Optional | To receive postbacks when the record is deleted |
| `postbackConfigId` | `string \| null \| undefined` | Optional | Postback Config ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `productTransactionId` | `string \| null \| undefined` | Optional | Required when using 'transaction' or 'transactionbatch' resource<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `resource` | [`Resource12Enum \| null \| undefined`](../../doc/models/resource-12-enum.md) | Optional | The resource you want to subscribe the postbacks to.<br>**Constraints**: *Maximum Length*: `128` |
| `numberOfAttempts` | `number \| null \| undefined` | Optional | Maximum number of attempts on failure<br>**Constraints**: `>= 1`, `<= 5` |
| `url` | `string \| null \| undefined` | Optional | The URL where the postback will be submitted<br>**Constraints**: *Maximum Length*: `512` |

## Example (as JSON)

```json
{
  "attempt_interval": 300,
  "basic_auth_username": "tester",
  "basic_auth_password": "Test@522",
  "expands": "changelogs,tags",
  "format": "api-default",
  "is_active": true,
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "on_create": true,
  "on_update": true,
  "on_delete": true,
  "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "resource": "contact",
  "number_of_attempts": 1,
  "url": "https://127.0.0.1/receiver"
}
```

