import { StateCreator } from 'zustand';
import DataItemsFeaturedTypes from '../../../types/opsCrudEnd/[Yield]Items/OpsCrudEndFeaturedYieldItemsTypes';
import {  AppStore } from '../../../types';
import { apiService } from '../../../services/apiService';

 const DataItemsFeaturedSlice: StateCreator<AppStore,[],[],DataItemsFeaturedTypes> = (set, get) => ({

  featuredItems: {},// Record<string, DataItem[]> - holds the news items by category
  
  // api functions    ( basic && Featured Filters)
  fetchFeaturedData: async () => { //filed,mainValue
  //build search apiQueryParams and categories format 
  get().setOperationStatus('loading');
  try {
   get().setapiQPagination({pageSize:3,page:1}) //setting the apiQueryParams filters
  // let filterClientSetting = buildapiFilter(get().frontQueringFilters.filterClientSetting,'')//{'category': ['$eq','home'], 'locale': ['$eq','en']}
  //-----------
  get().setapiQFilter(get().frontQueringFilters.mainFilters)//{'category':{'$eq':'home'}, 'locale':{'$eq':'en'}}
  //-----------
  
  // // Fetch latest news    
  const items = await apiService.fetchItems(get().apiQueringFilters);
  get().items = items.data ?? []

  // console.log('Items','---',get().items.length)
  
  await get().fetchFeaturedGroupData()

  get().setOperationStatus(get().items.length ? 'success' : 'empty');

  } catch (error) {
    get().setOperationStatus('error', error instanceof Error ? error.message : 'Failed to create item');
    throw error; // Re-throw if you want components to handle it
  }
  },

  fetchFeaturedGroupData: async () => { //filed,mainValue

  try {
  get().setapiQPagination({pageSize:5,page:1});

  let activeFeaturedGroup = get().frontQueringFilters.activeFeaturedGroup;
  if (Object.keys(activeFeaturedGroup).length !== 0) {
    // Convert to array of promises
    get().featuredItems = {}
    const promises = Object.keys(activeFeaturedGroup).map(async (key) => {
      let filterGroup = (activeFeaturedGroup as Record<string, any>)[key];
      
      if (Array.isArray(filterGroup) && filterGroup.length > 0) {
        get().featuredItems[key] = {};
        
        await Promise.all(
          filterGroup.map(async (group_Name) => {
            get().setapiQFilter({
              ...get().frontQueringFilters.mainFilters, 
              [key]: ['$eq', group_Name] 
            });
            const response = await apiService.fetchItems(get().apiQueringFilters);
            if(response.data.length) get().featuredItems[key][group_Name] = response.data;
            console.log(key,'---',group_Name,response.data.length);
          })
        );
      }
    });

  // Wait for all operations to complete
  await Promise.all(promises);
  console.log('fetchFeatured Completed...')
} 
  return;
  // console.log("Latest / Home Search",get().items.length)
  } catch (error) {
    throw new Error
  }
  },

});

export default DataItemsFeaturedSlice