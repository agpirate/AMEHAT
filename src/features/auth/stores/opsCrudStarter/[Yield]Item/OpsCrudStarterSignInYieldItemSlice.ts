import { StateCreator } from 'zustand';
import OpsStarterDataItemSignInTypes from "../../../types/opsCrudStarter/[Yield]Item/OpsCrudStarterSignInYieldItemTypes"
import {  AppStore } from '../../../types';

const OperationSlice: StateCreator<AppStore,[],[],OpsStarterDataItemSignInTypes> = (set, get) => ({


  fetchCrudStarterSignInYieldItem: async (subOp) => { //payload={category:['value']}
    //setting fetch--=> status-subOperation
    get().setOperationType('fetch') //set operationType ( 'fetch','idle','')    
    get().setSubOpsStarter(subOp ?? 'signin') //set fetch_SubOperations
    //setting Active Item  
    get().resetActiveItem() //reset activeItem
    subOp ? null : get().setYieldItem({...get().SignInInputItem})
  },


});

export default OperationSlice
