
import { groupOptionsType } from "../types/modelGroupType";

let mainGroup = 'category'
const sportGroup = 'subcategory'
const entertainmentGroup = 'entertainment_subcategory'
const lifestyleGroup = 'lifestyle_subcategory'


export const modelGroups:groupOptionsType = {

  locale:['tigrigna','erob','kunama','amharic','arabic','english'],
  region:['all','tigrai','ethiopia','horn africa','world'],

  categories : {
  
    'latest': {
      id: '0',
      name: 'featured',
      icon: 'star', // Example icon
      groupName:mainGroup,
      featuredContent: true
    },
    'Local News': {
      id: '1',
      name: 'local-news',
      icon: 'tv',
      groupName:mainGroup,
      type: 'channel'
    },
    'International News': {
      id: '2',
      name: 'international-news',
      icon: 'film',
      subTitle: 'Explore real stories',
      groupName:mainGroup,

    },
    'Sport': {
      id: '3',
      name: 'sport',
      icon: 'play-circle',
      groupName:mainGroup,
      children: {
        'Spoort-locale': { id: '3-1',groupName:sportGroup, name: 'local-sport', icon: 'play' },
        'Sport-international': { id: '3-2',groupName:sportGroup, name: 'international-sport', icon: 'play' },
      }
    },
    'Business': {
      id: '5',
      name: 'business',
      icon: 'heart',
      groupName:mainGroup,

    },

    'Fact Check': {
      id: '6',
      name: 'weathert',
      icon: 'heart',
      groupName:mainGroup,
    },

    'Tigrai Weather': {
      id: '6',
      name: 'weathert',
      icon: 'heart',
      groupName:mainGroup,
    },

      },

    mediaType:['tv','radio'],
}


