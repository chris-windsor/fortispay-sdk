
# V1 Paylinks Request 1

## Structure

`V1PaylinksRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `ccProductTransactionId` | `string \| null \| undefined` | Optional | cc_product_transaction_id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `email` | `string \| null \| undefined` | Optional | Email<br>**Constraints**: *Maximum Length*: `128` |
| `amountDue` | `number \| null \| undefined` | Optional | Amount Due<br>**Constraints**: `>= 1`, `<= 999999999` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api Id |
| `contactId` | `string \| null \| undefined` | Optional | Contact Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactApiId` | `string \| null \| undefined` | Optional | Contact Api Id |
| `paylinkApiId` | `string \| null \| undefined` | Optional | Paylinke Api Id<br>**Constraints**: *Maximum Length*: `64` |
| `achProductTransactionId` | `string \| null \| undefined` | Optional | Ach Product Transaction Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `expireDate` | `string \| null \| undefined` | Optional | Expire Date<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `displayProductTransactionReceiptDetails` | `boolean \| undefined` | Optional | Display Product Transaction Receipt Details |
| `displayBillingFields` | `boolean \| undefined` | Optional | Display Billing Fields |
| `deliveryMethod` | [`DeliveryMethodEnum \| null \| undefined`](../../doc/models/delivery-method-enum.md) | Optional | Delivery Method<br><br>> 0 - Do not send<br>> <br>> 1 - Email<br>> <br>> 2 - SMS<br>> <br>> 3 - Both |
| `cellPhone` | `string \| null \| undefined` | Optional | Cell Phone<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `description` | `string \| null \| undefined` | Optional | Description<br>**Constraints**: *Maximum Length*: `64` |
| `storeToken` | `boolean \| undefined` | Optional | Store Token |
| `storeTokenTitle` | `string \| null \| undefined` | Optional | Store Token Title<br>**Constraints**: *Maximum Length*: `16` |
| `paylinkAction` | [`PaylinkActionEnum \| null \| undefined`](../../doc/models/paylink-action-enum.md) | Optional | Paylink Action |
| `bankFundedOnlyOverride` | `boolean \| undefined` | Optional | Bank Funded Only Override |
| `tags` | `string[] \| null \| undefined` | Optional | Used to apply tags to a paylink. |

## Example (as JSON)

```json
{
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "email": "email@domain.com",
  "amount_due": 1,
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "expire_date": "2021-12-01",
  "display_product_transaction_receipt_details": true,
  "display_billing_fields": true,
  "delivery_method": 0,
  "cell_phone": "3339998822",
  "description": "Description",
  "store_token": false,
  "store_token_title": "John Account",
  "bank_funded_only_override": false,
  "location_api_id": "location_api_id4"
}
```

