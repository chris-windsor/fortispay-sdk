
# Product File

## Structure

`ProductFile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | Title<br>**Constraints**: *Maximum Length*: `64` |
| `productFileCredentialId` | `string` | Required | Product File Credential Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `freeBytes` | `number \| null \| undefined` | Optional | Free Bytes |
| `byteIncrement` | `number \| null \| undefined` | Optional | Byte Increment |
| `maxFileSizeBytes` | `number \| null \| undefined` | Optional | Max File Size Bytes |
| `incrementCost` | `number \| null \| undefined` | Optional | Increment Cost |
| `monthlyFee` | `number \| null \| undefined` | Optional | Monthly Fee |
| `fileExtAllowed` | `string \| null \| undefined` | Optional | File Ext Allowed<br>**Constraints**: *Maximum Length*: `64` |
| `container` | `string \| null \| undefined` | Optional | Container<br>**Constraints**: *Maximum Length*: `128` |
| `id` | `string` | Required | Product File Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| null \| undefined` | Optional | Modified Time Stamp |
| `active` | `boolean` | Required | Active |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "title": "My terminal",
  "product_file_credential_id": "11e95f8ec39de8fbdb0a4f1a",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "active": true,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "free_bytes": 216.62,
  "byte_increment": 219.94,
  "max_file_size_bytes": 237.34,
  "increment_cost": 213.22,
  "monthly_fee": 98
}
```

