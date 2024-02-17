
# Document

Array of document objects.

## Structure

`Document`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentName` | `string` | Required | Array of bank account objects.<br>**Constraints**: *Maximum Length*: `32` |
| `documentData` | `string` | Required | Base64 encoded document content. |
| `mimeType` | `string` | Required | Mime type of document.<br>**Constraints**: *Maximum Length*: `20` |

## Example (as JSON)

```json
{
  "document_name": "ImportantDoc.txt",
  "document_data": "alskj;asijia;eiom;weirj;iomj",
  "mime_type": "application/json"
}
```

