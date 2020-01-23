import axios from 'axios'

const _createAxiosInterceptor = url => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json'
    }
  });

  axiosCreate.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
      // eslint-disable-next-line no-unreachable
      console.log(error)
    }
  );

  return axiosCreate;
};

const BaseService = _createAxiosInterceptor(
  process.env.REACT_APP_BASE_URL_REST
);

export default BaseService;