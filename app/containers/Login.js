import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { Button, Touchable } from '../components'

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props);
    this.state = {
      tel: '18392463107',
      password: 'f8515623',
      vCode: ''
    };
  }
  getVcode = () => {
    this.props.dispatch(createAction('app/vcode')({
      mobile: this.state.tel,
      count: this.props.count
    }))
  }
  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    const { fetching, count } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
            <View>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.tel}
                placeholder="请输入手机号码"
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.password}
                secureTextEntry={true}
                placeholder="请输入密码"
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.vCode}
                placeholder='请输入验证码'
              />
              <Button text={count ? count + '秒后可重新发送验证码' : '获取验证码'} onPress={this.getVcode} />
              <Button text="登录" onPress={this.onLogin} />
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
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 40,
  },
})

export default Login
