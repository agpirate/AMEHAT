import { StateCreator } from 'zustand';
import SignInDataitemTypes from '../../types/[input]Item_Signing/SignInInputItem';
import {  AppStore } from '../../types';

import {SignInInputItem} from "../../models/dataItem"


export const DataItemSignInSlice: StateCreator<AppStore,[],[],SignInDataitemTypes> = (set, get) => ({

  // category: modelGroups,
  // categories: modelGroups,
  SignInInputItem,
  //-----------------

});