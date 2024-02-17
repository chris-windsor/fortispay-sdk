# fortispay-sdk

I did not write this SDK. I am compiling it from the [official docs](https://docs.fortis.tech/v/1_0_0.html#/typescript/quick-start-guide/overview) of Fortis Pay. It is just here so that I can use it in one of my projects.

### Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter                   | Type                         | Description                                                  |
| --------------------------- | ---------------------------- | ------------------------------------------------------------ |
| `environment`               | Environment                  | The API environment. <br> **Default: `Environment.Sandbox`** |
| `timeout`                   | `number`                     | Timeout for API calls.<br>_Default_: `0`                     |
| `httpClientOptions`         | `Partial<HttpClientOptions>` | Stable configurable http client options.                     |
| `unstableHttpClientOptions` | `any`                        | Unstable configurable http client options.                   |
| `userId`                    | `string`                     | User ID                                                      |
| `userApiKey`                | `string`                     | User API Key                                                 |
| `developerId`               | `string`                     | Developer ID                                                 |

### HttpClientOptions

| Parameter     | Type                          | Description                                                  |
| ------------- | ----------------------------- | ------------------------------------------------------------ |
| `timeout`     | `number`                      | Timeout in milliseconds.                                     |
| `httpAgent`   | `any`                         | Custom http agent to be used when performing http requests.  |
| `httpsAgent`  | `any`                         | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests.                            |

### RetryConfiguration

| Parameter                | Type           | Description                                                                                                           |
| ------------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| `maxNumberOfRetries`     | `number`       | Maximum number of retries. <br> _Default_: `0`                                                                        |
| `retryOnTimeout`         | `boolean`      | Whether to retry on request timeout. <br> _Default_: `true`                                                           |
| `retryInterval`          | `number`       | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> _Default_: `1` |
| `maximumRetryWaitTime`   | `number`       | Overall wait time for the requests getting retried. <br> _Default_: `0`                                               |
| `backoffFactor`          | `number`       | Used in calculation of wait time for next request in case of failure. <br> _Default_: `2`                             |
| `httpStatusCodesToRetry` | `number[]`     | Http status codes to retry against. <br> _Default_: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]`              |
| `httpMethodsToRetry`     | `HttpMethod[]` | Http methods to retry against. <br> _Default_: `['GET', 'PUT']`                                                       |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Sandbox,
  userId: 'user-id',
  userApiKey: 'user-api-key',
  developerId: 'developer-id',
});
```

### Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name       | Description |
| ---------- | ----------- |
| sandbox    | **Default** |
| production | -           |

### Authorization

This API uses `Custom Header Signature`.

### List of APIs

- [Async Processing](doc/controllers/async-processing.md)
- [Declined Recurring Transactions](doc/controllers/declined-recurring-transactions.md)
- [Device Terms](doc/controllers/device-terms.md)
- [Full Boarding](doc/controllers/full-boarding.md)
- [On Boarding](doc/controllers/on-boarding.md)
- [Quick Invoices](doc/controllers/quick-invoices.md)
- [Transactions-ACH](doc/controllers/transactions-ach.md)
- [Transactions-Cash](doc/controllers/transactions-cash.md)
- [Transactions-Credit Card](doc/controllers/transactions-credit-card.md)
- [Transactions-Read](doc/controllers/transactions-read.md)
- [Level 3 Data](doc/controllers/level-3-data.md)
- [Transactions-Updates](doc/controllers/transactions-updates.md)
- [User Verifications](doc/controllers/user-verifications.md)
- [Merchant Details](doc/controllers/merchant-details.md)
- [Apple Pay Validate Merchant](doc/controllers/apple-pay-validate-merchant.md)
- [Batches](doc/controllers/batches.md)
- [Contacts](doc/controllers/contacts.md)
- [Elements](doc/controllers/elements.md)
- [Locations](doc/controllers/locations.md)
- [Paylinks](doc/controllers/paylinks.md)
- [Recurring](doc/controllers/recurring.md)
- [Signatures](doc/controllers/signatures.md)
- [Tags](doc/controllers/tags.md)
- [Terminals](doc/controllers/terminals.md)
- [Tickets](doc/controllers/tickets.md)
- [Tokens](doc/controllers/tokens.md)
- [Users](doc/controllers/users.md)
- [Webhooks](doc/controllers/webhooks.md)

### Classes Documentation

- [ApiResponse](doc/api-response.md)
- [ApiError](doc/api-error.md)
