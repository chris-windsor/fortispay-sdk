# Level 3 Data

```ts
const level3DataController = new Level3DataController(client);
```

## Class Name

`Level3DataController`

## Methods

* [Create a New Level 3 Entry for a Master Card](../../doc/controllers/level-3-data.md#create-a-new-level-3-entry-for-a-master-card)
* [Create a New Level 3 Entry for a Visa](../../doc/controllers/level-3-data.md#create-a-new-level-3-entry-for-a-visa)
* [Delete a Single Level 3 Record](../../doc/controllers/level-3-data.md#delete-a-single-level-3-record)
* [View Single Level 3 Record](../../doc/controllers/level-3-data.md#view-single-level-3-record)


# Create a New Level 3 Entry for a Master Card

```ts
async createANewLevel3EntryForAMasterCard(
  transactionId: string,
  body: V1TransactionsLevel3MasterCardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTransactionLevel3Master>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Template, Required | Transaction ID |
| `body` | [`V1TransactionsLevel3MasterCardRequest`](../../doc/models/v1-transactions-level-3-master-card-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTransactionLevel3Master`](../../doc/models/response-transaction-level-3-master.md)

## Example Usage

```ts
const transactionId = '11e95f8ec39de8fbdb0a4f1a';

const body: V1TransactionsLevel3MasterCardRequest = {
  level3Data: {
    lineItems: [
      {
        description: 'cool drink',
        productCode: 'coke12345678',
        unitCode: 'gll',
        unitCost: 10,
        alternateTaxId: '1234',
        debitCredit: DebitCreditEnum.C,
        discountAmount: 10,
        discountRate: 11,
        quantity: 5,
        taxAmount: 3,
        taxRate: 0,
        taxTypeApplied: '22',
        taxTypeId: '11',
      }
    ],
    destinationCountryCode: '840',
    dutyAmount: 0,
    freightAmount: 0,
    nationalTax: 2,
    salesTax: 200,
    shipfromZipCode: 'AZ12345',
    shiptoZipCode: 'MI48335',
    taxAmount: 0,
    taxExempt: TaxExemptEnum.Enum0,
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await level3DataController.createANewLevel3EntryForAMasterCard(
  transactionId,
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
  "type": "TransactionLevel3Master",
  "data": {
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "level3_data": {
      "destination_country_code": "840",
      "duty_amount": 0,
      "freight_amount": 0,
      "national_tax": 2,
      "sales_tax": 200,
      "shipfrom_zip_code": "AZ1234",
      "shipto_zip_code": "FL1234",
      "tax_amount": 10,
      "tax_exempt": "0",
      "customer_vat_registration": "12345678",
      "merchant_vat_registration": "123456",
      "order_date": "171006",
      "summary_commodity_code": "C1K2",
      "tax_rate": 0,
      "unique_vat_ref_number": "vat1234",
      "line_items": [
        {
          "description": "cool drink",
          "commodity_code": "cc123456",
          "discount_amount": 0,
          "other_tax_amount": 0,
          "product_code": "fanta123456",
          "quantity": 12,
          "tax_amount": 4,
          "tax_rate": 0,
          "unit_code": "gll",
          "unit_cost": 3,
          "alternate_tax_id": "1234",
          "debit_credit": "C",
          "discount_rate": 11,
          "tax_type_applied": "22",
          "tax_type_id": "11"
        }
      ]
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Create a New Level 3 Entry for a Visa

```ts
async createANewLevel3EntryForAVisa(
  transactionId: string,
  body: V1TransactionsLevel3VisaRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTransactionLevel3Visa>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Template, Required | Transaction ID |
| `body` | [`V1TransactionsLevel3VisaRequest`](../../doc/models/v1-transactions-level-3-visa-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTransactionLevel3Visa`](../../doc/models/response-transaction-level-3-visa.md)

## Example Usage

```ts
const transactionId = '11e95f8ec39de8fbdb0a4f1a';

const body: V1TransactionsLevel3VisaRequest = {
  level3Data: {
    lineItems: [
      {
        description: 'cool drink',
        commodityCode: 'cc123456',
        productCode: 'fanta123456',
        unitCode: 'gll',
        unitCost: 3,
        discountAmount: 0,
        otherTaxAmount: 0,
        quantity: 12,
        taxAmount: 4,
        taxRate: 0,
      }
    ],
    destinationCountryCode: '840',
    dutyAmount: 0,
    freightAmount: 0,
    nationalTax: 2,
    salesTax: 200,
    shipfromZipCode: 'AZ1234',
    shiptoZipCode: 'FL1234',
    taxAmount: 10,
    taxExempt: TaxExemptEnum.Enum0,
    customerVatRegistration: '12345678',
    merchantVatRegistration: '123456',
    orderDate: '171006',
    summaryCommodityCode: 'C1K2',
    taxRate: 0,
    uniqueVatRefNumber: 'vat1234',
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await level3DataController.createANewLevel3EntryForAVisa(
  transactionId,
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
  "type": "TransactionLevel3Visa",
  "data": {
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "level3_data": {
      "destination_country_code": "840",
      "duty_amount": 0,
      "freight_amount": 0,
      "national_tax": 2,
      "sales_tax": 200,
      "shipfrom_zip_code": "AZ1234",
      "shipto_zip_code": "FL1234",
      "tax_amount": 10,
      "tax_exempt": "0",
      "customer_vat_registration": "12345678",
      "merchant_vat_registration": "123456",
      "order_date": "171006",
      "summary_commodity_code": "C1K2",
      "tax_rate": 0,
      "unique_vat_ref_number": "vat1234",
      "line_items": [
        {
          "description": "cool drink",
          "commodity_code": "cc123456",
          "discount_amount": 0,
          "other_tax_amount": 0,
          "product_code": "fanta123456",
          "quantity": 12,
          "tax_amount": 4,
          "tax_rate": 0,
          "unit_code": "gll",
          "unit_cost": 3,
          "alternate_tax_id": "1234",
          "debit_credit": "C",
          "discount_rate": 11,
          "tax_type_applied": "22",
          "tax_type_id": "11"
        }
      ]
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |


# Delete a Single Level 3 Record

```ts
async deleteASingleLevel3Record(
  transactionId: string,
  level3Id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTransactionLevel3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Template, Required | Transaction ID |
| `level3Id` | `string` | Template, Required | Level 3 ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTransactionLevel3`](../../doc/models/response-transaction-level-3.md)

## Example Usage

```ts
const transactionId = '11e95f8ec39de8fbdb0a4f1a';

const level3Id = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await level3DataController.deleteASingleLevel3Record(
  transactionId,
  level3Id
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
  "type": "TransactionLevel3",
  "data": {
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "level3_data": {
      "destination_country_code": "840",
      "duty_amount": 0,
      "freight_amount": 0,
      "national_tax": 2,
      "sales_tax": 200,
      "shipfrom_zip_code": "AZ1234",
      "shipto_zip_code": "FL1234",
      "tax_amount": 10,
      "tax_exempt": "0",
      "customer_vat_registration": "12345678",
      "merchant_vat_registration": "123456",
      "order_date": "171006",
      "summary_commodity_code": "C1K2",
      "tax_rate": 0,
      "unique_vat_ref_number": "vat1234",
      "line_items": [
        {
          "description": "cool drink",
          "commodity_code": "cc123456",
          "discount_amount": 0,
          "other_tax_amount": 0,
          "product_code": "fanta123456",
          "quantity": 12,
          "tax_amount": 4,
          "tax_rate": 0,
          "unit_code": "gll",
          "unit_cost": 3,
          "alternate_tax_id": "1234",
          "debit_credit": "C",
          "discount_rate": 11,
          "tax_type_applied": "22",
          "tax_type_id": "11"
        }
      ]
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |


# View Single Level 3 Record

```ts
async viewSingleLevel3Record(
  transactionId: string,
  level3Id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseTransactionLevel3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Template, Required | Transaction ID |
| `level3Id` | `string` | Template, Required | Level 3 ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseTransactionLevel3`](../../doc/models/response-transaction-level-3.md)

## Example Usage

```ts
const transactionId = '11e95f8ec39de8fbdb0a4f1a';

const level3Id = '11e95f8ec39de8fbdb0a4f1a';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await level3DataController.viewSingleLevel3Record(
  transactionId,
  level3Id
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
  "type": "TransactionLevel3",
  "data": {
    "id": "11e95f8ec39de8fbdb0a4f1a",
    "transaction_id": "11e95f8ec39de8fbdb0a4f1a",
    "level3_data": {
      "destination_country_code": "840",
      "duty_amount": 0,
      "freight_amount": 0,
      "national_tax": 2,
      "sales_tax": 200,
      "shipfrom_zip_code": "AZ1234",
      "shipto_zip_code": "FL1234",
      "tax_amount": 10,
      "tax_exempt": "0",
      "customer_vat_registration": "12345678",
      "merchant_vat_registration": "123456",
      "order_date": "171006",
      "summary_commodity_code": "C1K2",
      "tax_rate": 0,
      "unique_vat_ref_number": "vat1234",
      "line_items": [
        {
          "description": "cool drink",
          "commodity_code": "cc123456",
          "discount_amount": 0,
          "other_tax_amount": 0,
          "product_code": "fanta123456",
          "quantity": 12,
          "tax_amount": 4,
          "tax_rate": 0,
          "unit_code": "gll",
          "unit_cost": 3,
          "alternate_tax_id": "1234",
          "debit_credit": "C",
          "discount_rate": 11,
          "tax_type_applied": "22",
          "tax_type_id": "11"
        }
      ]
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |

