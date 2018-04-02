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

import { Button, Touchable } from '../components'

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props)
    this.state = {
      tel: '18392463107',
      password: 'f8515623',
      vCode: '',
    }
  }
  getVcode = () => {
    this.props.dispatch(
      createAction('app/vcode')({
        mobile: this.state.tel,
        count: this.props.count,
      })
    )
  }
  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }
  gotoFindPwd = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ModifyPwd' }))
  }

  render() {
    const { fetching, count } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Image source={require('../images/logo.png')} />
            <Text>18635485456</Text>
            <View style={styles.parent}>
              <Image source={require('../images/phone.png')} />
              <TextInput
                style={styles.text}
                value={this.state.tel}
                placeholder="请输入手机号"
              />
            </View>
            <View style={styles.parent}>
              <Image source={require('../images/password.png')} />
              <TextInput
                style={styles.text}
                value={this.state.password}
                secureTextEntry
                placeholder="请输入登录密码"
              />
            </View>
            <View style={styles.parent}>
              <Image source={require('../images/captcha.png')} />
              <TextInput
                value={this.state.vCode}
                placeholder="请输入短信验证码"
              />
              <Button
                text={count ? `${count  }秒后可重新发送验证码` : '获取验证码'}
                onPress={this.getVcode}
                style={styles.getCaptcha}
              />
            </View>
            <Button
              text="登录"
              onPress={this.onLogin}
              style={styles.loginbtn}
            />
            <Button
              text="忘记密码?"
              onPress={this.gotoFindPwd}
              style={styles.forgetPsw}
            />
            <View style={{ marginTop: 50 }}>
              <Button
                text="手机验证码登录"
                onPress={this.gotoFindPwd}
                style={{ borderWidth: 0 }}
              />
            </View>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4fbff',
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 40,
  },
  parent: {
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 34,
  },
  loginbtn: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#2fa8ff',
  },
  getCaptcha: {
    borderWidth: 0,
  },
  forgetPsw: {
    borderWidth: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})

export default Login
