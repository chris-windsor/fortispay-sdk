# Async Processing

```ts
const asyncProcessingController = new AsyncProcessingController(client);
```

## Class Name

`AsyncProcessingController`


# Status Check

Retrieve the current status for a particular code.

```ts
async statusCheck(
  statusCode: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseAsyncStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statusCode` | `string` | Template, Required | A [UUID v4](https://datatracker.ietf.org/doc/html/rfc4122) that's unique for the Async Request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseAsyncStatus`](../../doc/models/response-async-status.md)

## Example Usage

```ts
const statusCode = '406c66c3-21cb-47fb-80fc-843bc42507fb';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await asyncProcessingController.statusCheck(statusCode);
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
  "type": "AsyncStatus",
  "data": {
    "code": "406c66c3-21cb-47fb-80fc-843bc42507fb",
    "type": "Transaction",
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "progress": 100,
    "error": null,
    "ttl": 7956886942
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |

