
# Transaction Batch

Transaction Batch Information on `expand`

## Structure

`TransactionBatch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Batch ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `productTransactionId` | `string \| null \| undefined` | Optional | Product Transaction Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `processingStatusId` | `number` | Required | Processing Status Id<br>**Constraints**: `>= 1`, `<= 5` |
| `batchNum` | `number \| null \| undefined` | Optional | Batch Number |
| `isOpen` | `number \| null \| undefined` | Optional | Is Open<br>**Constraints**: `>= 0`, `<= 1` |
| `settlementFileName` | `string \| null \| undefined` | Optional | Settlement File Name |
| `batchCloseTs` | `number \| null \| undefined` | Optional | Batch Close Ts |
| `batchCloseDetail` | `string \| null \| undefined` | Optional | Batch Close Detail |
| `totalSaleAmount` | `number \| null \| undefined` | Optional | Total Sale Amount |
| `totalSaleCount` | `number \| null \| undefined` | Optional | Total Sale Count |
| `totalRefundAmount` | `number \| null \| undefined` | Optional | Total Refund Amount |
| `totalRefundCount` | `number \| null \| undefined` | Optional | Total Refund Count |
| `totalVoidAmount` | `number \| null \| undefined` | Optional | Total Void Amount |
| `totalVoidCount` | `number \| null \| undefined` | Optional | Total Void Count |
| `totalBlindRefundAmount` | `number \| null \| undefined` | Optional | Total Blind Refund Amount |
| `totalBlindRefundCount` | `number \| null \| undefined` | Optional | Total Blind Refund Count |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "processing_status_id": 2,
  "batch_num": 4,
  "is_open": 0.0,
  "settlement_file_name": "settement_file.txt",
  "batch_close_ts": 1531423693.0,
  "batch_close_detail": "BATCH_MISMATCH",
  "total_sale_amount": 2342,
  "total_sale_count": 21,
  "total_refund_amount": 2342,
  "total_refund_count": 18,
  "total_void_amount": 2342,
  "total_void_count": 17,
  "total_blind_refund_amount": 2342,
  "total_blind_refund_count": 16
}
```

