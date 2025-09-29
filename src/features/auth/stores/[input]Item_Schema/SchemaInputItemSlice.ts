import { StateCreator } from 'zustand';
import DataItemModelSchemaTypes from '../../types/[input]Item_Schema/SchemaInputItemTypes';

import {  AppStore } from '../../types';

import {schemaDataItem} from "../../models/dataItemSchema"

export const DataItemSchemaSlice: StateCreator<AppStore,[],[],DataItemModelSchemaTypes> = (set, get) => ({

  schemaDataItem
  // modelDataItem,
  //-----------------
});