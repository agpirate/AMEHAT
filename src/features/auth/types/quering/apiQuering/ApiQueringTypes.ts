//--- dataitem Paginations, the pagesize, totalpages
interface PaginationByPage   {page?: number;pageSize?: number}
interface PaginationByOffset {start?: number;limit?: number}
type Pagination = 
  | { pagination: PaginationByPage }
  | { pagination: PaginationByOffset };

//--- dataitems Sort order
export type SortOrder = 'asc' | 'desc';
interface SortParams {
  sort?: string | string[] | { [field: string]: SortOrder };
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
export type ApiQueringType = 
  Partial<AllQueringFilters> &
  Partial<Pagination> &
  Partial<SortParams> &
  Partial<FieldsParams> &
  Partial<PopulateParams> & 

  {
    publicationState?: 'live' | 'preview';
    locale?: string | string[];
  }  

// Query slice types
export default interface ApiQueringSliceType {

  apiQueringFilters:ApiQueringType;
  
}
  

