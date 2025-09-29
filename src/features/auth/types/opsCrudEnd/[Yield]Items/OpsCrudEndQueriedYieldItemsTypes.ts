import { ApiResponse } from '../../quering/frontQuering/FrontQueringTypes';
// import { DataItemGroupsType } from './modelGroupType';

import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';


// Data slice types
export default interface ModelDataTypes  {
  // items: DataItemType[];
  
  fetchDataItems: () => Promise<ApiResponse<Partial<DataItemType>[]> | undefined>;
  
  // Enhanced CRUD operations with status management.
  // createItem: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  // updateItem: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  // deleteItem: () => Promise<ApiResponse<void> | undefined>;

  // fetchItemDetails: (id:string) => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
}