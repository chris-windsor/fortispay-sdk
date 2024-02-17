# Declined Recurring Transactions

```ts
const declinedRecurringTransactionsController = new DeclinedRecurringTransactionsController(client);
```

## Class Name

`DeclinedRecurringTransactionsController`

## Methods

* [Get One Declined Recurring Transaction](../../doc/controllers/declined-recurring-transactions.md#get-one-declined-recurring-transaction)
* [List All Declined Recurring Transactions](../../doc/controllers/declined-recurring-transactions.md#list-all-declined-recurring-transactions)
* [Create a Payment](../../doc/controllers/declined-recurring-transactions.md#create-a-payment)
* [Rerun the Transaction](../../doc/controllers/declined-recurring-transactions.md#rerun-the-transaction)
* [Resend the Transaction](../../doc/controllers/declined-recurring-transactions.md#resend-the-transaction)


# Get One Declined Recurring Transaction

```ts
async getOneDeclinedRecurringTransaction(
  declinedRecurringTransactionId: string,
  expand?: Expand5Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseDeclinedRecurringTransaction>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `declinedRecurringTransactionId` | `string` | Template, Required | Id |
| `expand` | [`Expand5Enum[] \| undefined`](../../doc/models/expand-5-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseDeclinedRecurringTransaction`](../../doc/models/response-declined-recurring-transaction.md)

## Example Usage

```ts
const declinedRecurringTransactionId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await declinedRecurringTransactionsController.getOneDeclinedRecurringTransaction(declinedRecurringTransactionId);
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
  "type": "DeclinedRecurringTransaction",
  "data": {
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "status": "paid",
    "recurring_id": "11e95f8ec39de8fbdb0a4f1a",
    "created_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
    "modified_ts": 1422040992,
    "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |


# List All Declined Recurring Transactions

```ts
async listAllDeclinedRecurringTransactions(
  page?: Page,
  order?: Order19[],
  filterBy?: FilterBy[],
  expand?: Expand5Enum[],
  format?: Format1Enum,
  typeahead?: string,
  fields?: Field28Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseDeclinedRecurringTransactionsCollection>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | [`Page \| undefined`](../../doc/models/page.md) | Query, Optional | Use this field to specify paginate your results, by using page size and number. You can use one of the following methods:<br><br>> /endpoint?page={ "number": 1, "size": 50 }<br>> <br>> /endpoint?page[number]=1&page[size]=50 |
| `order` | [`Order19[] \| undefined`](../../doc/models/order-19.md) | Query, Optional | Criteria used in query string parameters to order results.  Most fields from the endpoint results can be used as a `key`.  Unsupported fields or operators will return a `412`.  Array objects must be valid json.<br><br>> /endpoint?order=[{ "key": "created_ts", "operator": "asc"}]<br>> <br>> /endpoint?order=[{ "key": "balance", "operator": "desc"},{ "key": "created_ts", "operator": "asc"}] |
| `filterBy` | [`FilterBy[] \| undefined`](../../doc/models/filter-by.md) | Query, Optional | Filter criteria that can be used in query string parameters.  Most fields from the endpoint results can be used as a `key`.  Unsupported fields or operators will return a `412`.<br><br>> /endpoint?filter_by=[{ "key": "first_name", "operator": "=", "value": "Fred" }]<br>> <br>> /endpoint?filter_by=[{ "key": "account_type", "operator": "=", "value": "VISA" }]<br>> <br>> /endpoint?filter_by=[{ "key": "created_ts", "operator": ">=", "value": "946702799" }, { "key": "created_ts", "operator": "<=", value: "1695061891" }]<br>> <br>> /endpoint?filter_by=[{ "key": "last_name", "operator": "IN", "value": "Williams,Brown,Allman" }] |
| `expand` | [`Expand5Enum[] \| undefined`](../../doc/models/expand-5-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `format` | [`Format1Enum \| undefined`](../../doc/models/format-1-enum.md) | Query, Optional | Reporting format, valid values: csv, tsv |
| `typeahead` | `string \| undefined` | Query, Optional | You can use any `field_name` from this endpoint results to order the list using the value provided as filter for the same `field_name`. It will be ordered using the following rules: 1) Exact match, 2) Starts with, 3) Contains. |
| `fields` | [`Field28Enum[] \| undefined`](../../doc/models/field-28-enum.md) | Query, Optional | You can use any `field_name` from this endpoint results to filter the list of fields returned on the response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseDeclinedRecurringTransactionsCollection`](../../doc/models/response-declined-recurring-transactions-collection.md)

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
  const { result, ...httpResponse } = await declinedRecurringTransactionsController.listAllDeclinedRecurringTransactions(
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
  "type": "DeclinedRecurringTransactionsCollection",
  "list": [
    {
      "id": "11e95f8ec39de8fbdb0a4f1a",
      "status": "paid",
      "recurring_id": "11e95f8ec39de8fbdb0a4f1a",
      "created_ts": 1422040992,
      "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
      "modified_ts": 1422040992,
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


# Create a Payment

```ts
async createAPayment(
  body: V1DeclinedRecurringTransactionPaymentsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseDeclinedRecurringTransactionPayment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1DeclinedRecurringTransactionPaymentsRequest`](../../doc/models/v1-declined-recurring-transaction-payments-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseDeclinedRecurringTransactionPayment`](../../doc/models/response-declined-recurring-transaction-payment.md)

## Example Usage

```ts
const body: V1DeclinedRecurringTransactionPaymentsRequest = {
  declinedRecurringTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  accountNumber: '5454545454545454',
  expDate: '0722',
  transactionAmount: 0,
  accountHolderName: 'John Doe',
  description: 'Description',
  saveAccountTitle: 'John Account',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await declinedRecurringTransactionsController.createAPayment(body);
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
  "type": "DeclinedRecurringTransactionPayment",
  "data": {
    "declined_recurring_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "account_number": "5454545454545454",
    "account_holder_name": "John Doe",
    "exp_date": "0722",
    "transaction_amount": 0,
    "description": "Description",
    "billing_address": {
      "postal_code": "48375",
      "city": "Novi",
      "state": "Michigan",
      "phone": "3339998822",
      "country": "USA"
    },
    "tags": [
      "Walk-in Customer"
    ],
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "first_six": "700953",
    "last_four": "3657",
    "routing": null,
    "reason_code_id": 1000,
    "created_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Rerun the Transaction

```ts
async rerunTheTransaction(
  declinedRecurringTransactionId: string,
  expand?: Expand5Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseDeclinedRecurringTransaction>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `declinedRecurringTransactionId` | `string` | Template, Required | Id |
| `expand` | [`Expand5Enum[] \| undefined`](../../doc/models/expand-5-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseDeclinedRecurringTransaction`](../../doc/models/response-declined-recurring-transaction.md)

## Example Usage

```ts
const declinedRecurringTransactionId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await declinedRecurringTransactionsController.rerunTheTransaction(declinedRecurringTransactionId);
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
  "type": "DeclinedRecurringTransaction",
  "data": {
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "status": "paid",
    "recurring_id": "11e95f8ec39de8fbdb0a4f1a",
    "created_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
    "modified_ts": 1422040992,
    "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |


# Resend the Transaction

```ts
async resendTheTransaction(
  declinedRecurringTransactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseDeclinedRecurringTransactionResend>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `declinedRecurringTransactionId` | `string` | Template, Required | Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseDeclinedRecurringTransactionResend`](../../doc/models/response-declined-recurring-transaction-resend.md)

## Example Usage

```ts
const declinedRecurringTransactionId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await declinedRecurringTransactionsController.resendTheTransaction(declinedRecurringTransactionId);
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
  "type": "DeclinedRecurringTransactionResend",
  "data": {
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "email_log_id": "11e95f8ec39de8fbdb0a4f1a",
    "email": "email@domain.com"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |

