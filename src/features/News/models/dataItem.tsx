
import { DataItem} from "../types/modelSchemaTypes";
import { Operation} from "../types/operationTypes";


export const defaultDataItem: DataItem = {

  id: 'string',
  name: 'string',

  title: 'string',
  subtitle: 'string',
  description: 'string',
  image: 'assets/images/tmma_logo.png',
  video: 'assets/images/tmma_logo.png',

  createdAt: 'string',
  updatedAt: 'string',

  adsLinki: 'string',
  adsLinkii: 'string',
  adsLinkiii: 'string',

  locale:'ti',
  region:'all',
  category:'home',
  categories:'home',
  mediaType:'',

  breaking:false,
}


export const defaultOperation:Operation = { type: null, status: 'idle',error:'' }

export const defaultSubOperation = {     
    fetch: null,
    create: null,
    update: null,
    delete: null,
    details: null,
   }



