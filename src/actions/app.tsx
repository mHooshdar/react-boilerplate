// node_modules
import { action } from 'typesafe-actions';

export enum AppActionTypes {
  ENABLE_TEST = '@@app/ENABLE_TEST',
  DISABLE_TEST = '@@app/DISABLE_TEST',
}

export const enableTest = (data?: {}) => action(AppActionTypes.ENABLE_TEST, data);
export const disableTest = (data?: {}) => action(AppActionTypes.DISABLE_TEST, data);
