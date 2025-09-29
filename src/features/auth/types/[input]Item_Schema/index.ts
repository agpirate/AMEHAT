
import DataItemModelSchemaTypes from './SchemaInputItemTypes';
import GroupType from './GroupType'


// Operation slice types

// export interface OperationSliceType = ActiveItemOperationSliceType &  CommonOperationSliceType & ItemsOperationSliceType
export default interface SchemaInputItemType extends DataItemModelSchemaTypes,  GroupType {}