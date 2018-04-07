import request from '../utils/request'
// import { delay } from '../utils'

// const BASE = 'https://easy-mock.com/mock/5ab7a51a89962b05a31a31cb/api/'
const BASE = 'http://localhost:9080/api/'
// const BASE = 'https://shunquan.corpfortune.com/api/'

export const login = async payload => {
  const data = await request(`${BASE}login`, {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'header-timestamp': parseInt(+new Date() / 1000),
      'header-sign': 'D95588561747B20F191ED4A7B78302A2',
      // 'header-token': 'deecfde049494a33affb9a11c9764aa4'
    },
  })
  return data
}
export const vCode = async payload => {
  const data = await request(`${BASE}vefirycode/vefiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'header-timestamp': parseInt(+new Date() / 1000),
      'header-sign': 'D95588561747B20F191ED4A7B78302A2',
    },
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
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'header-timestamp': parseInt(+new Date() / 1000),
      'header-sign': 'D95588561747B20F191ED4A7B78302A2',
    },
  })
  return data
}
