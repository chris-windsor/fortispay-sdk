
# V1 Tickets Request

## Structure

`V1TicketsRequest`

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
| `locationId` | [`V1TicketsRequestLocationId \| undefined`](../../doc/models/containers/v1-tickets-request-location-id.md) | Optional | This is a container for any-of cases. |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api Id |

## Example (as JSON)

```json
{
  "account_holder_name": "John Smith",
  "exp_date": "0722",
  "account_number": "545454545454545",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "cvv": "cvv6",
  "billing_address": {
    "postal_code": "postal_code0",
    "street": "street8"
  },
  "contact_api_id": "contact_api_id6"
}
```

