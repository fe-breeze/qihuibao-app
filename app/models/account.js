import Toast from 'react-native-root-toast'
import { createAction } from '../utils'
import * as authService from '../services/account'

export default {
  namespace: 'account',
  state: {
    fetching: false,
    accountMsg: {},
    companyList: [],
    user: {},
    turnOutAmount: {},
    logoUrl: '',
    regularRate: '',
    currentRate: '',
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *accountBalance({ payload }, { all, call, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      try {
        // const [user, account, turnOutAmount] = yield all([
        const [user, account] = yield all([
          call(authService.accountUser, payload),
          call(authService.accountBalance, payload),
          // call(authService.accountBalance, payload)
        ])
        // if (account.succeed && user.succeed && turnOutAmount.succeed) {
        if (account.succeed && user.succeed) {
          yield put(
            createAction('updateState')({
              accountMsg: account.data,
              user: user.data,
              // turnOutAmount: turnOutAmount.data
            })
          )
        } else {
          Toast.show('获取失败')
        }
      } catch (err) {
        Toast.show('服务器错误')
      }
      yield put(createAction('updateState')({ fetching: false }))
    },
    *homeRate({ payload }, { call, all, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      try {
        const [regularRate, currentRate] = yield all([
          call(authService.regularRate, payload),
          call(authService.currentRate, payload),
        ])
        if (regularRate.succeed && currentRate.succeed) {
          yield put(
            createAction('updateState')({
              regularRate: regularRate.data,
              currentRate: currentRate.data,
            })
          )
        } else {
          Toast.show('查询列表失败')
        }
      } catch (err) {
        console.log(err)
      }
      yield put(createAction('updateState')({ fetching: false }))
    },
    *coList({ payload }, { call, put }) {
      try {
        const company = yield call(authService.coList, payload)
        if (company.succeed) {
          yield put(createAction('updateState')({ companyList: company.data }))
        } else {
          Toast.show('查询列表失败')
        }
      } catch (err) {
        console.log(err)
      }
    },
    *coSave({ payload }, { call, put }) {
      try {
        const company = yield call(authService.coSave, {
          companyId: payload.companyId,
        })
        yield put(createAction('updateState')({ logoUrl: payload.logoUrl })) // 调试用
        if (company.succeed) {
          yield put(createAction('updateState')({ logoUrl: payload.logoUrl }))
          Toast.show('选择城市成功')
        } else {
          Toast.show('选择城市失败')
          // return  // 先注释掉
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
