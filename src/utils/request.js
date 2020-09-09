import axios from 'axios'
// import store from '@/store'
// import router from '@/router'

// 创建一个AXIOS实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做某事
    // console.log(store.getters.token)
    if (config.method == "get") {
      if (config.params == undefined) {
        config.params = {}
      }
      //config.params.openid = storage.get("openID")
      config.params.openid = "0119101004"
    } else {
      if (config.data == undefined) {
        config.data = {}
      }
      //config.data.openid = storage.get("openID")
      config.data.openid = "0119101004"
    }
    //
    return config;
  },
  error => {
    // 用请求错误做某事
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {

    }
    return Promise.reject(error.message)
    //Promise.reject()方法返回一个带有拒绝原因的Promise对象。
  }
)

export default service
