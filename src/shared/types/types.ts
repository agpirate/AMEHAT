export interface Model {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type BaseStatus = 'idle' | 'loading' | 'success' | 'error';
  
  export type ActiveSubStatus = 
    | 'viewing_details' 
    | 'showing_create_modal' 
    | 'showing_update_modal' 
    | 'showing_delete_options';
  
  export type OperationStatus<T = undefined> = {
    status: BaseStatus | 'active';
    activeSubStatus?: ActiveSubStatus;
    error?: string;
    metadata?: T;
  };
  
  export type ModelOperations = {
    create: OperationStatus<Model | null>;
    read: OperationStatus<Model[] | Model | null>;
    update: OperationStatus<Model | null>;
    delete: OperationStatus<string>;
  };
  
  export interface ModelUIState {
    operations: ModelOperations;
    lastUpdated: Date | null;
  }
  
  // Action types
  export type ModelAction =
    // Create actions
    | { type: 'CREATE_Model_REQUEST' }
    | { type: 'CREATE_Model_SUCCESS'; payload: Model }
    | { type: 'CREATE_Model_FAILURE'; error: string }
    | { type: 'CREATE_Model_ACTIVE' }
    | { type: 'HIDE_CREATE_MODAL' }
    
    // Read actions
    | { type: 'FETCH_Models_REQUEST' }
    | { type: 'FETCH_Models_SUCCESS'; payload: Model[] }
    | { type: 'FETCH_Models_FAILURE'; error: string }
    | { type: 'FETCH_Model_REQUEST'; payload: string } // ModelId
    | { type: 'FETCH_Model_SUCCESS'; payload: Model }
    | { type: 'FETCH_Model_FAILURE'; error: string }
    | { type: 'SHOW_Model_DETAILS'; payload: Model }
    | { type: 'HIDE_Model_DETAILS' }
    
    // Update actions
    | { type: 'UPDATE_Model_REQUEST'; payload: Model }
    | { type: 'UPDATE_Model_SUCCESS'; payload: Model }
    | { type: 'UPDATE_Model_FAILURE'; error: string }
    | { type: 'UPDATE_Model_ACTIVE'; payload: Model }
    | { type: 'HIDE_UPDATE_MODAL' }
    
    // Delete actions
    | { type: 'DELETE_Model_REQUEST'; payload: string } // ModelId
    | { type: 'DELETE_Model_SUCCESS'; payload: string } // ModelId
    | { type: 'DELETE_Model_FAILURE'; error: string }
    | { type: 'SHOW_DELETE_OPTIONS'; payload: string } // ModelId
    | { type: 'HIDE_DELETE_OPTIONS' };