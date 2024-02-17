
# Branding Domain

Branding Domain Information on `expand`

## Structure

`BrandingDomain`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | URL<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}$` |
| `title` | `string` | Required | Domain Name<br>**Constraints**: *Maximum Length*: `64` |
| `logo` | `string \| null \| undefined` | Optional | Logo<br>**Constraints**: *Maximum Length*: `64` |
| `supportEmail` | `string \| null \| undefined` | Optional | Support Email<br>**Constraints**: *Maximum Length*: `64` |
| `allowContactSignup` | `boolean` | Required | Allow Contact Signup. |
| `allowContactRegistration` | `boolean` | Required | Allow Contact Registration. |
| `allowContactLogin` | `boolean` | Required | Allow Contact Login. |
| `registrationFields` | [`RegistrationFieldEnum[] \| undefined`](../../doc/models/registration-field-enum.md) | Optional | Registration Fields |
| `companyName` | `string \| null \| undefined` | Optional | Company Name.<br>**Constraints**: *Maximum Length*: `32` |
| `navColor` | `string \| null \| undefined` | Optional | Nav Color.<br>**Constraints**: *Maximum Length*: `7` |
| `buttonPrimaryColor` | `string \| null \| undefined` | Optional | Button Primary Color.<br>**Constraints**: *Maximum Length*: `7` |
| `logoBackgroundColor` | `string \| null \| undefined` | Optional | Logo Background Color.<br>**Constraints**: *Maximum Length*: `7` |
| `iconBackgroundColor` | `string \| null \| undefined` | Optional | Icon Background Color.<br>**Constraints**: *Maximum Length*: `7` |
| `menuTextBackgroundColor` | `string \| null \| undefined` | Optional | Menu Text Background Color<br>**Constraints**: *Maximum Length*: `7` |
| `menuTextColor` | `string \| null \| undefined` | Optional | Menu Text Color.<br>**Constraints**: *Maximum Length*: `7` |
| `rightMenuBackgroundColor` | `string \| null \| undefined` | Optional | Right Menu Background Color.<br>**Constraints**: *Maximum Length*: `7` |
| `rightMenuTextColor` | `string \| null \| undefined` | Optional | Right Menu Text Color.<br>**Constraints**: *Maximum Length*: `7` |
| `buttonPrimaryTextColor` | `string \| null \| undefined` | Optional | Button Primary Text Color.<br>**Constraints**: *Maximum Length*: `7` |
| `navLogo` | `string \| null \| undefined` | Optional | Nav Logo.<br>**Constraints**: *Maximum Length*: `256` |
| `favIcon` | `string \| null \| undefined` | Optional | Fav Icon.<br>**Constraints**: *Maximum Length*: `256` |
| `aesKey` | `string \| null \| undefined` | Optional | Aes Key.<br>**Constraints**: *Maximum Length*: `255` |
| `helpText` | `string \| null \| undefined` | Optional | Help Text. |
| `emailReplyTo` | `string \| null \| undefined` | Optional | Email Reply To. |
| `email` | `string \| null \| undefined` | Optional | Email. |
| `customJavascript` | `string \| null \| undefined` | Optional | Custom Javascript.<br>**Constraints**: *Maximum Length*: `2048`, *Pattern*: `^<script\b[^>]*>([\s\S]*?)<\/script>$` |
| `customTheme` | `string \| null \| undefined` | Optional | Custom Theme<br>**Constraints**: *Maximum Length*: `48` |
| `customCss` | `string \| null \| undefined` | Optional | Custom CSS<br>**Constraints**: *Maximum Length*: `2048` |
| `contactUserDefaultEntryPage` | [`ContactUserDefaultEntryPageEnum \| null \| undefined`](../../doc/models/contact-user-default-entry-page-enum.md) | Optional | Contact User Default Entry Page |
| `contactUserDefaultAuthRoles` | `unknown[] \| undefined` | Optional | Contact User Default Auth Role |
| `id` | `string` | Required | Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number` | Required | Created Time Stamp |
| `modifiedTs` | `number` | Required | Modified Time Stamp |

## Example (as JSON)

```json
{
  "url": "fortispayrbyn9y.sandbox.zeamster.com",
  "title": "Test Brand Domain Title 2",
  "support_email": "email@domain.com",
  "allow_contact_signup": true,
  "allow_contact_registration": true,
  "allow_contact_login": true,
  "registration_fields": [
    "id",
    "email"
  ],
  "email_reply_to": "email@domain.com",
  "email": "email@domain.com",
  "contact_user_default_entry_page": "dashboard",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "logo": "logo6",
  "company_name": "company_name6",
  "nav_color": "nav_color2"
}
```

