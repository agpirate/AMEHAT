import { create } from 'zustand';
import { apiService } from '../services/apiService';
import type { AppState, DataItem, DataItemSchema, ApiQueryParams, ApiResponse } from '../types/modelTypes';

export const useNewsStore = create<AppState>((set, get) => ({
  // Initial state
  schema: {},

  defaults: {},

  items: [],
  latestNews: [],
  categoryNews: {},

  // operations type
  operation: { type: null, status: 'idle' },
  //suboperations types
  suboperation: {
    fetch: null,
    create: null,
    update: null,
    delete: null,
    details: null,
  },
  // active model
  active: { type: null },

  validation: {
    isValid: false,
    errors: {},
    touched: {},
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
    totalItems: 0,
  },
  filters: {
    searchQuery: '',
    filters: {},
    sortBy: { field: 'createdAt', direction: 'desc' },
  },

  // Actions implementation
  initialize: (schema, defaults) => set({ schema, defaults }),

  startCreateOperation: (payload,subOp) => {
    const { defaults } = get();
    set({
      active: { type: 'create', draft: { ...defaults, ...payload } },
      operation: { type: 'create', status: 'idle' },
      suboperation: { ...get().suboperation, create: subOp ?? null },
    });
  },

  startUpdateOperation: (payload, subOp) => {
    const { items } = get();
    const item = items.find((i) => i.id === payload.id);
    if (!item) return;

    set({
      active: { type: 'update', draft: item, ...payload },
      operation: { type: 'update', status: 'idle' },
      suboperation: { ...get().suboperation, update: subOp ?? null },
    });
  },

  startDeleteOperation: (payload, subOp) => {
    const { items } = get();
    const item = items.find((i) => i.id === payload.id);
    if (!item) return;

    set({
      active: { type: 'delete', draft: item, ...payload },
      operation: { type: 'delete', status: 'idle' },
      suboperation: { ...get().suboperation, delete: subOp ?? null },
    });
  },

  startDetailsOperation: (payload, subOp) => {
    
    let item = null
    if(payload.category == 'latest'){item = get().latestNews[payload.index]}
    else{item = payload.category ? get().categoryNews[payload.category][payload.index] : null }
    if (!item) return;
    
    set({
      active: { type: 'details', draft: item, ...payload },
      operation: { type: 'details', status: 'idle' },
      suboperation: { ...get().suboperation, details: subOp ?? null },
    });
  },

  startFetchOperation: ( payload,subOp) => {
    set({
      operation: { type: 'fetch', status: 'idle' },
      suboperation: { ...get().suboperation, fetch: subOp ?? null },
    });
    if (payload) {
      get().setSearchQuery(payload.search || '');
      if (payload.page) get().setPage(payload.page);
      if (payload.sortBy && payload.sortDirection) {
        get().setSort(payload.sortBy, payload.sortDirection);
      }
    }
  },

  setSubOperation: (subOp) => set({ suboperation: { ...get().suboperation, ...subOp } }),

  startOperation: (type) => set({ operation: { type, status: 'loading' } }),
  completeOperation: (status, error) => {
    set((state) => ({
      operation: {
        ...state.operation,
        status,
        error: status === 'error' ? error : undefined,
      },
    }));
  },
  resetOperation: () => set({ operation: { type: null, status: 'idle' } }),



  // api functions
  fetchHomeData: async () => {
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
    // Fetch latest news
    const latest = await apiService.fetchItemsHome(queryParams);

    // Fetch news by categories
    const categories = ['politics', 'sports', 'entertainment'];
    const categoryNews: Record<string, DataItem[]> = {};
    
    for (const category of categories) {
      const response = await apiService.fetchItemsHome({
        ...queryParams,
        search: category,
        category // Assuming your API supports category filtering
      });
      categoryNews[category] = response.data;
    }

    // Update state
    set({ 
      latestNews: latest.data,
      categoryNews,
      operation: { type: 'fetch', status: 'success' }
    });

    // No return value to match Promise<void>
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch home data';
    get().completeOperation('error', error instanceof Error ? error.message : 'Failed to create item');
    console.error("Fetch error:", error);
    throw error; // Re-throw if you want components to handle it
  }
  },

  createItem: async () => {
    const { active, validateItem } = get();
    if (active.type !== 'create') return;

    try {
      const validation = await validateItem(active.draft);
    //   if (!validation.isValid) {
    //     set({ validation });
    //     throw new Error('Validation failed');
    //   }

      get().startOperation('create');
      const newItem = await apiService.createItem(active.draft);
      set((state) => ({
        items: [newItem, ...state.items],
        active: { type: null },
      }));
      get().completeOperation('success');
      return { data: newItem };
    } catch (error) {
      get().completeOperation('error', error instanceof Error ? error.message : 'Failed to create item');
      return undefined;
    }
  },

  updateItem: async () => {
    const { active, validateItem } = get();
    if (active.type !== 'update') return;

    try {
      const validation = await validateItem(active.draft);
    //   if (!validation.isValid) {
    //     set({ validation });
    //     throw new Error('Validation failed');
    //   }

      get().startOperation('update');
      const updatedItem = await apiService.updateItem(active.id, active.draft);
      set((state) => ({
        items: state.items.map((item) => (item.id === active.id ? updatedItem : item)),
        active: { type: null },
      }));
      get().completeOperation('success');
      return { data: updatedItem };
    } catch (error) {
      get().completeOperation('error', error instanceof Error ? error.message : 'Failed to update item');
      return undefined;
    }
  },

  deleteItem: async () => {
    const { active } = get();
    if (active.type !== 'delete') return;

    try {
      get().startOperation('delete');
      await apiService.deleteItem(active.id);
      set((state) => ({
        items: state.items.filter((item) => item.id !== active.id),
        active: { type: null },
      }));
      get().completeOperation('success');
      return { data: undefined };
    } catch (error) {
      get().completeOperation('error', error instanceof Error ? error.message : 'Failed to delete item');
      return undefined;
    }
  },

  fetchItems: async () => {
    try {
      const { pagination, filters } = get();
      const params: ApiQueryParams = {
        page: pagination.currentPage,
        limit: pagination.itemsPerPage,
        search: filters.searchQuery,
        sortBy: filters.sortBy.field,
        sortDirection: filters.sortBy.direction,
      };

      get().startOperation('fetch');
      const response = await apiService.fetchItems(params);
      set({
        items: response.data,
        pagination: {
          ...pagination,
          totalItems: response.pagination?.total || 0,
          totalPages: response.pagination?.pages || 1,
        },
      });
      get().completeOperation('success');
      return response;
    } catch (error) {
      get().completeOperation('error', error instanceof Error ? error.message : 'Failed to fetch items');
      return undefined;
    }
  },

  fetchItemDetails: async () => {
    const { active } = get();
    if (active.type !== 'details') return;

    try {
      get().startOperation('details');
      const response = await apiService.fetchItems({ id: active.id });
      set({
        active: { ...active, draft: response.data[0] },
      });
      get().completeOperation('success');
      return { data: response.data[0] };
    } catch (error) {
      get().completeOperation('error', error instanceof Error ? error.message : 'Failed to fetch item details');
      return undefined;
    }
  },


  setActiveDraft: (draft) => {
    set((state) => {
      if (
        state.active.type === null ||
        !('draft' in state.active) ||
        typeof state.active.draft !== 'object'
      ) {
        return state;
      }
      return {
        active: { ...state.active, draft: { ...state.active.draft, ...draft } },
        validation: {
          ...state.validation,
          touched: Object.keys(draft).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            state.validation.touched
          ),
        },
      };
    });
  },
  clearActive: () => set({ active: { type: null }, validation: { isValid: false, errors: {}, touched: {} } }),

  setPage: (page) => set((state) => ({ pagination: { ...state.pagination, currentPage: page } })),
  setItemsPerPage: (count) =>
    set((state) => ({ pagination: { ...state.pagination, itemsPerPage: count, currentPage: 1 } })),
  setSearchQuery: (query) =>
    set((state) => ({
      filters: { ...state.filters, searchQuery: query },
      pagination: { ...state.pagination, currentPage: 1 },
    })),
  setSort: (field, direction) =>
    set((state) => ({
      filters: { ...state.filters, sortBy: { field, direction } },
    })),
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        filters: { ...state.filters.filters, [key]: value },
      },
      pagination: { ...state.pagination, currentPage: 1 },
    })),

  validateItem: async (item) => {
    const { schema } = get();
    const errors: Record<string, string> = {};

    // Simplified validation - in a real app you'd use your schema
    for (const [key, fieldSchema] of Object.entries(schema)) {
      if (fieldSchema.validationRule && !item[key as keyof DataItem]) {
        errors[key] = `${key} is required`;
      }
    }

    const isValid = Object.keys(errors).length === 0;
    set({ validation: { isValid, errors, touched: Object.keys(item).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } });
    return { isValid, errors };
  },
}));