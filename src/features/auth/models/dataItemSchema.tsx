
import { DataItemType,DataItemSchemaType} from "../types/[input]Item_Schema/SchemaInputItemTypes";
import { DataItemGroups} from "./dataItemGroups"


export const schemaDataItem : Partial<DataItemSchemaType> ={

      email: {
        type: 'string',
        fieldtype:'email',
        required: true,
        // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        validate: (value:any) => {
          if (!value) return 'Email is required';
          if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            return 'Invalid email format';
          }
          return undefined;
        }
      },

      password: {
        type: 'string',
        fieldtype:'password',
        required: true,
        // minLength: 8,
        validate: (value:any) => {
          if (!value) return 'Password is required';
          if (value.length < 8) return 'Password must be at least 8 characters';
          if (!/[A-Z]/.test(value)) return 'Must contain at least one uppercase letter';
          if (!/[a-z]/.test(value)) return 'Must contain at least one lowercase letter';
          if (!/[0-9]/.test(value)) return 'Must contain at least one number';
          return undefined;
        }
      }
}
      
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
password:''
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