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
import Toast from 'react-native-root-toast'

import { Button } from '../components'
import { createAction, NavigationActions, Storage } from '../utils'
import pxToDp from '../utils/pxToDp'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    this.state = {
      tel: '',
      password: '',
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
    if (this.state.password.length < 6) {
      Toast.show('密码不少于6位！')
      return
    }
    this.props.dispatch(
      createAction('app/login')({
        username: this.state.tel,
        password: this.state.password,
        loginModel: 'userNameAndPassword',
      })
    )
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
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'ModifyPwdUser' })
    )
  }
  gotoModifyAccount = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'ModifyAccount' })
    )
  }
  gotoVLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'VLogin' }))
  }
  formatPhone = phone => phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')

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
            <Text style={styles.savedUser}>
              {this.formatPhone(this.state.tel)}
            </Text>
            <View style={styles.inputRow}>
              <View style={styles.labelWrap}>
                <Image source={require('../images/password.png')} />
              </View>
              <TextInput
                style={[styles.inputItem, { color: '#333333' }]}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
                maxLength={32}
                placeholder="请输入登录密码"
                placeholderTextColor="rgb(220, 220, 220)"
              />
            </View>
            <View style={styles.loginBtn}>
              <Button text="登录" onPress={this.onLogin} />
            </View>
            <Text onPress={this.gotoFindPwd} style={styles.forgetPsw}>
              忘记密码?
            </Text>
            <Text onPress={this.gotoVLogin} style={styles.valid}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'flex-start',
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
