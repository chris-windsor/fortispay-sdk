
# V1 Elements Ticket Intention Request

## Structure

`V1ElementsTicketIntentionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactId` | `string \| null \| undefined` | Optional | Used to associate the Ticket with a Contact.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactApiId` | `string \| null \| undefined` | Optional | Used to associate the Ticket with a Contact. |
| `locationId` | `string` | Required | A valid Location Id associated with the Contact for this Ticket<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `productTransactionId` | `string \| null \| undefined` | Optional | Include a product_transaction_id to respect it's cvv and address field settings when creating a ticket.  These settings are enforced at the ticket creation level only.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `message` | `string \| null \| undefined` | Optional | A custom text message that displays after the ticket is created.<br>**Constraints**: *Maximum Length*: `120` |

## Example (as JSON)

```json
{
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_api_id": "contact_api_id4",
  "message": "message0"
}
```

