
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
    
    'tigrai tv': {
      id: '1',
      name: 'tigrai-tv',
      groupName:mainGroup,
      icon: 'tv',
      type: 'channel'
    },
    'Programs': {
      id: '2',
      name: 'programs',
      icon: 'film',
      subTitle: 'Explore real stories',
      groupName:mainGroup,
      children: {
        'kolahta': { id: '3-1',groupName:programsGroup, name: 'kolahta', icon: 'play' },
        'Zaeba lomi': { id: '3-2',groupName:programsGroup, name: "Zaeba lomi", icon: 'play' },
        'Meadi hasabat': { id: '3-2',groupName:programsGroup, name: 'meadi-hasabat', icon: 'play' },
        'Wegei klte weldo': { id: '3-2',groupName:programsGroup, name: 'wegei-klte-weldo', icon: 'play' },
        'Tigrai entay tmhar': { id: '3-2',groupName:programsGroup, name: 'tigrai-entay-tmhar', icon: 'play' },
        'Tigrai seb alewa': { id: '3-2',groupName:programsGroup, name: 'tigrai-seb-alewa', icon: 'play' },
        "Medeb t'ena": { id: '3-2',groupName:programsGroup, name:"medeb-teena", icon: 'play' },
        "Shshay gedenana": { id: '3-2',groupName:programsGroup, name: 'shshay-gedena', icon: 'play' },
        "Medaib": { id: '3-2',groupName:programsGroup, name: 'medaib', icon: 'play' },
        "Medeb htsanat": { id: '3-2',groupName:programsGroup, name: 'medeb-htsanat', icon: 'play' },
      }
    },
    'Entertainment': {
      id: '3',
      name: 'entertainment',
      groupName:mainGroup,
      icon: 'play-circle',
        children: {
      'Lehay': { id: '4-1',groupName:entertainmentGroup, name: 'lehay', icon: 'play' },
      'Meadi tbeb': { id: '4-2',groupName:entertainmentGroup, name: 'meadi-tbeb', icon: 'play' },
      'Gezm senbet': { id: '4-3',groupName:entertainmentGroup, name: 'gezm-senbet', icon: 'award' },
      'Wezbi': { id: '4-3',groupName:entertainmentGroup, name: 'wezbi', icon: 'award' },
      'Teamot': { id: '4-3',groupName:entertainmentGroup, name: 'teamot', icon: 'award' },
      'Engdot derfi': { id: '4-3',groupName:entertainmentGroup, name: 'engdot-derfi', icon: 'award' },
      'Wedi romit show': { id: '4-3',groupName:entertainmentGroup, name: 'wedi-romit-show', icon: 'award' },
      'Ziema yared': { id: '4-3',groupName:entertainmentGroup, name: 'ziema-yared', icon: 'award' },
      'Afrna show': { id: '4-3',groupName:entertainmentGroup, name: 'afrna-show', icon: 'award' },
      'Enda thsh': { id: '4-3',groupName:entertainmentGroup, name: 'enda-thsh', icon: 'award' },
    }
    },
    'Documentary': {
      id: '5',
      groupName:mainGroup,
      name: 'documentary',
      icon: 'heart',
    },
  // 'lifestyle': {
  //   id: '5',
  //   groupName:mainGroup,
  //   name: 'lifestyle',
  //   icon: 'heart',
  //   children: {
  //     'Health': { id: '5-1',groupName:lifestyleGroup, name: 'health', icon: 'activity' },
  //     'Foods And Nutrition': { id: '5-2',groupName:lifestyleGroup, name: 'food-nutrition', icon: 'utensils' },
  //     'Travel': { id: '5-3', groupName:lifestyleGroup,name: 'travel', icon: 'globe' }
  //   }
  // },
  // 'sci-tech': {
  //   id: '6',
  //   name: 'Science & Tech',
  //   icon: 'microscope',
  //   subTitle: 'Innovation and discovery'
  // }
      },

    mediaType:['tv','radio'],
}


