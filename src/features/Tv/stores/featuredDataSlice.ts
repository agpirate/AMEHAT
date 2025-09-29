import { StateCreator } from 'zustand';
import {  HomeDataTypes} from '../types/featuredDataTypes';
import {  AppStore } from '../types';
import { apiService } from '../services/apiService';

export const createHomeDataSlice: StateCreator<
  AppStore,
  [],
  [],
    HomeDataTypes
> = (set, get) => ({

  featuredItems: {},// Record<string, DataItem[]> - holds the news items by category

  startFeaturedFetchOperation: async (payload,subOp) => { //payload={category:['value']}

    get().idelOperation('fetch')
    get().setSubOperation({ fetch:null })
    //filtering_reset 
    subOp ? null : get().removeClientSettingQFilters() 
    //set the main filter 
    get().setClientSettingQFilters(payload?.key ?? '',payload?.value ?? '') //mainfilter operations    
    //active item 
    subOp ? null :get().setActiveDraft({...get().defaults})

  },
  
  // api functions    ( basic && Featured Filters)
  fetchFeaturedData: async () => { //filed,mainValue
  //build search apiQueryParams and categories format 
  get().startOperation('fetch');
  try {
   get().setapiQPagination({pageSize:3,page:1}) //setting the apiQueryParams filters
  // let filterClientSetting = buildapiFilter(get().clientQFilters.filterClientSetting,'')//{'category': ['$eq','home'], 'locale': ['$eq','en']}
  //-----------
  get().setapiQFilter(get().clientQFilters.filterClientSetting)//{'category':{'$eq':'home'}, 'locale':{'$eq':'en'}}
  //-----------
  
  // // Fetch latest news    
  const items = await apiService.fetchItems(get().apiQueryParams);
  get().items = items.data ?? []

  // console.log('Items','---',get().items.length)
  
    await get().fetchFeaturedGroupData()

    get().completeOperation(get().items.length ? 'success' : 'empty');

  } catch (error) {
    get().completeOperation('error', error instanceof Error ? error.message : 'Failed to create item');
    throw error; // Re-throw if you want components to handle it
  }
  },


  fetchFeaturedGroupData: async () => { //filed,mainValue

  try {
  get().setapiQPagination({pageSize:5,page:1});

  let activeFeaturedGroup = get().clientQFilters.activeFeaturedGroup;
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
              ...get().clientQFilters.filterClientSetting, 
              [key]: ['$eq', group_Name] 
            });
            const response = await apiService.fetchItems(get().apiQueryParams);
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