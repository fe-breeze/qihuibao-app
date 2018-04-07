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
class ModifyPwd extends Component {
  static navigationOptions = {
    title: '找回密码',
  }
  constructor(props) {
    super(props)
    this.state = {
      tel: '18392463107',
      password: 'f8515623',
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

  render() {
    const { fetching, count } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.content}>
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
              {count ? <Text onPress={this.getVcode} style={styles.getVcode}>
                {`${count}秒后可重新发送验证码`}
              </Text> : <Text style={styles.getVcode}>
                获取验证码
              </Text>}
            </View>
            <View style={[styles.inputRow, { marginTop: pxToDp(26) }]}>
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
            <Button
              text="提交"
              onPress={this.onLogin}
              style={styles.loginBtn}
            />
            <Text style={{ color: '#a2a2a2', marginTop: pxToDp(20) }}>
              密码至少包含6位数字和字母
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
  savedUser: {
    fontSize: pxToDp(60),
    textAlign: 'center',
    color: 'rgb(51,51,51)',
    marginBottom: pxToDp(100),
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
    flex: 1
  },
  loginBtn: {
    marginTop: pxToDp(50),
    marginBottom: pxToDp(20),
  },
  getVcode: {
    textAlign: 'right',
    fontSize: pxToDp(28),
    color: 'rgb(54,177,255)',
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26)
  },
  valid: {
    marginBottom: pxToDp(50),
    marginTop: pxToDp(50),
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
  // close: {
  //   position: 'absolute',
  //   right: 20,
  //   top: 40,
  // },
  // parent: {
  //   height: 50,
  //   marginTop: 10,
  //   flexDirection: 'row',
  //   alignItems: 'flex-start',
  //   borderColor: 'gray',
  //   borderWidth: 1,
  // },
  // text: {
  //   textAlign: 'center',
  //   fontSize: 34,
  // },
  // getCaptcha: {
  //   borderWidth: 0,
  // },
  // submitbtn: {
  //   height: 50,
  //   marginTop: 10,
  //   backgroundColor: '#2fa8ff',
  // },
})

export default ModifyPwd
