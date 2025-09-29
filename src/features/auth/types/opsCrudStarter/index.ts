
// import OpsStarterDataItemActiveTypes from './OpsStarterDataItemActiveTypes';
import OpsStarterDataItemsTypes from './[Yield]Items/OpsCrudStarterQueriedYieldItemsTypes';

import OpsStarterDataItemQueriedTypes from "./[Yield]Item/OpsCrudStarterQueriedYieldItemsTypes"
import OpsStarterDataItemSignGoogleTypes from "./[Yield]Item/OpsCrudStarterSignGoogleYieldItemTypes"
import OpsStarterDataItemSignInTypes from "./[Yield]Item/OpsCrudStarterSignInYieldItemTypes"
import OpsStarterDataItemSignUpTypes from "./[Yield]Item/OpsCrudStarterSignUpYieldItemTypes"

// Operation slice types

// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export default interface OpsCrudStarter extends  OpsStarterDataItemsTypes,OpsStarterDataItemSignGoogleTypes,
OpsStarterDataItemSignInTypes,OpsStarterDataItemSignUpTypes,OpsStarterDataItemQueriedTypes {}