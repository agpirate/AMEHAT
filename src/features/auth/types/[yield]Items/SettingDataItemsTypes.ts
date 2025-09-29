import { DataItemType,DataItemSchemaType } from '../[input]Item_Schema/SchemaInputItemTypes';

interface itemMetaType {id:string,index:number,group:Record<string,string>,groupName:string,groupValue:string}
export type YieldItemType =
    // | {  type: null }
    // | null
    | {  itemMeta:Partial<itemMetaType> | null,dataItem?: Partial<DataItemType> | null, }
    // | {  itemMeta:{groupName:string,groupValue:string},                              dataItem?: Partial<DataItemType>; }
    // | {  itemMeta:{id:string,index:number,groupName:string,groupValue:string}, };
    
export interface ValidationState {
    isValid: boolean;
    errors: Record<string, string>;
    touched: Record<string, boolean>;
  }

  export default interface SettingDataItemActiveType {


      resetActiveItem: () => void; //use defaultDataItem with no ItemMeta
      setActiveItem: (    itemMeta:Partial<itemMetaType>,dataItem: Partial<DataItemType>) => void; //set the activeItem ( dataItem & meta)

      setActiveItemMeta: (itemMeta:Partial<itemMetaType> ) => void; //set itemmeta
      setYieldItem: (                                  dataItem: Partial<DataItemType>) => void; //set dataItem
    
      validation: ValidationState;
      validateItem: (item: Partial<DataItemType>) => Promise<{ isValid: boolean; errors: Record<string, string> }>;
        
  }
