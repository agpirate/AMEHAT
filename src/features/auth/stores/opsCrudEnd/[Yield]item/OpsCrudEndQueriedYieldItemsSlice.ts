import { StateCreator } from 'zustand';
import OpsEndDataItemQueriedTypes  from '../../../types/opsCrudEnd/[Yield]Item/OpsCrudEndQueriedYieldItemsTypes';
import {  AppStore } from '../../../types';

import { apiService } from '../../../services/apiOperations';

 const DataItemsSlice: StateCreator<AppStore,[],[],OpsEndDataItemQueriedTypes> = (set, get) => ({
  // modelactiveDataItemGroups,


  fetchCrudEndQueriedItemYield: async () => {
    //build search apiQueryParams and categories format 
    get().setOperationStatus('loading');
    try {
    get().setapiQPagination({pageSize:6,page:1}) //setting the apiQueryParams filters
    // let filterClientSetting = buildapiFilter(get().frontQueringFilters.filterClientSetting,'')//{'category': ['$eq','home'], 'locale': ['$eq','en']}
    //-----------
    get().setapiQFilter(get().frontQueringFilters.mainFilters)//{'category':{'$eq':'home'}, 'locale':{'$eq':'en'}}
    //-----------
    
    // // Fetch latest news    
    const items = await apiService.fetchItems(get().apiQueringFilters);
    get().YieldItems = items.data ?? []

    get().setOperationStatus(get().YieldItems.length ? 'success' : 'empty');
    return items
  } catch (error) {
    get().setOperationStatus('error', error instanceof Error ? error.message : 'Failed to create item');
    throw error; // Re-throw if you want components to handle it
  }
  },




});

export default DataItemsSlice