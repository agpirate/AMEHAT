import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { AppStore} from '../types/index'

import { createOperationSlice } from './operationSlice';
import { createQuerySlice} from './querySlice'
import { createHomeDataSlice} from './featuredDataSlice'
import { createGroupSlice} from './modelGroupSlice'
import { createActiveModelSlice} from './modelActiveSlice'
import { createSchemaSlice} from './modelSchemaSlice'
import { createModelDataSlice} from './modelDataSlice'


const initialState = {

  
  items: [], // Array<DataItem> - holds all news items
  

};


export const useNewsStore = create<AppStore>(
  
  (set, get,api) => ({
  // Initial state
  ...initialState,

  ...createGroupSlice(set, get, api), // Include the operation slice
  ...createHomeDataSlice(set, get, api), // Include the operation slice

  ...createOperationSlice(set, get, api), // Include the operation slice
  ...createQuerySlice(set, get, api), // Include the operation slice
  ...createActiveModelSlice(set, get, api), // Include the operation slice
  ...createSchemaSlice(set, get, api), // Include the operation slice
  ...createModelDataSlice(set, get, api), // Include the operation slice
  
  
  // Actions implementation

  //-------------------

})

);