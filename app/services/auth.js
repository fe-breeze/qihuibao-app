import { delay } from '../utils'
import axios from 'axios'

const BASE = 'https://easy-mock.com/mock/5ab7a51a89962b05a31a31cb/api/'
// const BASE = 'https://shunquan.corpfortune.com/api/'

export const login = async () => {
  await delay(2000)
  return true
}
export const vCode = async payload => await axios.post(`${BASE  }vefirycode/vefiry`, {
    mobile: payload,
  })
export const checkPwd = async payload => await axios.post(`${BASE  }user/checkPwdExist`, {
    username: payload,
  })
