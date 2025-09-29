import { StateCreator } from 'zustand';
import OpsStarterDataItemQueriedTypes from '../../../types/opsCrudStarter/[Yield]Item/OpsCrudStarterQueriedYieldItemsTypes';
import {  AppStore } from '../../../types';

 const OperationSlice: StateCreator<AppStore,[],[],OpsStarterDataItemQueriedTypes> = (set, get) => ({


  
  fetchCrudStarterQueriedItemYield: async (payload,subOp) => { //payload={category:['value']}
    //setting fetch--=> status-subOperation
    get().setOperationType('fetch') //set operationType ( 'fetch','idle','')    
    get().setSubOpsStarter( subOp ?? null ) //set fetch_SubOperations
    //setting User Filter
    subOp ? null : get().resetQuery() 
    get().setQuery(payload) //set User Filter
    //setting Active Item  
    get().resetActiveItem() //reset activeItem
  },


});

export default OperationSlice
