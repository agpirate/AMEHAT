import * as yup from 'yup';

export interface DataItem {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DataItemSchema {
  id: { type: string; validationRule: yup.StringSchema };
  name: { type: string; validationRule: yup.StringSchema };
  description?: { type: string; validationRule: yup.StringSchema };
  createdAt?: { type: string; validationRule: yup.StringSchema };
  updatedAt?: { type: string; validationRule: yup.StringSchema };
}

export type OperationType = null | 'fetch' | 'create' | 'update' | 'delete' | 'details';
type OperationStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Operation {
  type: OperationType;
  status: OperationStatus;
  error?: string;
}

export interface SubOperation {
  fetch: null | 'searchBox' | 'home' | '';
  create: null | 'createBox';
  update: null | 'updateBox';
  delete: null | 'options';
  details: null | 'selected';
}

export type ActiveView =
  | { type: null }
  | { type: 'create'; draft: Partial<DataItem>,category?:string }
  | { type: 'update'; draft: Partial<DataItem>; id: string; index: number,category?:string }
  | { type: 'details'; draft: Partial<DataItem>; id: string; index: number,category?:string }
  | { type: 'delete'; draft: Partial<DataItem>; id: string; index: number ,category?:string}
  | { type: 'fetch',category?:string };

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface SortDirection {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterState {
  searchQuery: string;
  filters: Record<string, any>;
  sortBy: SortDirection;
}

export interface ValidationState {
  isValid: boolean;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

export interface ApiQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  [key: string]: any;
}

export interface ApiResponse<T> {
  data: T;
  pagination?: {
    total: number;
    pages: number;
  };
}

export interface AppState {
  // State properties
  schema: Partial<DataItemSchema>;
  defaults: Partial<DataItem>;

  items: DataItem[];
  latestNews: DataItem[];
  categoryNews: Record<string, DataItem[]>;
  active: ActiveView;
  operation: Operation;
  suboperation: SubOperation;
  validation: ValidationState;
  pagination: PaginationState;
  filters: FilterState;

  // Actions
  initialize: (schema: Partial<DataItemSchema>, defaults: Partial<DataItem>) => void;
  
  // Operation management
  startCreateOperation: (payload?: Partial<DataItem>,subOp?: SubOperation['create'],) => void;
  startUpdateOperation: (payload: { id: string; index: number,category?:string }, subOp?: SubOperation['update']) => void;
  startDeleteOperation: (payload: { id: string; index: number,category?:string }, subOp?: SubOperation['delete']) => void;
  startDetailsOperation: (payload: { id: string; index: number,category?:string }, subOp?: SubOperation['details']) => void;
  startFetchOperation: (  payload?: ApiQueryParams,subOp?: SubOperation['fetch'],) => void;

  setSubOperation: (subOp: Partial<SubOperation>) => void;
  completeOperation: (status: Exclude<OperationStatus, 'loading'>, error?: string) => void;
  resetOperation: () => void;
  
  // New actions
  startOperation: (type: OperationType) => void;
  fetchHomeData: () => Promise<void>;
  
  // Enhanced CRUD operations with status management
  createItem: () => Promise<ApiResponse<DataItem> | undefined>;
  updateItem: () => Promise<ApiResponse<DataItem> | undefined>;
  deleteItem: () => Promise<ApiResponse<void> | undefined>;
  fetchItems: () => Promise<ApiResponse<DataItem[]> | undefined>;
  fetchItemDetails: () => Promise<ApiResponse<DataItem> | undefined>;
  
  // Data manipulation
  setActiveDraft: (draft: Partial<DataItem>) => void;
  clearActive: () => void;
  
  // Pagination and filtering
  setPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  setSearchQuery: (query: string) => void;
  setSort: (field: string, direction: 'asc' | 'desc') => void;
  setFilter: (key: string, value: any) => void;
  
  // Validation
  validateItem: (item: Partial<DataItem>) => Promise<{ isValid: boolean; errors: Record<string, string> }>;
}