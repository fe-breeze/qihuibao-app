import Toast from 'react-native-root-toast'
import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/account'

export default {
  namespace: 'account',
  state: {
    accountMsg: {},
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *accountBalance({ payload }, { call, put }) {
      try {
        const token = yield call(Storage.get, 'token')
        const account = yield call(authService.accountBalance, payload, token)
        if (account.succeed) {
          yield put(createAction('updateState')({ accountMsg: account.data }))
        } else {
          Toast.show('获取失败')
        }
        yield put(NavigationActions.navigate({ routeName: 'Login' })) // 用于成功后的跳转,待修改
      } catch (err) {
        console.log(err)
      }
    },
  },
  *coList({ payload }, { call, put }) {
    try {
      const token = yield call(Storage.get, 'token')
      const company = yield call(authService.coList, payload, token)
      if (this.coList.succeed) {
        yield put(createAction('updateState')({ accountMsg: company.data }))
      } else {
        Toast.show('查询列表失败')
      }
    } catch (err) {
      console.log(err)
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}
