import request from '../utils/request'
// import { delay } from '../utils'

// const BASE = 'https://easy-mock.com/mock/5ab7a51a89962b05a31a31cb/api/'
const BASE = 'https://shunquan.corpfortune.com/api/'

export const login = async payload => {
  const data = await request(`${BASE}login`, {
    method: 'POST',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    body: {
      username: payload.username,
      password: payload.password,
    },
  })
  return data
}
export const vCode = async payload => {
  const data = await request(`${BASE}vefirycode/vefiry`, {
    method: 'POST',
    body: {
      mobile: payload,
    },
  })
  return data
}
export const checkPwd = async payload => {
  const data = await request(`${BASE}user/checkPwdExist`, {
    method: 'POST',
    body: {
      username: payload,
    },
  })
  return data
}
