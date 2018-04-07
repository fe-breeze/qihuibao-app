import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Image,
} from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'
import { createAction, NavigationActions } from '../utils'
import pxToDp from '../utils/pxToDp'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props)
    this.state = {
      tel: '18392463107',
      vCode: '',
    }
  }

  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  getVcode = () => {
    this.props.dispatch(
      createAction('app/vcode')({
        mobile: this.state.tel,
        count: this.props.count,
      })
    )
  }

  gotoModifyAccount = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'ModifyAccount' })
    )
  }

  gotoFindPwd = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ModifyPwd' }))
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  render() {
    const { fetching, count } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.content}>
            <View style={styles.changeAcct}>
              <Text style={styles.changeFont} onPress={this.gotoModifyAccount}>
                切换账户
              </Text>
            </View>
            <View style={styles.logo}>
              <Image source={require('../images/logo.png')} />
            </View>
            <Text style={styles.savedUser}>186****5456</Text>
            <View style={styles.inputRow}>
              <View style={styles.labelWrap}>
                <Image source={require('../images/captcha.png')} />
              </View>
              <TextInput
                style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                value={this.state.vCode}
                placeholder="请输入短信验证码"
              />
              {count ? (
                <Text style={styles.getVcode}>
                  {`${count}秒后可重新发送验证码`}
                </Text>
              ) : (
                <Text onPress={this.getVcode} style={styles.getVcode}>
                  获取验证码
                </Text>
              )}
            </View>
            <View style={styles.loginBtn}>
              <Button text="登录" onPress={this.onLogin} />
            </View>
            <Text onPress={this.gotoFindPwd} style={styles.forgetPsw}>
              忘记密码?
            </Text>
            <Text onPress={this.gotoLogin} style={styles.valid}>
              密码登录
            </Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
    paddingTop: pxToDp(34),
  },
  content: {
    flex: 1,
    width: '100%',
  },
  logo: {
    marginTop: pxToDp(94),
    marginBottom: pxToDp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#f4f6f8',
  },
  labelWrap: {
    width: pxToDp(92),
    height: pxToDp(88),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputItem: {
    height: pxToDp(88),
    flex: 1,
  },
  savedUser: {
    fontSize: pxToDp(60),
    textAlign: 'center',
    color: 'rgb(51,51,51)',
    marginBottom: pxToDp(100),
  },
  loginBtn: {
    marginTop: pxToDp(50),
    marginBottom: pxToDp(20),
  },
  forgetPsw: {
    textAlign: 'right',
    fontSize: pxToDp(24),
    color: 'rgb(54,177,255)',
  },
  getVcode: {
    textAlign: 'right',
    fontSize: pxToDp(28),
    color: 'rgb(54,177,255)',
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
  },
  valid: {
    position: 'absolute',
    bottom: pxToDp(50),
    width: '100%',
    textAlign: 'center',
    fontSize: pxToDp(28),
    color: 'rgb(170,170,170)',
  },
  changeAcct: {
    height: pxToDp(100),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  changeFont: {
    color: 'rgb(102,102,102)',
    fontSize: pxToDp(28),
  },
})

export default Login
