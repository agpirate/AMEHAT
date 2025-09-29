
export type OperationType = null | 'fetch' | 'create' | 'update' | 'delete' | 'details';
export type OperationStatus = 'idle' | 'loading' | 'success' | 'error' | 'empty';
export interface Operation {
    type: OperationType;
    status: OperationStatus;
    error?: string;
  }
  
export interface SubOperation {
    fetch: null | 'searchBox' | 'home' | 'menu' | 'login' | '' | 'fetch_detail' | 'selected' | 'signin' | 'details'; 
    create: null | 'createBox' | 'google' | 'facebook' | 'signup' | '' | 'create';
    update: null | 'updateBox' | 'update';
    delete: null | 'options' | 'delete';
    details: null | 'selected' | 'details';
  }
  // Union type of all possible suboperation values
export type SubOperationValue = SubOperation[keyof SubOperation];

// Operation slice types
export default interface OpsSliceType  {
    operation: Operation;

    // Sub Operation...
    suboperation: SubOperationValue;  
}