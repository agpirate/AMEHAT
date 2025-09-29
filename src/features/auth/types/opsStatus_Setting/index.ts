
import OpsSettingSliceType from './OpsSetting';
import OpsSliceType from './OpsTypes'


// Operation slice types

// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export interface OpsSliceTypes extends OpsSettingSliceType,  OpsSliceType {}