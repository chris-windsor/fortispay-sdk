# Full Boarding

```ts
const fullBoardingController = new FullBoardingController(client);
```

## Class Name

`FullBoardingController`


# Merchant Boarding Full

This method is used to fully board a merchant to the platform. When using this method, you must provide data for each "Required" property. See the description for each of these properties for more information about their requirement criteria.

```ts
async merchantBoardingFull(
  body: V1FullboardingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseFullboarding>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1FullboardingRequest`](../../doc/models/v1-fullboarding-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseFullboarding`](../../doc/models/response-fullboarding.md)

## Example Usage

```ts
const body: V1FullboardingRequest = {
  email: 'email@domain.com',
  dbaName: 'Discount Home Goods',
  phoneNumber: '5555551234',
  ownershipType: OwnershipTypeEnum.Llp,
  fedTaxId: '0000000000',
  averageTicket: 15,
  highTicket: 150,
  ccMonthlyVolume: 100,
  mccCode: '7629',
  businessDescription: 'Yard services.',
  swipedPercent: 0,
  keyedPercent: 0,
  ecommercePercent: 100,
  isForeignEntity: true,
  personallyGuaranteed: false,
  addresses: [
    {
      addressLine1: '121 E Main',
      city: 'Dallas',
      stateProvince: 'TX',
      postalCode: '75087',
      countryCode: 'US',
      addressType: AddressTypeEnum.Location,
      addressLine2: 'Apt 707',
    }
  ],
  owners: [
    {
      firstName: 'James',
      lastName: 'Bond',
      title: 'CEO',
      dateOfBirth: '2021-12-01',
      addressLine1: '133 S Goliad St',
      addressLine2: 'Suite 120',
      city: 'Rockwall',
      stateProvince: 'TX',
      postalCode: '75429',
      countryCode: 'US',
      ssn: '000000000',
      ownershipPercent: 100,
      phoneNumber: '9042142323',
      emailAddress: 'james@example.com',
      isController: true,
      isSigner: true,
      middleName: 'Tyler',
    }
  ],
  bankAccounts: [
    {
      accountHolderName: 'James Bond',
      routingNumber: '111111111',
      accountNumber: '1234567',
      accountType: AccountTypeEnum.Checking,
      isPrimary: true,
    }
  ],
  parentId: '11e95f8ec39de8fbdb0a4f1a',
  templateId: '1234YourTemplateCode',
  clientAppId: 'ABC123',
  legalName: 'Total Home Goods, LLP',
  website: 'http://www.example.com',
  ecMonthlyVolume: 22,
  preferredLanguage: PreferredLanguageEnum.FrCA,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await fullBoardingController.merchantBoardingFull(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "type": "Fullboarding",
  "data": {
    "parent_id": "11e95f8ec39de8fbdb0a4f1a",
    "template_id": "1234YourTemplateCode",
    "client_app_id": "ABC123",
    "email": "email@domain.com",
    "dba_name": "Discount Home Goods",
    "legal_name": "Total Home Goods, LLP",
    "website": "http://www.example.com",
    "phone_number": "5555551234",
    "ownership_type": "llp",
    "fed_tax_id": "0000000000",
    "average_ticket": 15,
    "high_ticket": 150,
    "cc_monthly_volume": 100,
    "ec_monthly_volume": 22,
    "mcc_code": "7629",
    "business_description": "Yard services.",
    "swiped_percent": 0,
    "keyed_percent": 0,
    "ecommerce_percent": 100,
    "is_foreign_entity": true,
    "personally_guaranteed": false,
    "preferred_language": "fr-CA",
    "addresses": [
      {
        "address_line_1": "121 E Main",
        "address_line_2": "Apt 707",
        "city": "Dallas",
        "state_province": "TX",
        "postal_code": "75087",
        "country_code": "US",
        "address_type": "location"
      }
    ],
    "owners": [
      {
        "first_name": "James",
        "last_name": "Bond",
        "middle_name": "Tyler",
        "title": "CEO",
        "date_of_birth": "2021-12-01",
        "address_line_1": "133 S Goliad St",
        "address_line_2": "Suite 120",
        "city": "Rockwall",
        "state_province": "TX",
        "postal_code": "75429",
        "country_code": "US",
        "ssn": "000000000",
        "ownership_percent": 100,
        "phone_number": "9042142323",
        "email_address": "james@example.com",
        "is_controller": true,
        "is_signer": true
      }
    ],
    "bank_accounts": [
      {
        "account_holder_name": "James Bond",
        "routing_number": "111111111",
        "account_number": "1234567",
        "is_primary": true,
        "account_type": "checking",
        "alt_deposit_types": [
          "fees"
        ]
      }
    ],
    "documents": [
      {
        "document_name": "ImportantDoc.txt",
        "document_data": "alskj;asijia;eiom;weirj;iomj",
        "mime_type": "application/json"
      }
    ],
    "pricing_elements": [
      {
        "item_id": 5,
        "item_value": 1.5,
        "item_term": 2,
        "item_description": "AVS fee."
      }
    ],
    "kyc_response_objects": [
      {
        "value": "KYC value.",
        "type": "KYC type"
      }
    ],
    "metadata": {},
    "result": {
      "client_app_id": "ABC123",
      "epic_app_id": "4477",
      "dba_name": "Discount Home Goods",
      "email": "jtodd@example.com"
    },
    "status": {
      "response_code": "Received"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |

