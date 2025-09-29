import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { apiService } from '../services/apiService'; // Adjust the import path as needed
import type { AppState, DataItem,ApiQueryParams } from '../types/stateTypes';


const initialState = {
    // ... existing initial state ...
    pagination: {
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 10,
      totalItems: 0,
    },
    filters: {
      searchQuery: '',
      filters: {},
      sortBy: {
        field: 'createdAt',
        direction: 'desc',
      },
    },
  };

export const useStore = create<AppState>()(immer((set, get) => ({

    pagination: {
        currentPage: 1,
        totalPages: 1,
        itemsPerPage: 10,
        totalItems: 0,
      },
      filters: {
        searchQuery: '',
        filters: {},
        sortBy: {
          field: 'createdAt',
          direction: 'desc',
        },
      },

  // Initial state
  items: [],
  active: { type: 'none' },
  operation: null,

  // Derived values
  getActiveItem: () => {
    const { active, items } = get();
    if (active.type === 'none' || active.type === 'create') return null;
    return items.find(item => item.id === active.id) || null;
  },
  
  // View management
  setActive: (view) => set({ active: view }),
  
  // Operation management
  startOperation: (type) => 
    set({ operation: { type, status: 'loading', error: undefined } }),
  
  completeOperation: (success, error) => 
    set(state => {
      if (!state.operation) return;
      state.operation.status = success ? 'success' : 'error';
      if (error) state.operation.error = error;
    }),
  
  resetOperation: () => set({ operation: null }),
  
  // CRUD Operations
// Pagination actions
  setPage: (page) => set(state => {
    state.pagination.currentPage = page;
  }),
  
  setItemsPerPage: (count) => set(state => {
    state.pagination.itemsPerPage = count;
    state.pagination.currentPage = 1; // Reset to first page
  }),

  // Filter actions
  setSearchQuery: (query) => set(state => {
    state.filters.searchQuery = query;
    state.pagination.currentPage = 1; // Reset to first page when searching
  }),
  
  setFilter: (key, value) => set(state => {
    state.filters.filters[key] = value;
    state.pagination.currentPage = 1; // Reset to first page when filtering
  }),
  
  setSort: (field, direction) => set(state => {
    state.filters.sortBy = { field, direction };
  }),
  
  resetFilters: () => set(state => {
    state.filters = initialState.filters;
    state.pagination.currentPage = 1;
  }),

  // Enhanced fetchItems with pagination and filters
  fetchItems: async () => {
    const { pagination, filters } = get();
    const queryParams: ApiQueryParams = {
      page: pagination.currentPage,
      limit: pagination.itemsPerPage,
      search: filters.searchQuery,
      sortBy: filters.sortBy.field,
      sortDirection: filters.sortBy.direction,
      ...filters.filters
    };

    get().startOperation('fetch');
    try {
      const response = await apiService.fetchItems(queryParams);
      set(state => {
        state.items = response.data;
        state.pagination = {
          ...state.pagination,
          totalItems: response.total,
          totalPages: Math.ceil(response.total / state.pagination.itemsPerPage)
        };
      });
      get().completeOperation(true);
    } catch (error) {
      get().completeOperation(false, error instanceof Error ? error.message : 'Failed to fetch items');
    }
  },
  
  createItem: async (draft) => {
    get().startOperation('create');
    try {
      const newItem = await apiService.createItem(draft);
      set(state => {
        state.items.push(newItem);
        state.active = { type: 'none' };
      });
      get().completeOperation(true);
    } catch (error) {
      get().completeOperation(false, error instanceof Error ? error.message : 'An unknown error occurred');
    }
  },
  
  updateItem: async (id, updates) => {
    get().startOperation('update');
    try {
      const updatedItem = await apiService.updateItem(id, updates);
      set(state => {
        const index: number = state.items.findIndex((item: DataItem) => item.id === id);
        if (index !== -1) {
          state.items[index] = updatedItem;
        }
        if (state.active.type === 'update' && state.active.id === id) {
          state.active.draft = { ...state.active.draft, ...updates };
        }
      });
      get().completeOperation(true);
    } catch (error) {
      get().completeOperation(false, error instanceof Error ? error.message : 'An unknown error occurred');
    }
  },
  
  deleteItem: async (id) => {
    get().startOperation('delete');
    try {
      await apiService.deleteItem(id);
      set(state => {
        state.items = state.items.filter((item: DataItem) => item.id !== id);
        if (state.active.type !== 'none' && state.active.id === id) {
          state.active = { type: 'none' };
        }
      });
      get().completeOperation(true);
    } catch (error) {
      get().completeOperation(false, error instanceof Error ? error.message : 'An unknown error occurred');
    }
  },
  
})));