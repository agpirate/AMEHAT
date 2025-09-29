
import { DataItem} from "../types/modelTypes";
import { categoryType } from "../types/modelCategoryType";
import { Operation} from "../types/operationTypes";
import { backendQueryParams,frontQFilters} from "../types/queryTypes"

export const categories:categoryType = {

  locale:['tigrigna','erob','kunama','amharic','arabic','english'],
  region:['all','tigrai','ethiopia','horn africa','international'],
  category:['home','sport','economy','poltics','music','entertainment'],

  mediaType:['tv','radio'],
}
export const categoriesHome:categoryType = {

  locale:['tigrigna','erob','kunama','amharic','arabic','english'],
  region:['all','tigrai','ethiopia','horn africa','international'],
  category:['sport','economy','poltics'],

  mediaType:['tv','radio'],
}

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
  mediaType:'',

  breaking:false,
}

export const schemaDataItem: DataItem = {

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

  locale:'string',
  region:'string',
  category:'string',
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




export let pagination: {
    currentPage: 1,
    itemsPerPage: 2,

    totalPages: 1,
    totalItems: 0,
  }


export let ffiltersQueryParams: frontQFilters = {
    searchQuery: '',
    searchFields:['title','description'],//$containe
    filtersParam: {locale:['$eq','en'],region:['$eq','tigrai'],category:['$eq','home'],mediaType:['$eq','tv']},
    filtersParamSide: {category:['$eq','home']},
  }

export const queryParams : backendQueryParams = {
      pagination: { page: 1, pageSize:5 }, //page#,#/page
      filters: { 'title':{'$eq':'Loveisgood'} },
      sort: 'createdAt:desc',
      populate: [],
      fields: []
      };
