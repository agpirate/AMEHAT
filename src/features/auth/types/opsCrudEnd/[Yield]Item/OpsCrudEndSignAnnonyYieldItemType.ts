import { ApiResponse } from '../../quering/frontQuering/FrontQueringTypes';
// import { DataItemGroupsType } from './modelGroupType';

import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';

// Shared base state for all slices

// Data slice types
export default interface ActiveDIOpSliceTypes  {
  
  fetchCrudEndSignAnnonyYield: () => Promise<void | undefined>;
}