import { create } from 'zustand';
import { apiService } from '../services/apiService';
import type { DataItem,  } from '../types/modelTypes';
import type {backendQueryParams } from '../types/queryTypes';
import {defaultDataItem,categories,categoriesHome,defaultOperation,defaultSubOperation,queryParams,ffiltersQueryParams} from "../models/dataItem"

import { AppState} from '../types'

export const useNewsStore = create<AppState>((set, get) => ({
  // Initial state
  schema: {},
  defaults: defaultDataItem,

  category:categories,
  categoryHome:categoriesHome,

  items: [],
  latestNews: [],
  categoryNews: {},
  // active model
  active: { type: null },

  // operations and suboperations
  operation:defaultOperation,
  suboperation:defaultSubOperation,

  validation: {
    isValid: false,
    errors: {},
    touched: {},
  },

  pagination: {
    currentPage: 1,
    itemsPerPage: 2,

    totalPages: 1,
    totalItems: 0,
  },
  filters: {
    searchQuery: '',
    filtersParams: {locale:'en',region:'tigrai',category:'home',mediaType:'tv'},
    sortBy: { field: 'createdAt', direction: 'desc' as 'desc' },
  },
  

  ffiltersQuery:ffiltersQueryParams,
  queries:queryParams,

  // Actions implementation
  initialize: (schema, defaults) => set({ schema, defaults }),

  startCreateOperation: (payload,subOp) => {
    get().initOperation('create')
    get().setSubOperation({ create: subOp ?? null })

    const { defaults } = get();
    set({
      active: { ...{type: 'create'},...get().active },
      operation: { type: 'create', status: 'idle' },
    });
    get().setSubOperation({ create: subOp ?? null })
    get().setActiveDraft({...defaults,...payload})
  },

  startUpdateOperation: (payload, subOp) => {
    get().initOperation('update')
    get().setSubOperation({ update: subOp ?? null })

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
    get().initOperation('delete')
    get().setSubOperation({ delete: subOp ?? null })

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
    get().initOperation('details')
    get().setSubOperation({ details: subOp ?? null })

    let catcategory = get().filters.filtersParams.category;
    let item = null

    if((catcategory == 'latest') || (catcategory == 'home')){item = get().latestNews[payload.index]}
    else{item = catcategory ? get().categoryNews[catcategory][payload.index] : null }
    if (!item) return;
    
    set({
      // active: { type: 'details', draft: item, ...payload },
      suboperation: { ...get().suboperation, details: subOp ?? null },
    });
    get().fetchItemDetails(payload.id)

    if(payload.category ?? false){
    get().setFilter('category',payload.category)
    switch(payload.category){
      case 'home':
        item = get().latestNews[payload.index]
      case 'latest':
        item = get().latestNews[payload.index]
      default:
        item = catcategory ? get().categoryNews[catcategory][payload.index] : null 
    }
  }
  },

  startFetchOperation: (payload,subOp) => { //payload={category:['value']}
    get().initOperation('fetch') //
    get().setSubOperation({ fetch: subOp ?? null })
    
    get().setFFilter(payload?.key ?? '',payload?.value ?? '') //mainfilter operations    
    get().appendFFilter('category',['sport','economy3'])
    // get().appendFFilter('category2',['sport2'])

    // console.log('passive Search started',get().ffiltersQuery.filtersParam)
  },

  ActiveFetchOperation: (payload,subOp) => {
    get().initOperation('fetch')
    get().setSubOperation({ fetch: subOp ?? null })

    //-------
    get().appendFFilter('category',['sport','economy'])
    get().appendFFilter('category2',['sport','economy'])
    console.log('active Search started')
  },

  setSubOperation: (subOp) => set({ suboperation: { ...get().suboperation, ...subOp } }),
  initOperation: (type) => set({ operation: { type, status: 'idle' } }),
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
  fetchHomeData: async () => { //filed,mainValue
    
  //build search queries and categories format
  get().startOperation('fetch');
  try {
  let q = buildStrapiQuery(get().ffiltersQuery.filtersParam,'')//{'category': ['$eq','home'], 'locale': ['$eq','en']}
  // //-----------
  get().setFilterQuery(q)
  // //-----------
  // // Fetch latest news 
  // const latest = await apiService.fetchItems(get().queries);
  // get().items = latest.data
  // Get the data with proper typing
  //choosing the main filtering_columns
  const filtersValuesSide = Object.entries(get().ffiltersQuery.filtersParamSide ?? {});
  let maxLength = -1;
  let result: { key: string; values: string[]; operator: string } | null = null;
  for (const [key, values] of filtersValuesSide) {
    const normalizedValues = Array.isArray(values) ? values : [values];    
    if (normalizedValues.length > 0) {
      const valueCount = normalizedValues.length - 1;
      if (valueCount > maxLength) {
        maxLength = valueCount;
        result = {key,values: normalizedValues.slice(1) as string[],operator: normalizedValues[0] as string 
        };
      }
    }
  }
  //choose result.key as the main filter key
  console.log("Home Search2",q,get().ffiltersQuery.filtersParam)

  let otherfiltersParamSide: Record<string, any> = {};
  let mainfiltersParamSide: any = {};
  if (result && get().ffiltersQuery.filtersParamSide) {
    const { [result.key]: _, ...rest } = get().ffiltersQuery.filtersParamSide as Record<string, any>;
    otherfiltersParamSide = rest;
    mainfiltersParamSide = { [result.key]: _ };
  }

  const results = {};
  if(result){
    await Promise.all(
    result.values.map(async (value) => {

      const q = buildStrapiQuery({ [result.key]: [result.operator,value],...otherfiltersParamSide },'' );
      get().setFilterQuery(q)
      
      // const latest = await apiService.fetchItems(get().queries);
      // get().items = latest.data

      console.log("Home Search1====",q,get().queries,'------',get().ffiltersQuery.filtersParamSide)

      // results[value] = response;
    })
  );

  }
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
      const params: backendQueryParams = {};
      
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

  fetchItemDetails: async (id) => {
    const { active } = get();
    if (get().operation.type !== 'details') return;
    let queryParams:Partial<backendQueryParams> ={ 
      filters:{id}
    }
    
    try {
      get().startOperation('details');
      const response = await apiService.fetchItems(queryParams);
      set({
        active:
          active && active.type && active.type !== null && ('draft' in active)
            ? { ...active, draft: response.data[0] }
            : active,
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
  //-----------------
  setPage: (page) => set((state) => ({ queries: { ...state.queries,pagination:{...state.queries.pagination,page} } })),
  setItemsPerPage: (count) =>
    set((state) => ({ queries: { ...state.queries,pagination:{...state.queries.pagination,pageSize:count,page:1}} })),
    
  setSort: (field, direction) =>
    set((state) => ({
      queries: { ...state.queries, sort: String(field)+':'+String(direction) },
    })),
    //------------ 
  setSearchFQuery: (query = '') =>
    set((state) => ({
      ffiltersQuery: { ...state.ffiltersQuery, searchQuery: query,searchFields:['title','description'] },//filter,search
      //defualting queries
      queries: { ...state.queries,pagination:{...state.queries.pagination,pageSize:20,page:1}}
    })),
  setFFilter: (key, value) => //holds the main key:values 
  {
    get().ffiltersQuery.filtersParam = { [key]:['$eq',value]}
    //defualting queries
    get().queries.pagination = {...get().queries.pagination,pageSize:20,page:1}

    //     set((state) => ({
    //   ffiltersQuery: { ...state.ffiltersQuery,filtersParams:{...state.ffiltersQuery.filtersParam,[key]:['$eq',value]} },//filter,search
    //   //----
    //   queries: { ...state.queries,pagination:{...state.queries.pagination,pageSize:20,page:1}}
    // })),
  },

  appendFFilter: (key: string, list: string[]) => { //appending list to side fetch. 
    // Ensure filtersParamSide is always a Record<string, any[]>
    const filtersParamSide = get().ffiltersQuery.filtersParamSide as Record<string, any[]>;
    let existingList = (filtersParamSide[key] || [])//.slice(1);
    get().ffiltersQuery.filtersParamSide = { ...filtersParamSide, [key]: ['$eq',...list] };
    // get().queries.pagination = {...get().queries.pagination,pageSize:5,page:1}
  },
  
  //---------    
  setSearchQuery: (query = '') =>
    set((state) => ({
      filters: { ...state.filters, searchQuery: query },
      queries: { ...state.queries,pagination:{...state.queries.pagination,pageSize:20,page:1}}
    })),
  setFilterQuery: (obj ={}) =>
   {
    get().queries.filters = obj//{...get().queries.filters,filters:{}}
   },

  setFilter: (key, value) =>
    // set({filters:{...get().filters,[key]:value}})
    // get().queries.filters = {...get().queries,filters:{...ge}} 
    
    set((state) => ({
      filters: {
        ...state.filters,
        filtersParams: { ...state.filters.filtersParams, [key]: value },
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

  //-------------------

}));


function buildStrapiQuery(
  filters: Record<string, any[]> = {}, //{'category': ['$eq','sport'], 'locale': ['$eq','en']}
  searchQuery: string = '',
) {
  // Initialize the query structure 
  const query: Record<string, any> =  {};
  
  // Process each filter
  for (const [field, conditions] of Object.entries(filters)) {
    if (!Array.isArray(conditions)) continue;
    
    const [operator, ...values] = conditions;

    // Handle different operators 
    switch (operator) { 
      case '$eq':
        if (values.length === 1) {
          query[field] = { [operator]: values[0] };
        } else {
          query[field] = { '$in': values };
        }
        break;
      case '$contain':
        query[field] = { '$contains': values[0] };
        break;
      // Add more operators as needed 
      default:
        query[field] = { [operator]: values[0] };
    }
  }

  // Add search query to title and description if provided
  if (searchQuery) {
    query['$or'] = [
      { title: { '$containsi': searchQuery } },
      { description: { '$containsi': searchQuery } }
    ];
  }

  return query;
}