import axios from 'axios'
import adapter from "axios/lib/adapters/http";
axios.defaults.adapter = adapter;

export class API {
  useProxy = false
  constructor(url, useProxy) {
    this.useProxy = useProxy
    
    if (url === undefined || url === "") {
      url = process.env.VUE_APP_BASE_API_URL;
    }
    if (url.endsWith("/")) {
      url = url.substr(0, url.length - 1)
    }
    this.url = url
  }
  
  withPath(path) {
    if (this.useProxy) {
      return path
    }
    
    if (!path.startsWith("/")) {
      path = "/" + path
    }
    return `${this.url}${path}`
  }
  
  async getTodos() {
    return axios.
    get(this.url + '/api/v1/todos').
    then(r => r.data)
  }
  
  async createTodo(todo) {
    return axios.
    post(this.url + '/api/v1/todos', {todo : todo}).
    then(r => r.data)
  }
}
export default new API(process.env.VUE_APP_BASE_API_URL, true)