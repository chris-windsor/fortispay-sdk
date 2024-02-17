
# Changelog

## Structure

`Changelog`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Change Log ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `action` | `string \| null \| undefined` | Optional | Action<br>**Constraints**: *Maximum Length*: `255` |
| `model` | `string \| null \| undefined` | Optional | Model<br>**Constraints**: *Maximum Length*: `255` |
| `modelId` | `string \| null \| undefined` | Optional | Model ID<br>**Constraints**: *Maximum Length*: `255` |
| `userId` | `string \| null \| undefined` | Optional | User ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `changelogDetails` | [`ChangelogDetail[] \| undefined`](../../doc/models/changelog-detail.md) | Optional | Change Log Details |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | User |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "action": "CREATE",
  "model": "TransactionRequest",
  "model_id": "11ec829598f0d4008be9aba4",
  "user_id": "11e95f8ec39de8fbdb0a4f1a"
}
```

