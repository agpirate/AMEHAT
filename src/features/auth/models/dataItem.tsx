
import { DataItemType} from "../types/[input]Item_Schema/SchemaInputItemTypes";
import { DataItemGroups} from "./dataItemGroups"


export const modelDataItem: DataItemType = {

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

  breaking:false,

  //groups
  ...DataItemGroups
}

export const SignInInputItem: Partial<DataItemType> = {

email:'',
password:'',

authenticated:false,
token:''
}


export const SignUpInputItem:  Partial<DataItemType>  = {

  username: '',
  email: '',

  password: '',
  confirmPassword: '',


  polictyAgreement:'',

}

export const SignGoogleInputItem:  Partial<DataItemType>  = {

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

  breaking:false,

  //groups
  ...DataItemGroups
}