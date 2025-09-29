import { DataItemType } from '../[input]Item_Schema/SchemaInputItemTypes';

interface itemMetaType {id:string,index:number,group:Record<string,string>,groupName:string,groupValue:string}


  export default interface SettingDataItemActiveType {


      resetActiveItem: () => void; //use defaultDataItem with no ItemMeta
      setActiveItem: (    itemMeta:Partial<itemMetaType>,dataItem: Partial<DataItemType>) => void; //set the activeItem ( dataItem & meta)

      setActiveItemMeta: (itemMeta:Partial<itemMetaType> ) => void; //set itemmeta
      setYieldItem: (                                  dataItem: Partial<DataItemType>) => void; //set dataItem
      setYieldItemField: (field:string,value: any) => void; //set dataItem

      validateItem: (item: Partial<DataItemType>) => Promise<{ isValid: boolean; errors: Record<string, string> }>;
      validateItemField: (field:string,value: any) => void;
        
  }
