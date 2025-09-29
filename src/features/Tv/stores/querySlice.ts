import { StateCreator } from 'zustand';
import {  QuerySlice } from '../types/queryTypes';
import {  AppStore } from '../types';

import buildapiFilter  from '../../../shared/utils/buildapiFilter'; // Assuming you have a utility function for building API filters

import {queryParams,clientQFilters} from "../models/queryModel"
import {featuredGroupOption} from "../models/queryModel"


export const createQuerySlice: StateCreator<
  AppStore,
  [],
  [],
    QuerySlice
> = (set, get) => ({

  featuredGroupOption,
  
  clientQFilters,
  apiQueryParams: queryParams,

  //-----------------
  setapiQPage: (page) => set((state:any) => ({ apiQueryParams: { ...state.apiQueryParams,pagination:{...state.apiQueryParams.pagination,page} } })),
  setapiQItemsPerPage: (count) =>
    set((state:any) => ({ apiQueryParams: { ...state.apiQueryParams,pagination:{...state.apiQueryParams.pagination,pageSize:count,page:1}} })),
  setapiQPagination: (obj={}) =>
   {
    get().apiQueryParams.pagination = {...get().apiQueryParams.pagination,pageSize:obj.pageSize ?? 20,page:obj.page ?? 1}
   },
  setapiQSort: (field, direction) =>
    set((state:any) => ({
      apiQueryParams: { ...state.apiQueryParams, sort: String(field)+':'+String(direction) },
    })),
      setapiQSearchFilter: (query = '') =>
    set((state:any) => ({
      // filters: { ...state.filters, searchQuery: query },
      apiQueryParams: { ...state.apiQueryParams,pagination:{...state.apiQueryParams.pagination,pageSize:20,page:1}}
    })),
  setapiQFilter: (obj) =>
   {
   //receive clientFilter Style && to apiFilter style
   //add global setting
   obj = {...obj,...get().clientQFilters.filterGlobalSetting} 

    get().apiQueryParams.filters = buildapiFilter(obj)//{...get().apiQueryParams.filters,filters:{}}
   },

  //---------    

  setclientGlobalQFilters: (key, value) => //holds the main key:values 
  {
  get().clientQFilters.filterGlobalSetting = {...get().clientQFilters.filterGlobalSetting, [key]:value}    
},

  setclientSearchFilter: (query = '') =>
    set((state:any) => ({
      clientQFilters: { ...state.clientQFilters, searchQuery: query,searchFields:['title','description'] },//filter,search
      //defualting apiQueryParams
      apiQueryParams: { ...state.apiQueryParams,pagination:{...state.apiQueryParams.pagination,pageSize:20,page:1}}
    })),
  
  setClientSettingQFilters: (key, value) => //holds the main key:values 
  {
    if(!key || !value) get().removeClientSettingQFilters()
    else get().clientQFilters.filterClientSetting = {...get().clientQFilters.filterClientSetting, [key]:value}
  },
    removeClientSettingQFilters: (key) => //holds the main key:values 
  { 
    if(key) delete (get().clientQFilters.filterClientSetting as Record<string, any>)[key] 
    else {
      get().clientQFilters.filterClientSetting = {}
      get().removeclientFeaturedGroupQFilters()  
    } 
  },
  
  setclientFeaturedGroupQFilters: (key: string, list: string[]) => { //appending list to side fetch. 
    if(typeof list == 'object'  && Array.isArray(list)) {
    // Ensure activeFeaturedGroup is always a Record<string, any[]>
    const activeFeaturedGroup = get().clientQFilters.activeFeaturedGroup as Record<string, any[]>;
    let existingList = (activeFeaturedGroup[key] || [])//.slice(1);
    get().clientQFilters.activeFeaturedGroup = { ...activeFeaturedGroup, [key]: [...new Set([...list,...existingList])] };
    }else{ }
  },

  removeclientFeaturedGroupQFilters: (key) => //holds the main key:values 
  { key ? delete (get().clientQFilters.activeFeaturedGroup as Record<string, any>)[key] : get().clientQFilters.activeFeaturedGroup = {}   },
  
});