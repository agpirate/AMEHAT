import { StateCreator } from 'zustand';
import OpsCrudEndSignAnnonyYieldItemType from '../../../types/opsCrudEnd/[Yield]Item/OpsCrudEndSignAnnonyYieldItemType';
import {  AppStore } from '../../../types';

import { apiService } from '../../../services/apiService';

 const OpsCrundEndDataItemSignInSlice: StateCreator<AppStore,[],[],OpsCrudEndSignAnnonyYieldItemType> = (set, get) => ({
  // modelYieldItemGroups,
  
    fetchCrudEndSignAnnonyYield: async () => {

      try {

      get().setYieldItem({...get().YieldItem.item,'authenticated':true})
      // get().setActiveItem(null,get().YieldItems[0])
      } catch (error) {
        get().setOperationStatus('error', error instanceof Error ? error.message : 'Failed to create item');
      }
  },
});

export default OpsCrundEndDataItemSignInSlice
