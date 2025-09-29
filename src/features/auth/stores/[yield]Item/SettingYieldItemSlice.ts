import { StateCreator } from 'zustand';
import {  AppStore } from '../../types';
import SettingDataItemActiveTypes from '../../types/[yield]Item/SettingYieldItemTypes';

const SettingDataitemActiveSlice: StateCreator<AppStore,[],[],SettingDataItemActiveTypes> = (set, get) => ({


  resetActiveItem: () => {
    get().YieldItem = {item:get().SignUpInputItem,itemMeta:{}}
    get().validation = {isValid: false,errors: {},touched: {}}
  },

  ActiveFetchOpsStarter: (payload: any, subOp: any) => {
    get().setOperationType('fetch')
    get().setSubOpsStarter(subOp)
    //------- 
  },
  
  setYieldItem: (dataItem) => {
    // dataItem = {...get().YieldItem.item,...(dataItem ?? {})}
    // get().YieldItem = { ...get().YieldItem,item:dataItem}
    set((state)=>{

      return {
        YieldItem:{
          ...state.YieldItem,
          'item':dataItem
        }
      }
    })
  },

setYieldItemField: (field, value) => {
get().validateItemField(field,value)

  set((state) => {
    const updatedItem = {...state.YieldItem.item, [field]: value};
    return {
      YieldItem: {
        ...state.YieldItem,
        item: updatedItem
      }
    };
  });

},
 
  setActiveItemMeta: (itemMeta) => {
    itemMeta = {...get().YieldItem.itemMeta,...(itemMeta ?? {})}
    get().YieldItem = { ...get().YieldItem,itemMeta:{...get().YieldItem.itemMeta,...itemMeta}}
  },

  setActiveItem: (itemMeta,dataItem) => {
    dataItem = {...get().YieldItem.item,...(dataItem ?? {})}
    itemMeta = {...get().YieldItem.itemMeta,...(itemMeta ?? {})}
    get().YieldItem = {item:dataItem,itemMeta}
  },

  //Validation
  validateItem: async (item) => {
    const errors: Record<string, string> = {};

    const isValid = Object.keys(errors).length === 0;
    set({ validation: { isValid, errors, touched: Object.keys(item).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } });
    return { isValid, errors };
  },

    validateItemField: async (field,value) => {
    const error= (get().schemaDataItem as Record<string,any>)[field].validate(value)

    let errors = {...get().validation.errors,[field]:error}
    const isValid = Object.values(errors).every((v)=> v == undefined);
    set((state) => {
      return {
      validation: {
        ...state.validation,
        isValid,
        errors
      }
    }
    })
  },

});

export default SettingDataitemActiveSlice