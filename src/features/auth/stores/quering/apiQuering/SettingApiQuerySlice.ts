import { StateCreator } from 'zustand';
import SettingApiQueryType from '../../../types/quering/apiQuering/SettingApiQueryTypes';
import {  AppStore } from '../../../types';

import buildapiFilter  from '../../../../../shared/utils/buildapiFilter'; // Assuming you have a utility function for building API filters

import {apiQueringFilters} from "../../../models/fronQuering"


 const SettingApiQuerySlice: StateCreator<
  AppStore,
  [],
  [],
    SettingApiQueryType
> = (set, get) => ({

  //-----------------   APi---------
  setapiQPage: (page) => set((state:Record<string,any>)=> ({ apiQueringFilters: { ...state.apiQueringFilters,pagination:{...state.apiQueringFilters.pagination,page} } })),
  setapiQItemsPerPage: (count) =>
    set((state:Record<string,any>)=> ({ apiQueringFilters: { ...state.apiQueringFilters,pagination:{...state.apiQueringFilters.pagination,pageSize:count,page:1}} })),
  setapiQPagination: (obj={}) =>
   {
    get().apiQueringFilters.pagination = {...get().apiQueringFilters.pagination,pageSize:obj.pageSize ?? 2,page:obj.page ?? 1}
   },
  setapiQSort: (field, direction) =>
    set((state:Record<string,any>)=> ({
      apiQueringFilters: { ...state.apiQueringFilters, sort: String(field)+':'+String(direction) },
    })),

  setapiQSearchFilter: (query = '') =>
    set((state:Record<string,any>)=> ({
      // filters: { ...state.filters, searchQuery: query },
      apiQueringFilters: { ...state.apiQueringFilters,pagination:{...state.apiQueringFilters.pagination,pageSize:20,page:1}}
    })),

  setapiQFilter: (obj) =>
   {
    let sterlizedApiFilter = buildapiFilter(obj)//{key:value} ---> {key:{op:value}
    set((state)=>({
      apiQueringFilters: {
        ...state.apiQueringFilters,
        filters:{...state.apiQueringFilters.filters,...sterlizedApiFilter}
      }
    }))
   },
});

export default SettingApiQuerySlice