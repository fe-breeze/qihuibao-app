import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
    count: 0,
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
    *vcode({ payload }, { call, put }) {
      try {
        const checkPass = yield call(authService.vCode, payload.mobile)
        if (checkPass.succeed) {
          const vefirycode = yield call(authService.vCode, payload.mobile)
          if (vefirycode.succeed) {
            yield put(createAction('updateState')({ count: 90 }))
          } else {
            // 验证码发送失败
          }
        } else {
          // 用户不存在
        }
      } catch (err) {
        console.error(err)
      }
    },
    *login({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      const login = yield call(authService.login, payload)
      if (login.succeed) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        )
        yield call(Storage.set, 'username', payload.username)
        yield call(Storage.set, 'token', login.data._token) // eslint-disable-line
        yield put(
          createAction('updateState')({ login: login.succeed, loading: false })
        )
      }
      yield put(
        createAction('updateState')({ login: login.succeed, fetching: false })
      )
      Storage.set('login', login.succeed)
    },
    *logout(action, { call, put }) {
      yield put(NavigationActions.navigate({ routeName: 'Login' }))
      yield call(Storage.set, 'login', false)
      yield call(Storage.set, 'token', null) // eslint-disable-line
      yield put(createAction('updateState')({ login: false }))
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}
