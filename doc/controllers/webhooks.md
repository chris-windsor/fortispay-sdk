# Webhooks

```ts
const webhooksController = new WebhooksController(client);
```

## Class Name

`WebhooksController`

## Methods

* [Create a New Transaction Batch Postback Config](../../doc/controllers/webhooks.md#create-a-new-transaction-batch-postback-config)
* [Create a New Contact Postback Config](../../doc/controllers/webhooks.md#create-a-new-contact-postback-config)
* [Create a New Transaction Postback Config](../../doc/controllers/webhooks.md#create-a-new-transaction-postback-config)
* [Delete a Postback Config](../../doc/controllers/webhooks.md#delete-a-postback-config)
* [Update Transaction Batch Postback Config](../../doc/controllers/webhooks.md#update-transaction-batch-postback-config)
* [Update Contact Postback Config](../../doc/controllers/webhooks.md#update-contact-postback-config)
* [Update Transaction Postback Config](../../doc/controllers/webhooks.md#update-transaction-postback-config)


# Create a New Transaction Batch Postback Config

```ts
async createANewTransactionBatchPostbackConfig(
  body: V1WebhooksBatchRequest,
  expand?: Expand101Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseWebhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1WebhooksBatchRequest`](../../doc/models/v1-webhooks-batch-request.md) | Body, Required | - |
| `expand` | [`Expand101Enum[] \| undefined`](../../doc/models/expand-101-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseWebhook`](../../doc/models/response-webhook.md)

## Example Usage

```ts
const body: V1WebhooksBatchRequest = {
  isActive: true,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  onCreate: true,
  onUpdate: true,
  onDelete: true,
  productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  numberOfAttempts: 1,
  url: 'https://127.0.0.1/receiver',
  attemptInterval: 300,
  basicAuthUsername: 'tester',
  basicAuthPassword: 'Test@522',
  expands: 'changelogs,tags',
  format: FormatEnum.Apidefault,
  postbackConfigId: '11e95f8ec39de8fbdb0a4f1a',
  resource: Resource12Enum.Contact,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await webhooksController.createANewTransactionBatchPostbackConfig(body);
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
  "type": "Webhook",
  "data": {
    "attempt_interval": 300,
    "basic_auth_username": "username",
    "basic_auth_password": "password",
    "expands": "changelogs,tags",
    "format": "api-default",
    "is_active": true,
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "on_create": true,
    "on_update": true,
    "on_delete": true,
    "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "resource": "contact",
    "number_of_attempts": 1,
    "url": "https://127.0.0.1/receiver",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "postback_logs": [
      {
        "id": "11e95f8ec39de8fbdb0a4f1a",
        "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
        "changelog_id": "11e95f8ec39de8fbdb0a4f1a",
        "next_run_ts": 1422040992,
        "created_ts": 1422040992,
        "model_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Create a New Contact Postback Config

```ts
async createANewContactPostbackConfig(
  body: V1WebhooksContactRequest,
  expand?: Expand101Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseWebhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1WebhooksContactRequest`](../../doc/models/v1-webhooks-contact-request.md) | Body, Required | - |
| `expand` | [`Expand101Enum[] \| undefined`](../../doc/models/expand-101-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseWebhook`](../../doc/models/response-webhook.md)

## Example Usage

```ts
const body: V1WebhooksContactRequest = {
  isActive: true,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  onCreate: true,
  onUpdate: true,
  onDelete: true,
  numberOfAttempts: 1,
  url: 'https://127.0.0.1/receiver',
  attemptInterval: 300,
  basicAuthUsername: 'tester',
  basicAuthPassword: 'Test@522',
  expands: 'changelogs,tags',
  format: FormatEnum.Apidefault,
  postbackConfigId: '11e95f8ec39de8fbdb0a4f1a',
  productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  resource: Resource12Enum.Contact,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await webhooksController.createANewContactPostbackConfig(body);
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
  "type": "Webhook",
  "data": {
    "attempt_interval": 300,
    "basic_auth_username": "username",
    "basic_auth_password": "password",
    "expands": "changelogs,tags",
    "format": "api-default",
    "is_active": true,
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "on_create": true,
    "on_update": true,
    "on_delete": true,
    "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "resource": "contact",
    "number_of_attempts": 1,
    "url": "https://127.0.0.1/receiver",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "postback_logs": [
      {
        "id": "11e95f8ec39de8fbdb0a4f1a",
        "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
        "changelog_id": "11e95f8ec39de8fbdb0a4f1a",
        "next_run_ts": 1422040992,
        "created_ts": 1422040992,
        "model_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Create a New Transaction Postback Config

```ts
async createANewTransactionPostbackConfig(
  body: V1WebhooksTransactionRequest,
  expand?: Expand101Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseWebhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1WebhooksTransactionRequest`](../../doc/models/v1-webhooks-transaction-request.md) | Body, Required | - |
| `expand` | [`Expand101Enum[] \| undefined`](../../doc/models/expand-101-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseWebhook`](../../doc/models/response-webhook.md)

## Example Usage

```ts
const body: V1WebhooksTransactionRequest = {
  isActive: true,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  onCreate: true,
  onUpdate: true,
  onDelete: true,
  productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  numberOfAttempts: 1,
  url: 'https://127.0.0.1/receiver',
  attemptInterval: 300,
  basicAuthUsername: 'tester',
  basicAuthPassword: 'Test@522',
  expands: 'changelogs,tags',
  format: FormatEnum.Apidefault,
  postbackConfigId: '11e95f8ec39de8fbdb0a4f1a',
  resource: Resource12Enum.Contact,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await webhooksController.createANewTransactionPostbackConfig(body);
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
  "type": "Webhook",
  "data": {
    "attempt_interval": 300,
    "basic_auth_username": "username",
    "basic_auth_password": "password",
    "expands": "changelogs,tags",
    "format": "api-default",
    "is_active": true,
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "on_create": true,
    "on_update": true,
    "on_delete": true,
    "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "resource": "contact",
    "number_of_attempts": 1,
    "url": "https://127.0.0.1/receiver",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "postback_logs": [
      {
        "id": "11e95f8ec39de8fbdb0a4f1a",
        "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
        "changelog_id": "11e95f8ec39de8fbdb0a4f1a",
        "next_run_ts": 1422040992,
        "created_ts": 1422040992,
        "model_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Delete a Postback Config

```ts
async deleteAPostbackConfig(
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseWebhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | Postback Config ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseWebhook`](../../doc/models/response-webhook.md)

## Example Usage

```ts
const webhookId = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await webhooksController.deleteAPostbackConfig(webhookId);
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
  "type": "Webhook",
  "data": {
    "attempt_interval": 300,
    "basic_auth_username": "username",
    "basic_auth_password": "password",
    "expands": "changelogs,tags",
    "format": "api-default",
    "is_active": true,
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "on_create": true,
    "on_update": true,
    "on_delete": true,
    "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "resource": "contact",
    "number_of_attempts": 1,
    "url": "https://127.0.0.1/receiver",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "postback_logs": [
      {
        "id": "11e95f8ec39de8fbdb0a4f1a",
        "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
        "changelog_id": "11e95f8ec39de8fbdb0a4f1a",
        "next_run_ts": 1422040992,
        "created_ts": 1422040992,
        "model_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |


# Update Transaction Batch Postback Config

```ts
async updateTransactionBatchPostbackConfig(
  webhookId: string,
  body: V1WebhooksBatchRequest1,
  expand?: Expand101Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseWebhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | Postback Config ID |
| `body` | [`V1WebhooksBatchRequest1`](../../doc/models/v1-webhooks-batch-request-1.md) | Body, Required | - |
| `expand` | [`Expand101Enum[] \| undefined`](../../doc/models/expand-101-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseWebhook`](../../doc/models/response-webhook.md)

## Example Usage

```ts
const webhookId = '11e95f8ec39de8fbdb0a4f1a';

const body: V1WebhooksBatchRequest1 = {
  attemptInterval: 300,
  basicAuthUsername: 'tester',
  basicAuthPassword: 'Test@522',
  expands: 'changelogs,tags',
  format: FormatEnum.Apidefault,
  isActive: true,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  onCreate: true,
  onUpdate: true,
  onDelete: true,
  postbackConfigId: '11e95f8ec39de8fbdb0a4f1a',
  productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  resource: Resource12Enum.Contact,
  numberOfAttempts: 1,
  url: 'https://127.0.0.1/receiver',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await webhooksController.updateTransactionBatchPostbackConfig(
  webhookId,
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
  "type": "Webhook",
  "data": {
    "attempt_interval": 300,
    "basic_auth_username": "username",
    "basic_auth_password": "password",
    "expands": "changelogs,tags",
    "format": "api-default",
    "is_active": true,
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "on_create": true,
    "on_update": true,
    "on_delete": true,
    "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "resource": "contact",
    "number_of_attempts": 1,
    "url": "https://127.0.0.1/receiver",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "postback_logs": [
      {
        "id": "11e95f8ec39de8fbdb0a4f1a",
        "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
        "changelog_id": "11e95f8ec39de8fbdb0a4f1a",
        "next_run_ts": 1422040992,
        "created_ts": 1422040992,
        "model_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Update Contact Postback Config

```ts
async updateContactPostbackConfig(
  webhookId: string,
  body: V1WebhooksContactRequest1,
  expand?: Expand101Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseWebhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | Postback Config ID |
| `body` | [`V1WebhooksContactRequest1`](../../doc/models/v1-webhooks-contact-request-1.md) | Body, Required | - |
| `expand` | [`Expand101Enum[] \| undefined`](../../doc/models/expand-101-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseWebhook`](../../doc/models/response-webhook.md)

## Example Usage

```ts
const webhookId = '11e95f8ec39de8fbdb0a4f1a';

const body: V1WebhooksContactRequest1 = {
  attemptInterval: 300,
  basicAuthUsername: 'tester',
  basicAuthPassword: 'Test@522',
  expands: 'changelogs,tags',
  format: FormatEnum.Apidefault,
  isActive: true,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  onCreate: true,
  onUpdate: true,
  onDelete: true,
  postbackConfigId: '11e95f8ec39de8fbdb0a4f1a',
  productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  resource: Resource12Enum.Contact,
  numberOfAttempts: 1,
  url: 'https://127.0.0.1/receiver',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await webhooksController.updateContactPostbackConfig(
  webhookId,
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
  "type": "Webhook",
  "data": {
    "attempt_interval": 300,
    "basic_auth_username": "username",
    "basic_auth_password": "password",
    "expands": "changelogs,tags",
    "format": "api-default",
    "is_active": true,
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "on_create": true,
    "on_update": true,
    "on_delete": true,
    "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "resource": "contact",
    "number_of_attempts": 1,
    "url": "https://127.0.0.1/receiver",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "postback_logs": [
      {
        "id": "11e95f8ec39de8fbdb0a4f1a",
        "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
        "changelog_id": "11e95f8ec39de8fbdb0a4f1a",
        "next_run_ts": 1422040992,
        "created_ts": 1422040992,
        "model_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Update Transaction Postback Config

```ts
async updateTransactionPostbackConfig(
  webhookId: string,
  body: V1WebhooksTransactionRequest1,
  expand?: Expand101Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseWebhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | Postback Config ID |
| `body` | [`V1WebhooksTransactionRequest1`](../../doc/models/v1-webhooks-transaction-request-1.md) | Body, Required | - |
| `expand` | [`Expand101Enum[] \| undefined`](../../doc/models/expand-101-enum.md) | Query, Optional | Most endpoints in the API have a way to retrieve extra data related to the current record being retrieved. For example, if the API request is for the accountvaults endpoint, and the end user also needs to know which contact the token belongs to, this data can be returned in the accountvaults endpoint request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseWebhook`](../../doc/models/response-webhook.md)

## Example Usage

```ts
const webhookId = '11e95f8ec39de8fbdb0a4f1a';

const body: V1WebhooksTransactionRequest1 = {
  attemptInterval: 300,
  basicAuthUsername: 'tester',
  basicAuthPassword: 'Test@522',
  expands: 'changelogs,tags',
  format: FormatEnum.Apidefault,
  isActive: true,
  locationId: '11e95f8ec39de8fbdb0a4f1a',
  onCreate: true,
  onUpdate: true,
  onDelete: true,
  postbackConfigId: '11e95f8ec39de8fbdb0a4f1a',
  productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
  resource: Resource12Enum.Contact,
  numberOfAttempts: 1,
  url: 'https://127.0.0.1/receiver',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await webhooksController.updateTransactionPostbackConfig(
  webhookId,
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
  "type": "Webhook",
  "data": {
    "attempt_interval": 300,
    "basic_auth_username": "username",
    "basic_auth_password": "password",
    "expands": "changelogs,tags",
    "format": "api-default",
    "is_active": true,
    "location_id": "11e95f8ec39de8fbdb0a4f1a",
    "on_create": true,
    "on_update": true,
    "on_delete": true,
    "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
    "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "resource": "contact",
    "number_of_attempts": 1,
    "url": "https://127.0.0.1/receiver",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "postback_logs": [
      {
        "id": "11e95f8ec39de8fbdb0a4f1a",
        "postback_config_id": "11e95f8ec39de8fbdb0a4f1a",
        "changelog_id": "11e95f8ec39de8fbdb0a4f1a",
        "next_run_ts": 1422040992,
        "created_ts": 1422040992,
        "model_id": "11e95f8ec39de8fbdb0a4f1a"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |

