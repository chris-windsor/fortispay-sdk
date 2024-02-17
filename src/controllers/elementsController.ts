/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Response401tokenError } from '../errors/response401tokenError';
import { Response412Error } from '../errors/response412Error';
import {
  ResponseTicketIntention,
  responseTicketIntentionSchema,
} from '../models/responseTicketIntention';
import {
  ResponseTransactionIntention,
  responseTransactionIntentionSchema,
} from '../models/responseTransactionIntention';
import {
  V1ElementsTicketIntentionRequest,
  v1ElementsTicketIntentionRequestSchema,
} from '../models/v1ElementsTicketIntentionRequest';
import {
  V1ElementsTransactionIntentionRequest,
  v1ElementsTransactionIntentionRequestSchema,
} from '../models/v1ElementsTransactionIntentionRequest';
import { BaseController } from './baseController';

export class ElementsController extends BaseController {
  /**
   * Elements uses a `TicketIntention` object to represent your intent to tokenize credit card
   * information from a customer.
   *
   * @param body
   * @return Response from the API call
   */
  async ticketIntention(
    body: V1ElementsTicketIntentionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTicketIntention>> {
    const req = this.createRequest('POST', '/v1/elements/ticket/intention');
    const mapped = req.prepareArgs({
      body: [body, v1ElementsTicketIntentionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    return req.callAsJson(responseTicketIntentionSchema, requestOptions);
  }

  /**
   * Elements uses a `TransactionIntention` object to represent your intent to collect payment from a
   * customer, tracking charge attempts and payment state changes throughout the process.
   *
   * @param body
   * @return Response from the API call
   */
  async transactionIntention(
    body: V1ElementsTransactionIntentionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransactionIntention>> {
    const req = this.createRequest(
      'POST',
      '/v1/elements/transaction/intention'
    );
    const mapped = req.prepareArgs({
      body: [body, v1ElementsTransactionIntentionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    return req.callAsJson(responseTransactionIntentionSchema, requestOptions);
  }
}
