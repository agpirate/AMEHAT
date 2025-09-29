
import SignUpDataItemTypes from './SignUpInputItem';
import SignInDataitemTypes from './SignInInputItem';
import SignGoogleDataitemTypes from './SignGoogleInputItem';

// Operation slice types

// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export default interface SignItemType extends SignUpDataItemTypes,  SignInDataitemTypes, SignGoogleDataitemTypes {}