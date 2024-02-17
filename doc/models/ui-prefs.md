
# Ui Prefs

Ui Prefs

## Structure

`UiPrefs`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entryPage` | `string \| null \| undefined` | Optional | Ui Prefs Entry Page |
| `pageSize` | `number \| null \| undefined` | Optional | Ui Prefs Page Size<br>**Constraints**: `>= 0`, `<= 99` |
| `reportExportType` | [`ReportExportTypeEnum \| null \| undefined`](../../doc/models/report-export-type-enum.md) | Optional | Ui Prefs Export Type |
| `processMethod` | [`ProcessMethodEnum \| null \| undefined`](../../doc/models/process-method-enum.md) | Optional | Ui Prefs Process Method |
| `defaultTerminal` | `string \| null \| undefined` | Optional | Ui Prefs Default Termianl<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "entry_page": "dashboard",
  "page_size": 2,
  "report_export_type": "csv",
  "process_method": "virtual_terminal",
  "default_terminal": "11e95f8ec39de8fbdb0a4f1a"
}
```

