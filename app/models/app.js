import { createAction, NavigationActions, Storage, delay } from '../utils'
import * as authService from '../services/auth'

function* decrease(payload, put) {
  let count = payload
  if (count > 0) {
    yield delay(1000)
    count -= 1
    yield put(createAction('updateState')({ count }))
    yield decrease(count, put)
  }
}

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
    count: 0,
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
        const checkPass = yield call(authService.checkPwd, payload.mobile)
        if (checkPass.data.succeed) {
          const vefirycode = yield call(authService.vCode, payload.mobile)
          if (vefirycode.data.succeed) {
            yield put(createAction('updateState')({ count: 90 }))
            yield call(decrease, 90, put)
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
      if (login) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        )
      }
      yield put(createAction('updateState')({ login, fetching: false }))
      Storage.set('login', login)
    },
    *logout(action, { call, put }) {
      yield call(Storage.set, 'login', false)
      yield put(createAction('updateState')({ login: false }))
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}
