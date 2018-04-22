import Toast from 'react-native-root-toast'
import { createAction } from '../utils'
import * as authService from '../services/account'

export default {
  namespace: 'account',
  state: {
    fetching: false,
    accountMsg: {},
    companyList: {},
    user: {},
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *accountBalance({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      try {
        const user = yield call(authService.accountUser, payload)
        const account = yield call(authService.accountBalance, payload)
        if (account.succeed && user.succeed) {
          yield put(
            createAction('updateState')({
              accountMsg: account.data,
              user: user.data,
            })
          )
        } else {
          Toast.show('获取失败')
        }
      } catch (err) {
        console.log(err)
      }
      yield put(createAction('updateState')({ fetching: false }))
    },
    *coList({ payload }, { call, put }) {
      try {
        const company = yield call(authService.coList, payload)
        if (this.coList.succeed) {
          yield put(createAction('updateState')({ companyList: company.data }))
        } else {
          Toast.show('查询列表失败')
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}
