
import { DataItemSchema,DataItem,ActiveView,ValidationState } from "./modelTypes";
import { categoryType} from "./modelCategoryType";
import { Operation,SubOperation,OperationType,OperationStatus } from "./operationTypes";
import { PaginationState,FilterState,ApiQueryParams,ApiResponse,backendQueryParams, frontQFilters} from "./queryTypes";

// // Normal import (might include runtime code)
// import { SomeType, someFunction } from './module';

// // Type-only import (only for type checking)
// import type { SomeType } from './module';

export interface AppState {
  // State properties
  schema: Partial<DataItemSchema>;
  defaults: Partial<DataItem>;
  category:categoryType;

  items: DataItem[];
  latestNews: DataItem[];
  categoryNews: Record<string, DataItem[]>;

  active: ActiveView;
  operation: Operation;
  suboperation: SubOperation;
  validation: ValidationState;

  pagination: PaginationState;
  filters: FilterState;

  ffiltersQuery:frontQFilters;
  queries:backendQueryParams;
  // sort:string;//'createdAt:desc/asc

  // Actions
  initialize: (schema: Partial<DataItemSchema>, defaults: Partial<DataItem>) => void;
  
  // Operation management
  startCreateOperation: (payload?: Partial<DataItem>,subOp?: SubOperation['create'],) => void;
  startUpdateOperation: (payload: { id: string; index: number,category?:string }, subOp?: SubOperation['update']) => void;
  startDeleteOperation: (payload: { id: string; index: number,category?:string }, subOp?: SubOperation['delete']) => void;
  startDetailsOperation: (payload: { id: string; index: number,category?:string }, subOp?: SubOperation['details']) => void;
  startFetchOperation: (  payload?: Record<string,string>,subOp?: SubOperation['fetch'],) => void;
  ActiveFetchOperation: (  payload?: ApiQueryParams,subOp?: SubOperation['fetch'],) => void;

  setSubOperation: (subOp: Partial<SubOperation>) => void;
  completeOperation: (status: Exclude<OperationStatus, 'loading'>, error?: string) => void;
  resetOperation: () => void;
  
  // New actions
  initOperation: (type: OperationType) => void;
  startOperation: (type: OperationType) => void;
  fetchHomeData: () => Promise<void>;
  
  // Enhanced CRUD operations with status management
  createItem: () => Promise<ApiResponse<DataItem> | undefined>;
  updateItem: () => Promise<ApiResponse<DataItem> | undefined>;
  deleteItem: () => Promise<ApiResponse<void> | undefined>;
  fetchItems: () => Promise<ApiResponse<DataItem[]> | undefined>;
  fetchItemDetails: (id:string) => Promise<ApiResponse<DataItem> | undefined>;
  
  // Data manipulation
  setActiveDraft: (draft: Partial<DataItem>) => void;
  clearActive: () => void;
  
  // Pagination and filtering
  setPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  setSort: (field: string, direction: 'asc' | 'desc') => void;

  setSearchFQuery: (query: string) => void;
  setFFilter: (key: string, value: any) => void; //
  appendFFilter: (key: string, value: string[]) => void; //appendFFilter

  setSearchQuery: (query: string) => void;
  setFilterQuery: (obj: Record<string,string> | {}) => void;
  setFilter: (key: string, value: any) => void;
  
  // Validation
  validateItem: (item: Partial<DataItem>) => Promise<{ isValid: boolean; errors: Record<string, string> }>;
}
