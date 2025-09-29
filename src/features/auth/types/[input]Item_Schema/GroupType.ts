//Based on the modelSchema Grouping --- 


//--------------- Basic Types
export interface DataItemGroupsSchemaType { 
    locale: {type:string,rules:{}},
    region: {type:string,rules:{}},
    category: {type:string,rules:{}}, 
    
    categories: {type:string,rules:{}},
    subcategories?: {type:string,rules:{}},

    mediaType: {type:string,rules:{}},
}

export interface DataItemGroupsType {
    locale?: string,
    region?: string,
    category?: string, 
    
    categories?: string,
    subcategories?: string,

    mediaType?: string,
}

interface CategoriesGroupType {
  id: string;
  name: string;
  icon: string;
  groupName:string;
  children?: Record<string,CategoriesGroupType>;
  
  featuredContent?:boolean
  type?:string
  subTitle?:string
}

export interface DataItemGroupsOptionsType {
  locale:string[],
  region:string[],
  
  categories?: Record<string,CategoriesGroupType>,
  // subcategories?: string,
  mediaType:string[],  
  //---- 
  breaking?:string,
}



//---------- Slice(Operative) Types
export default interface DataItemGroupsOptionsSclieTypes {
  DataItemGroupsOptions:DataItemGroupsOptionsType;
} 