
# Line Item 6

## Structure

`LineItem6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Description of the item.<br>**Constraints**: *Maximum Length*: `26` |
| `commodityCode` | `string` | Required | An international description code of the individual good or service being supplied.<br>**Constraints**: *Maximum Length*: `12` |
| `discountAmount` | `number \| null \| undefined` | Optional | Total discount amount applied against the line item total ,Can accept Two (2) decimal places.<br>**Constraints**: `<= 99999999999999` |
| `otherTaxAmount` | `number \| null \| undefined` | Optional | Used if city or multiple county taxes need to be broken out separately ,Can accept Two (2) decimal places.<br>**Constraints**: `<= 99999999999999` |
| `productCode` | `string` | Required | Merchant-defined description code of the item.<br>**Constraints**: *Maximum Length*: `12` |
| `quantity` | `number \| null \| undefined` | Optional | Quantity of the item, can accept Four (4) decimal places.<br>**Constraints**: `<= 99999` |
| `taxAmount` | `number \| null \| undefined` | Optional | Amount of any value added taxes, can accept Two (2) decimal places.<br>**Constraints**: `>= 0`, `<= 99999999999` |
| `taxRate` | `number \| null \| undefined` | Optional | Tax rate used to calculate the sales tax amount, can accept 2 decimal places.<br>**Constraints**: `<= 999999` |
| `unitCode` | `string` | Required | Units of measurement as used in international trade. (See Codes for Units of Measurement below for unit code abbreviations)<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `unitCost` | `number` | Required | Unit cost of the item ,Can accept Four (4) decimal places.<br>**Constraints**: `<= 99999999999999` |

## Example (as JSON)

```json
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
  "unit_cost": 3
}
```

