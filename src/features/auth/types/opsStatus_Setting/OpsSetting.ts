

import {SubOperation,SubOperationValue,Operation,OperationType,OperationStatus} from "./OpsTypes"


// Operation slice types
export default interface OpsSettingSliceType  {

    setOperationType: (type: OperationType) => void;
    setOperationStatus: (status: Exclude<OperationStatus, 'idle'>, error?: string) => void;

    resetOpsStarter: () => void;
    // Sub Operation...
    startSubFetchOpsStarter:() => void;
    setSubOpsStarter: (subOp: SubOperationValue) => void;
}