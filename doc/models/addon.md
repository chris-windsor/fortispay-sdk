
# Addon

## Structure

`Addon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | Title<br>**Constraints**: *Maximum Length*: `24` |
| `secret` | `string` | Required | Secret<br>**Constraints**: *Maximum Length*: `36` |
| `iframeUrl` | `string` | Required | Iframe URL<br>**Constraints**: *Maximum Length*: `512` |
| `locationSetupUrl` | `string \| null \| undefined` | Optional | Location Setup URL<br>**Constraints**: *Maximum Length*: `512` |
| `userSetupUrl` | `string \| null \| undefined` | Optional | User Setup URL<br>**Constraints**: *Maximum Length*: `512` |
| `encryptUrlParams` | `boolean \| undefined` | Optional | Encrypt URL Params |

## Example (as JSON)

```json
{
  "title": " ",
  "secret": " ",
  "iframe_url": " ",
  "encrypt_url_params": true,
  "location_setup_url": "location_setup_url0",
  "user_setup_url": "user_setup_url6"
}
```

