import { StateCreator } from 'zustand';
import {  AppStore } from '../../types';

import GroupType  from '../../types/[input]Item_Schema/GroupType';

import {DataItemGroupsOptions} from "../../models/dataItemGroups"

export const DataItemGroupsSlice: StateCreator<AppStore,[],[],GroupType> = (set, get) => ({
  
  //datas
  DataItemGroupsOptions,
  
  //operations
});