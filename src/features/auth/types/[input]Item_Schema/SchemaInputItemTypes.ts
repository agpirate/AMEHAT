// import { DataItem } from './modelDataTypes';
import { DataItemGroupsSchemaType,DataItemGroupsType } from './GroupType';


//------------Basic Types
//the schema
export interface DataItemSchemaType extends DataItemGroupsSchemaType {
      id?: { type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };
      name?: { type: string; fieldtype:string; validate: {}, };
      description?: { type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };
      createdAt?: { type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };
      updatedAt?: { type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };

      //--------------------sign
      //common
      email:{ type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };
      password:{ type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };
      confirmPassword:{ type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };

      polictyAgreement:{ type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };
      //signup
      username:{ type: string; fieldtype:string; validate: (value:any)=> any  ; required: true };

  }

//the DATA 
export interface DataItemType extends DataItemGroupsType {
      index?:number;
      
      id?: string;
      name?: string;

      
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
    
      breaking?:boolean,

      //--------------------sign
      //common
      username?: string;
      email?:string;
      password?:string;

      //signin
      authenticated?:boolean;
      token?:string,
      
      //signup
      firstName?: string;
      lastName?: string;
      confirmPassword?:string,
      polictyAgreement?:string,


    }

//----------- Slice(Operative) Types
export default interface DataItem_Model_SchemaSliceTypes {
  schemaDataItem: Partial<DataItemSchemaType>;
  // modelDataItemm: Partial<DataItemType>;
}
