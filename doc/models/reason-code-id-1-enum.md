
# Reason Code Id 1 Enum

Response reason code that provides more detail as to the result of the transaction. The reason code list can be found here: Response Reason Codes

> 0 - N/A
> 
> 1000 - CC - Approved / ACH - Accepted
> 
> 1000 - CC - Approved / ACH - Accepted
> 
> 1001 - AuthCompleted
> 
> 1002 - Forced
> 
> 1003 - AuthOnly Declined
> 
> 1004 - Validation Failure (System Run Trx)
> 
> 1005 - Processor Response Invalid
> 
> 1200 - Voided
> 
> 1201 - Partial Approval
> 
> 1240 - Approved, optional fields are missing (Paya ACH only)
> 
> 1301 - Account Deactivated for Fraud
> 
> 1302-1399 - Reserved for Future Fraud Reason Codes
> 
> 1500 - Generic Decline
> 
> 1510 - Call
> 
> 1518 - Transaction Not Permitted - Terminal
> 
> 1520 - Pickup Card
> 
> 1530 - Retry Trx
> 
> 1531 - Communication Error
> 
> 1540 - Setup Issue, contact Support
> 
> 1541 - Device is not signature capable
> 
> 1588 - Data could not be de-tokenized
> 
> 1599 - Other Reason
> 
> 1601 - Generic Decline
> 
> 1602 - Call
> 
> 1603 - No Reply
> 
> 1604 - Pickup Card - No Fraud
> 
> 1605 - Pickup Card - Fraud
> 
> 1606 - Pickup Card - Lost
> 
> 1607 - Pickup Card - Stolen
> 
> 1608 - Account Error
> 
> 1609 - Already Reversed
> 
> 1610 - Bad PIN
> 
> 1611 - Cashback Exceeded
> 
> 1612 - Cashback Not Available
> 
> 1613 - CID Error
> 
> 1614 - Date Error
> 
> 1615 - Do Not Honor
> 
> 1616 - NSF
> 
> 1618 - Invalid Service Code
> 
> 1619 - Exceeded activity limit
> 
> 1620 - Violation
> 
> 1621 - Encryption Error
> 
> 1622 - Card Expired
> 
> 1623 - Renter
> 
> 1624 - Security Violation
> 
> 1625 - Card Not Permitted
> 
> 1626 - Trans Not Permitted
> 
> 1627 - System Error
> 
> 1628 - Bad Merchant ID
> 
> 1629 - Duplicate Batch (Already Closed)
> 
> 1630 - Batch Rejected
> 
> 1631 - Account Closed
> 
> 1632 - PIN tries exceeded
> 
> 1640 - Required fields are missing (ACH only)
> 
> 1641 - Previously declined transaction (1640)
> 
> 1650 - Contact Support
> 
> 1651 - Max Sending - Throttle Limit Hit (ACH only)
> 
> 1652 - Max Attempts Exceeded
> 
> 1653 - Contact Support
> 
> 1654 - Voided - Online Reversal Failed
> 
> 1655 - Decline (AVS Auto Reversal)
> 
> 1656 - Decline (CVV Auto Reversal)
> 
> 1657 - Decline (Partial Auth Auto Reversal)
> 
> 1658 - Expired Authorization
> 
> 1659 - Declined - Partial Approval not Supported
> 
> 1660 - Bank Account Error, please delete and re-add Token
> 
> 1661 - Declined AuthIncrement
> 
> 1662 - Auto Reversal - Processor can't settle
> 
> 1663 - Manager Needed (Needs override transaction)
> 
> 1664 - Token Not Found: Sharing Group Unavailable
> 
> 1665 - Contact Not Found: Sharing Group Unavailable
> 
> 1666 - Amount Error
> 
> 1667 - Action Not Allowed in Current State
> 
> 1668 - Original Authorization Not Valid
> 
> 1701 - Chip Reject
> 
> 1800 - Incorrect CVV
> 
> 1801 - Duplicate Transaction
> 
> 1802 - MID/TID Not Registered
> 
> 1803 - Stop Recurring
> 
> 1804 - No Transactions in Batch
> 
> 1805 - Batch Does Not Exist

**ACH Reject Reason Codes**
| Code | E-Code | Verbiage | Short Description | Long Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| 2101 | Rejected-R01 |  | Insufficient funds | Available balance is not sufficient to cover the amount of the debit entry |
| 2102 | Rejected-R02  | E02 | Bank account closed | Previously active amount has been closed by the customer of RDFI |
| 2103 | Rejected-R03 | E03 | No bank account/unable to locate account | Account number does not correspond to the individual identified in the entry, or the account number designated is not an open account |
| 2104 | Rejected-R04  | E04 | Invalid bank account number | Account number structure is not valid |
| 2105 | Rejected-R05  | E05 | Reserved | Currently not in use |
| 2106 | Rejected-R06 |  | Returned per ODFI request | ODFI requested the RDFI to return the entry |
| 2107 | Rejected-R07 | E07 | Authorization revoked by customer | Receiver has revoked authorization |
| 2108 | Rejected-R08 | E08 | Payment stopped | Receiver of a recurring debit has stopped payment of an entry |
| 2109 | Rejected-R09 |  | Uncollected funds | Collected funds are not sufficient for payment of the debit entry |
| 2110 | Rejected-R10 | E10 | Customer Advises Originator is Not Known to Receiver and/or Is Not Authorized by Receiver to Debit Receiver’s Account | Receiver has advised RDFI that originator is not authorized to debit his bank account |
| 2111 | Rejected-R11 |  | Customer Advises Entry Not In Accordance with the Terms of the Authorization | To be used when there is an error in the authorization |
| 2112 | Rejected-R12 |  | Branch sold to another RDFI | RDFI unable to post entry destined for a bank account maintained at a branch sold to another financial institution |
| 2113 | Rejected-R13 |  | RDFI not qualified to participate | Financial institution does not receive commercial ACH entries |
| 2114 | Rejected-R14 | E14 | Representative payee deceased or unable to continue in that capacity | The representative payee authorized to accept entries on behalf of a beneficiary is either deceased or unable to continue in that capacity |
| 2115 | Rejected-R15 | E15 | Beneficiary or bank account holder deceased | (Other than representative payee) deceased* - (1) the beneficiary entitled to payments is deceased or (2) the bank account holder other than a representative payee is deceased |
| 2116 | Rejected-R16 | E16 | Bank account frozen | Funds in bank account are unavailable due to action by RDFI or legal order |
| 2117 | Rejected-R17 |  | File record edit criteria | Entry with Invalid Account Number Initiated Under Questionable Circumstances |
| 2118 | Rejected-R18 |  | Improper effective entry date | Entries have been presented prior to the first available processing window for the effective date. |
| 2119 | Rejected-R19 |  | Amount field error | Improper formatting of the amount field |
| 2120 | Rejected-R20 |  | Non-payment bank account | Entry destined for non-payment bank account defined by reg. |
| 2121 | Rejected-R21 |  | Invalid company Identification | The company ID information not valid (normally CIE entries) |
| 2122 | Rejected-R22 |  | Invalid individual ID number | Individual id used by receiver is incorrect (CIE entries) |
| 2123 | Rejected-R23 |  | Credit entry refused by receiver | Receiver returned entry because minimum or exact amount not remitted, bank account is subject to litigation, or payment represents an overpayment, originator is not known to receiver or receiver has not authorized this credit entry to this bank account |
| 2124 | Rejected-R24 |  | Duplicate entry | RDFI has received a duplicate entry |
| 2125 | Rejected-R25 |  | Addenda error | Improper formatting of the addenda record information |
| 2126 | Rejected-R26 |  | Mandatory field error | Improper information in one of the mandatory fields |
| 2127 | Rejected-R27 |  | Trace number error | Original entry trace number is not valid for return entry; or addenda trace numbers do not correspond with entry detail record |
| 2128 | Rejected-R28 |  | Transit routing number check digit error | Check digit for the transit routing number is incorrect |
| 2129 | Rejected-R29 | E29 | Corporate customer advises not authorized | RDFI has been notified by corporate receiver that debit entry of originator is not authorized |
| 2130 | Rejected-R30 |  | RDFI not participant in check truncation program | Financial institution not participating in automated check safekeeping application |
| 2131 | Rejected-R31 |  | Permissible return entry (CCD and CTX only) | RDFI has been notified by the ODFI that it agrees to accept a CCD or CTX return entry |
| 2132 | Rejected-R32 |  | RDFI non-settlement | RDFI is not able to settle the entry |
| 2133 | Rejected-R33 |  | Return of XCK entry | RDFI determines at its sole discretion to return an XCK entry; an XCK return entry may be initiated by midnight of the sixtieth day following the settlement date if the XCK entry |
| 2134 | Rejected-R34 |  | Limited participation RDFI | RDFI participation has been limited by a federal or state supervisor |
| 2135 | Rejected-R35 |  | Return of improper debit entry | ACH debit not permitted for use with the CIE standard entry class code (except for reversals) |
| 2136 | Rejected-R36 |  | Return of Improper Credit Entry |  |
| 2137 | Rejected-R37 |  | Source Document Presented for Payment |  |
| 2138 | Rejected-R38 |  | Stop Payment on Source Document |  |
| 2139 | Rejected-R39 |  | Improper Source Document |  |
| 2140 | Rejected-R40 |  | Return of ENR Entry by Federal Government Agency |  |
| 2141 | Rejected-R41 |  | Invalid Transaction Code |  |
| 2142 | Rejected-R42 |  | Routing Number/Check Digit Error |  |
| 2143 | Rejected-R43 |  | Invalid DFI Account Number |  |
| 2144 | Rejected-R44 |  | Invalid Individual ID Number/Identification |  |
| 2145 | Rejected-R45 |  | Invalid Individual Name/Company Name |  |
| 2146 | Rejected-R46 |  | Invalid Representative Payee Indicator |  |
| 2147 | Rejected-R47 |  | Duplicate Enrollment |  |
| 2150 | Rejected-R50 |  | State Law Affecting RCK Acceptance |  |
| 2151 | Rejected-R51 |  | Item is Ineligible, Notice Not Provided, etc. |  |
| 2152 | Rejected-R52 |  | Stop Payment on Item (adjustment entries) |  |
| 2153 | Rejected-R53 |  | Item and ACH Entry Presented for Payment |  |
| 2161 | Rejected-R61 |  | Misrouted Return |  |
| 2162 | Rejected-R62 |  | Incorrect Trace Number |  |
| 2163 | Rejected-R63 |  | Incorrect Dollar Amount |  |
| 2164 | Rejected-R64 |  | Incorrect Individual Identification |  |
| 2165 | Rejected-R65 |  | Incorrect Transaction Code |  |
| 2166 | Rejected-R66 |  | Incorrect Company Identification |  |
| 2167 | Rejected-R67 |  | Duplicate Return |  |
| 2168 | Rejected-R68 |  | Untimely Return |  |
| 2169 | Rejected-R69 |  | Multiple Errors |  |
| 2170 | Rejected-R70 |  | Permissible Return Entry Not Accepted |  |
| 2171 | Rejected-R71 |  | Misrouted Dishonored Return |  |
| 2172 | Rejected-R72 |  | Untimely Dishonored Return |  |
| 2173 | Rejected-R73 |  | Timely Original Return |  |
| 2174 | Rejected-R74 |  | Corrected Return |  |
| 2180 | Rejected-R80 |  | Cross-Border Payment Coding Error |  |
| 2181 | Rejected-R81 |  | Non-Participant in Cross-Border Program |  |
| 2182 | Rejected-R82 |  | Invalid Foreign Receiving DFI Identification |  |
| 2183 | Rejected-R83 |  | Foreign Receiving DFI Unable to Settle |  |
| 2200 | Voided |  | Processor Void | The transaction was voided by the processor before being sent to the bank |
| 2201 | Rejected-C01 |  |  |  |
| 2202 | Rejected-C02 |  |  |  |
| 2203 | Rejected-C03 |  |  |  |
| 2204 | Rejected-C04 |  |  |  |
| 2205 | Rejected-C05 |  |  |  |
| 2206 | Rejected-C06 |  |  |  |
| 2207 | Rejected-C07 |  |  |  |
| 2208 | Rejected-C08 |  |  |  |
| 2209 | Rejected-C09 |  |  |  |
| 2210 | Rejected-C10 |  |  |  |
| 2211 | Rejected-C11 |  |  |  |
| 2212 | Rejected-C12 |  |  |  |
| 2213 | Rejected-C13 |  |  |  |
| 2261 | Rejected-C61 |  |  |  |
| 2262 | Rejected-C62 |  |  |  |
| 2263 | Rejected-C63 |  |  |  |
| 2264 | Rejected-C64 |  |  |  |
| 2265 | Rejected-C65 |  |  |  |
| 2266 | Rejected-C66 |  |  |  |
| 2267 | Rejected-C67 |  |  |  |
| 2268 | Rejected-C68 |  |  |  |
| 2269 | Rejected-C69 |  |  |  |
| 2301 | Rejected-X01 |  | Misc Check 21 Return |  |
| 2304 | Rejected-X04 |  | Invalid Image |  |
| 2305 | Rejected-X05 | E95 | Breach of Warranty |  |
| 2306 | Rejected-X06 | E96 | Counterfeit / Forgery |  |
| 2307 | Rejected-X07 | E97 | Refer to Maker |  |
| 2308 | Rejected-X08 |  | Maximum Payment Attempts |  |
| 2309 | Rejected-X09 |  | Item Cannot be Re-presented |  |
| 2310 | Rejected-X10 |  | Not Our Item |  |
| 2321 | Rejected-X21 |  | Pay None |  |
| 2322 | Rejected-X22 |  | Pay All |  |
| 2323 | Rejected-X23 | E93 | Non-Negotiable |  |
| 2329 | Rejected-X29 |  | Stale Dated |  |
| 2345 | Rejected-X45 |  | Misc Return |  |
| 2371 | Rejected-X71 |  | RCK - 2nd Time |  |
| 2372 | Rejected-X72 |  | RCK Reject - ACH |  |
| 2373 | Rejected-X73 |  | RCK Reject - Payer |  |

## Enumeration

`ReasonCodeId1Enum`

## Fields

| Name |
|  --- |
| `enum0` |
| `enum1000` |
| `enum1001` |
| `enum1002` |
| `enum1003` |
| `enum1004` |
| `enum1005` |
| `enum1200` |
| `enum1201` |
| `enum1240` |
| `enum1301` |
| `enum1302` |
| `enum1303` |
| `enum1304` |
| `enum1305` |
| `enum1306` |
| `enum1307` |
| `enum1308` |
| `enum1309` |
| `enum1310` |
| `enum1311` |
| `enum1312` |
| `enum1313` |
| `enum1314` |
| `enum1315` |
| `enum1316` |
| `enum1317` |
| `enum1318` |
| `enum1319` |
| `enum1320` |
| `enum1321` |
| `enum1322` |
| `enum1323` |
| `enum1324` |
| `enum1325` |
| `enum1326` |
| `enum1327` |
| `enum1328` |
| `enum1329` |
| `enum1330` |
| `enum1331` |
| `enum1332` |
| `enum1333` |
| `enum1334` |
| `enum1335` |
| `enum1336` |
| `enum1337` |
| `enum1338` |
| `enum1339` |
| `enum1340` |
| `enum1341` |
| `enum1342` |
| `enum1343` |
| `enum1344` |
| `enum1345` |
| `enum1346` |
| `enum1347` |
| `enum1348` |
| `enum1349` |
| `enum1350` |
| `enum1351` |
| `enum1352` |
| `enum1353` |
| `enum1354` |
| `enum1355` |
| `enum1356` |
| `enum1357` |
| `enum1358` |
| `enum1359` |
| `enum1360` |
| `enum1361` |
| `enum1362` |
| `enum1363` |
| `enum1364` |
| `enum1365` |
| `enum1366` |
| `enum1367` |
| `enum1368` |
| `enum1369` |
| `enum1370` |
| `enum1371` |
| `enum1372` |
| `enum1373` |
| `enum1374` |
| `enum1375` |
| `enum1376` |
| `enum1377` |
| `enum1378` |
| `enum1379` |
| `enum1380` |
| `enum1381` |
| `enum1382` |
| `enum1383` |
| `enum1384` |
| `enum1385` |
| `enum1386` |
| `enum1387` |
| `enum1388` |
| `enum1389` |
| `enum1390` |
| `enum1391` |
| `enum1392` |
| `enum1393` |
| `enum1394` |
| `enum1395` |
| `enum1396` |
| `enum1397` |
| `enum1398` |
| `enum1399` |
| `enum1500` |
| `enum1510` |
| `enum1518` |
| `enum1520` |
| `enum1530` |
| `enum1531` |
| `enum1540` |
| `enum1541` |
| `enum1588` |
| `enum1599` |
| `enum1601` |
| `enum1602` |
| `enum1603` |
| `enum1604` |
| `enum1605` |
| `enum1606` |
| `enum1607` |
| `enum1608` |
| `enum1609` |
| `enum1610` |
| `enum1611` |
| `enum1612` |
| `enum1613` |
| `enum1614` |
| `enum1615` |
| `enum1616` |
| `enum1617` |
| `enum1618` |
| `enum1619` |
| `enum1620` |
| `enum1621` |
| `enum1622` |
| `enum1623` |
| `enum1624` |
| `enum1625` |
| `enum1626` |
| `enum1627` |
| `enum1628` |
| `enum1629` |
| `enum1630` |
| `enum1631` |
| `enum1632` |
| `enum1640` |
| `enum1641` |
| `enum1650` |
| `enum1651` |
| `enum1652` |
| `enum1653` |
| `enum1654` |
| `enum1655` |
| `enum1656` |
| `enum1657` |
| `enum1658` |
| `enum1659` |
| `enum1660` |
| `enum1661` |
| `enum1662` |
| `enum1663` |
| `enum1664` |
| `enum1665` |
| `enum1666` |
| `enum1667` |
| `enum1668` |
| `enum1701` |
| `enum1800` |
| `enum1801` |
| `enum1802` |
| `enum1803` |
| `enum1804` |
| `enum1805` |

## Example

```
1000
```

