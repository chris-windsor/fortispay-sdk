
# V1 Users Request 1

## Structure

`V1UsersRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `brandingDomainUrl` | `string \| null \| undefined` | Optional | Branding Domain Url<br>**Constraints**: *Maximum Length*: `64` |
| `cellPhone` | `string \| null \| undefined` | Optional | Cell Phone<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `companyName` | `string \| null \| undefined` | Optional | Company Name<br>**Constraints**: *Maximum Length*: `64` |
| `contactId` | `string \| null \| undefined` | Optional | Contact<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `dateOfBirth` | `string \| null \| undefined` | Optional | Date Of Birth<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `domainId` | `string \| null \| undefined` | Optional | Domain<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `email` | `string \| null \| undefined` | Optional | Email<br>**Constraints**: *Maximum Length*: `128` |
| `emailTrxReceipt` | `boolean \| undefined` | Optional | Email Trx Receipt |
| `homePhone` | `string \| null \| undefined` | Optional | Home Phone<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `firstName` | `string \| null \| undefined` | Optional | First Name<br>**Constraints**: *Maximum Length*: `64` |
| `lastName` | `string \| null \| undefined` | Optional | Last Name<br>**Constraints**: *Maximum Length*: `64` |
| `locale` | `string \| null \| undefined` | Optional | Locale<br>**Constraints**: *Maximum Length*: `8` |
| `officePhone` | `string \| null \| undefined` | Optional | Office Phone<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^\d{10}$` |
| `officeExtPhone` | `string \| null \| undefined` | Optional | Office Ext Phone<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^\d{1,10}$` |
| `primaryLocationId` | `string \| null \| undefined` | Optional | Primary Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `requiresNewPassword` | `string \| null \| undefined` | Optional | Requires New Password<br>**Constraints**: *Maximum Length*: `1` |
| `termsConditionCode` | `string \| null \| undefined` | Optional | Terms Condition (This field is required when updating your own password). |
| `tz` | `string \| null \| undefined` | Optional | Time zone<br>**Constraints**: *Maximum Length*: `30` |
| `uiPrefs` | [`UiPrefs \| undefined`](../../doc/models/ui-prefs.md) | Optional | Ui Prefs |
| `username` | `string \| null \| undefined` | Optional | Username<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `64` |
| `userApiKey` | `string \| null \| undefined` | Optional | User Api Key<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `64` |
| `userHashKey` | `string \| null \| undefined` | Optional | User Hash Key<br>**Constraints**: *Minimum Length*: `24`, *Maximum Length*: `36` |
| `userTypeCode` | [`UserTypeCodeEnum \| null \| undefined`](../../doc/models/user-type-code-enum.md) | Optional | User Type |
| `password` | `string \| null \| undefined` | Optional | Password<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `128`, *Pattern*: `^(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\\|,.<>\/?~])(?=.*[0-9])(?=.*[a-zA-Z]).*$` |
| `zip` | `string \| null \| undefined` | Optional | Zip<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `10`, *Pattern*: `^[a-zA-Z0-9\-\s]+$` |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactApiId` | `string \| null \| undefined` | Optional | ContactApi Id |
| `primaryLocationApiId` | `string \| null \| undefined` | Optional | Primary LocationApi ID |
| `statusCode` | [`StatusCodeEnum \| null \| undefined`](../../doc/models/status-code-enum.md) | Optional | Status Code |
| `apiOnly` | `boolean \| undefined` | Optional | API Only |
| `isInvitation` | `boolean \| undefined` | Optional | Is Invitation |
| `address` | [`Address2 \| undefined`](../../doc/models/address-2.md) | Optional | Address |

## Example (as JSON)

```json
{
  "account_number": "5454545454545454",
  "branding_domain_url": "{branding_domain_url}",
  "cell_phone": "3339998822",
  "company_name": "Fortis Payment Systems, LLC",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "date_of_birth": "2021-12-01",
  "domain_id": "11e95f8ec39de8fbdb0a4f1a",
  "email": "email@domain.com",
  "email_trx_receipt": true,
  "home_phone": "3339998822",
  "first_name": "John",
  "last_name": "Smith",
  "locale": "en-US",
  "office_phone": "3339998822",
  "office_ext_phone": "5",
  "primary_location_id": "11e95f8ec39de8fbdb0a4f1a",
  "terms_condition_code": "20220308",
  "tz": "America/New_York",
  "username": "{user_name}",
  "user_api_key": "234bas8dfn8238f923w2",
  "user_type_code": 100,
  "zip": "48375",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "status_code": 1,
  "api_only": false,
  "is_invitation": false
}
```

