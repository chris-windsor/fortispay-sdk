/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { ReasonModelEnum, reasonModelEnumSchema } from './reasonModelEnum';

export interface LogEmail {
  /** Subject */
  subject: string;
  /** Body */
  body: string;
  /** Source Address */
  sourceAddress: string;
  /** Return Path */
  returnPath: string;
  /** Provider */
  providerId?: string | null;
  /** Domain */
  domainId?: string | null;
  /** Reason Sent */
  reasonSent?: string | null;
  /** Reason Model */
  reasonModel?: ReasonModelEnum | null;
  /** Reason Model */
  reasonModelId?: string | null;
  /** Reply To */
  replyTo?: string | null;
  /** Log Email Id */
  id: string;
  /** Created Time Stamp */
  createdTs: number;
  [key: string]: unknown;
}

export const logEmailSchema: Schema<LogEmail> = expandoObject({
  subject: ['subject', string()],
  body: ['body', string()],
  sourceAddress: ['source_address', string()],
  returnPath: ['return_path', string()],
  providerId: ['provider_id', optional(nullable(string()))],
  domainId: ['domain_id', optional(nullable(string()))],
  reasonSent: ['reason_sent', optional(nullable(string()))],
  reasonModel: ['reason_model', optional(nullable(reasonModelEnumSchema))],
  reasonModelId: ['reason_model_id', optional(nullable(string()))],
  replyTo: ['reply_to', optional(nullable(string()))],
  id: ['id', string()],
  createdTs: ['created_ts', number()],
});
