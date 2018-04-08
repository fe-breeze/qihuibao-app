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

import { createAction, NavigationActions, delay } from '../utils'
import pxToDp from '../utils/pxToDp'

@connect(({ app }) => ({ ...app }))
class ModifyPwd extends Component {
  static navigationOptions = {
    title: '找回密码',
  }
  constructor(props) {
    super(props)
    this.state = {
      tel: '',
      password: '',
      vCode: '',
      count: 0,
    }
  }

  // gotoModifyStatus = () => {
  //   this.props.dispatch(createAction('app/login')())
  // }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  getVcode = () => {
    this.decrease(90)
    this.setState({
      count: 90,
    })
    this.props.dispatch(
      createAction('app/vcode')({
        mobile: this.state.tel,
      })
    )
  }
  decrease = payload => {
    if (payload > 0) {
      delay(1000).then(() => {
        // this.state.count -= 1
        this.setState({
          count: payload - 1,
        })
        this.decrease(payload - 1)
      })
    } else {
      this.gotoVLogin()
    }
  }
  gotoModifyStatus = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'ModifyPwdStatus' })
    )
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.content}>
            {/* <View style={styles.logo}>
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
                {this.state.count ? (
                  <Text style={styles.getVcode}>
                    {`${this.state.count}秒后可重新发送验证码`}
                  </Text>
                ) : (
                    <Text onPress={this.getVcode} style={styles.getVcode}>
                      获取验证码
                </Text>
                  )}
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
                  placeholder="请设置新密码"
                  placeholderTextColor="rgb(220, 220, 220)"
                />
              </View>
              <Button
                text="提交"
                onPress={this.gotoModifyStatus}
                style={styles.loginBtn}
              />
              <Text style={{ color: '#a2a2a2', marginTop: pxToDp(20) }}>
                密码至少包含6位数字和字母
            </Text>
                </View> */}
            <View style={styles.logo}>
              <Image source={require('../images/logo.png')} />
            </View>
            <View style={styles.inputRow}>
              <View style={styles.labelWrap}>
                <Image source={require('../images/phone.png')} />
              </View>
              <TextInput
                style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                color=""
                value={this.state.tel}
                placeholder="请输入手机号"
                placeholderTextColor="rgb(220, 220, 220)"
              />
            </View>
            <View style={styles.inputRow}>
              <View style={styles.labelWrap}>
                <Image source={require('../images/captcha.png')} />
              </View>
              <TextInput
                style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                value={this.state.vCode}
                placeholder="请输入短信验证码"
              />
              {this.state.count ? (
                <Text style={styles.getVcode}>
                  {`${this.state.count}秒后可重新发送验证码`}
                </Text>
              ) : (
                <Text onPress={this.getVcode} style={styles.getVcode}>
                  获取验证码
                </Text>
              )}
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
                placeholder="请设置新密码"
                placeholderTextColor="rgb(220, 220, 220)"
              />
            </View>
            <Button
              text="提交"
              onPress={this.gotoModifyStatus}
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
    flex: 1,
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
    paddingRight: pxToDp(26),
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
})

export default ModifyPwd
