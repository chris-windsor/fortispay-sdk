
# Resources

Resource Information on `expand`

## Structure

`Resources`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | Resource Title<br>**Constraints**: *Maximum Length*: `64` |
| `priv` | `string \| null \| undefined` | Optional | Priv<br>**Constraints**: *Maximum Length*: `64` |
| `resourceName` | `string` | Required | Resource Name<br>**Constraints**: *Maximum Length*: `64` |
| `id` | `number` | Required | Resource ID |
| `lastUsedDate` | `number \| null \| undefined` | Optional | Last Used Date |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| null \| undefined` | Optional | Modified Time Stamp |

## Example (as JSON)

```json
{
  "title": "My terminal",
  "resource_name": "v2.addons.iframe.get",
  "id": 5693,
  "last_used_date": 1422040992,
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "priv": "priv0"
}
```

