import {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios';
import {Axios} from '@appServices';

interface RequestResponse<T = any, D = any> extends AxiosResponse {
  data: T;
  config: AxiosRequestConfig<D>;
}

type RequestError = AxiosError & {};

type RequestConfig = AxiosRequestConfig & {
  args?: any;
  label?: string;
  showLog?: boolean;
  onStart?: () => void;
  onSuccess: (response: RequestResponse) => void;
  onError: (error: RequestError) => void;
  onFinished?: () => void;
  onLoading?: (value: boolean) => void;
};

const dataSupportedMethods = [
  'delete',
  'DELETE',
  'post',
  'POST',
  'put',
  'PUT',
  'patch',
  'PATCH',
];

const ApiClient = ({
  url,
  label = '',
  args,
  method = 'GET',
  showLog = false,
  onStart = () => {},
  onFinished = () => {},
  onError = () => {},
  onLoading = () => {},
  onSuccess = () => {},
  data,
  params,
  ...config
}: RequestConfig) => {
  onStart();
  onLoading(true);

  let argKey = '';

  if (dataSupportedMethods.indexOf(method) > -1 && !data) {
    argKey = 'data';
  } else if (method === 'GET' || method === 'get') {
    argKey = 'params';
  }

  return Axios({
    ...config,
    method,
    url,
    data,
    params,
    [argKey]: args,
  })
    .then(response => {
      if (showLog) {
        console.log(`API Fetch ${label} Success...`);
        console.log('API Fetch Response', JSON.stringify(response, 0, 10));
      }
      onSuccess(response);
    })
    .catch(error => {
      onError(error);
    })
    .finally(() => {
      onLoading(false);
      onFinished();
    });
};

export default ApiClient;

export {RequestConfig, RequestResponse, RequestError};
