import { frontQueringFilterTypes,featuredGroupOptionsType} from "../types/quering/frontQuering/FrontQueringTypes"
import { ApiQueringType} from "../types/quering/apiQuering/ApiQueringTypes"

export const featuredGroupOption:featuredGroupOptionsType = {

  locale:['tigrigna','erob','kunama','amharic','arabic','english'],
  region:['all','tigrai','ethiopia','horn africa','international'],

  category:['sport','local-news','world-news','business'],
  related:[],
  subcategory:['sport','economy','poltics'],
  
  mediaType:['tv','radio'],

  breaking:['yes'],
  recommended:[],
}


export let frontQueringFilters: frontQueringFilterTypes = {
    searchQuery: '',
    searchFields:[],//$containe 'title','description'

    filterGlobalSetting: {'locale': 'ti-ET'},//locale:['$eq','en'],region:['$eq','tigrai'],mediaType:['$eq','tv']
    mainFilters: {'category':'local-news'},//locale:['$eq','en'],region:['$eq','tigrai'],mediaType:['$eq','tv']
    
    activeFeaturedGroup: {},//category:['$eq','home','sport']
    
    // sortBy: { field: 'createdAt', direction: 'desc' as 'desc' },
    emailLogin:{email:'',password:''}
  }

export const apiQueringFilters : ApiQueringType = {
      pagination: { page: 1, pageSize:5 }, //page#,#/page
      filters: {  },
      sort: 'createdAt:desc',
      populate:'*',
      fields: []
      };