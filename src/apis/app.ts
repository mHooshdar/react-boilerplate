// models
import { RequestData, Method } from '@models/axios';
// api
import Dispatch from '@apis/index';

const urls = {
  enableTest: {
    url: '/test',
    method: Method.GET,
  },
  disableTest: {
    url: '/test',
    method: Method.GET,
  },
};

function api() {
  return {
    enableTest: (data: RequestData) => Dispatch(urls.enableTest, data.payload),
    disableTest: (data: RequestData) => Dispatch(urls.disableTest, data.payload),
  };
}

export default api();
