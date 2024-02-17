
# Terminal Application

Terminal Application Information on `expand`

## Structure

`TerminalApplication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `standalone` | `boolean` | Required | Standalone |
| `emvCapable` | `boolean` | Required | Emv Capable |
| `nfcCapable` | `boolean` | Required | Nfc Capable |
| `pinCapable` | `boolean` | Required | Pin Capable |
| `printCapable` | `boolean` | Required | Print Capable |
| `msrCapable` | `boolean` | Required | Msr Capable |
| `sigCaptureCapable` | `boolean` | Required | Sig Capture Capable |
| `mposTerminal` | `boolean` | Required | Mpos Terminal |
| `title` | `string \| null \| undefined` | Optional | Title<br>**Constraints**: *Maximum Length*: `48` |
| `description` | `string \| null \| undefined` | Optional | Description<br>**Constraints**: *Maximum Length*: `256` |
| `id` | `string` | Required | Terminal Application Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| null \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| null \| undefined` | Optional | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "standalone": true,
  "emv_capable": true,
  "nfc_capable": false,
  "pin_capable": true,
  "print_capable": false,
  "msr_capable": true,
  "sig_capture_capable": false,
  "mpos_terminal": false,
  "title": "Ingenico Link2500",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "description": "description6"
}
```

