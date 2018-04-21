import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '项目介绍',
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>稳健盈 NO-00002</Text>
        </View>
        <View style={styles.contentWrap}>
          <Text>
            俯拾地芥阿里看风景阿萨德开了房间辣盛开的九分裤拉动世界疯狂拉升点击发送卡到了福建阿圣诞快乐
          </Text>
          <Text>
            俯拾地芥阿里看风景阿萨德开了房间辣盛开的九分裤拉动世界疯狂拉升点击发送卡到了福建阿圣诞快乐
          </Text>
          <Text>
            俯拾地芥阿里看风景阿萨德开了房间辣盛开的九分裤拉动世界疯狂拉升点击发送卡到了福建阿圣诞快乐
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: pxToDp(50),
    paddingBottom: pxToDp(50),
    marginRight: pxToDp(26),
    marginLeft: pxToDp(26),
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  title: {
    color: 'rgb(51,51,51)',
    textAlign: 'center',
    fontSize: pxToDp(36),
  },
  info: {
    height: pxToDp(30),
    width: pxToDp(120),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.3)',
  },
  infoText: {
    fontSize: pxToDp(20),
    color: '#fff',
  },
  investWrap: {
    alignItems: 'center',
  },
  invest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: pxToDp(400),
  },
  lineBackground: {
    backgroundColor: 'rgba(255,255,255,.3)',
    height: pxToDp(6),
    borderRadius: pxToDp(6),
    position: 'relative',
  },
  line: {
    backgroundColor: '#fff',
    height: pxToDp(6),
    borderRadius: pxToDp(6),
    position: 'absolute',
  },
  lineInfo: {
    height: pxToDp(40),
    width: pxToDp(60),
    backgroundColor: '#fff',
  },
  lineInfoWrap: {
    position: 'absolute',
  },
  arrow: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: pxToDp(15),
    borderBottomColor: '#fff',
  },
  cashWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToDp(30),
  },
  cash: {
    color: '#fff',
  },
  contentWrap: {
    flex: 1,
    backgroundColor: '#fff',
    padding: pxToDp(26),
  },
  buy: {
    marginRight: pxToDp(26),
    marginLeft: pxToDp(26),
    marginBottom: pxToDp(26),
  },
  contentItem: {
    paddingRight: pxToDp(26),
    marginTop: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxToDp(88),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#dcdcdc',
    borderBottomColor: '#dcdcdc',
  },
})

export default Detail
