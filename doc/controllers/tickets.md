# Tickets

The tickets endpoint is used as a single use cc only token generation endpoint. If there is a need to store card numbers with cvv for a one time use, then this is the endpoint to perform that task.  Transactions run with the generated ticket_id can save card information for later with save_account.

```ts
const ticketsController = new TicketsController(client);
```

## Class Name

`TicketsController`

## Methods

* [Create a Ticket Record](../../doc/controllers/tickets.md#create-a-ticket-record)
* [List All Tickets Related](../../doc/controllers/tickets.md#list-all-tickets-related)
* [View Single Ticket Record](../../doc/controllers/tickets.md#view-single-ticket-record)


# Create a Ticket Record

```ts
async createATicketRecord(
  body: V1TicketsRequest,
  expand?: Expand41Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTicket>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1TicketsRequest`](../../doc/models/v1-tickets-request.md) | Body, Required | - |
| `expand` | [`Expand41Enum[] \| undefined`](../../doc/models/expand-41-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTicket`](../../doc/models/response-ticket.md)

## Example Usage

```ts
const body: V1TicketsRequest = {
  expDate: '0722',
  accountNumber: '545454545454545',
  accountHolderName: 'John Smith',
  contactId: '11e95f8ec39de8fbdb0a4f1a',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await ticketsController.createATicketRecord(body);
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
  "type": "Ticket",
  "data": {
    "account_holder_name": "John Smith",
    "exp_date": "0722",
    "cvv": null,
    "account_number": "545454545454545",
    "billing_address": {
      "postal_code": "48375"
    },
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "location_api_id": null,
    "id": "11e95f8ec39de8fbdb0a4f1a",
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


# List All Tickets Related

```ts
async listAllTicketsRelated(
  page?: Page,
  order?: Order19[],
  filterBy?: FilterBy[],
  expand?: Expand41Enum[],
  format?: Format1Enum,
  typeahead?: string,
  fields?: Field47Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTicketsCollection>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | [`Page \| undefined`](../../doc/models/page.md) | Query, Optional | Use this field to specify paginate your results, by using page size and number. You can use one of the following methods:<br><br>> /endpoint?page={ "number": 1, "size": 50 }<br>> <br>> /endpoint?page[number]=1&page[size]=50 |
| `order` | [`Order19[] \| undefined`](../../doc/models/order-19.md) | Query, Optional | Criteria used in query string parameters to order results.  Most fields from the endpoint results can be used as a `key`.  Unsupported fields or operators will return a `412`.  Array objects must be valid json.<br><br>> /endpoint?order=[{ "key": "created_ts", "operator": "asc"}]<br>> <br>> /endpoint?order=[{ "key": "balance", "operator": "desc"},{ "key": "created_ts", "operator": "asc"}] |
| `filterBy` | [`FilterBy[] \| undefined`](../../doc/models/filter-by.md) | Query, Optional | Filter criteria that can be used in query string parameters.  Most fields from the endpoint results can be used as a `key`.  Unsupported fields or operators will return a `412`.<br><br>> /endpoint?filter_by=[{ "key": "first_name", "operator": "=", "value": "Fred" }]<br>> <br>> /endpoint?filter_by=[{ "key": "account_type", "operator": "=", "value": "VISA" }]<br>> <br>> /endpoint?filter_by=[{ "key": "created_ts", "operator": ">=", "value": "946702799" }, { "key": "created_ts", "operator": "<=", value: "1695061891" }]<br>> <br>> /endpoint?filter_by=[{ "key": "last_name", "operator": "IN", "value": "Williams,Brown,Allman" }] |
| `expand` | [`Expand41Enum[] \| undefined`](../../doc/models/expand-41-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `format` | [`Format1Enum \| undefined`](../../doc/models/format-1-enum.md) | Query, Optional | Reporting format, valid values: csv, tsv |
| `typeahead` | `string \| undefined` | Query, Optional | You can use any `field_name` from this endpoint results to order the list using the value provided as filter for the same `field_name`. It will be ordered using the following rules: 1) Exact match, 2) Starts with, 3) Contains. |
| `fields` | [`Field47Enum[] \| undefined`](../../doc/models/field-47-enum.md) | Query, Optional | You can use any `field_name` from this endpoint results to filter the list of fields returned on the response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTicketsCollection`](../../doc/models/response-tickets-collection.md)

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
  const { result, ...httpResponse } = await ticketsController.listAllTicketsRelated(
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
  "type": "TicketsCollection",
  "list": [
    {
      "account_holder_name": "John Smith",
      "exp_date": "0722",
      "cvv": null,
      "account_number": "545454545454545",
      "billing_address": {
        "postal_code": "48375"
      },
      "contact_id": "11e95f8ec39de8fbdb0a4f1a",
      "location_api_id": null,
      "id": "11e95f8ec39de8fbdb0a4f1a",
      "created_ts": 1422040992,
      "created_user_id": "11e95f8ec39de8fbdb0a4f1a"
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


# View Single Ticket Record

```ts
async viewSingleTicketRecord(
  ticketId: string,
  expand?: Expand41Enum[],
  fields?: Field47Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTicket>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ticketId` | `string` | Template, Required | A unique, system-generated identifier for the Ticket. |
| `expand` | [`Expand41Enum[] \| undefined`](../../doc/models/expand-41-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `fields` | [`Field47Enum[] \| undefined`](../../doc/models/field-47-enum.md) | Query, Optional | You can use any `field_name` from this endpoint results to filter the list of fields returned on the response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTicket`](../../doc/models/response-ticket.md)

## Example Usage

```ts
const ticketId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await ticketsController.viewSingleTicketRecord(ticketId);
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
  "type": "Ticket",
  "data": {
    "account_holder_name": "John Smith",
    "exp_date": "0722",
    "cvv": null,
    "account_number": "545454545454545",
    "billing_address": {
      "postal_code": "48375"
    },
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "location_api_id": null,
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "created_ts": 1422040992,
    "created_user_id": "11e95f8ec39de8fbdb0a4f1a"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |

