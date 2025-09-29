
import {SubOperation} from "../../opsStatus_Setting/OpsTypes"

// Operation slice types
export default interface OpsStarterDetaItemsType  {

    // Operation management

    startFetchIemsOpsStarter:   (payload: Record<string,string> | {}, subOp?: SubOperation['fetch'],) => void;    
    // ActiveFetchOpsStarter: (  payload?: ApiQueryParams,subOp?: SubOperation['fetch'],) => void;
  
    // Featured item
    startFeaturedFetchOpsStarter: (payload: Record<string,string>,subOp?: SubOperation['fetch'],) => void;
    // fetchCategoryData: (category: string) => Promise<DataItem[]>;
}