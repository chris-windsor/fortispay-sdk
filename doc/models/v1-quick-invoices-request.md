
# V1 Quick Invoices Request

## Structure

`V1QuickInvoicesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `title` | `string` | Required | Title<br>**Constraints**: *Maximum Length*: `64` |
| `ccProductTransactionId` | `string \| null \| undefined` | Optional | Transaction ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `achProductTransactionId` | `string \| null \| undefined` | Optional | ACH Product Transaction Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `dueDate` | `string` | Required | Due Date, Format: Y-m-d<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `itemList` | [`ItemList[]`](../../doc/models/item-list.md) | Required | Item List<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `99`, *Unique Items Required* |
| `allowOverpayment` | `boolean \| undefined` | Optional | Allow Overpayment. |
| `bankFundedOnlyOverride` | `boolean \| null \| undefined` | Optional | Bank Funded Only override |
| `email` | `string \| null \| undefined` | Optional | Email<br>**Constraints**: *Maximum Length*: `128` |
| `contactId` | `string \| null \| undefined` | Optional | Contact ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactApiId` | `string \| null \| undefined` | Optional | Contact API Id<br>**Constraints**: *Maximum Length*: `64` |
| `quickInvoiceApiId` | `string \| null \| undefined` | Optional | Quick Invoice API Id<br>**Constraints**: *Maximum Length*: `64` |
| `customerId` | `string \| null \| undefined` | Optional | Customer Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `expireDate` | `string \| null \| undefined` | Optional | Expire Date.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `allowPartialPay` | `boolean \| undefined` | Optional | Allow partial pay |
| `attachFilesToEmail` | `boolean \| undefined` | Optional | Attach Files to Email |
| `sendEmail` | `boolean \| undefined` | Optional | Send Email |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice number<br>**Constraints**: *Maximum Length*: `64` |
| `itemHeader` | `string \| null \| undefined` | Optional | Item Header<br>**Constraints**: *Maximum Length*: `250` |
| `itemFooter` | `string \| null \| undefined` | Optional | Item footer<br>**Constraints**: *Maximum Length*: `250` |
| `amountDue` | `number \| null \| undefined` | Optional | Amount Due |
| `notificationEmail` | `string \| null \| undefined` | Optional | Notification email<br>**Constraints**: *Maximum Length*: `640` |
| `statusId` | `number \| null \| undefined` | Optional | (DEPRECATED) Status Id<br>**Constraints**: `>= 0`, `<= 1` |
| `statusCode` | `number \| null \| undefined` | Optional | Status Code<br>**Constraints**: `>= 0`, `<= 1` |
| `note` | `string \| null \| undefined` | Optional | Note<br>**Constraints**: *Maximum Length*: `200` |
| `notificationDaysBeforeDueDate` | `number \| null \| undefined` | Optional | Notification days before due date<br>**Constraints**: `>= 0`, `<= 60` |
| `notificationDaysAfterDueDate` | `number \| null \| undefined` | Optional | Notification days after due date<br>**Constraints**: `>= 0`, `<= 60` |
| `notificationOnDueDate` | `boolean \| undefined` | Optional | Notification on due date |
| `sendTextToPay` | `boolean \| undefined` | Optional | Send Text To Pay |
| `files` | `unknown[] \| undefined` | Optional | Files |
| `remainingBalance` | `number \| null \| undefined` | Optional | Remaining Balance<br>**Constraints**: `>= 0`, `<= 999999999` |
| `singlePaymentMinAmount` | `number \| null \| undefined` | Optional | Single Payment Min Amount |
| `singlePaymentMaxAmount` | `number \| null \| undefined` | Optional | Single Payment Max Amount<br>**Default**: `999999999` |
| `cellPhone` | `string \| null \| undefined` | Optional | Cell Phone<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `tags` | `string[] \| null \| undefined` | Optional | Tags |

## Example (as JSON)

```json
{
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "title": "My terminal",
  "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "due_date": "2021-12-01",
  "item_list": [
    {
      "name": "Bread",
      "amount": 2015
    }
  ],
  "allow_overpayment": true,
  "bank_funded_only_override": true,
  "email": "email@domain.com",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_api_id": "contact12345",
  "quick_invoice_api_id": "quickinvoice12345",
  "customer_id": "11e95f8ec39de8fbdb0a4f1a",
  "expire_date": "2021-12-01",
  "allow_partial_pay": true,
  "attach_files_to_email": true,
  "send_email": true,
  "invoice_number": "invoice12345",
  "item_header": "Quick invoice header sample",
  "item_footer": "Thank you",
  "amount_due": 24536,
  "notification_email": "email@domain.com",
  "status_id": 1,
  "status_code": 1,
  "note": "some note",
  "notification_days_before_due_date": 3,
  "notification_days_after_due_date": 7,
  "notification_on_due_date": true,
  "send_text_to_pay": true,
  "remaining_balance": 24536,
  "single_payment_min_amount": 500,
  "single_payment_max_amount": 500000,
  "cell_phone": "3339998822"
}
```

