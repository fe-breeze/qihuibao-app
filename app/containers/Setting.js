import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '设置',
  }

  gotoAccount = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  gotoReLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ReLogin' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.warp}>
          <Text style={styles.wrapText} onPress={this.gotoReLogin}>
            重置登录密码
          </Text>
          <Image
            style={styles.wrapImg}
            source={require('../images/enter.png')}
          />
        </View>
        <View style={styles.loginoutBtn}>
          <Button title="退出" color="#fff" onPress={this.gotoAccount} />
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToDp(20),
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
  },
  wrapText: {
    fontSize: pxToDp(34),
    color: 'rgb(51,51,51)',
  },
  wrapImg: {
    width: pxToDp(42),
    height: pxToDp(42),
  },
  loginoutBtn: {
    backgroundColor: '#ff5063',
    borderColor: '#ff5063',
    borderRadius: pxToDp(12),
    height: pxToDp(88),
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
    marginBottom: pxToDp(20),
  },
})

export default Detail
