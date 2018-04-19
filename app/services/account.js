import request from '../utils/request'
import { Storage } from '../utils'
// import { delay } from '../utils'

// const BASE = 'https://easy-mock.com/mock/5ab7a51a89962b05a31a31cb/api/'
// const BASE = 'http://localhost:9080/api/'
const BASE = 'http://localhost:9080/api/'

export const accountBalance = async payload => {
  console.log(`send accountBalance${payload}`)
  const token = await Storage.get('token')
  console.log(token)
  const data = await request(
    `${BASE}account/mine`,
    {
      body: payload,
    },
    token
  )
  console.log(`data:${JSON.stringify(data)}`)
  return data
}
