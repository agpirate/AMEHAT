import { StateCreator } from 'zustand';
import {  ModelDataTypes } from '../types/modelDataTypes';
import {  AppStore } from '../types';

import { apiService } from '../services/apiService';
// import {defaultDataItem,defaultOperation,defaultSubOperation} from "../models/dataItem"

export const createModelDataSlice: StateCreator<
  AppStore,
  [],
  [],
  ModelDataTypes
> = (set, get) => ({

  // modelActiveGroups,
  items: [], // Array<DataItem> - holds all news items
  
  createItem: async () => {
    const { active, validateItem } = get();
    if (active.type !== 'create') return;

    try {
    if (!('draft' in active)) throw new Error('No draft found in active state');
      const validation = await validateItem(active.draft);
      //if (!validation.isValid) {
      //   set({ validation });
      //   throw new Error('Validation failed');
      //}; 
      
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
    if (!('draft' in active)) throw new Error('No draft found in active state');
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
    if (!('draft' in active)) throw new Error('No draft found in active state');
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
  //build search apiQueryParams and categories format 
  get().startOperation('fetch');
  try {
   get().setapiQPagination({pageSize:20,page:1}) //setting the apiQueryParams filters
  // let filterClientSetting = buildapiFilter(get().clientQFilters.filterClientSetting,'')//{'category': ['$eq','home'], 'locale': ['$eq','en']}
  //-----------
  get().setapiQFilter(get().clientQFilters.filterClientSetting)//{'category':{'$eq':'home'}, 'locale':{'$eq':'en'}}
  //-----------
  
  // // Fetch latest news    
  const items = await apiService.fetchItems(get().apiQueryParams);
  get().items = items.data ?? []

  // console.log('Items','---',get().items.length)
  
    // await get().fetchFeaturedGroupData()

    get().completeOperation(get().items.length ? 'success' : 'empty');
    return items
  } catch (error) {
    get().completeOperation('error', error instanceof Error ? error.message : 'Failed to create item');
    throw error; // Re-throw if you want components to handle it
  }
  },

  fetchItemDetails: async (id) => {
      get().startOperation('fetch');
      try {
      get().setapiQPagination({pageSize:1,page:1}) //setting the apiQueryParams filters
      // let filterClientSetting = buildapiFilter(get().clientQFilters.filterClientSetting,'')//{'category': ['$eq','home'], 'locale': ['$eq','en']}
      //-----------
      get().setapiQFilter(get().clientQFilters.filterClientSetting)//{'category':{'$eq':'home'}, 'locale':{'$eq':'en'}}
      //-----------
      // // Fetch latest news    
      const items = await apiService.fetchItems(get().apiQueryParams);
      get().items = items.data ?? []

      get().setActiveItem(null,get().items[0])

      // console.log('Items','---',get().items.length)
      get().completeOperation(get().items.length ? 'success' : 'empty');
      return items
      } catch (error) {
        get().completeOperation('error', error instanceof Error ? error.message : 'Failed to create item');
        // throw error; // Re-throw if you want components to handle it
      }
  },


});