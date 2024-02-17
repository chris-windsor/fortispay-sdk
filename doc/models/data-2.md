
# Data 2

## Structure

`Data2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Required | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `accountNumber` | `string \| null \| undefined` | Optional | Contact Account Number<br>**Constraints**: *Maximum Length*: `32` |
| `contactApiId` | `string \| null \| undefined` | Optional | Contact API Id<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `firstName` | `string \| null \| undefined` | Optional | First Name<br>**Constraints**: *Maximum Length*: `64` |
| `lastName` | `string` | Required | Last Name<br>**Constraints**: *Maximum Length*: `64` |
| `cellPhone` | `string \| null \| undefined` | Optional | Cell phone of contact<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `balance` | `number \| null \| undefined` | Optional | Balance<br>**Constraints**: `>= -99999999.99`, `<= 99999999.99` |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Address of contact |
| `companyName` | `string \| null \| undefined` | Optional | Company Name<br>**Constraints**: *Maximum Length*: `64` |
| `headerMessage` | `string \| null \| undefined` | Optional | Header Message<br>**Constraints**: *Maximum Length*: `250` |
| `dateOfBirth` | `string \| null \| undefined` | Optional | Contacts DOB, Format: yyyy-MM-dd<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `emailTrxReceipt` | `boolean` | Required | Whether or not to email all transactions receipts to contact (1 or 0) |
| `homePhone` | `string \| null \| undefined` | Optional | Contacts home phone<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `officePhone` | `string \| null \| undefined` | Optional | Contacts office phone<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `officePhoneExt` | `string \| null \| undefined` | Optional | Contacts office phone extension for office phone<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^\d{1,10}$` |
| `headerMessageType` | `number` | Required | Header Message Type<br>**Constraints**: `>= 0`, `<= 4` |
| `updateIfExists` | [`UpdateIfExistsEnum \| null \| undefined`](../../doc/models/update-if-exists-enum.md) | Optional | Update If Exists |
| `contactC1` | `string \| null \| undefined` | Optional | Custom field 1 for api users to store custom data<br>**Constraints**: *Maximum Length*: `128` |
| `contactC2` | `string \| null \| undefined` | Optional | Custom field 2 for api users to store custom data<br>**Constraints**: *Maximum Length*: `128` |
| `contactC3` | `string \| null \| undefined` | Optional | Custom field 3 for api users to store custom data<br>**Constraints**: *Maximum Length*: `128` |
| `parentId` | `string \| null \| undefined` | Optional | Parent Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `email` | `string \| null \| undefined` | Optional | Email of contact<br>**Constraints**: *Maximum Length*: `64` |
| `id` | `string` | Required | Contact ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `modifiedTs` | `number` | Required | Modified Time Stamp |
| `active` | `boolean` | Required | Active |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `receivedEmails` | [`ReceivedEmail[] \| undefined`](../../doc/models/received-email.md) | Optional | Received Email Information on `expand` |
| `isDeletable` | `boolean \| undefined` | Optional | Is Deletable Information on `expand` |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location Information on `expand` |
| `user` | [`User1 \| undefined`](../../doc/models/user-1.md) | Optional | User Information on `expand` |
| `recurrings` | [`Recurring[] \| undefined`](../../doc/models/recurring.md) | Optional | Recurring Information on `expand` |
| `emailBlacklist` | [`EmailBlacklist \| undefined`](../../doc/models/email-blacklist.md) | Optional | Email Blacklist Information on `expand` |
| `smsBlacklist` | [`SmsBlacklist \| undefined`](../../doc/models/sms-blacklist.md) | Optional | Sms Blacklist Information on `expand` |
| `changelogs` | [`Changelog[] \| undefined`](../../doc/models/changelog.md) | Optional | Changelog Information on `expand` |
| `postbackLogs` | [`PostbackLog[] \| undefined`](../../doc/models/postback-log.md) | Optional | Postback Log Information on `expand` |
| `createdUser` | [`CreatedUser \| undefined`](../../doc/models/created-user.md) | Optional | User Information on `expand` |
| `parent` | [`Parent \| undefined`](../../doc/models/parent.md) | Optional | Parent Information on `expand` |
| `children` | [`Children \| undefined`](../../doc/models/children.md) | Optional | Children Information on `expand` |

## Example (as JSON)

```json
{
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "account_number": "54545433332",
  "contact_api_id": "137",
  "first_name": "John",
  "last_name": "Smith",
  "cell_phone": "3339998822",
  "balance": 245.36,
  "company_name": "Fortis Payment Systems, LLC",
  "header_message": "This is a sample message for you",
  "date_of_birth": "2021-12-01",
  "email_trx_receipt": true,
  "home_phone": "3339998822",
  "office_phone": "3339998822",
  "office_phone_ext": "5",
  "header_message_type": 0,
  "update_if_exists": 1,
  "contact_c1": "any",
  "contact_c2": "anything",
  "contact_c3": "something",
  "parent_id": "11e95f8ec39de8fbdb0a4f1a",
  "email": "email@domain.com",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "active": true,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "is_deletable": true
}
```

