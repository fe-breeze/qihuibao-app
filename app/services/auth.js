import request from '../utils/request'
import { delay } from '../utils'

const BASE = 'https://easy-mock.com/mock/5ab7a51a89962b05a31a31cb/api/'
// const BASE = 'https://shunquan.corpfortune.com/api/'

export const login = async () => {
  await delay(2000)
  return true
}
export const vCode = async payload => {
  await request(`${BASE}vefirycode/vefiry`, {
    method: 'POST',
    body: {
      mobile: payload,
    },
  })
}
export const checkPwd = async payload => {
  await request(`${BASE}user/checkPwdExist`, {
    method: 'POST',
    body: {
      username: payload,
    },
  })
}
