

import {SubOperation} from "../../opsStatus_Setting/OpsTypes"

// Operation slice types
export default interface OpsStarterDataItemSignInTypes  {

    // Operation management

    fetchCrudStarterSignInYieldItem:   (subOp?: SubOperation['fetch']) => void;    
    // ActiveFetchOpsStarter: (  payload?: ApiQueryParams,subOp?: SubOperation['fetch'],) => void;
  
}