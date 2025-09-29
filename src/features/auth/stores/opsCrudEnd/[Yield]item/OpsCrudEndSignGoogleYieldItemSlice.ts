import { StateCreator } from 'zustand';
import OpsCrundEndDataItemSignGoogleTypes from '../../../types/opsCrudEnd/[Yield]Item/OpsCrudEndSignGoogleYieldItemTypes';
import {  AppStore } from '../../../types';

import { apiService } from '../../../services/apiService';

 const OpsCrundEndDataItemSignGoogleSlice: StateCreator<AppStore,[],[],OpsCrundEndDataItemSignGoogleTypes> = (set, get) => ({
  // modelYieldItemGroups,
  
  createCrudEndSignGoogleYield: async () => {
    const { YieldItem,operation, validateItem } = get();
    if (operation.type !== 'create') return;

    try {
    if (!('item' in YieldItem)) throw new Error('No item found in YieldItem state');
      
     get().setOperationStatus('loading');
      const newItem = await apiService.createItem(YieldItem.item);

      get().setOperationStatus('success');
      return { data: newItem };
    } catch (error) {
      get().setOperationStatus('error', error instanceof Error ? error.message : 'Failed to create item');
      return undefined;
    }
  },

  updateCrudEndSignGoogleYield: async () => {
    const { YieldItem,operation, validateItem } = get();
    if (operation.type !== 'update' || !YieldItem.itemMeta) return;

    try {
    if (!('item' in YieldItem)) throw new Error('No item found in YieldItem state');

      get().setOperationStatus('loading');
      const updatedItem = await apiService.updateItem(YieldItem.itemMeta.id, YieldItem.item);

      get().setOperationStatus('success');
      return { data: updatedItem };
    } catch (error) {
      get().setOperationStatus('error', error instanceof Error ? error.message : 'Failed to update item');
      return undefined;
    }
  },

  deleteCrudEndSignGoogleYield: async () => {
    const { YieldItem,operation } = get();
    if (operation.type !== 'delete' || !YieldItem.itemMeta) return;

    try {
    if (!('item' in YieldItem)) throw new Error('No item found in YieldItem state');
      get().setOperationStatus('loading');
      await apiService.deleteItem(YieldItem.itemMeta.id ?? '');
      // set((state:Record<string,any>)=> ({
      //   items: state.YieldItems.filter((item) => item.id !== YieldItem.itemMeta.id),
      //   YieldItem: { type: null },
      // }));
      get().setOperationStatus('success');
      return { data: undefined };
    } catch (error) {
      get().setOperationStatus('error', error instanceof Error ? error.message : 'Failed to delete item');
      return undefined;
    }
  },

    fetchCrudEndSignGoogleYield: async () => {
      get().setOperationStatus('loading');
      try {
      get().setapiQPagination({pageSize:1,page:1}) //setting the apiQueryParams filters
      // let filterClientSetting = buildapiFilter(get().frontQueringFilters.filterClientSetting,'')//{'category': ['$eq','home'], 'locale': ['$eq','en']}
      //-----------
      get().setapiQFilter(get().frontQueringFilters.mainFilters)//{'category':{'$eq':'home'}, 'locale':{'$eq':'en'}}
      //-----------
      // // Fetch latest news    
      const items = await apiService.fetchItems(get().apiQueringFilters);
      get().YieldItems = items.data ?? []

      // get().setActiveItem(null,get().YieldItems[0])

      // console.log('Items','---',get().YieldItems.length)
      get().setOperationStatus(get().YieldItems.length ? 'success' : 'empty');
      return items
      } catch (error) {
        get().setOperationStatus('error', error instanceof Error ? error.message : 'Failed to create item');
        // throw error; // Re-throw if you want components to handle it
      }
  },
});

export default OpsCrundEndDataItemSignGoogleSlice