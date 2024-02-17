
# Tip Percents

A JSON of tip percents the JSON MUST contain only these three fields: percent_1, percent_2, percent_3

## Structure

`TipPercents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `percent1` | `number \| null \| undefined` | Optional | field can only contain a value from 0 to 99, if 1 field is NULL, all fields must be null.<br>**Constraints**: `>= 0`, `<= 99` |
| `percent2` | `number \| null \| undefined` | Optional | field can only contain a value from 0 to 99, if 1 field is NULL, all fields must be null.<br>**Constraints**: `>= 0`, `<= 99` |
| `percent3` | `number \| null \| undefined` | Optional | field can only contain a value from 0 to 99, if 1 field is NULL, all fields must be null.<br>**Constraints**: `>= 0`, `<= 99` |

## Example (as JSON)

```json
{
  "percent_1": 0,
  "percent_2": 2,
  "percent_3": 99
}
```

