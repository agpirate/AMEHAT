//--- dataitem Paginations, the pagesize, totalpages
import { SortOrder } from "./ApiQueringTypes";

// Query slice types
export default interface SettingApiQueryType {

  setapiQPage: (page: number) => void;
  setapiQItemsPerPage: (count: number) => void;
  setapiQPagination: (obj: Record<string,number> ) => void;  

  setapiQSort: (field: string, direction: SortOrder) => void;
  
  setapiQSearchFilter: (query: string) => void;
  
  setapiQFilter: (obj: Record<string,string> | Record<string,any[]> ) => void;
}

