import {SubOperation} from "../../opsStatus_Setting/OpsTypes"

// Operation slice types
export default interface OpsStarterDataItemQueriedTypes  {

    // Operation management

    fetchCrudStarterQueriedItemYield:   (payload: Record<string,string> | {}, subOp?: SubOperation['fetch'],) => void;    
    // ActiveFetchOpsStarter: (  payload?: ApiQueryParams,subOp?: SubOperation['fetch'],) => void;

}