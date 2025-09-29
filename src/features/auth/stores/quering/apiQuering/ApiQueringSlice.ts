import { StateCreator } from 'zustand';
import ApiQueringSliceType  from '../../../types/quering/apiQuering/ApiQueringTypes';

import {  AppStore } from '../../../types';

import buildapiFilter  from '../../../../../shared/utils/buildapiFilter'; // Assuming you have a utility function for building API filters

import {apiQueringFilters} from "../../../models/fronQuering"


export const ApiQuerySlice: StateCreator<
  AppStore,
  [],
  [],
    ApiQueringSliceType
> = (set, get) => ({

  apiQueringFilters, 
 
});

export default ApiQuerySlice