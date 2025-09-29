import { backendQueryParams,frontQFilters} from "../types/queryTypes"
import { featuredGroupOptionsType} from "../types/queryTypes"




export const featuredGroupOption:featuredGroupOptionsType = {

  locale:['tigrigna','erob','kunama','amharic','arabic','english'],
  region:['all','tigrai','ethiopia','horn africa','international'],

  category:['programs','entertainment','documentary','lifestyle'],
  subcategory:['sport','economy','poltics'],
  'activeprograms_subCategories':['sport','economy','poltics'],
  'activeentertainment_subCategories':['sport','economy','poltics'],
  'activelifestyle_subCategories':['sport','economy','poltics'],
  related:[],

  mediaType:['tv','radio'],

  breaking:['yes'],
  recommended:[],
}


export let pagination = {
    currentPage: 1,
    itemsPerPage: 2,

    totalPages: 1,
    totalItems: 0,

  }


export let clientQFilters: frontQFilters = {
    searchQuery: '',
    searchFields:[],//$containe 'title','description'

    filterGlobalSetting: {'locale': 'ti-ET'},//locale:['$eq','en'],region:['$eq','tigrai'],mediaType:['$eq','tv']
    filterClientSetting: {'category':''},//locale:['$eq','en'],region:['$eq','tigrai'],mediaType:['$eq','tv']
    
    activeFeaturedGroup: {},//category:['$eq','home','sport']
    
    sortBy: { field: 'createdAt', direction: 'desc' as 'desc' },
  }


export const queryParams : backendQueryParams = {
      pagination: { page: 1, pageSize:20 }, //page#,#/page
      filters: {  },
      sort: 'createdAt:desc',
      populate:'*',
      fields: []
      };