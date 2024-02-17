
# Response 417 Filter Channels

## Structure

`Response417filterChannels`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statusCode` | `number \| undefined` | Optional | Response code |
| `error` | `string \| undefined` | Optional | Expectation Failed |
| `message` | `string \| undefined` | Optional | Channel filters are not set for this project |

## Example (as JSON)

```json
{
  "statusCode": 417,
  "error": "Expectation Failed",
  "message": "Channel filters are not set for this project"
}
```

