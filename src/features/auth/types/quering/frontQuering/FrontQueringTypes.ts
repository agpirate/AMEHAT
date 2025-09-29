
export interface featuredGroupOptionsType  {

  locale:string[],
  region:string[],

  mediaType:string[],  

  //----
  breaking?:string[],
  //... local,region,categories,mediatype
  category:string[],
  related:string[],
  subcategory:string[],

  recommended?:string[],
}

//--- dataitem Paginations, the pagesize, totalpages
interface PaginationByPage   {page?: number;pageSize?: number}
interface PaginationByOffset {start?: number;limit?: number}
type Pagination = 
  | { pagination: PaginationByPage }
  | { pagination: PaginationByOffset };

//--- dataitems Sort order
type SortOrder = 'asc' | 'desc';
interface SortParams {
  sort?: string | string[] | { [field: string]: SortOrder };
}
  //for the returning values.. sorting method
export interface SortDirection {
  field: string;
  direction: SortOrder;
}

//
interface FieldsParams {
  fields?: string[] | { [model: string]: string[] };
}

//-- dataitem fields to returns
interface PopulateParams {
  populate?:
    | string
    | string[]
    | Record<string,string | boolean>
    | { [relation: string]: { fields?: string[]; filters?: MainQueringFilter } };
}

//--- dataitems filter query
type FilterOperator =
  | '$eq'  | '$ne'  | '$lt'  | '$lte'  | '$gt'  | '$gte'
  | '$in'  | '$notIn'  | '$contains'  | '$notContains'  | '$containsi'  | '$notContainsi'
  | '$null'  | '$notNull'  | '$between'
  | '$startsWith'  | '$endsWith';
type FilterValue = string | number | boolean | Date | Array<string | number> | null;
interface MainQueringFilter {
  [field: string]:
    | string 
    | number 
    | { [operator in FilterOperator]?: FilterValue }
    | { [operator in FilterOperator]?: [FilterValue, FilterValue] } // For between
    | MainQueringFilter // For nested relations
    | Array<MainQueringFilter>; // For $and/$or
}


interface AllQueringFilters {
  filters?: MainQueringFilter;
}

//--- 

export type frontQueringFilterTypes = {
  
    emailLogin: {email:string, password:string,phone?:number}

    searchQuery:string,

    searchFields:string[],

    filterGlobalSetting:Record<string,string[]> | {},
    mainFilters:Record<string,string[]> | {},
    
    activeFeaturedGroup:Record<string,string> |Record<string,string[]>  | {},

    sortBy?: SortDirection
  }

// Query slice types
export interface FrontQueringSliceType {

  featuredGroupOption:featuredGroupOptionsType;

  frontQueringFilters:frontQueringFilterTypes;

}
  
  export interface ApiResponse<T> {
    data: T;
    pagination?: {
      total: number;
      pages: number;
    };
}

