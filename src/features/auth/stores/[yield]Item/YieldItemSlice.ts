import { StateCreator } from 'zustand';
import {  AppStore } from '../../types';
import DataItemActiveTypes from '../../types/[yield]Item/YieldItemTypes';

 const DataitemActiveSlice: StateCreator<AppStore,[],[],DataItemActiveTypes> = (set, get) => ({

  YieldItem: {item:{},itemMeta:{} }, //{// type: null, dataItem: dataItemSignUp, error: undefined },
  
    validation: {
    isValid: false,errors: {},touched: {},
  },
});

export default DataitemActiveSlice