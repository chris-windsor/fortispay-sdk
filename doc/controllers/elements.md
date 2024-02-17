# Elements

Accept payment methods from around the globe with a single secure, embeddable UI component. For more information, please read the [Elements Documentation](page:elements/overview)

```ts
const elementsController = new ElementsController(client);
```

## Class Name

`ElementsController`

## Methods

* [Ticket Intention](../../doc/controllers/elements.md#ticket-intention)
* [Transaction Intention](../../doc/controllers/elements.md#transaction-intention)


# Ticket Intention

Elements uses a `TicketIntention` object to represent your intent to tokenize credit card information from a customer.

```ts
async ticketIntention(
  body: V1ElementsTicketIntentionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTicketIntention>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1ElementsTicketIntentionRequest`](../../doc/models/v1-elements-ticket-intention-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTicketIntention`](../../doc/models/response-ticket-intention.md)

## Example Usage

```ts
const body: V1ElementsTicketIntentionRequest = {
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  contactId: '11e95f8ec39de8fbdb0a4f1a',
  productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await elementsController.ticketIntention(body);
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
  "type": "TicketIntention",
  "data": {
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Transaction Intention

Elements uses a `TransactionIntention` object to represent your intent to collect payment from a customer, tracking charge attempts and payment state changes throughout the process.

```ts
async transactionIntention(
  body: V1ElementsTransactionIntentionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTransactionIntention>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1ElementsTransactionIntentionRequest`](../../doc/models/v1-elements-transaction-intention-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTransactionIntention`](../../doc/models/response-transaction-intention.md)

## Example Usage

```ts
const body: V1ElementsTransactionIntentionRequest = {
  action: ActionEnum.Sale,
  digitalWalletsOnly: false,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  contactId: '11e95f8ec39de8fbdb0a4f1a',
  achSecCode: AchSecCodeEnum.WEB,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await elementsController.transactionIntention(body);
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
  "type": "TransactionIntention",
  "data": {
    "action": "sale",
    "methods": [
      {
        "type": "cc",
        "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ],
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "contact_id": "11e95f8ec39de8fbdb0a4f1a",
    "ach_sec_code": "WEB",
    "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |

