
# V1 Recurrings Request

## Structure

`V1RecurringsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountVaultId` | `string \| undefined` | Optional | Token ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `tokenId` | `string \| undefined` | Optional | Token ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactId` | `string \| null \| undefined` | Optional | Contact ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `accountVaultApiId` | `string \| null \| undefined` | Optional | Token API ID<br>**Constraints**: *Maximum Length*: `64` |
| `tokenApiId` | `string \| null \| undefined` | Optional | Token API ID<br>**Constraints**: *Maximum Length*: `64` |
| `joi` | [`Joi \| undefined`](../../doc/models/joi.md) | Optional | - |
| `active` | `boolean \| undefined` | Optional | Active |
| `description` | `string \| null \| undefined` | Optional | Description<br>**Constraints**: *Maximum Length*: `36` |
| `endDate` | `string \| null \| undefined` | Optional | End date<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `installmentTotalCount` | `number \| null \| undefined` | Optional | Installment Total Count<br>**Constraints**: `>= 1`, `<= 999` |
| `interval` | `number` | Required | Interval<br>**Constraints**: `>= 0`, `<= 365` |
| `intervalType` | [`IntervalTypeEnum`](../../doc/models/interval-type-enum.md) | Required | Interval Type |
| `locationId` | `string` | Required | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `notificationDays` | `number \| null \| undefined` | Optional | Notification Days<br>**Constraints**: `>= 0`, `<= 365` |
| `paymentMethod` | [`PaymentMethod1Enum \| null \| undefined`](../../doc/models/payment-method-1-enum.md) | Optional | Payment Method |
| `productTransactionId` | `string \| null \| undefined` | Optional | Product Transaction ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `recurringId` | `string \| null \| undefined` | Optional | Recurring ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `recurringApiId` | `string \| null \| undefined` | Optional | Recurring Api ID<br>**Constraints**: *Maximum Length*: `64` |
| `startDate` | `string` | Required | Start date<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `status` | [`StatusEnum \| null \| undefined`](../../doc/models/status-enum.md) | Optional | Status |
| `transactionAmount` | `number` | Required | Transaction amount |
| `termsAgree` | `boolean \| undefined` | Optional | Terms Agree |
| `termsAgreeIp` | `string \| null \| undefined` | Optional | Terms Agree Ip |
| `recurringC1` | `string \| null \| undefined` | Optional | Custom field used for integrations<br>**Constraints**: *Maximum Length*: `128` |
| `recurringC2` | `string \| null \| undefined` | Optional | Custom field used for integrations<br>**Constraints**: *Maximum Length*: `128` |
| `recurringC3` | `string \| null \| undefined` | Optional | Custom field used for integrations<br>**Constraints**: *Maximum Length*: `128` |
| `sendToProcAsRecur` | `boolean \| undefined` | Optional | Send To Proc As Recur |
| `tags` | `string[] \| null \| undefined` | Optional | Tags |
| `secondaryAmount` | `number \| null \| undefined` | Optional | Retained Amount |

## Example (as JSON)

```json
{
  "account_vault_id": "11e95f8ec39de8fbdb0a4f1a",
  "token_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "account_vault_api_id": "token1234abcd",
  "token_api_id": "token1234abcd",
  "active": true,
  "description": "Description",
  "end_date": "2021-12-01",
  "installment_total_count": 20,
  "interval": 1,
  "interval_type": "d",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "notification_days": 2,
  "payment_method": "cc",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "recurring_id": "11e95f8ec39de8fbdb0a4f1a",
  "recurring_api_id": "recurring1234abcd",
  "start_date": "2021-12-01",
  "status": "active",
  "transaction_amount": 300,
  "terms_agree": true,
  "terms_agree_ip": "192.168.0.10",
  "recurring_c1": "recurring custom data 1",
  "recurring_c2": "recurring custom data 2",
  "recurring_c3": "recurring custom data 3",
  "send_to_proc_as_recur": true,
  "secondary_amount": 100
}
```

