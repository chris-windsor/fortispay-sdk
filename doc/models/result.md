
# Result

## Structure

`Result`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientAppId` | `string \| undefined` | Optional | Client Issues Id to track that can be used to track each submitted merchant application. This id should be generated and sent in the request payload, and will be returned in the response payload. If no id is submitted in the payload request, this field will be null in the response.<br>**Constraints**: *Maximum Length*: `50` |
| `epicAppId` | `string \| undefined` | Optional | Internal application ID returned from a successful request.<br>**Constraints**: *Maximum Length*: `10` |
| `dbaName` | `string \| undefined` | Optional | Merchant 'Doing Business As' name.<br>**Constraints**: *Maximum Length*: `100` |
| `email` | `string \| undefined` | Optional | Merchant email address.<br>**Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "client_app_id": "ABC123",
  "epic_app_id": "4477",
  "dba_name": "Discount Home Goods",
  "email": "jtodd@example.com"
}
```

