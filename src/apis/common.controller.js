import axios from "axios";

export class Api {
  base_url = process.env.REACT_APP_BASE_URL;

  // axios static instance
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.base_url,
      // default headers
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async sendRequest({ method, url, data, config }) {
    return await this.axiosInstance.request({
      url,
      method,
      data,
      ...config,
    });
  }

  /**
   * @param {string} url
   * @param {{} | URLSearchParams} params
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<any>>}
   */
  async get(url, params = {}, config) {
    return await this.sendRequest({
      method: "get",
      url,
      config: {
        params,
        ...config,
      },
    });
  }

  /**
   * @param {string} url
   * @param {{}} body
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<any>>}
   */
  async post(url, body = {}, config) {
    return await this.sendRequest({
      method: "post",
      url,
      data: body,
      config,
    });
  }

  /**
   * @param {string} url
   * @param {{}} body
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<any>>}
   */
  async put(url, body, config) {
    return await this.sendRequest({
      method: "put",
      url,
      data: body,
      config,
    });
  }

  /**
   * @param {string} url
   * @param {{}} body
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<any>>}
   */
  async patch(url, body, config) {
    return await this.sendRequest({
      method: "patch",
      url,
      data: body,
      config,
    });
  }

  /**
   * @param {string} url
   * @param {{}} body
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<any>>}
   */
  async delete(url, body, config) {
    return await this.sendRequest({
      method: "delete",
      url,
      data: body,
      config,
    });
  }
}

// Usage
// 커스텀 헤더

// new Api().get(
//   "/users",
//   { id: 1234 },
//   {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       AccessToken: "1234",
//       RefreshToken: "1234",
//     },
//   }
// );
