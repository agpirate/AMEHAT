import { StateCreator } from 'zustand';
import OpsTypes from '../../types/opsStatus_Setting/OpsTypes';
import {  AppStore } from '../../types';

 const OpsSlice: StateCreator<AppStore,[],[],OpsTypes> = (set, get) => ({

  // operations and suboperations
  operation:{ type: null, status: 'idle',error:'' },       
  suboperation:{fetch: null,create: null,update: null,delete: null,details: null,}, 

});

export default OpsSlice
