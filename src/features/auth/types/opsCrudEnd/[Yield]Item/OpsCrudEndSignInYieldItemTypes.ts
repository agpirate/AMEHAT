import { ApiResponse } from '../../quering/frontQuering/FrontQueringTypes';
// import { DataItemGroupsType } from './modelGroupType';

import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';

// Shared base state for all slices

// Data slice types
export default interface ActiveDIOpSliceTypes  {
  
  // Enhanced CRUD operations with status management.
  createCrudEndSignInYield: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  updateCrudEndSignInYield: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  deleteCrudEndSignInYield: () => Promise<ApiResponse<void> | undefined>;

  fetchCrudEndSignInYield: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
}