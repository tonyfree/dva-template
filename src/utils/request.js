import axios from 'axios'
import { cloneDeep } from 'lodash'

const fetch = (options) => {
  let {
    method = 'get',
    data,
    url,
  } = options

  const cloneData = cloneDeep(data)

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axios.delete(url, {
        params: cloneData,
      })
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request(options) {
  return new Promise((resolve, reject) => {
    fetch(options).then(res => {
      // 根据返回的状态码或者提示做处理：比如权限、业务异常
      resolve(res)
    }).catch(err => {
      // 网络异常、接口异常
      reject(err)
    })
  })
}