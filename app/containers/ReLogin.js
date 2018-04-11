import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '重置登录密码',
  }

  gotoAccount = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.warp}>
          <Text style={styles.input}>旧密码</Text>
        </View>
        <View style={styles.warp}>
          <Text style={styles.input}>新密码</Text>
        </View>
        <View style={styles.warp}>
          <Text style={styles.input}>确认新密码</Text>
        </View>
        <View style={styles.sign}>
          <Button title="登录" color="#fff" onPress={this.gotoAccount} />
        </View>
        <View style={styles.last}>
          <Text style={styles.tips}>密码至少包含6位数字和字母</Text>
          <Text style={styles.forgetPwd}>忘记密码?</Text>
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
  input: {
    borderColor: '#f5f5f5',
    borderWidth: pxToDp(1),
    backgroundColor: '#f5f5f5',
    height: pxToDp(88),
    borderRadius: pxToDp(12),
    fontSize: pxToDp(34),
    color: 'rgb(220,220,220)',
  },
  sign: {
    height: pxToDp(88),
    marginLeft: pxToDp(26),
    marginRight: pxToDp(26),
    marginBottom: pxToDp(50),
    backgroundColor: 'rgb(54,177,255)',
    borderRadius: pxToDp(12),
  },
  last: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pxToDp(26),
    marginRight: pxToDp(26),
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
