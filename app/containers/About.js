import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '关于',
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: pxToDp(100), marginBottom: pxToDp(100) }}>
          <Image source={require('../images/logo.png')} />
        </View>
        <View style={styles.fontWrap}>
          <View style={[styles.packet, {marginLeft:pxToDp(20)}]}>
            <Text style={styles.fontLeft}>版本号</Text>
          </View>
          <View style={[styles.packet, {marginRight:pxToDp(20)}]}>
            <Text style={styles.fontRight}>1.1.0</Text>
          </View>
        </View>
        <View style={styles.fontWrap}>
          <View style={[styles.packet, {marginLeft:pxToDp(20)}]}>
            <Text style={styles.fontLeft}>官方网站</Text>
          </View>
          <View style={[styles.packet, {marginRight:pxToDp(20)}]}>
            <Text style={styles.fontRight}> www.corpfortune.com</Text>
          </View>
        </View>
        <View style={styles.fontWrap}>
          <View style={[styles.packet, {marginLeft:pxToDp(20)}]}>
            <Text style={styles.fontLeft}>客服电话</Text>
          </View>
          <View style={[styles.packet, {marginRight:pxToDp(20)}]}>
            <Text style={styles.num}>400-888-888</Text>
          </View>
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
  fontWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:pxToDp(80),
  },
  packet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontLeft: {
    fontSize: pxToDp(34),
    color: 'rgb(51,51,51)',
  },
  fontRight: {
    fontSize: pxToDp(32),
    color: 'rgb(153,153,153)',
  },
  num: {
    fontSize: pxToDp(32),
    color: 'rgb(54,177,255)',
    textAlign: 'right',
  },
})

export default Detail
