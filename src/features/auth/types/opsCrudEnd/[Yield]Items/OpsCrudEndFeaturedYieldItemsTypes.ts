
import { DataItemType } from '../../[input]Item_Schema/SchemaInputItemTypes';


export interface GroupData {
  [key: string]: DataItemType[];
}
  export default interface HomeDataTypes {

      // latestNews: DataItem[];
      featuredItems: Record<string, GroupData>; 
      
      //DataItem ( Operating)
      fetchFeaturedData: () => Promise<void>;
      fetchFeaturedGroupData: () => Promise<void>;


  }
