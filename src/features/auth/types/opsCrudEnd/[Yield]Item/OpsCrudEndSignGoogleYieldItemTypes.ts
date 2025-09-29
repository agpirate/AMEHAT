import { ApiResponse } from '../../quering/frontQuering/FrontQueringTypes';
// import { DataItemGroupsType } from './modelGroupType';

import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';

// Shared base state for all slices

// Data slice types
export default interface ActiveDIOpSliceTypes  {
  
  // Enhanced CRUD operations with status management.
  createCrudEndSignGoogleYield: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  updateCrudEndSignGoogleYield: () => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
  deleteCrudEndSignGoogleYield: () => Promise<ApiResponse<void> | undefined>;

  fetchCrudEndSignGoogleYield: (id:string) => Promise<ApiResponse<Partial<DataItemType>> | undefined>;
}