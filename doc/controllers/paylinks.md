# Paylinks

```ts
const paylinksController = new PaylinksController(client);
```

## Class Name

`PaylinksController`

## Methods

* [Create a New Paylink](../../doc/controllers/paylinks.md#create-a-new-paylink)
* [List All Paylinks](../../doc/controllers/paylinks.md#list-all-paylinks)
* [Delete Paylink](../../doc/controllers/paylinks.md#delete-paylink)
* [View Single Paylink](../../doc/controllers/paylinks.md#view-single-paylink)
* [Update Paylink](../../doc/controllers/paylinks.md#update-paylink)
* [Resend Paylink](../../doc/controllers/paylinks.md#resend-paylink)


# Create a New Paylink

```ts
async createANewPaylink(
  body: V1PaylinksRequest,
  expand?: Expand14Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponsePaylink>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1PaylinksRequest`](../../doc/models/v1-paylinks-request.md) | Body, Required | - |
| `expand` | [`Expand14Enum[] \| undefined`](../../doc/models/expand-14-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponsePaylink`](../../doc/models/response-paylink.md)

## Example Usage

```ts
const body: V1PaylinksRequest = {
  amountDue: 1,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  ccProductTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  email: 'email@domain.com',
  contactId: '11e95f8ec39de8fbdb0a4f1a',
  achProductTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  expireDate: '2021-12-01',
  displayProductTransactionReceiptDetails: true,
  displayBillingFields: true,
  deliveryMethod: DeliveryMethodEnum.Enum0,
  cellPhone: '3339998822',
  description: 'Description',
  storeToken: false,
  storeTokenTitle: 'John Account',
  bankFundedOnlyOverride: false,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paylinksController.createANewPaylink(body);
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
  "type": "Paylink",
  "data": {
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "email": "email@domain.com",
    "amount_due": 1,
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "expire_date": "2021-12-01",
    "display_product_transaction_receipt_details": true,
    "display_billing_fields": true,
    "delivery_method": 0,
    "cell_phone": "3339998822",
    "description": "Description",
    "store_token": false,
    "store_token_title": "John Account",
    "bank_funded_only_override": false,
    "tags": [
      "Tag 1"
    ],
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "status_id": true,
    "status_code": 1,
    "active": true,
    "created_ts": 1422040992,
    "modified_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
    "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# List All Paylinks

```ts
async listAllPaylinks(
  page?: Page,
  order?: Order19[],
  filterBy?: FilterBy[],
  expand?: Expand15Enum[],
  format?: Format1Enum,
  typeahead?: string,
  fields?: Field35Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponsePaylinksCollection>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | [`Page \| undefined`](../../doc/models/page.md) | Query, Optional | Use this field to specify paginate your results, by using page size and number. You can use one of the following methods:<br><br>> /endpoint?page={ "number": 1, "size": 50 }<br>> <br>> /endpoint?page[number]=1&page[size]=50 |
| `order` | [`Order19[] \| undefined`](../../doc/models/order-19.md) | Query, Optional | Criteria used in query string parameters to order results.  Most fields from the endpoint results can be used as a `key`.  Unsupported fields or operators will return a `412`.  Array objects must be valid json.<br><br>> /endpoint?order=[{ "key": "created_ts", "operator": "asc"}]<br>> <br>> /endpoint?order=[{ "key": "balance", "operator": "desc"},{ "key": "created_ts", "operator": "asc"}] |
| `filterBy` | [`FilterBy[] \| undefined`](../../doc/models/filter-by.md) | Query, Optional | Filter criteria that can be used in query string parameters.  Most fields from the endpoint results can be used as a `key`.  Unsupported fields or operators will return a `412`.<br><br>> /endpoint?filter_by=[{ "key": "first_name", "operator": "=", "value": "Fred" }]<br>> <br>> /endpoint?filter_by=[{ "key": "account_type", "operator": "=", "value": "VISA" }]<br>> <br>> /endpoint?filter_by=[{ "key": "created_ts", "operator": ">=", "value": "946702799" }, { "key": "created_ts", "operator": "<=", value: "1695061891" }]<br>> <br>> /endpoint?filter_by=[{ "key": "last_name", "operator": "IN", "value": "Williams,Brown,Allman" }] |
| `expand` | [`Expand15Enum[] \| undefined`](../../doc/models/expand-15-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `format` | [`Format1Enum \| undefined`](../../doc/models/format-1-enum.md) | Query, Optional | Reporting format, valid values: csv, tsv |
| `typeahead` | `string \| undefined` | Query, Optional | You can use any `field_name` from this endpoint results to order the list using the value provided as filter for the same `field_name`. It will be ordered using the following rules: 1) Exact match, 2) Starts with, 3) Contains. |
| `fields` | [`Field35Enum[] \| undefined`](../../doc/models/field-35-enum.md) | Query, Optional | You can use any `field_name` from this endpoint results to filter the list of fields returned on the response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponsePaylinksCollection`](../../doc/models/response-paylinks-collection.md)

## Example Usage

```ts
const page: Page = {
  number: 1,
  size: 50,
};

const order: Order19[] = [
  {
    key: 'first_name',
    operator: OperatorEnum.Asc,
  }
];

const filterBy: FilterBy[] = [
  {
    key: 'first_name',
    operator: Operator1Enum.Enum1,
    value: 'Fred',
  }
];

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paylinksController.listAllPaylinks(
  page,
  order,
  filterBy
);
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
  "type": "PaylinksCollection",
  "list": [
    {
      "location_id": "11e95f8ec39de8fbdb0a4f1a",
      "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
      "email": "email@domain.com",
      "amount_due": 1,
      "contact_id": "11e95f8ec39de8fbdb0a4f1a",
      "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
      "expire_date": "2021-12-01",
      "display_product_transaction_receipt_details": true,
      "display_billing_fields": true,
      "delivery_method": 0,
      "cell_phone": "3339998822",
      "description": "Description",
      "store_token": false,
      "store_token_title": "John Account",
      "bank_funded_only_override": false,
      "tags": [
        "Tag 1"
      ],
      "id": "11e95f8ec39de8fbdb0a4f1a",
      "status_id": true,
      "status_code": 1,
      "active": true,
      "created_ts": 1422040992,
      "modified_ts": 1422040992,
      "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
      "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
    }
  ],
  "links": {
    "type": "Links",
    "first": "/v1/endpoint?page[size]=10&page[number]=1",
    "previous": "/v1/endpoint?page[size]=10&page[number]=5",
    "last": "/v1/endpoint?page[size]=10&page[number]=42"
  },
  "pagination": {
    "type": "Pagination",
    "total_count": 423,
    "page_count": 42,
    "page_number": 6,
    "page_size": 10
  },
  "sort": {
    "type": "Sorting",
    "fields": [
      {
        "field": "last_name",
        "order": "asc"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |


# Delete Paylink

```ts
async deletePaylink(
  paylinkId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponsePaylink>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paylinkId` | `string` | Template, Required | Paylink Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponsePaylink`](../../doc/models/response-paylink.md)

## Example Usage

```ts
const paylinkId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paylinksController.deletePaylink(paylinkId);
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
  "type": "Paylink",
  "data": {
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "email": "email@domain.com",
    "amount_due": 1,
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "expire_date": "2021-12-01",
    "display_product_transaction_receipt_details": true,
    "display_billing_fields": true,
    "delivery_method": 0,
    "cell_phone": "3339998822",
    "description": "Description",
    "store_token": false,
    "store_token_title": "John Account",
    "bank_funded_only_override": false,
    "tags": [
      "Tag 1"
    ],
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "status_id": true,
    "status_code": 1,
    "active": true,
    "created_ts": 1422040992,
    "modified_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
    "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |


# View Single Paylink

```ts
async viewSinglePaylink(
  paylinkId: string,
  expand?: Expand15Enum[],
  fields?: Field35Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponsePaylink>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paylinkId` | `string` | Template, Required | Paylink Id |
| `expand` | [`Expand15Enum[] \| undefined`](../../doc/models/expand-15-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `fields` | [`Field35Enum[] \| undefined`](../../doc/models/field-35-enum.md) | Query, Optional | You can use any `field_name` from this endpoint results to filter the list of fields returned on the response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponsePaylink`](../../doc/models/response-paylink.md)

## Example Usage

```ts
const paylinkId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paylinksController.viewSinglePaylink(paylinkId);
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
  "type": "Paylink",
  "data": {
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "email": "email@domain.com",
    "amount_due": 1,
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "expire_date": "2021-12-01",
    "display_product_transaction_receipt_details": true,
    "display_billing_fields": true,
    "delivery_method": 0,
    "cell_phone": "3339998822",
    "description": "Description",
    "store_token": false,
    "store_token_title": "John Account",
    "bank_funded_only_override": false,
    "tags": [
      "Tag 1"
    ],
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "status_id": true,
    "status_code": 1,
    "active": true,
    "created_ts": 1422040992,
    "modified_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
    "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |


# Update Paylink

```ts
async updatePaylink(
  paylinkId: string,
  body: V1PaylinksRequest1,
  expand?: Expand14Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponsePaylink>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paylinkId` | `string` | Template, Required | Paylink Id |
| `body` | [`V1PaylinksRequest1`](../../doc/models/v1-paylinks-request-1.md) | Body, Required | - |
| `expand` | [`Expand14Enum[] \| undefined`](../../doc/models/expand-14-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponsePaylink`](../../doc/models/response-paylink.md)

## Example Usage

```ts
const paylinkId = '11e95f8ec39de8fbdb0a4f1a';

const body: V1PaylinksRequest1 = {
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  ccProductTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  email: 'email@domain.com',
  amountDue: 1,
  contactId: '11e95f8ec39de8fbdb0a4f1a',
  achProductTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  expireDate: '2021-12-01',
  displayProductTransactionReceiptDetails: true,
  displayBillingFields: true,
  deliveryMethod: DeliveryMethodEnum.Enum0,
  cellPhone: '3339998822',
  description: 'Description',
  storeToken: false,
  storeTokenTitle: 'John Account',
  bankFundedOnlyOverride: false,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paylinksController.updatePaylink(
  paylinkId,
  body
);
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
  "type": "Paylink",
  "data": {
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "email": "email@domain.com",
    "amount_due": 1,
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "expire_date": "2021-12-01",
    "display_product_transaction_receipt_details": true,
    "display_billing_fields": true,
    "delivery_method": 0,
    "cell_phone": "3339998822",
    "description": "Description",
    "store_token": false,
    "store_token_title": "John Account",
    "bank_funded_only_override": false,
    "tags": [
      "Tag 1"
    ],
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "status_id": true,
    "status_code": 1,
    "active": true,
    "created_ts": 1422040992,
    "modified_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
    "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Resend Paylink

```ts
async resendPaylink(
  paylinkId: string,
  expand?: Expand14Enum[],
  email?: EmailEnum,
  sms?: SmsEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponsePaylink>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paylinkId` | `string` | Template, Required | Paylink Id |
| `expand` | [`Expand14Enum[] \| undefined`](../../doc/models/expand-14-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `email` | [`EmailEnum \| undefined`](../../doc/models/email-enum.md) | Query, Optional | Resend Email |
| `sms` | [`SmsEnum \| undefined`](../../doc/models/sms-enum.md) | Query, Optional | Resend SMS |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponsePaylink`](../../doc/models/response-paylink.md)

## Example Usage

```ts
const paylinkId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paylinksController.resendPaylink(paylinkId);
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
  "type": "Paylink",
  "data": {
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "cc_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "email": "email@domain.com",
    "amount_due": 1,
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "ach_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "expire_date": "2021-12-01",
    "display_product_transaction_receipt_details": true,
    "display_billing_fields": true,
    "delivery_method": 0,
    "cell_phone": "3339998822",
    "description": "Description",
    "store_token": false,
    "store_token_title": "John Account",
    "bank_funded_only_override": false,
    "tags": [
      "Tag 1"
    ],
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "status_id": true,
    "status_code": 1,
    "active": true,
    "created_ts": 1422040992,
    "modified_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
    "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |

