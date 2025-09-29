import { StateCreator } from 'zustand';
import {  SettingFrontQueringTypes } from '../../../types/quering/frontQuering/SettingFrontQueringTypes';
import {  AppStore } from '../../../types';

export const SettingFrontQueringSlice: StateCreator<
  AppStore,
  [],
  [],
    SettingFrontQueringTypes
> = (set, get) => ({

  setGlobalQuery: (queries) => //holds the main key:values 
  {
    get().frontQueringFilters.filterGlobalSetting = {...get().frontQueringFilters.filterGlobalSetting, ...queries}    
  },
  setSearchQuery: (queries) =>
    set((state:Record<string,any>)=> ({
      frontQueringFilters: { ...state.frontQueringFilters, ...queries,searchFields:['title','description'] },//filter,search
      //defualting apiQueryParams
      apiQueryParams: { ...state.apiQueryParams,pagination:{...state.apiQueryParams.pagination,pageSize:20,page:1}}
    })),
      resetSearchQuery: (key) => //holds the main key:values 
  { 
    if(key) delete (get().frontQueringFilters.mainFilters as Record<string, any>)[key] 
    else {
      get().frontQueringFilters.mainFilters = {}
      get().resetGlobalQuery('')  
    } 
  },

  //---------    
  setQuery: (queries) => //holds the main key:values 
  {
    get().frontQueringFilters.mainFilters = {...get().frontQueringFilters.mainFilters, ...queries}
  },
  resetQuery: (key) => //holds the main key:values 
  { 
    if(key) delete (get().frontQueringFilters.mainFilters as Record<string, any>)[key] 
    else {
      get().frontQueringFilters.mainFilters = {}
      get().resetGlobalQuery('')  
    } 
  },
  //---------
  setFeaturedQuery: (queries) => { //appending list to side fetch. 
    get().frontQueringFilters.activeFeaturedGroup = { ...get().frontQueringFilters.activeFeaturedGroup, ...queries };
  },
  resetGlobalQuery: (key) => //holds the main key:values 
  { key ? delete (get().frontQueringFilters.activeFeaturedGroup as Record<string, any>)[key] : get().frontQueringFilters.activeFeaturedGroup = {}   },

});