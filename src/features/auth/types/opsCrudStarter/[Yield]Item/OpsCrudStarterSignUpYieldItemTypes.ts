import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';

import {SubOperation} from "../../opsStatus_Setting/OpsTypes"

// Operation slice types
export default interface OpsStarterDataItemSignUpTypes  {

    // Operation management
    createCrudStarterSignUpYield:  (                                 subOp?: SubOperation['create'],) => void;
    updateCrudStarterSignUpYield:  (DataItem: Partial<DataItemType>, subOp?: SubOperation['update']) => void;
    deleteCrudStarterSignUpYield:  (DataItem: Partial<DataItemType>, subOp?: SubOperation['delete']) => void;
    detailsCrudStarterSignUpYield: (DataItem:Partial<DataItemType>,  subOp?: SubOperation['details']) => void;

}