
import { groupOptionsType } from "../types/modelGroupType";

let mainGroup = 'category'
const programsGroup = 'programs_subcategory'
const entertainmentGroup = 'entertainment_subcategory'
const lifestyleGroup = 'lifestyle_subcategory'

export const modelGroups:groupOptionsType = {

  locale:['tigrigna','erob','kunama','amharic','arabic','english'],
  region:['all','tigrai','ethiopia','horn africa','world'],

  categories : {
  
    // 'latest': {
    //   id: '0',
    //   groupName:mainGroup,
    //   name: 'featured',
    //   icon: 'star', // Example icon
    //   featuredContent: true
    // },
    'stream': {
      id: '1',
      name: 'stream',
      groupName:mainGroup,
      icon: 'tv',
      type: 'channel'
    },
      'news': {
      id: '1',
      name: 'news',
      groupName:mainGroup,
      icon: 'tv',
      type: 'channel',
      children: {
      'Local News': { id: '4 1',groupName:entertainmentGroup, name: 'local news', icon: 'play' },
      'World News': { id: '4 2',groupName:entertainmentGroup, name: 'world new', icon: 'play' },
    }
    },
    'Programs': {
      id: '2',
      name: 'programs',
      icon: 'film',
      subTitle: 'Explore real stories',
      groupName:mainGroup,
      children: {
        'Treka metshaf': { id: '3 1',groupName:programsGroup, name: 'Treka metshaf', icon: 'play' },
        'Negarit hiwot': { id: '3 2',groupName:programsGroup, name: 'Negarit hiwot', icon: 'play' },
        'Liela': { id: '3 2',groupName:programsGroup, name: 'Liela', icon: 'play' },
        'Bandebotom': { id: '3 2',groupName:programsGroup, name: 'bandebotom', icon: 'play' },
        'Wegawi tshuf': { id: '3 2',groupName:programsGroup, name: 'wegawi tshuf', icon: 'play' },
        'Lfnti hasab': { id: '3 2',groupName:programsGroup, name: 'lfnti hasab', icon: 'play' },
        "Qnyat tigrai": { id: '3 2',groupName:programsGroup, name:"qnyat tigrai", icon: 'play' },
        "Hgn fthn": { id: '3 2',groupName:programsGroup, name: 'hgn fthn', icon: 'play' },
        "Temokro": { id: '3 2',groupName:programsGroup, name: 'temokro', icon: 'play' },
        "Tezbti": { id: '3 2',groupName:programsGroup, name: 'tezbti', icon: 'play' },
      }
    },
    'entertainment': {
      id: '3',
      name: 'entertainment',
      groupName:mainGroup,
      icon: 'play-circle',
        children: {
      'Trgum eta derfi': { id: '4 1',groupName:entertainmentGroup, name: 'trgum eta derfi', icon: 'play' },
      'Meretsa derfi': { id: '4 2',groupName:entertainmentGroup, name: 'meretsa derfi', icon: 'play' },
      'Quanqua musika': { id: '4 3',groupName:entertainmentGroup, name: 'quanqua musika', icon: 'award' },
      'Hton melsn': { id: '4 3',groupName:entertainmentGroup, name: 'hton melsn', icon: 'award' },
    }
    },
    'podcast': {
      id: '5',
      groupName:mainGroup,
      name: 'documentary',
      icon: 'heart',
    },
  // 'sci-tech': {
  //   id: '6',
  //   name: 'Science & Tech',
  //   icon: 'microscope',
  //   subTitle: 'Innovation and discovery'
  // }
      },

    mediaType:['tv','radio'],
}


