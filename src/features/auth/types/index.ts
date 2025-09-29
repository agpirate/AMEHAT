

//Quering
import QueringTypes from './quering/index';
//ops
import { OpsSliceTypes } from './opsStatus_Setting/index';

//given datas
// import { DataItemModelSchemaGroupSliceType} from './dataItem_Schema/index';
import SchemaInputItemType from './[input]Item_Schema/index';
import SignItemType from './[input]Item_Signing/index';

//starter
import OpsCrudStarter     from './opsCrudStarter/index';//item ; items
//ending
import opsCrudEndTypes     from './opsCrudEnd/index'; //item ; items

//items
import DataItemsType from "./[yield]Items/index"
//item
import DataItemActiveType from "./[yield]Item/index"

export type AppStore =  OpsSliceTypes & opsCrudEndTypes  & SignItemType & SchemaInputItemType  & QueringTypes  & 
 DataItemActiveType &  OpsCrudStarter & DataItemsType;


