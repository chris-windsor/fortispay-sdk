/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Response401tokenError } from '../errors/response401tokenError';
import { ExpandEnum, expandEnumSchema } from '../models/expandEnum';
import { Field25Enum, field25EnumSchema } from '../models/field25Enum';
import { FilterBy, filterBySchema } from '../models/filterBy';
import { Format1Enum, format1EnumSchema } from '../models/format1Enum';
import { Order19, order19Schema } from '../models/order19';
import { Page, pageSchema } from '../models/page';
import {
  ResponseAsyncProcessing,
  responseAsyncProcessingSchema,
} from '../models/responseAsyncProcessing';
import {
  ResponseBatchsCollection,
  responseBatchsCollectionSchema,
} from '../models/responseBatchsCollection';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';

export class BatchesController extends BaseController {
  /**
   * @param page       Use this field to specify paginate your results, by using page size and number.
   *                                    You can use one of the following methods: >/endpoint?page={ "number": 1,
   *                                    "size": 50 } > >/endpoint?page[number]=1&page[size]=50 >
   * @param order      Criteria used in query string parameters to order results.  Most fields from
   *                                    the endpoint results can be used as a `key`.  Unsupported fields or operators
   *                                    will return a `412`.  Array objects must be valid json. >/endpoint?order=[{
   *                                    "key": "created_ts", "operator": "asc"}] > >/endpoint?order=[{ "key": "balance",
   *                                    "operator": "desc"},{ "key": "created_ts", "operator": "asc"}] >
   * @param filterBy   Filter criteria that can be used in query string parameters.  Most fields from
   *                                    the endpoint results can be used as a `key`.  Unsupported fields or operators
   *                                    will return a `412`. >/endpoint?filter_by=[{ "key": "first_name", "operator":
   *                                    "=", "value": "Fred" }] > >/endpoint?filter_by=[{ "key": "account_type",
   *                                    "operator": "=", "value": "VISA" }] > >/endpoint?filter_by=[{ "key":
   *                                    "created_ts", "operator": ">=", "value": "946702799" }, { "key": "created_ts",
   *                                    "operator": "<=", value: "1695061891" }] > >/endpoint?filter_by=[{ "key":
   *                                    "last_name", "operator": "IN", "value": "Williams,Brown,Allman" }] >
   * @param expand     Most endpoints in the API have a way to retrieve extra data related to the
   *                                    current record being retrieved. For example, if the API request is for the
   *                                    accountvaults endpoint, and the end user also needs to know which contact the
   *                                    token belongs to, this data can be returned in the accountvaults endpoint
   *                                    request.
   * @param format     Reporting format, valid values: csv, tsv
   * @param typeahead  You can use any `field_name` from this endpoint results to order the list
   *                                    using the value provided as filter for the same `field_name`. It will be
   *                                    ordered using the following rules: 1) Exact match, 2) Starts with, 3) Contains.
   * @param fields     You can use any `field_name` from this endpoint results to filter the list of
   *                                    fields returned on the response.
   * @return Response from the API call
   */
  async listAllBatches(
    page?: Page,
    order?: Order19[],
    filterBy?: FilterBy[],
    expand?: ExpandEnum[],
    format?: Format1Enum,
    typeahead?: string,
    fields?: Field25Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseBatchsCollection>> {
    const req = this.createRequest('GET', '/v1/batches');
    const mapped = req.prepareArgs({
      page: [page, optional(pageSchema)],
      order: [order, optional(array(order19Schema))],
      filterBy: [filterBy, optional(array(filterBySchema))],
      expand: [expand, optional(array(expandEnumSchema))],
      format: [format, optional(format1EnumSchema)],
      typeahead: [typeahead, optional(string())],
      fields: [fields, optional(array(field25EnumSchema))],
    });
    req.query('page', mapped.page);
    req.query('order', mapped.order);
    req.query('filter_by', mapped.filterBy);
    req.query('expand', mapped.expand);
    req.query('_format', mapped.format);
    req.query('_typeahead', mapped.typeahead);
    req.query('fields', mapped.fields);
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    return req.callAsJson(responseBatchsCollectionSchema, requestOptions);
  }

  /**
   * @param batchId  Batch ID
   * @return Response from the API call
   */
  async settleABatch(
    batchId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseAsyncProcessing>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ batchId: [batchId, string()] });
    req.appendTemplatePath`/v1/batches/${mapped.batchId}/settle`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    return req.callAsJson(responseAsyncProcessingSchema, requestOptions);
  }
}
