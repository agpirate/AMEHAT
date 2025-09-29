import { StateCreator } from 'zustand';
import OpsStarterDataItemSignGoogleTypes from "../../../types/opsCrudStarter/[Yield]Item/OpsCrudStarterSignGoogleYieldItemTypes"
import {  AppStore } from '../../../types';

const OperationSlice: StateCreator<AppStore,[],[],OpsStarterDataItemSignGoogleTypes> = (set, get) => ({


  
  
  fetchCrudStarterSignGoogleYield: async (subOp) => { //payload={category:['value']}
    //setting fetch--=> status-subOperation
    get().setOperationType('fetch') //set operationType ( 'fetch','idle','')    
    get().setSubOpsStarter(subOp ?? 'signup' ) //set fetch_SubOperations
    //setting User Filter
    // subOp ? null : get().resetQuery() 
    // get().setQuery(payload) //set User Filter
    //setting Active Item  
    get().resetActiveItem() //reset activeItem
  },


});

export default OperationSlice
