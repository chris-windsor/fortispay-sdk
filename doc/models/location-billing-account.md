
# Location Billing Account

## Structure

`LocationBillingAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | Title<br>**Constraints**: *Maximum Length*: `64` |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api Id |
| `achSecCode` | `string \| null \| undefined` | Optional | Ach Sec Code |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number |
| `routing` | `string \| null \| undefined` | Optional | Routing |
| `expDate` | `string \| null \| undefined` | Optional | Exp Date |
| `billingZip` | `string \| null \| undefined` | Optional | Billing Zip<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `10`, *Pattern*: `^[a-zA-Z0-9\-\s]+$` |
| `accountType` | `string \| null \| undefined` | Optional | Account Type |
| `accountHolderName` | `string \| null \| undefined` | Optional | Account Holder Name |
| `id` | `string` | Required | Location Billing Account Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `modifiedTs` | `number` | Required | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | Created User Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| null \| undefined` | Optional | Modified User Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `billingDescriptor` | `string \| null \| undefined` | Optional | Billing Descriptor |
| `paymentMethod` | `string \| null \| undefined` | Optional | Billing Descriptor |
| `portfolioId` | `string` | Required | Portfolio Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "title": "Billing Acccount Title",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "exp_date": "0722",
  "billing_zip": "48375",
  "account_holder_name": "John Smith",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "portfolio_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_api_id": "location_api_id4",
  "ach_sec_code": "ach_sec_code6",
  "account_number": "account_number4",
  "routing": "routing0"
}
```

