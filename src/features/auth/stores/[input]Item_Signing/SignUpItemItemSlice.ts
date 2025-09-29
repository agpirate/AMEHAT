import { StateCreator } from 'zustand';
import DataitemSignUpTypes from '../../types/[input]Item_Signing/SignUpInputItem';
import {  AppStore } from '../../types';

import {SignUpInputItem} from "../../models/dataItem"

export const DataItemSignUpSlice: StateCreator<AppStore,[],[],DataitemSignUpTypes> = (set, get) => ({

  // category: modelGroups,
  // categories: modelGroups,
  SignUpInputItem,
  //-----------------

});