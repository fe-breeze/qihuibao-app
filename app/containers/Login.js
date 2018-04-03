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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions'

import { Button } from '../components'
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
      password: '',
      // vCode: '',
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

  gotoFindPwd = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ModifyPwd' }))
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.content}>
            <View style={styles.changeAcct}>
              <Text style={styles.changeFont} onPress={this.gotoFindPwd}>
                切换账户
              </Text>
            </View>
            <View style={styles.logo}>
              <Image source={require('../images/logo.png')} />
            </View>
            <Text style={styles.savedUser}>186****5456</Text>
            {/* <View style={styles.inputRow}>
              <Image
                source={require('../images/phone.png')}
              />
              <TextInput
                value={this.state.tel}
                placeholder="请输入手机号"
              />
            </View> */}
            <View style={styles.inputRow}>
              <View style={styles.labelWrap}>
                <Image source={require('../images/password.png')} />
              </View>
              <TextInput
                style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                color=""
                value={this.state.password}
                secureTextEntry
                placeholder="请输入登录密码"
                placeholderTextColor="rgb(220, 220, 220)"
              />
            </View>
            {/* <View style={styles.inputRow}>
                <View style={styles.labelWrap}>
                  <Image
                    source={require('../images/captcha.png')}
                  />
                </View>
                <TextInput
                  style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                  value={this.state.vCode}
                  placeholder="请输入短信验证码"
                />
                <Button
                  text={count ? `${count}秒后可重新发送验证码` : '获取验证码'}
                  onPress={this.getVcode}
                  style={styles.getCaptcha}
                />
              </View> */}
            <View style={styles.loginBtn}>
              <Button text="登录" onPress={this.onLogin} />
            </View>
            <Text onPress={this.gotoFindPwd} style={styles.forgetPsw}>
              忘记密码?
            </Text>
            <Text onPress={this.gotoFindPwd} style={styles.valid}>
              手机验证码登录
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
    paddingLeft: responsiveWidth(2.6),
    paddingRight: responsiveWidth(2.6),
    paddingTop: responsiveHeight(2.8),
  },
  content: {
    flex: 1,
    width: '100%',
  },
  logo: {
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#f4f6f8',
  },
  labelWrap: {
    width: responsiveWidth(9.2),
    height: responsiveHeight(8.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputItem: {
    height: responsiveHeight(8.8),
    width: '100%',
  },
  savedUser: {
    fontSize: responsiveFontSize(6),
    textAlign: 'center',
    color: 'rgb(51,51,51)',
    marginBottom: responsiveHeight(10),
  },
  loginBtn: {
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(2),
  },
  // getCaptcha: {
  //   borderWidth: 0,
  // },
  forgetPsw: {
    textAlign: 'right',
    fontSize: responsiveFontSize(2.4),
    color: 'rgb(54,177,255)',
  },
  valid: {
    marginBottom: responsiveHeight(0.5),
    marginTop: responsiveHeight(5),
    textAlign: 'center',
    fontSize: responsiveFontSize(2.8),
    color: 'rgb(170,170,170)',
  },
  changeAcct: {
    height: responsiveHeight(10),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  changeFont: {
    color: 'rgb(102,102,102)',
    fontSize: responsiveFontSize(2.8),
  },
})

export default Login
