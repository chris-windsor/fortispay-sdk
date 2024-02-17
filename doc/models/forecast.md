
# Forecast

Forecast Information on `expand`

## Structure

`Forecast`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `recurringId` | `string` | Required | Recurring ID |
| `recurringType` | `number \| null \| undefined` | Optional | Recurring Type |
| `amount` | `number \| null \| undefined` | Optional | Amount |
| `month` | `string \| null \| undefined` | Optional | Month |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| null \| undefined` | Optional | Modified Time Stamp |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "recurring_id": "Recurring ID",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "recurring_type": 118.0,
  "amount": 7.04,
  "month": "month2"
}
```

