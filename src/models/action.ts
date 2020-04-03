// models
import { RequestData } from '@models/axios';

export interface ReduxAction {
  error?: object;
  meta?: object;
  payload: RequestData;
  type: string;
}
