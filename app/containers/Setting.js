import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions, createAction } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '设置',
  }

  gotoLogout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  gotoReLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ReLogin' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.contentWarp}
            onPress={this.gotoReLogin}
          >
            <Text style={styles.wrapText}>重置登录密码</Text>
            <Image
              style={styles.wrapImg}
              source={require('../images/enter.png')}
            />
          </TouchableOpacity>
          <View style={styles.btnWrap}>
            <View style={styles.loginoutBtn}>
              <Button title="退出" color="#fff" onPress={this.gotoLogout} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: pxToDp(20),
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWarp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: pxToDp(88),
    alignItems: 'center',
    marginLeft: pxToDp(26),
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#dcdcdc',
  },
  wrapText: {
    fontSize: pxToDp(34),
    color: 'rgb(51,51,51)',
  },
  wrapImg: {
    width: pxToDp(42),
    height: pxToDp(42),
  },
  btnWrap: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginoutBtn: {
    backgroundColor: '#ff5063',
    borderColor: '#ff5063',
    borderRadius: pxToDp(12),
    height: pxToDp(88),
    marginLeft: pxToDp(26),
    marginRight: pxToDp(26),
    marginBottom: pxToDp(20),
  },
})

export default Detail
