
import { DataItem } from './modelSchemaTypes';
import { SubOperation } from './operationTypes';


export interface GroupData {
  [key: string]: DataItem[];
}
  export interface HomeDataTypes {

      // latestNews: DataItem[];
      featuredItems: Record<string, GroupData>; 

      startFeaturedFetchOperation: (  payload?: Record<string,string>,subOp?: SubOperation['fetch'],) => void;
      fetchFeaturedData: () => Promise<void>;
      fetchFeaturedGroupData: () => Promise<void>;
      // fetchCategoryData: (category: string) => Promise<DataItem[]>;
  }
