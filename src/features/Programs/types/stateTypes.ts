export interface DataItem {
    id: string;
    name: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    // Add other fields as needed
  }
  
  export type ActiveView =
    | { type: 'none' }
    | { type: 'create'; draft: Partial<DataItem> }
    | { type: 'update'; id: string; draft: Partial<DataItem> }
    | { type: 'details'; id: string }
    | { type: 'delete'; id: string }
    | { type: 'comment'; id: string; text: string };
    
  export type Operation = {
    type: 'fetch' | 'create' | 'update' | 'delete' | 'comment';
    status: 'idle' | 'loading' | 'success' | 'error';
    error?: string;
  };
  

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
  
  export interface ApiQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
    [key: string]: any; // For additional filters
  }


  export interface AppState {
    // Core data
    items: DataItem[];
    
    // UI state
    active: ActiveView;
    operation: Operation | null;
    
    // Derived data getters
    getActiveItem: () => DataItem | null;
    
    // Actions
    setActive: (view: ActiveView) => void;
    startOperation: (type: Operation['type']) => void;
    completeOperation: (success: boolean, error?: string) => void;
    resetOperation: () => void;
    
    // CRUD Operations
    fetchItems: () => Promise<void>;
    createItem: (draft: Partial<DataItem>) => Promise<void>;
    updateItem: (id: string, updates: Partial<DataItem>) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;


    // ... existing state ...
  pagination: PaginationState;
  filters: FilterState;
  
  // New actions
  setPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  setSearchQuery: (query: string) => void;
  setFilter: (key: string, value: any) => void;
  setSort: (field: string, direction: 'asc' | 'desc') => void;
  resetFilters: () => void;

  }