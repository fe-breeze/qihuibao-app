import 'whatwg-fetch'
import { formData } from './utils'

function checkStatus(response) {
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === 401 ||
    response.status === 403
  ) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function checkLogin(response) {
  if (response.code === -2) {
    const error = new Error(response.message || '禁止访问')
    error.response = response
    error.toLogin = true
    throw error
  } else {
    return response
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  }
  let requestUrl = url
  const newOptions = { ...defaultOptions, ...options }
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
      newOptions.body = formData(newOptions.body)
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
      newOptions.body = JSON.stringify(newOptions.body)
    }
  } else {
    const query = formData(newOptions.body)
    if (query) {
      requestUrl = `${url}?${query}`
    }
    newOptions.body = undefined
  }

  return fetch(requestUrl, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .then(checkLogin)
    .catch(error => {
      if (error.toLogin) {
        throw error
      } else {
        return error
      }
    })
}
