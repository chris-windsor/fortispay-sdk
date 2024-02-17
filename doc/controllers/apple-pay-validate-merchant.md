# Apple Pay Validate Merchant

```ts
const applePayValidateMerchantController = new ApplePayValidateMerchantController(client);
```

## Class Name

`ApplePayValidateMerchantController`


# Apple Pay Validate Merchant

Apple Pay Validate Merchant

```ts
async applePayValidateMerchant(
  body: V1WalletProviderApplePayValidateMerchantRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseApplePayValidateMerchant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1WalletProviderApplePayValidateMerchantRequest`](../../doc/models/v1-wallet-provider-apple-pay-validate-merchant-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseApplePayValidateMerchant`](../../doc/models/response-apple-pay-validate-merchant.md)

## Example Usage

```ts
const body: V1WalletProviderApplePayValidateMerchantRequest = {
  url: 'https://apple-pay-gateway-cert.apple.com/paymentservices/startSession',
  merchantId: 'abc1234',
  domainName: 'website.domain.com',
  displayName: 'Sandwich Market',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await applePayValidateMerchantController.applePayValidateMerchant(body);
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
  "type": "ApplePayValidateMerchant",
  "data": {
    "merchantSession": "{\"epochTimestamp\":1689772866529,\"expiresAt\":1689776466529,\"merchantSessionIdentifier\":\"SSH3D9224\",\"nonce\":\"d70dbe8a\",\"merchantIdentifier\":\"46A940\",\"domainName\":\"paygistixcert.paymentlogistics.net\",\"displayName\":\"F\",\"signature\":\"30800609f6e2\",\"operationalAnalyticsIdentifier\":\"F:46A4E40\",\"retries\":0,\"pspId\":\"ADD36D\"}"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |

