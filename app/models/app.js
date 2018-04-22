import Toast from 'react-native-root-toast'
import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login')
      yield put(createAction('updateState')({ login, loading: false }))
    },
    *vcode({ payload }, { call }) {
      try {
        const checkPass = yield call(authService.vCode, payload.mobile)
        if (checkPass.succeed) {
          const vefirycode = yield call(authService.vCode, payload.mobile)
          if (vefirycode.succeed) {
            Toast.show('验证码发送成功！')
          } else {
            Toast.show('验证码发送失败!')
          }
        } else {
          Toast.show('用户不存在!')
        }
      } catch (err) {
        Toast.show('服务器错误！')
      }
    },
    *vefiryCode({ payload }, { call }) {
      try {
        const vefirycode = yield call(authService.vefiryCode, payload.mobile)
        if (vefirycode.succeed) {
          Toast.show('验证码发送成功！')
        } else {
          Toast.show('验证码发送失败!')
        }
      } catch (err) {
        Toast.show('服务器错误！')
      }
    },
    *resetpwd({ payload }, { put, call }) {
      try {
        const resetpwd = yield call(authService.resetpwd, payload)
        if (resetpwd.succeed) {
          yield put(
            NavigationActions.navigate({
              routeName: 'ModifyPwdStatus',
              params: {
                status: true,
              },
              actions: [
                NavigationActions.navigate({ routeName: 'ModifyPwdStatus' }),
              ],
            })
          )
        } else {
          yield put(
            NavigationActions.navigate({
              routeName: 'ModifyPwdStatus',
              params: {
                status: false,
              },
              actions: [
                NavigationActions.navigate({ routeName: 'ModifyPwdStatus' }),
              ],
            })
          )
        }
      } catch (err) {
        Toast.show('服务器错误！')
      }
    },
    *login({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      try {
        const login = yield call(authService.login, payload)
        if (login.succeed) {
          Toast.show('登录成功！')
          const username = yield call(Storage.get, 'username')
          if (typeof username !== 'string') {
            yield call(Storage.set, 'token', login.data._token) // eslint-disable-line
            yield put(NavigationActions.navigate({ routeName: 'CityList' }))
          } else {
            yield call(Storage.set, 'token', login.data._token) // eslint-disable-line
            yield put(
              NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'Main' })],
              })
            )
          }
          yield call(Storage.set, 'username', payload.username)
          yield call(Storage.set, 'login', login.succeed)
          yield put(
            createAction('updateState')({
              login: login.succeed,
              loading: false,
            })
          )
        } else {
          yield put(
            createAction('updateState')({
              login: login.succeed,
              fetching: false,
            })
          )
          yield call(Storage.set, 'login', login.succeed)
          Toast.show('登录失败，请输入正确的用户名和密码！')
        }
      } catch (err) {
        Toast.show('登录失败，请输入正确的用户名和密码！')
      }
    },
    *logout(action, { call, put }) {
      try {
        const logout = yield call(authService.logout)
        if (logout.succeed) {
          const username = yield call(Storage.get, 'username')
          if (typeof username !== 'string') {
            yield put(
              NavigationActions.navigate({ routeName: 'ModifyAccount' })
            )
          } else {
            yield put(NavigationActions.navigate({ routeName: 'Login' }))
          }
          yield call(Storage.set, 'login', false)
          // yield call(Storage.set, 'username', null) // 开启进入citylist
          yield call(Storage.set, 'token', null)
          yield put(
            createAction('updateState')({ login: false, fetching: false })
          )
        } else {
          Toast.show(logout.flag)
        }
      } catch (err) {
        Toast.show('服务器错误！')
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}
