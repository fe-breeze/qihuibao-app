import querystring from 'querystring'
import md5 from 'react-native-md5'
import 'whatwg-fetch'
import store from '../index'
// import { notification } from 'antd';
// import { routerRedux } from 'dva/router';
// import { Storage } from './index'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const errortext = codeMessage[response.status] || response.statusText
  // notification.error({
  //   message: `请求错误 ${response.status}: ${response.url}`,
  //   description: errortext,
  // });
  const error = new Error(errortext)
  error.name = response.status
  error.response = response
  throw error
}

function createSign(params, timestamp, token) {
  const p = { ...params, token, timestamp }
  let keys = Object.keys(p)
  keys = keys.sort()
  let first = true
  let temp = ''
  keys.forEach(key => {
    if (first) {
      first = false
    } else {
      temp += '&'
    }
    temp = `${temp + key}=`
    const val = `${p[key]}`
    // val = encodeURI(val).replaceAll("'", "%27");//替换 "'" 符号
    temp += val
  }, this)
  const sign = md5.hex_md5(temp)
  return sign.toUpperCase()
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, token = null) {
  const defaultOptions = {
    credentials: 'include',
  }

  let requestUrl = url
  let newHeaders = {}

  if (token) {
    const timestamp = Math.ceil(new Date().getTime() / 1000)
    const sign = createSign(options.body, timestamp, token)
    console.log({ timestamp, token, sign })
    newHeaders = {
      'header-token': token,
      'header-timestamp': timestamp,
      'header-sign': sign,
    }
  }

  const newOptions = {
    ...defaultOptions,
    ...options,
    headers: { ...options.headers, ...newHeaders },
  }

  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (
      options['Content-Type'] &&
      options['Content-Type'].toLowerCase().indexOf('x-www-form-urlencoded') >=
        0
    ) {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
      newOptions.body = querystring.stringify(newOptions.body)
    } else if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
      newOptions.body = JSON.stringify(newOptions.body)
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        ...newOptions.headers,
      }
    }
  } else {
    const query = querystring.stringify(newOptions.body)
    if (query) {
      requestUrl = `${url}?${query}`
    }
    newOptions.body = undefined
  }

  console.log(`request url: ${requestUrl}`)

  return fetch(requestUrl, newOptions)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text()
      }
      const json = response.json()
      console.log(json)
      return json
    })
    .catch(e => {
      const { dispatch } = store().props.store
      const status = e.name
      if (status === 401) {
        dispatch({
          type: 'app/logout',
        })
        return
      }
      if (status === 403) {
        dispatch({
          type: 'app/logout',
        })
        return
      }
      if (status <= 504 && status >= 500) {
        dispatch({
          type: 'app/logout',
        })
        return
      }
      if (status >= 404 && status < 422) {
        dispatch({
          type: 'app/logout',
        })
      }
    })
}
