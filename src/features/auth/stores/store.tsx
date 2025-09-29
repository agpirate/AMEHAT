import { create, StoreApi } from 'zustand';

import { AppStore} from '../types/index'

//Datas
import { DataItemSchemaSlice} from './[input]Item_Schema/SchemaInputItemSlice'
import { DataItemGroupsSlice} from './[input]Item_Schema/GroupsSlice'

import { DataItemSignInSlice} from './[input]Item_Signing/SignInInputItemSlice'
import { DataItemSignUpSlice} from './[input]Item_Signing/SignUpItemItemSlice'
import { DataItemSignGoogleSlice} from './[input]Item_Signing/SignGoogleInputItemSlice'

//starter Data
import OpsCrudStarterDataItemQueriedSlice from './opsCrudStarter/[Yield]Item/OpsCrudStarterQueriedYieldItemsSlice'
import OpsCrudStarterDataItemSignUpSlice from './opsCrudStarter/[Yield]Item/OpsCrudStarterSignUpYieldItemSlice'
import OpsCrudStarterDataItemSignInSlice from './opsCrudStarter/[Yield]Item/OpsCrudStarterSignInYieldItemSlice'
import OpsCrudStarterDataItemSignGoogleSlice from './opsCrudStarter/[Yield]Item/OpsCrudStarterSignGoogleYieldItemSlice'

import OpsCrudStarterDataItemsSlice from './opsCrudStarter/[Yield]Items/OpsCrudStarterQueriedYieldItemsSlice'


//ending Data
import OpsCrundEndDataItemQueriedSlice from './opsCrudEnd/[Yield]item/OpsCrudEndQueriedYieldItemsSlice'
import OpsCrundEndDataItemSignInSlice from './opsCrudEnd/[Yield]item/OpsCrudEndSignInYieldItemSlice'
import OpsCrudEndSignAnnonyYieldItemSlice from './opsCrudEnd/[Yield]item/OpsCrudEndSignAnnonyYieldItemSlice'
import OpsCrundEndDataItemSignUpSlice from './opsCrudEnd/[Yield]item/OpsCrudEndSignUpYieldItemSlice'
import OpsCrundEndDataItemSignGoogleSlice from './opsCrudEnd/[Yield]item/OpsCrudEndSignGoogleYieldItemSlice'

import OpsCrudEndDataItemsSlice from './opsCrudEnd/[Yield]items/OpsCrudEndQueriedYieldItemsSlice'
import OpsCrudEndDataItemsFeaturedSlice from './opsCrudEnd/[Yield]items/OpsCrudEndFeaturedYieldItemsSlice' //outputs ++ endingOps


//Outputs
import DataitemActiveSlice from './[yield]Item/YieldItemSlice'
import SettingDataitemActiveSlice from './[yield]Item/SettingYieldItemSlice'

import { DataItemsSlice} from './[yield]Items/YieldItemsSlice'

//OpsStatus.. Setting
import OpsSettingSlice from './opsStatus_Setting/SettingOpsStatusSlice';

import OpsSlice from './opsStatus_Setting/OpsStatusSlice';

//Quering...Setting
import { FrontQueringSlice} from './quering/frontQuering/FrontQueringSlice'
import {SettingFrontQueringSlice} from './quering/frontQuering/SettingFrontQueringSlice';

import ApiQuerySlice from './quering/apiQuering/ApiQueringSlice'
import SettingApiQuerySlice from './quering/apiQuering/SettingApiQuerySlice'


export const useStore = create<AppStore>(
  
  (set: { (partial: any, replace?: boolean | undefined): void; (partial: any, replace?: boolean | undefined): void; (partial: any, replace?: boolean | undefined): void; (partial: any, replace?: boolean | undefined): void; (partial: any, replace?: boolean | undefined): void; (partial: any, replace?: boolean | undefined): void; (partial: any, replace?: boolean | undefined): void; (partial: any, replace?: boolean | undefined): void; }, 
  get: { (): any; (): any; (): any; (): any; (): any; (): any; (): any; (): any; },
  api: StoreApi<any>) => ({
  // Initial state
  // ...initialState,
    
  ...DataItemSchemaSlice(set, get, api), // Include the operation slice
  ...DataItemGroupsSlice(set,get,api),

  ...DataItemSignInSlice(set, get, api), // Include the operation slice
  ...DataItemSignUpSlice(set, get, api), // Include the operation slice
  ...DataItemSignGoogleSlice(set, get, api), // Include the operation slice


   //starter
   
  ...OpsCrudStarterDataItemQueriedSlice(set, get, api), // Include the operation slice
  ...OpsCrudStarterDataItemSignUpSlice(set, get, api), // Include the operation slice
  ...OpsCrudStarterDataItemSignInSlice(set, get, api), // Include the operation slice
  ...OpsCrudStarterDataItemSignGoogleSlice(set, get, api), // Include the operation slice
  ...OpsCrudStarterDataItemsSlice(set, get, api), // Include the operation slice
  
  //ends
  
  ...OpsCrundEndDataItemQueriedSlice(set,get,api),
  ...OpsCrundEndDataItemSignInSlice(set,get,api),
  ...OpsCrudEndSignAnnonyYieldItemSlice(set,get,api),
  ...OpsCrundEndDataItemSignUpSlice(set,get,api),
  ...OpsCrundEndDataItemSignGoogleSlice(set,get,api),

    ...OpsCrudEndDataItemsSlice(set, get, api), // Include the operation slice
  ...OpsCrudEndDataItemsFeaturedSlice(set, get, api), // Include the operation slice


  ...OpsSettingSlice(set, get, api), // Include the operation slice
  ...OpsSlice(set, get, api), // Include the operation slice

  ...FrontQueringSlice(set, get, api), // Include the operation slice
  ...SettingFrontQueringSlice(set, get, api), // Include the operation slice
  
  ...ApiQuerySlice(set, get, api), // Include the operation slice
  ...SettingApiQuerySlice(set, get, api), // Include the operation slice


  //Outputs
  ...DataitemActiveSlice(set, get, api), // Include the operation slice
 ...SettingDataitemActiveSlice(set,get,api),

  ...DataItemsSlice(set, get, api), // Include the operation slice
  // ...DataItemsFeaturedSlice(set,get,api),
  
  
  // Actions implementation

  //-------------------
})

);

export default useStore