import request from '../utils/request'
import { Storage } from '../utils'
// import { delay } from '../utils'

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
export const accountUser = async payload => {
  const token = await Storage.get('token')
  const data = await request(
    `${BASE}user/show`,
    {
      body: payload,
    },
    token
  )
  console.log(`data:${JSON.stringify(data)}`)
  return data
}

export const coList = async payload => {
  console.log(`send coList${payload}`)
  const token = await Storage.get('token')
  const data = await request(
    `${BASE}loginCompany/list`,
    {
      body: payload,
    },
    token
  )
  console.log(`data:${JSON.stringify(data)}`)
  return data
}
