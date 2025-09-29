import * as yup from 'yup';
import { DataItem } from './modelSchemaTypes';

export type OperationType = null | 'fetch' | 'create' | 'update' | 'delete' | 'details';
export interface SubOperation {
    fetch: null | 'searchBox' | 'home' | 'menu' | '';
    create: null | 'createBox';
    update: null | 'updateBox';
    delete: null | 'options';
    details: null | 'selected';
  }

export type OperationStatus = 'idle' | 'loading' | 'success' | 'error' | 'empty';

export interface Operation {
    type: OperationType;
    status: OperationStatus;
    error?: string;
  }
  
// Operation slice types
export interface OperationSlice  {
  operation: Operation;
  suboperation: SubOperation;  

  // active: ActiveView, //{// type: null, draft: defaultDataItem, error: undefined },

  // Operation management
    
    startCreateOperation: (payload?:Partial<DataItem>,subOp?: SubOperation['create'],) => void;
    startUpdateOperation: (payload: Partial<DataItem>, subOp?: SubOperation['update']) => void;
    startDeleteOperation: (payload: Partial<DataItem>, subOp?: SubOperation['delete']) => void;
    startDetailsOperation: (payload:Partial<DataItem>, subOp?: SubOperation['details']) => void;
    
    startFetchOperation:   (payload?: Record<string,string>,subOp?: SubOperation['fetch'],) => void;
    startSubFetchOperation:(payload?: Record<string,string>,subOp?: SubOperation['fetch'],) => void;
    
    // ActiveFetchOperation: (  payload?: ApiQueryParams,subOp?: SubOperation['fetch'],) => void;
  
    idelOperation: (type: OperationType) => void;
    startOperation: (type: OperationType) => void;
    completeOperation: (status: Exclude<OperationStatus, 'loading'>, error?: string) => void;
    resetOperation: () => void;

    setSubOperation: (subOp: Partial<SubOperation>) => void;

}