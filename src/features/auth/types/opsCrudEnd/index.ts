
import OpsCrundEndDataItemQueriedTypes from './[Yield]Item/OpsCrudEndQueriedYieldItemsTypes'
import OpsCrundEndDataItemSignGoogleTypes from './[Yield]Item/OpsCrudEndSignGoogleYieldItemTypes'
import OpsCrundEndDataItemSignInTypes from './[Yield]Item/OpsCrudEndSignInYieldItemTypes'
import OpsCrudEndSignAnnonyYieldItemType from './[Yield]Item/OpsCrudEndSignAnnonyYieldItemType'
import OpsCrundEndDataItemSignUpTypes from './[Yield]Item/OpsCrudEndSignUpYieldItemTypes'
import OpsCrundEndDataItemsTypes from './[Yield]Items/OpsCrudEndQueriedYieldItemsTypes'


// Operation slice types

// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export default interface opsCrudEndTypes extends   OpsCrundEndDataItemSignGoogleTypes,
OpsCrundEndDataItemSignInTypes,OpsCrudEndSignAnnonyYieldItemType,OpsCrundEndDataItemSignUpTypes,OpsCrundEndDataItemsTypes,OpsCrundEndDataItemQueriedTypes {}