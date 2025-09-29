import { StateCreator } from 'zustand';
import DataItemsTypes  from '../../types/[yield]Items/DataItemsTypes';
import {  AppStore } from '../../types';


export const DataItemsSlice: StateCreator<AppStore,[],[],DataItemsTypes> = (set, get) => ({
  // modelactiveDataItemGroups,
  YieldItems: [], // Array<DataItem> - holds all news items

});