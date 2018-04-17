import request from '../utils/request'

// const BASE = 'http://localhost:9080/api/'
const BASE = 'http://localhost:9080/api/'

export const login = async payload => {
  console.log(payload)
  const data = await request(`${BASE}login`, {
    method: 'POST',
    body: payload,
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  })
  return data
}
export const vCode = async payload => {
  console.log(`send vcode${payload}`)
  const data = await request(`${BASE}vefirycode/vefiry`, {
    method: 'POST',
    body: {
      mobile: payload,
    },
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  })
  console.log(`data:${JSON.stringify(data)}`)
  return data
}
export const vefiryCode = async payload => {
  console.log(`send vefirycode${payload}`)
  const data = await request(`${BASE}vefirycode/vefirycode`, {
    method: 'POST',
    body: {
      mobile: payload,
    },
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  })
  console.log(`data:${JSON.stringify(data)}`)
  return data
}
export const resetpwd = async payload => {
  console.log(`send resetpwd${payload}`)
  const data = await request(`${BASE}user/resetpwd`, {
    method: 'POST',
    body: payload,
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  })
  console.log(`data:${JSON.stringify(data)}`)
  return data
}

export const checkPwd = async payload => {
  console.log(`send checkPwd${payload}`)
  const data = await request(`${BASE}user/checkPwdExist`, {
    method: 'POST',
    body: {
      username: payload,
    },
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  })
  console.log(`data:${JSON.stringify(data)}`)
  return data
}
