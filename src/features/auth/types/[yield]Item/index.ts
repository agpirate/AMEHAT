
import DataItemTypes from './YieldItemTypes';
import SettingDataItemActiveTypes from './SettingYieldItemTypes';


// Operation slice types

// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export default interface DataItemActiveType extends DataItemTypes,  SettingDataItemActiveTypes {}