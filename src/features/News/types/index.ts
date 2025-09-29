
import {HomeDataTypes } from './featuredDataTypes';
import {ModelDataTypes } from './modelDataTypes';
import {OperationSlice } from './operationTypes';
import {QuerySlice } from './queryTypes';
import { ModelSchemaTypes } from './modelSchemaTypes';
import { modelGroupType} from './modelGroupType';

import { ModelActiveTypes} from "./modelActiveTypes"
export type AppStore = OperationSlice & ModelDataTypes & HomeDataTypes & QuerySlice & ModelSchemaTypes & modelGroupType & ModelActiveTypes;


