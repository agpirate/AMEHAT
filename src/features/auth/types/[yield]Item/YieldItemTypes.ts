import { DataItemType,DataItemSchemaType } from '../[input]Item_Schema/SchemaInputItemTypes';

interface itemMetaType {id:string,index:number,group:Record<string,string>,groupName:string,groupValue:string}
export type YieldItemType =
    // | {  type: null }
    // | null
    | {  itemMeta:Partial<itemMetaType>,item: DataItemType }
    // | {  itemMeta:{groupName:string,groupValue:string},                              dataItem?: Partial<DataItemType>; }
    // | {  itemMeta:{id:string,index:number,groupName:string,groupValue:string}, };
    
export interface ValidationState {
    isValid: boolean;
    errors: Record<string, string> | {};
    touched: Record<string, boolean> | {};
  }

export default interface YieldItemSliceType {
      YieldItem: YieldItemType;

      validation: ValidationState;

  }


