import axios from "axios";

class APIClass {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: 10000
    });
  }

  getDefaultHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      responseType: "application/json"
    };
  }

  get(url) {
    return this.instance.get(url, {
      headers: this.getDefaultHeaders()
    })
  }

  post(url, data) {
    return this.call('post', url, data);
  }

  call(method, url, data) {
    return this.instance[method](url, data, {
      method,
      headers: this.getDefaultHeaders()
    });
  }
}

const API = new APIClass();

export default API;