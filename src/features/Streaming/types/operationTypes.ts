import * as yup from 'yup';

export type OperationType = null | 'fetch' | 'create' | 'update' | 'delete' | 'details';
export type OperationStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Operation {
  type: OperationType;
  status: OperationStatus;
  error?: string;
}

export interface SubOperation {
  fetch: null | 'searchBox' | 'home' | 'menu' | '';
  create: null | 'createBox';
  update: null | 'updateBox';
  delete: null | 'options';
  details: null | 'selected';
}