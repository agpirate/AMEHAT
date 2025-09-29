import * as yup from 'yup';
import { ApiResponse } from './queryTypes';
import { groupValueType } from './modelGroupType';

import { DataItem } from './modelSchemaTypes';
// Shared base state for all slices

// Data slice types
export interface ModelDataTypes  {
  items: DataItem[];
  
  // Enhanced CRUD operations with status management.
  createItem: () => Promise<ApiResponse<Partial<DataItem>> | undefined>;
  updateItem: () => Promise<ApiResponse<Partial<DataItem>> | undefined>;
  deleteItem: () => Promise<ApiResponse<void> | undefined>;
  fetchItems: () => Promise<ApiResponse<Partial<DataItem>[]> | undefined>;
  fetchItemDetails: (id:string) => Promise<ApiResponse<Partial<DataItem>> | undefined>;
}