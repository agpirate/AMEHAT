
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
  'activeprograms_subCategories':string[],
  'activeentertainment_subCategories':string[],
  'activelifestyle_subCategories':string[],

  recommended?:string[],
}


  //for the returning values.. sorting method
export interface SortDirection {
  field: string;
  direction: 'asc' | 'desc';
}

//Quering..for result searching
export interface FilterState {
  searchQuery: string;
  filterBasis: Record<string, string|number>;
  sortBy: SortDirection;
}
//retuning values strategies
export interface PaginationState { //for given query -- backend founds 100=totalItems -- itemsPerPage ?..totalPages--- & request page# to return
  totalItems: number; //for given(same) query... 100
  itemsPerPage: number;//tell backend... pageSize == 5

  totalPages: number;//calculated..20 pages

  currentPage: number;//request the pageNumber to be returned
}

//Summarized Query System
export interface ApiQueryParams {
  page?: number;
  limit?: number;

  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  [key: string]: any;

  key?:'',
  value?:'',
}

export interface ApiResponse<T> {
  data: T;
  pagination?: {
    total: number;
    pages: number;
  };
}


//Paginations
interface PaginationByPage {
  page?: number;
  pageSize?: number;
}

interface PaginationByOffset {
  start?: number;
  limit?: number;
}

type StrapiPagination = 
  | { pagination: PaginationByPage }
  | { pagination: PaginationByOffset };

//   Sort
  type SortOrder = 'asc' | 'desc';

interface SortParams {
  sort?: string | string[] | { [field: string]: SortOrder };
}

// Filter
type FilterOperator =
  | '$eq'
  | '$ne'
  | '$lt'
  | '$lte'
  | '$gt'
  | '$gte'
  | '$in'
  | '$notIn'
  | '$contains'
  | '$notContains'
  | '$containsi'
  | '$notContainsi'
  | '$null'
  | '$notNull'
  | '$between'
  | '$startsWith'
  | '$endsWith';

type FilterValue = string | number | boolean | Date | Array<string | number> | null;

interface StrapiFilter {
  [field: string]:
    | string 
    | number 
    | { [operator in FilterOperator]?: FilterValue }
    | { [operator in FilterOperator]?: [FilterValue, FilterValue] } // For between
    | StrapiFilter // For nested relations
    | Array<StrapiFilter>; // For $and/$or
}

interface filterBasis {
  filters?: StrapiFilter;
}

//---- 
interface FieldsParams {
  fields?: string[] | { [model: string]: string[] };
}

//----
interface PopulateParams {
  populate?:
    | string
    | string[]
    | Record<string,string | boolean>
    | { [relation: string]: { fields?: string[]; filters?: StrapiFilter } };
}
//--- 
export type backendQueryParams = 
  Partial<StrapiPagination> &
  Partial<filterBasis> &
  Partial<SortParams> &
  Partial<FieldsParams> &
  Partial<PopulateParams> & {
    publicationState?: 'live' | 'preview';
    locale?: string | string[];
  };


export type frontQFilters = {
  
    searchQuery:string,
    searchFields:string[],

    filterGlobalSetting:Record<string,string[]> | {}
    filterClientSetting:Record<string,string[]> | {}

    activeFeaturedGroup:Record<string,string> |Record<string,string[]>  | {}

    sortBy?: SortDirection;
  }
  

// Query slice types
export interface QuerySlice {
  featuredGroupOption:featuredGroupOptionsType;

  clientQFilters:frontQFilters;
  setclientSearchFilter: (query: string) => void;
  setclientGlobalQFilters: (key: string, value: any) => void; //
  setClientSettingQFilters: (key: string, value: any) => void; //
  setclientFeaturedGroupQFilters: (key: string, value: string[]) => void; //setclientFeaturedGroupQFilters

  removeClientSettingQFilters: (key: string) => void; //
  removeclientFeaturedGroupQFilters: (key: string) => void; //

  apiQueryParams:backendQueryParams;
  setapiQPage: (page: number) => void;
  setapiQItemsPerPage: (count: number) => void;
  setapiQPagination: (obj: Record<string,number> ) => void;  

  setapiQSort: (field: string, direction: 'asc' | 'desc') => void;

  setapiQSearchFilter: (query: string) => void;
  setapiQFilter: (obj: Record<string,string> | Record<string,any[]> ) => void;
}
