
# Data 34

## Structure

`Data34`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attemptInterval` | `number \| null \| undefined` | Optional | Number of seconds before another retry is submitted<br>**Default**: `300`<br>**Constraints**: `>= 300`, `<= 86400` |
| `basicAuthUsername` | `string \| null \| undefined` | Optional | Basic Auth Username Information on `expand` |
| `basicAuthPassword` | `string \| null \| undefined` | Optional | Basic Auth Password Information on `expand` |
| `expands` | `string \| null \| undefined` | Optional | An option list of expanded data to send with base data. (i.e. set this field to “contact,account_vault” to get the contact an accountvault used to run a transaction.)<br>**Constraints**: *Maximum Length*: `512` |
| `format` | [`FormatEnum \| null \| undefined`](../../doc/models/format-enum.md) | Optional | Options include: api-default |
| `isActive` | `boolean` | Required | Flag to indicate whether configuration is active (in effect). |
| `locationId` | `string` | Required | The location identifier of the resource you want to recieve postbacks from.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api ID |
| `onCreate` | `boolean` | Required | To receive postbacks on the creation of a resource |
| `onUpdate` | `boolean` | Required | To receive postbacks on the updating of a resource |
| `onDelete` | `boolean` | Required | To receive postbacks when the record is deleted |
| `postbackConfigId` | `string \| null \| undefined` | Optional | Postback Config ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `productTransactionId` | `string \| null \| undefined` | Optional | Required when using 'transaction' or 'transactionbatch' resource<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `resource` | [`Resource12Enum`](../../doc/models/resource-12-enum.md) | Required | The resource you want to subscribe the postbacks to.<br>**Constraints**: *Maximum Length*: `128` |
| `numberOfAttempts` | `number` | Required | Maximum number of attempts on failure<br>**Constraints**: `>= 1`, `<= 5` |
| `url` | `string` | Required | The URL where the postback will be submitted<br>**Constraints**: *Maximum Length*: `512` |
| `id` | `string` | Required | Postback Config ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `postbackLogs` | [`PostbackLog[] \| undefined`](../../doc/models/postback-log.md) | Optional | Postback Log Information on `expand` |

## Example (as JSON)

```json
{
  "attempt_interval": 300,
  "basic_auth_username": "username",
  "basic_auth_password": "password",
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
  "url": "https://127.0.0.1/receiver",
  "id": "11e95f8ec39de8fbdb0a4f1a"
}
```

