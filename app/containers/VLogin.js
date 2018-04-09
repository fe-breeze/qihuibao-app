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
import { createAction, NavigationActions, Storage, delay } from '../utils'
import pxToDp from '../utils/pxToDp'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props)
    this.state = {
      // tel: '13379213579',
      tel: '',
      vCode: '',
      count: 0,
    }
  }
  componentWillMount() {
    Storage.get('username').then(data => {
      this.setState({
        tel: data,
      })
    })
  }
  onLogin = () => {
    this.props.dispatch(
      createAction('app/login')({
        username: this.state.tel,
        vCode: this.state.vCode,
        loginModel: 'userNameAndVerifyCode',
      })
    )
  }

  getVcode = () => {
    this.decrease(90)
    this.setState({
      count: 90,
    })
    this.props.dispatch(
      createAction('app/vcode')({
        mobile: this.state.tel,
        count: this.props.count,
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
      // this.gotoVLogin()
    }
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
    const { fetching } = this.props
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
            <Text style={styles.savedUser}>{this.state.tel}</Text>
            <View style={styles.inputRow}>
              <View style={styles.labelWrap}>
                <Image source={require('../images/captcha.png')} />
              </View>
              <TextInput
                style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                value={this.state.vCode}
                onChangeText={vCode => this.setState({ vCode })}
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
