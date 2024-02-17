
# Data 20

## Structure

`Data20`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderName` | `string \| null \| undefined` | Optional | Account holder name<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `expDate` | `string` | Required | The Expiration Date for the credit card. |
| `cvv` | `string \| null \| undefined` | Optional | CVV<br>**Constraints**: *Maximum Length*: `4` |
| `accountNumber` | `string` | Required | Account number<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19`, *Pattern*: `^[\d]+$` |
| `billingAddress` | [`BillingAddress5 \| undefined`](../../doc/models/billing-address-5.md) | Optional | Billing Address Object |
| `contactId` | `string \| null \| undefined` | Optional | Used to associate the Ticket with a Contact.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactApiId` | `string \| null \| undefined` | Optional | Used to associate the Ticket with a Contact. |
| `locationId` | [`Data20LocationId \| undefined`](../../doc/models/containers/data-20-location-id.md) | Optional | This is a container for any-of cases. |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api Id |
| `id` | `string` | Required | A unique, system-generated identifier for the Ticket.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "account_holder_name": "John Smith",
  "exp_date": "0722",
  "account_number": "545454545454545",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "cvv": "cvv4",
  "billing_address": {
    "postal_code": "postal_code0",
    "street": "street8"
  },
  "contact_api_id": "contact_api_id8"
}
```

