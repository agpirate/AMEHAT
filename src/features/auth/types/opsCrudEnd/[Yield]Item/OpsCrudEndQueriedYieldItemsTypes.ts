import { ApiResponse } from '../../quering/frontQuering/FrontQueringTypes';
// import { DataItemGroupsType } from './modelGroupType';

import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';


// Data slice types
export default interface OpsEndDataItemQueriedTypes  {
  // items: DataItemType[];
  
  fetchCrudEndQueriedItemYield: () => Promise<ApiResponse<Partial<DataItemType>[]> | undefined>;
  

}