import { StateCreator } from 'zustand';

import OpsStarterDataItemSignUpTypes from "../../../types/opsCrudStarter/[Yield]Item/OpsCrudStarterSignUpYieldItemTypes"
import {  AppStore } from '../../../types';

const OperationSlice: StateCreator<AppStore,[],[],OpsStarterDataItemSignUpTypes> = (set, get) => ({


  detailsCrudStarterSignUpYield: (DataItem, subOp) => {
    //setting fetch--=> status-subOperation 
    get().setOperationType('fetch') //set operationType ( 'fetch','idle','')
    get().setSubOpsStarter({ fetch:subOp ?? 'fetch_detail' }) //set fetch_SubOperations
    //setting User Filter 
    get().resetQuery() //!subOperation --> reset User Filter 
    get().setQuery({'id':DataItem.id ?? ''}) //set User Filter 
    //setting Active Item  
    get().resetActiveItem() //reset activeItem
    get().setActiveItemMeta({id:DataItem.id,index:DataItem.index,group:{category:DataItem.category ?? 'category'}})
    get().setActiveDataItem(DataItem) //set activeItem
  },
  
    createCrudStarterSignUpYield: (subOp) => {
      //setting create--=> status-subOperation
      get().setOperationType('create')
      get().setSubOpsStarter({ create: subOp ?? null })

      //setting Active Item  
      get().resetActiveItem() //reset activeItem
      get().setActiveDataItem({...get().SignUpInputItem}) //set activeItem
    },
    
    updateCrudStarterSignUpYield: (DataItem, subOp) => {
      //--- fetch the items to compare
      const { items } = get();
      const item = items.find((i:any) => i.id === DataItem.id);
      if (!item) return;

      //setting create--=> status-subOperation
      get().setOperationType('update')
      get().setSubOpsStarter({ update: subOp ?? null })
      //
      //setting Active Item  
      get().resetActiveItem() //reset activeItem
      get().setActiveDataItem(DataItem)
      get().setActiveItemMeta({id:DataItem.id,index:DataItem.index,group:{category:DataItem.category ?? 'category'}})
    },
    
    deleteCrudStarterSignUpYield: (DataItem, subOp) => {
      //--- fetch the items to compare
      const { items } = get();
      const item = items.find((i) => i.id === DataItem.id);
      if (!item) return;

      //setting create--=> status-subOperation
      get().setOperationType('delete')
      get().setSubOpsStarter({ delete: subOp ?? null })
      //setting User Filter
      get().resetQuery() //!subOperation --> reset User Filter
      get().setQuery({'id':DataItem.id ?? ''}) //set User Filter
      //setting Active Item  
      get().resetActiveItem() //reset activeItem
      get().setActiveDataItem(DataItem)
      get().setActiveItemMeta({id:DataItem.id,index:DataItem.index,group:{category:DataItem.category ?? 'category'}})
    },  
    

});

export default OperationSlice