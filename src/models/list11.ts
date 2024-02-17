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
import { ResourceEnum, resourceEnumSchema } from './resourceEnum';

export interface List11 {
  /** Signature */
  signature: string;
  /** Resource */
  resource: ResourceEnum;
  /** Resource ID */
  resourceId: string;
  /** Signature ID */
  id: string;
  /** Created Time Stamp */
  createdTs: number;
  /** Modified Time Stamp */
  modifiedTs: number;
  /** Raw Signature Information on `expand` */
  rawSignature?: string | null;
  [key: string]: unknown;
}

export const list11Schema: Schema<List11> = expandoObject({
  signature: ['signature', string()],
  resource: ['resource', resourceEnumSchema],
  resourceId: ['resource_id', string()],
  id: ['id', string()],
  createdTs: ['created_ts', number()],
  modifiedTs: ['modified_ts', number()],
  rawSignature: ['raw_signature', optional(nullable(string()))],
});
