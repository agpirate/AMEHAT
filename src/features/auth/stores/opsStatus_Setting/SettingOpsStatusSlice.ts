import { StateCreator } from 'zustand';
import OpsSettingTypes from '../../types/opsStatus_Setting/OpsSetting';
import {  AppStore } from '../../types';

 const OpsSettingSlice: StateCreator<AppStore,[],[],OpsSettingTypes> = (set, get) => ({

  // operation management
 setOperationType: (type) => set({ operation: { type, status: 'idle' } }),
 setOperationStatus: (status, error) => {
    set((state:Record<string,any>)=> ({
      operation: {
        ...state.operation,
        status,
        error: status === 'error' ? error : undefined,
      },
    }));
  },

resetOpsStarter: () => set({ operation: { type: null, status: 'idle',error:'' } }),

  // SubOperation ----------------

  //startOperations
startSubFetchOpsStarter: async () => { }, 

  // subOperations - Operations
  setSubOpsStarter: (subOp) => set({ suboperation: subOp }),

});

export default OpsSettingSlice
