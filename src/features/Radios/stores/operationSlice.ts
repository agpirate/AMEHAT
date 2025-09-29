import { StateCreator } from 'zustand';
import {  Operation, SubOperation,OperationSlice } from '../types/operationTypes';
import {  AppStore } from '../types';

import {defaultOperation,defaultSubOperation} from "../models/dataItem"

export const createOperationSlice: StateCreator<
  AppStore,
  [],
  [],
    OperationSlice
> = (set, get) => ({

  // operations and suboperations
  operation:defaultOperation,       //{status:'idle',type:null,error:undefined},
  suboperation:defaultSubOperation, //{create:null,update:null,delete:null,details:null,fetch:null},

  // active: { type: null }, //{// type: null, draft: defaultDataItem, error: undefined },
  
  //startOperations
  startSubFetchOperation: async (payload,subOp) => {
    get().setSubOperation({ fetch: subOp ?? null })
    //set the main filter
    get().setClientSettingQFilters(payload?.key ?? '',payload?.value ?? '') //mainfilter operations    
    //active item
  }, 
  startDetailsOperation: (payload, subOp) => {
    get().idelOperation('fetch')
    get().setSubOperation({ fetch:subOp ?? 'fetch_detail' })
    if(!subOp) {
    //filtering_reset
      get().setClientSettingQFilters()
    //active item 
      // get().setActiveDraft({...get().defaults}) 
    }
    //--- Item active
    get().clearActive()
    get().setActiveItemMeta({id:payload.id,index:payload.index,groupName:'category',groupValue:payload.category ?? ''})
    //set the main filter
    get().setClientSettingQFilters('id',payload.id ?? '') //mainfilter operations    
  },

  startFetchOperation: async (payload,subOp=null) => { //payload={category:['value']}
    get().idelOperation('fetch')
    get().setSubOperation({ fetch:subOp ?? 'fetch' })
    if(!subOp) { //new ClientQuery --- topLevel
    //filtering_reset
      get().setClientSettingQFilters()
    }
    //active item  
    get().clearActive()
    get().setActiveDraft({...get().defaults}) 
    //set the main filter 
    get().setClientSettingQFilters(payload?.key ?? '',payload?.value ?? '') //mainfilter operations    
  },
    
    startCreateOperation: (payload,subOp) => {
      get().idelOperation('create')
      get().setSubOperation({ create: subOp ?? null })
      //active item
      get().setActiveDraft({...get().defaults})
    },
    
    startUpdateOperation: (payload, subOp) => {

      const { items } = get();
      const item = items.find((i:any) => i.id === payload.id);
      if (!item) return;

      get().idelOperation('update')
      get().setSubOperation({ update: subOp ?? null })
  
      
      get().setActiveDraft({...item})
    },
    
    startDeleteOperation: (payload, subOp) => {
      const { items } = get();
      const item = items.find((i) => i.id === payload.id);
      if (!item) return;

      get().idelOperation('delete')
      get().setSubOperation({ delete: subOp ?? null })
      
      get().removeClientSettingQFilters()
      get().setClientSettingQFilters('id',payload.id) //mainfilter operations    

      get().setActiveDraft({...item})
    },  
    



  setSubOperation: (subOp) => set({ suboperation: { ...get().suboperation, ...subOp } }),
  // operation management
  idelOperation: (type) => set({ operation: { type, status: 'idle' } }),
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



});