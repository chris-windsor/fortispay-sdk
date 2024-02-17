
# Product Invoice

Product Invoice Information on `expand`

## Structure

`ProductInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | Title<br>**Constraints**: *Maximum Length*: `36` |
| `quoteNumberFormat` | `string \| null \| undefined` | Optional | Quote Number Format<br>**Constraints**: *Maximum Length*: `36` |
| `quoteNumberStart` | `number \| null \| undefined` | Optional | Quote Number Start<br>**Constraints**: `>= 1`, `<= 999999999` |
| `quoteNumberIncrement` | `number \| null \| undefined` | Optional | Quote Number Increment<br>**Constraints**: `>= 1`, `<= 999999999` |
| `quoteNumberCurrent` | `number \| null \| undefined` | Optional | Quote Number Current |
| `invoiceNumberFormat` | `string \| null \| undefined` | Optional | Invoice Number Format<br>**Constraints**: *Maximum Length*: `36` |
| `invoiceNumberStart` | `number \| null \| undefined` | Optional | Invoice Number Start<br>**Constraints**: `>= 1`, `<= 999999999` |
| `invoiceNumberIncrement` | `number \| null \| undefined` | Optional | Invoice Number Increment<br>**Constraints**: `>= 1`, `<= 999999999` |
| `invoiceNumberCurrent` | `number \| null \| undefined` | Optional | Invoice Number Current |
| `taxRate` | `number` | Required | Tax Rate<br>**Constraints**: `>= 0`, `<= 99.99` |
| `taxFee` | `number \| null \| undefined` | Optional | Tax Fee<br>**Constraints**: `<= 999999999999` |
| `monthlyFee` | `number \| null \| undefined` | Optional | Monthly Fees<br>**Constraints**: `>= 0`, `<= 99999` |
| `perInvoiceFee` | `number` | Required | Per Invoice Fee<br>**Constraints**: `>= 0`, `<= 99999` |
| `perQuoteFee` | `number` | Required | Per Quote fee<br>**Constraints**: `>= 0`, `<= 99999` |
| `requirePayInFull` | `boolean` | Required | Require Pay In Full |
| `selectable` | `number \| null \| undefined` | Optional | Selectable |
| `reportable` | `number \| null \| undefined` | Optional | Reportable |
| `portfolioId` | `string \| null \| undefined` | Optional | Portfolio Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationId` | `string` | Required | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `id` | `string` | Required | Product Invoice Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `modifiedTs` | `number` | Required | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| null \| undefined` | Optional | Last User ID that updated the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "title": "Sample title",
  "quote_number_start": 1.0,
  "quote_number_increment": 1.0,
  "quote_number_current": 1.0,
  "invoice_number_start": 1,
  "invoice_number_increment": 1,
  "invoice_number_current": 1,
  "tax_rate": 0.0,
  "tax_fee": 0,
  "monthly_fee": 0,
  "per_invoice_fee": 0,
  "per_quote_fee": 0,
  "require_pay_in_full": true,
  "selectable": 1,
  "reportable": 1,
  "portfolio_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "quote_number_format": "quote_number_format6",
  "invoice_number_format": "invoice_number_format8"
}
```

