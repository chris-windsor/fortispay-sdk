
# Data 7

## Structure

`Data7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactId` | `string \| null \| undefined` | Optional | Used to associate the Ticket with a Contact.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactApiId` | `string \| null \| undefined` | Optional | Used to associate the Ticket with a Contact. |
| `locationId` | `string` | Required | A valid Location Id associated with the Contact for this Ticket<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `productTransactionId` | `string \| null \| undefined` | Optional | Include a product_transaction_id to respect it's cvv and address field settings when creating a ticket.  These settings are enforced at the ticket creation level only.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `message` | `string \| null \| undefined` | Optional | A custom text message that displays after the ticket is created.<br>**Constraints**: *Maximum Length*: `120` |
| `clientToken` | `string` | Required | A JWT to be used to create the elements.<br><br>> This is a one-time only use token.<br>> Do not store for long term use, it expires after 48 hours. |

## Example (as JSON)

```json
{
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "contact_api_id": "contact_api_id0",
  "message": "message4"
}
```

