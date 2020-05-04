// node_modules
import axios from 'axios';
// models
import { Method, RequestConfig } from '@models/axios';

const BASE_URL = 'http://base';

const requestConfig: RequestConfig = {
  baseURL: BASE_URL,
  method: Method.GET,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'text/plain',
  },
  maxRedirects: 0,
  timeout: 0,
};

const instance = axios.create(requestConfig);

const getDispatch = (url: string, payload: {}) => instance.get(url, payload);

const postDispatch = (url: string, payload: {}) => instance.post(url, payload);

const putDispatch = (url: string, payload: {}) => instance.put(url, payload);

const deleteDispatch = (url: string, payload: {}) => instance.delete(url, payload);

function generateUrl(partialUrl: string, params: object | null = null) {
  let url = BASE_URL + partialUrl;
  let postFix = '';
  if (!params) return url;
  Object.entries(params).map(([key, value]) => {
    if (!value) return;
    const searchKey = `{${key}}`;
    if (url.indexOf(searchKey) !== -1) {
      url = url.replace(searchKey, value);
    } else {
      if (!postFix) {
        postFix = '?';
      } else {
        postFix += '&';
      }
      postFix += `${key}=${value}`;
    }
  });
  return url + postFix;
}

const self = function dispatch(
  urlInfo: { url: string; method: string },
  payload: object | null = null,
  params: object | null = null,
) {
  let body: Function;
  const url = generateUrl(urlInfo.url, params);
  if (urlInfo.method === Method.GET) body = getDispatch;
  if (urlInfo.method === Method.POST) body = postDispatch;
  if (urlInfo.method === Method.PUT) body = putDispatch;
  if (urlInfo.method === Method.DELETE) body = deleteDispatch;

  return new Promise((resolve, reject) => {
    body(url, payload)
      .then((data: { data: object }) => resolve(data.data))
      .catch((err: { response: { status: number } | undefined }) => {
        if (err.response && err.response.status === 401) {
          // unauthorize
        } else {
          reject(err.response);
        }
      });
  });
};

export default self;
