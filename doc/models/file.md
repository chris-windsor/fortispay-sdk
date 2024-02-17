
# File

## Structure

`File`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `unknown` | Required | File Object |
| `resourceId` | `string` | Required | Resource Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `resource` | [`Resource2Enum`](../../doc/models/resource-2-enum.md) | Required | Resource |
| `productFileId` | `string \| null \| undefined` | Optional | Product File Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `fileCategoryId` | `string \| null \| undefined` | Optional | File Category Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `visibilityGroupId` | `string \| null \| undefined` | Optional | Visibility Group Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `fileDescription` | `string \| null \| undefined` | Optional | File Description<br>**Constraints**: *Maximum Length*: `128` |
| `id` | `string` | Required | Resource<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `fileName` | `string \| null \| undefined` | Optional | File Name |
| `fileExtension` | `string \| null \| undefined` | Optional | File Extension<br>**Constraints**: *Maximum Length*: `4` |
| `fileSizeBytes` | `number \| null \| undefined` | Optional | File Size Bytes |
| `createdTs` | `number` | Required | Created Time Stamp |
| `modifiedTs` | `number` | Required | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "file": {
    "key1": "val1",
    "key2": "val2"
  },
  "resource_id": "resource_id6",
  "resource": "Location",
  "product_file_id": "product_file_id8",
  "file_category_id": "file_category_id6",
  "visibility_group_id": "visibility_group_id2",
  "file_description": "file_description2",
  "id": "id0",
  "file_name": "file_name8",
  "created_ts": 146,
  "modified_ts": 70
}
```

