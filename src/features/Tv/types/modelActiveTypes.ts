import * as yup from 'yup';

import { DataItemSchema } from './modelSchemaTypes';
import { DataItem } from './modelSchemaTypes';

export type ActiveView =
    | {  type: null }
    | {}
    | {  itemMeta:{id:string,index:number,groupName:string,groupValue:string} | null,draft: Partial<DataItem> | null, }
    | {  itemMeta:{groupName:string,groupValue:string},draft: Partial<DataItem>; }
    | {  itemMeta:{id:string,index:number,groupName:string,groupValue:string}, };


export interface ValidationState {
    isValid: boolean;
    errors: Record<string, string>;
    touched: Record<string, boolean>;
  }

  export interface ModelActiveTypes {
    
      
      active: ActiveView;

      // Data manipulation
      initialize: (schema: Partial<DataItemSchema>, defaults: Partial<DataItem>) => void;
      setActiveItem: (options:Record<string,string>,draft: Partial<DataItem>) => void;
      setActiveDraft: (draft: Partial<DataItem>) => void;
      setActiveItemMeta: (options:Record<string,string>) => void;
      clearActive: () => void;


    validation: ValidationState;
    validateItem: (item: Partial<DataItem>) => Promise<{ isValid: boolean; errors: Record<string, string> }>;
      
  }
