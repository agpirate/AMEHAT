import { ApiResponse } from '../../quering/frontQuering/FrontQueringTypes';
// import { DataItemGroupsType } from './modelGroupType';

import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';

// Shared base state for all slices

// Data slice types
export default interface ActiveDIOpSliceTypes  {
  
  // Enhanced CRUD operations with status management.
  createCrudEndSignUpYield: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  updateCrudEndSignUpYield: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  deleteCrudEndSignUpYield: () => Promise<ApiResponse<void> | undefined>;

  fetchCrudEndSignUpYield: (id:string) => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
}