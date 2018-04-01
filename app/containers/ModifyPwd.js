import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'

import { Button, Touchable } from '../components'

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class ModifyPwd extends Component {
  static navigationOptions = {
    title: '找回密码',
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
              <Image
                source={require('../images/logo.png')}
              />
              <Text>18635485456</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.tel}
                placeholder="请输入手机号"
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.password}
                secureTextEntry={true}
                placeholder="请输入登录密码"
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.vCode}
                placeholder='请输入短信验证码'
              />
              <Button text={count ? count + '秒后可重新发送验证码' : '获取验证码'} onPress={this.getVcode} />
              <Button text="登录" onPress={this.onLogin} />
              <Text>密码至少包含8位数字和字母</Text>
              <Text>忘记密码</Text>
              <Text>手机验证码登录</Text>
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

export default ModifyPwd
