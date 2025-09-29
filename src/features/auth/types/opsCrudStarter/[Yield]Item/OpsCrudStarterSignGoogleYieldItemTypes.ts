

import {SubOperation} from "../../opsStatus_Setting/OpsTypes"

  
// Operation slice types
export default interface OpsStarterDataItemSignGoogleTypes  {

    // Operation management

    fetchCrudStarterSignGoogleYield:   (subOp?: SubOperation['fetch'],) => void;    
    // ActiveFetchOpsStarter: (  payload?: ApiQueryParams,subOp?: SubOperation['fetch'],) => void;

}