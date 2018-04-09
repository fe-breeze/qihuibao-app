import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'
import { createAction, NavigationActions, delay } from '../utils'
import pxToDp from '../utils/pxToDp'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: '找回密码',
  }
  constructor(props) {
    super(props)
    this.state = {
      count: 3,
    }
  }
  componentWillMount() {
    this.decrease(this.state.count)
  }
  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }
  onClose = () => {
    this.props.dispatch(NavigationActions.back())
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
      const { status } = this.props.navigation.state.params
      if (status) {
        this.gotoLogin()
      } else {
        this.goBack()
      }
    }
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ModifyPwd' }))
  }

  gotoModifyAccount = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'ModifyAccount' })
    )
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  render() {
    const { fetching, navigation } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.content}>
            {navigation.state.params.status ? (
              <View>
                <View style={styles.error}>
                  <Image source={require('../images/modify-succ.png')} />
                </View>
                <Text style={styles.pwdError}>密码修改成功</Text>
                <Text style={styles.back}>
                  <Text style={styles.count}>{this.state.count}</Text>
                  秒自动返回
                </Text>
              </View>
            ) : (
              <View>
                <View style={styles.error}>
                  <Image source={require('../images/modify-error.png')} />
                </View>
                <Text style={styles.pwdError}>密码修改失败</Text>
                <Text style={styles.back}>
                  <Text style={styles.count}>{this.state.count}</Text>
                  秒自动返回
                </Text>
                <View style={styles.btnWrap}>
                  <Button
                    text="再次修改"
                    onPress={this.goBack}
                    style={styles.modifyAgain}
                    textStyle={styles.modifyAgainText}
                  />
                </View>
              </View>
            )}
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
  error: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: pxToDp(200),
    marginBottom: pxToDp(26),
  },
  pwdError: {
    fontSize: pxToDp(36),
    textAlign: 'center',
    color: 'rgb(102,102,102)',
    marginTop: pxToDp(26),
  },
  back: {
    marginTop: pxToDp(20),
    fontSize: pxToDp(24),
    color: 'rgb(153,153,153)',
    textAlign: 'center',
  },
  count: {
    color: 'rgb(54,177,255)',
  },
  btnWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(30),
  },
  modifyAgainText: {
    fontSize: pxToDp(28),
    color: 'rgb(54,177,255)',
  },
  modifyAgain: {
    width: pxToDp(200),
    height: pxToDp(66),
    borderRadius: 4,
    borderColor: 'rgb(54,177,255)',
    backgroundColor: '#fff',
  },
  loginBtn: {
    marginTop: pxToDp(50),
    marginBottom: pxToDp(20),
  },
})

export default Login
