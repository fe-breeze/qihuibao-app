import Toast from 'react-native-root-toast'
import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/account'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
    username: '',
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login', false)
      yield put(createAction('updateState')({ login, loading: false }))
    },

    *accountBalance({ payload }, { call, put }) {
      try {
        const accountBalance = yield call(authService.accountBalance, payload)
        console.error(accountBalance) // 返回值，临时
        if (accountBalance.succeed) {
          Toast.show('获取成功')
        } else {
          Toast.show('获取失败')
        }
        yield put(NavigationActions.navigate({ routeName: 'Login' })) // 用于成功后的跳转,待修改
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
