//Based on the modelSchema Grouping --- 


//Category Value ; for Default DataModel 
export interface groupValueType {
    locale: string,
    region: string,
    category: string, 
    
    categories: string,
    subcategories?: string,

    mediaType: string,
}

//Category Options ; for Default DataModel 
interface categoriesType {
  id: string;
  name: string;
  icon: string;
  groupName?:string;
  children?: Record<string,categoriesType>;
  
  featuredContent?:boolean
  type?:string
  subTitle?:string
}

export interface groupOptionsType {
  locale:string[],
  region:string[],

  categories?: Record<string,categoriesType>,
  // subcategories?: string,

  mediaType:string[],  

  //----
  breaking?:string,
}

export interface groupOptionsTypes {

  modelGroups:groupOptionsType;

} 

