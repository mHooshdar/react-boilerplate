export enum Method {
  GET = 'GET',
  HEAD = 'HEAD',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  POST = 'POST',
}

export type ApiResponse = Record<string, object>;

export interface RequestConfig {
  baseURL: string;
  method: Method;
  headers: Record<string, string>;
  maxRedirects: number;
  timeout: number;
}

/**
 *  params: Object will be uses in axios URL
 *  payload: the data will be send as Http Request payload (file or JSON object)
 *  onSuccessCallback: the function should call after request success:
 *     To prevent manipulating store (sample usecase : close modal on success)
 *  onErrorCallback: to show error in component without manipulating store
 */
export interface RequestData {
  params?: object;
  payload?: object;
  onSuccessCallback?: (res?: object) => void;
  onErrorCallback?: (error: object) => void;
  extraParams?: object;
}
