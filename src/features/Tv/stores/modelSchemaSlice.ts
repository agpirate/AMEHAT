import { StateCreator } from 'zustand';
import {  ModelSchemaTypes } from '../types/modelSchemaTypes';
import {  AppStore } from '../types';

import {defaultDataItem} from "../models/dataItem"


export const createSchemaSlice: StateCreator<
  AppStore,
  [],
  [],
    ModelSchemaTypes
> = (set, get) => ({

  schema: {},
  // category: modelGroups,
  // categories: modelGroups,
  defaults: defaultDataItem,
  //-----------------

});