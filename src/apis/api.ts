import axios, { AxiosInstance, AxiosResponse } from "axios";

// https://opentdb.com/api.php?amount=10

const baseURL = "https://opentdb.com/api.php";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

export default axiosInstance;
