import { StateCreator } from 'zustand';
import {  FrontQueringSliceType } from '../../../types/quering/frontQuering/FrontQueringTypes';
import {  AppStore } from '../../../types';

import {frontQueringFilters,featuredGroupOption} from "../../../models/fronQuering"


export const FrontQueringSlice: StateCreator<
  AppStore,
  [],
  [],
    FrontQueringSliceType
> = (set, get) => ({

  featuredGroupOption, //categories...layouts 
  
  frontQueringFilters,
 
});