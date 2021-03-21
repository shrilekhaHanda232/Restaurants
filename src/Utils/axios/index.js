import axios from "axios";

const axiosInstance = axios.create();

const requestHandler = (request) => {
  return request;
};

const errorHandler = (error) => {
  if (error.response && error.response.status === 401) {
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  return response;
};
axiosInstance.interceptors.request.use((request) => requestHandler(request));
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
