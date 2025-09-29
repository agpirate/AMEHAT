import * as yup from 'yup';

// import { DataItem } from './modelDataTypes';
import { groupValueType } from './modelGroupType';

export interface DataItemSchema {

    id: { type: string; validationRule: yup.StringSchema };
    name: { type: string; validationRule: yup.StringSchema };
    description?: { type: string; validationRule: yup.StringSchema };
    createdAt?: { type: string; validationRule: yup.StringSchema };
    updatedAt?: { type: string; validationRule: yup.StringSchema };

  }

  export interface DataItem extends groupValueType {
      index?: string;
      
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

// Data slice types
export interface ModelSchemaTypes {
  schema: Partial<DataItemSchema>;
  defaults: Partial<DataItem>;
}
