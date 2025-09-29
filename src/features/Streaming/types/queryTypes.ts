   
//Quering..for result searching
export interface FilterState {
  searchQuery: string;
  filtersParams: Record<string, string|number>;
  sortBy: SortDirection;
}
//retuning values strategies
export interface PaginationState { //for given query -- backend founds 100=totalItems -- itemsPerPage ?..totalPages--- & request page# to return
  totalItems: number; //for given(same) query... 100
  itemsPerPage: number;//tell backend... pageSize == 5

  totalPages: number;//calculated..20 pages

  currentPage: number;//request the pageNumber to be returned
}
//for the returning values.. sorting method
export interface SortDirection {
  field: string;
  direction: 'asc' | 'desc';
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

interface FiltersParams {
  filters?: StrapiFilter;
}

// 
interface FieldsParams {
  fields?: string[] | { [model: string]: string[] };
}

// 
interface PopulateParams {
  populate?:
    | string
    | string[]
    | { [relation: string]: { fields?: string[]; filters?: StrapiFilter } };
}

export type backendQueryParams = 
  Partial<StrapiPagination> &
  Partial<FiltersParams> &
  Partial<SortParams> &
  Partial<FieldsParams> &
  Partial<PopulateParams> & {
    publicationState?: 'live' | 'preview';
    locale?: string | string[];
  };

//   pagination: { page: 1, pageSize: 10 },
//   filters: {
//     title: { $containsi: 'strapi' },
//     rating: { $gte: 4 },
//     author: { name: { $eq: 'John Doe' } }
//   },
//   sort: 'createdAt:desc',
//   populate: ['author', 'categories'],
//   fields: ['title', 'slug', 'createdAt']


interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export type frontQFilters = {
    searchQuery:string,
    searchFields:string[],
    filtersParam:Record<string,string[]> | {}
    filtersParamSide:Record<string,string> | {}
  }