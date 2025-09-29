
// import DataItemActiveTypes from './DataItemActiveTypes';
import DataItemsTypes from './DataItemsTypes'
import DataItemsFeaturedTypes from '../opsCrudEnd/[Yield]Items/OpsCrudEndFeaturedYieldItemsTypes'

// Operation slice types

// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export default interface DataItemsType extends DataItemsTypes,DataItemsFeaturedTypes {}
