
# Status Code 17 Enum

Status ID - See status id section for more detail

> 101 - Sale cc Approved
> 
> 102 - Sale cc AuthOnly
> 
> 111 - Refund cc Refunded
> 
> 121 - Credit/Debit/Refund cc AvsOnly
> 
> 131 - Credit/Debit/Refund ach Pending Origination
> 
> 132 - Credit/Debit/Refund ach Originating
> 
> 133 - Credit/Debit/Refund ach Originated
> 
> 134 - Credit/Debit/Refund ach Settled
> 
> 191 - Settled (depracated - batches are now settled on the /v2/transactionbatches endpoint)
> 
> 201 - All cc/ach Voided
> 
> 301 - All cc/ach Declined
> 
> 331 - Credit/Debit/Refund ach Charged Back

## Enumeration

`StatusCode17Enum`

## Fields

| Name |
|  --- |
| `enum101` |
| `enum102` |
| `enum111` |
| `enum121` |
| `enum131` |
| `enum132` |
| `enum133` |
| `enum134` |
| `enum191` |
| `enum201` |
| `enum301` |
| `enum331` |

## Example

```
101
```

