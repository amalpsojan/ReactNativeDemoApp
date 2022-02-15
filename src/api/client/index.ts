import {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios';
import {Axios} from '@app/services';

type RequestResponse = AxiosResponse & {};
type RequestError = AxiosError & {};

type RequestConfig = AxiosRequestConfig & {
  label?: string;
  showResponseLog?: boolean;
  onStart: () => void;
  onSuccess: (response: RequestResponse) => void;
  onError: (error: RequestError) => void;
  onFinished: () => void;
  isLoading: (value: boolean) => void;
};

const ApiClient = ({
  url,
  label = '',
  showResponseLog = false,
  onStart = () => {},
  onFinished = () => {},
  onError = () => {},
  isLoading = () => {},
  ...config
}: RequestConfig) => {
  onStart();
  isLoading(true);

  return Axios({
    ...config,
    url,
  })
    .then(response => {
      if (showResponseLog) {
        console.log(`API Fetch ${label} Success...`);
        console.log('API Fetch Response', JSON.stringify(response, 0, 10));
      }
    })
    .catch(error => {
      onError(error);
    })
    .finally(() => {
      isLoading(false);
      onFinished();
    });
};

export default ApiClient;
