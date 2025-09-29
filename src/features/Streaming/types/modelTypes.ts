import * as yup from 'yup';
import { categoryDataType} from './modelCategoryType'

export interface DataItem extends categoryDataType {
  id: string;
  name: string;

  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  video?: string;

  createdAt?: string;
  updatedAt?: string;

  adsLinki?: string;
  adsLinkii?: string;
  adsLinkiii?: string;

  breaking:boolean,
}

export interface DataItemSchema {
  id: { type: string; validationRule: yup.StringSchema };
  name: { type: string; validationRule: yup.StringSchema };
  description?: { type: string; validationRule: yup.StringSchema };
  createdAt?: { type: string; validationRule: yup.StringSchema };
  updatedAt?: { type: string; validationRule: yup.StringSchema };
}


export type ActiveView =
  | { type: null }
  | { type: 'create'; draft: Partial<DataItem>,category?:string }
  | { type: 'update'; draft: Partial<DataItem>; id: string; index: number,category?:string }
  | { type: 'details'; draft: Partial<DataItem>; id: string; index: number,category?:string }
  | { type: 'delete'; draft: Partial<DataItem>; id: string; index: number ,category?:string}
  | { type: 'fetch',category?:string };


export interface ValidationState {
  isValid: boolean;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

