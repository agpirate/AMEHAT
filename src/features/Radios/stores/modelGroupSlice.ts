import { StateCreator } from 'zustand';
import {  groupOptionsTypes } from '../types/modelGroupType';
import {  AppStore } from '../types';
import {modelGroups} from "../models/modelGroup"


export const createGroupSlice: StateCreator<
  AppStore,
  [],
  [],
    groupOptionsTypes
> = (set, get) => ({

  modelGroups,

});