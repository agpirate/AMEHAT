import { StateCreator } from 'zustand';
import DataitemSignGoogleTypes from '../../types/[input]Item_Signing/SignGoogleInputItem';
import {  AppStore } from '../../types';
import {SignGoogleInputItem} from "../../models/dataItem"



export const DataItemSignGoogleSlice: StateCreator<AppStore,[],[],DataitemSignGoogleTypes> = (set, get) => ({

  // category: modelGroups,
  // categories: modelGroups,
  SignGoogleInputItem,
  //-----------------

});