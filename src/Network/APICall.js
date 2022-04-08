import Axios from 'axios'
import Config from 'react-native-config'

const axiosInstance = Axios.create({
  baseURL: Config.API_URL,
  timeout: 30000
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (global.userData) {
      if (global.userData && global.userData.token) {
        config.headers.Authorization = `Bearer ${global.userData.token}`
      }
    }
    console.log('axios request =>', config)
    return config
  },
  (error) => {
    console.log('axios request error =>', error.response || error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (config) => {
    console.log('axios response =>', config)
    return config
  },
  (error) => {
    console.log('axios response error =>', error.response || error)
    return Promise.reject(error)
  }
)

const getFormData = (object) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => formData.append(key, object[key]))
  return formData
}

const APICall = async (method, body, url = null, headers = null, formData = false) => {
  const config = {
    method: method.toLowerCase()
  }
  if (url) {
    config.url = url
  }
  if (body && formData) {
    config.data = getFormData(body)
  } else {
    config.data = body
  }
  if (headers) {
    config.headers = headers
  }

  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then((res) => resolve(res.data))
      .catch((error) => {
        reject(error)
      })
  })
}

export default APICall
