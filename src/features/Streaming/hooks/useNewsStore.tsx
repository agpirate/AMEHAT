import type { DataItem,OperationType,SubOperation } from "../types/modelTypes";
import  { useNewsStore } from "../stores/newStore";

export const useStoreOperations = () => {
  const store = useNewsStore();
  
  return {
    // Operation starters
    startCreate: (sub: SubOperation['create'], initialData?: Partial<DataItem>) => 
      store.startCreateOperation(initialData, sub),
    startUpdate: (sub: SubOperation['update'],id: string, index: number) => 
      store.startUpdateOperation({ id, index },sub),
    startDetails: (sub: SubOperation['details'],id: string, index: number) => 
      store.startDetailsOperation({ id, index },sub),
    startDelete: (sub: SubOperation['delete'],id: string, index: number) => 
      store.startDeleteOperation({ id, index },sub),
    startFetch: () => store.startOperation('fetch'),
    
    
    // Operation status helpers
    isOperationLoading: (type?: OperationType) => 
      store.operation.status === 'loading' && 
      (type ? store.operation.type === type : true),
    isOperationSuccess: (type?: OperationType) => 
      store.operation.status === 'success' && 
      (type ? store.operation.type === type : true),
    isOperationError: (type?: OperationType) => 
      store.operation.status === 'error' && 
      (type ? store.operation.type === type : true),
    
    // Active view helpers
    isCreating: store.active.type === 'create',
    isUpdating: store.active.type === 'update',
    isViewingDetails: store.active.type === 'details',
    isDeleting: store.active.type === 'delete',
    isFetching: store.active.type === 'fetch',
    
    // Sub-operation helpers
    isCreateBoxOpen: store.suboperation.create === 'createBox',
    isUpdateBoxOpen: store.suboperation.update === 'updateBox',
    isSearchBoxOpen: store.suboperation.fetch === 'searchBox',
    isDeleteOptionsOpen: store.suboperation.delete === 'options',
    isDetailsSelected: store.suboperation.details === 'selected',
    
    // Current operation error
    operationError: store.operation.error,
    
    // Expose store methods
    ...store,
  };
};