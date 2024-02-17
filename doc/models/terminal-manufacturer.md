
# Terminal Manufacturer

Terminal Manufacturer Information on `expand`

## Structure

`TerminalManufacturer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | Terminal Manufacturer Title<br>**Constraints**: *Maximum Length*: `32` |
| `idtype` | [`IdtypeEnum`](../../doc/models/idtype-enum.md) | Required | Terminal Manufacturer ID Type |
| `code` | `string` | Required | Terminal Manufacture Code |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| null \| undefined` | Optional | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| null \| undefined` | Optional | Last User ID that updated the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "title": "My terminal",
  "idtype": "mac",
  "code": "4",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
}
```

