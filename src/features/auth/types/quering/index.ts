
import ApiQueringSliceType from './apiQuering/ApiQueringTypes';
import SettingApiQueryType from './apiQuering/SettingApiQueryTypes';
import ApiResponse from './apiResponse/ApiResponseTypes';

import {FrontQueringSliceType} from './frontQuering/FrontQueringTypes'
import {SettingFrontQueringTypes} from './frontQuering/SettingFrontQueringTypes'


// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export default interface QueringTypes extends ApiQueringSliceType,SettingApiQueryType,  SettingFrontQueringTypes,FrontQueringSliceType {}