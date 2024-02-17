
# Location 18

## Structure

`Location18`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `modifiedTs` | `number` | Required | Modified Time Stamp |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `address` | [`Address1 \| undefined`](../../doc/models/address-1.md) | Optional | Address |
| `brandingDomainId` | `string \| null \| undefined` | Optional | GUID for Branding Domain<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactEmailTrxReceiptDefault` | `boolean \| undefined` | Optional | If true, will email contact receipt for any transaction |
| `defaultAch` | `string \| null \| undefined` | Optional | GUID for Location's default ACH Product Transaction<br>**Constraints**: *Minimum Length*: `24`, *Maximum Length*: `36` |
| `defaultCc` | `string \| null \| undefined` | Optional | GUID for Location's default CC Product Transaction<br>**Constraints**: *Minimum Length*: `24`, *Maximum Length*: `36` |
| `emailReplyTo` | `string \| null \| undefined` | Optional | Used as from email address when sending various notifications<br>**Constraints**: *Maximum Length*: `64` |
| `fax` | `string \| null \| undefined` | Optional | Fax number<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location api ID<br>**Constraints**: *Maximum Length*: `36` |
| `locationApiKey` | `string \| null \| undefined` | Optional | Location api key<br>**Constraints**: *Maximum Length*: `36` |
| `locationC1` | `string \| null \| undefined` | Optional | Can be used to store custom information for location.<br>**Constraints**: *Maximum Length*: `128` |
| `locationC2` | `string \| null \| undefined` | Optional | Can be used to store custom information for location.<br>**Constraints**: *Maximum Length*: `128` |
| `locationC3` | `string \| null \| undefined` | Optional | Can be used to store custom information for location.<br>**Constraints**: *Maximum Length*: `128` |
| `name` | `string` | Required | Name of the company<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `officePhone` | `string \| null \| undefined` | Optional | Office phone number<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |
| `officeExtPhone` | `string \| null \| undefined` | Optional | Office phone extension number<br>**Constraints**: *Maximum Length*: `10` |
| `tz` | `string \| null \| undefined` | Optional | Time zone<br>**Constraints**: *Maximum Length*: `30` |
| `parentId` | `string` | Required | Location GUID of the parent location<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `showContactNotes` | `boolean \| undefined` | Optional | If set to true will show 'Notes' tab on Contact |
| `showContactFiles` | `boolean \| undefined` | Optional | If set to true will show 'Files' tab on Contact |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationType` | [`LocationTypeEnum \| null \| undefined`](../../doc/models/location-type-enum.md) | Optional | Location Type |
| `ticketHashKey` | `string \| null \| undefined` | Optional | Ticket Hash Key<br>**Constraints**: *Maximum Length*: `36` |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "account_number": "5454545454545454",
  "branding_domain_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_email_trx_receipt_default": true,
  "default_ach": "11e608a7d515f1e093242bb2",
  "default_cc": "11e608a442a5f1e092242dda",
  "email_reply_to": "email@domain.com",
  "fax": "3339998822",
  "location_api_id": "location-111111",
  "location_api_key": "AE34BBCAADF4AE34BBCAADF4",
  "location_c1": "custom 1",
  "location_c2": "custom 2",
  "location_c3": "custom data 3",
  "name": "Sample Company Headquarters",
  "office_phone": "2481234567",
  "office_ext_phone": "1021021209",
  "tz": "America/New_York",
  "parent_id": "11e95f8ec39de8fbdb0a4f1a",
  "show_contact_notes": true,
  "show_contact_files": true,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_type": "merchant",
  "ticket_hash_key": "A5F443CADF4AE34BBCAADF4",
  "address": {
    "city": "city6",
    "state": "state2",
    "postal_code": "postal_code8",
    "country": "US",
    "street": "street6"
  }
}
```

