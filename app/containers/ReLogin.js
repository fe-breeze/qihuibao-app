import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '重置登录密码',
    headerStyle: {
      backgroundColor: '#36b1ff',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  }

  constructor(props) {
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      rePassword: '',
    }
  }
  gotoAccount = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            value={this.state.oldPassword}
            onChangeText={oldPassword => this.setState({ oldPassword })}
            secureTextEntry
            maxLength={32}
            placeholder="旧密码"
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <TextInput
            style={styles.input}
            value={this.state.newPassword}
            onChangeText={newPassword => this.setState({ newPassword })}
            secureTextEntry
            maxLength={32}
            placeholder="新密码"
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <TextInput
            style={styles.input}
            value={this.state.rePassword}
            onChangeText={rePassword => this.setState({ rePassword })}
            secureTextEntry
            maxLength={32}
            placeholder="确认新密码"
            placeholderTextColor="rgb(220, 220, 220)"
          />
          <View style={styles.sign}>
            <Button title="登录" color="#fff" onPress={this.gotoAccount} />
          </View>
          <View style={styles.last}>
            <Text style={styles.tips}>密码至少包含6位数字和字母</Text>
            <Text style={styles.forgetPwd}>忘记密码?</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  warp: {
    justifyContent: 'flex-start',
    margin: pxToDp(52),
  },
  content: {
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
  },
  input: {
    backgroundColor: '#f5f5f5',
    paddingLeft: pxToDp(26),
    height: pxToDp(88),
    borderRadius: pxToDp(12),
    fontSize: pxToDp(34),
    color: '#333333',
    marginTop: pxToDp(26),
  },
  sign: {
    height: pxToDp(88),
    marginTop: pxToDp(50),
    backgroundColor: 'rgb(54,177,255)',
    borderRadius: pxToDp(12),
  },
  last: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToDp(20),
  },
  tips: {
    fontSize: pxToDp(24),
    color: 'rgb(170,170,170)',
  },
  forgetPwd: {
    fontSize: pxToDp(24),
    color: 'rgb(54,177,255)',
  },
})

export default Detail
