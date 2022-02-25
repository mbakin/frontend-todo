import axios from "axios"

class API {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL
    })
  }
  
  async pullVideos() {
    const { data } = await this.client.get("/videos")
    return data
  }
}

export default API