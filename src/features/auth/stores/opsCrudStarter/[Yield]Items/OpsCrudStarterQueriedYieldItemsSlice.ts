import { StateCreator } from 'zustand';
import OpsStarterDataItemsTypes from '../../../types/opsCrudStarter/[Yield]Items/OpsCrudStarterQueriedYieldItemsTypes';
import {  AppStore } from '../../../types';

 const OperationSlice: StateCreator<AppStore,[],[],OpsStarterDataItemsTypes> = (set, get) => ({

    // FeaturedItem
  startFeaturedFetchOpsStarter: async (payload,subOp) => { //payload={category:['value']}

  get().setOperationType('fetch')
  get().setSubOpsStarter({ fetch:'fetch_featured' })
  //filtering_reset 
  subOp ? null : get().resetQuery() 
  get().setQuery(payload) //mainfilter operations    
  //active item 
  subOp ? null :get().setYieldItem({...get().SignUpInputItem})
},
  
  
  startFetchIemsOpsStarter: async (payload,subOp) => { //payload={category:['value']}
    //setting fetch--=> status-subOperation
    get().setOperationType('fetch') //set operationType ( 'fetch','idle','')    
    get().setSubOpsStarter({ fetch:subOp ?? 'fetch' }) //set fetch_SubOperations
    //setting User Filter
    subOp ? null : get().resetQuery() 
    get().setQuery(payload) //set User Filter
    //setting Active Item  
    get().resetActiveItem() //reset activeItem
  },


});

export default OperationSlice
