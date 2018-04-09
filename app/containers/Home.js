import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'

import pxToDp from '../utils/pxToDp'

@connect()
class Home extends Component {
  static navigationOptions = {
    header: null,
    title: '首页',
    tabBarLabel: '首页',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/home-gray.png')}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper autoplay>
          <View style={styles.slide1}>
            <Image source={require('../images/banner.png')}/>
          </View>
          <View style={styles.slide2}>
            <Image source={require('../images/banner.png')}/>
          </View>
          <View style={styles.slide3}>
            <Image source={require('../images/banner.png')}/>
          </View>
        </Swiper>
        <View style={styles.notice}>
          <Image style={styles.vicon} source={require('../images/volume.png')} />
          <Text style={styles.rate}>企惠宝零钱包7日年化率提高20%!</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.financialWrap}>
            <Text style={styles.financial}>定期理财</Text>
            <Text style={styles.income}>收益稳健</Text>
          </View>
          <View style={styles.percent}>
            <Text style={{ color: 'rgb(255,106,110)' }}>
              <Text style={{ fontSize: pxToDp(60) }}>8</Text><Text style={{ fontSize: pxToDp(40) }}>%</Text>
              <Text style={{ fontSize: pxToDp(60) }}>-15</Text><Text style={{ fontSize: pxToDp(40) }}>%</Text>
            </Text>
            <Image style={styles.ficon} source={require('../images/financing.png')} />
          </View>
          <View style={{ marginLeft: pxToDp(68), marginBottom: pxToDp(20) }}>
            <Text style={{ fontSize: pxToDp(28), color: 'rgb(170,170,170)' }}>平均年化率高达</Text>
          </View>
        </View>
        <View style={styles.content}>
        <View style={styles.financialWrap}>
          <Text style={styles.financial}>企惠宝零钱包</Text>
          <Text style={styles.income}>资金灵活</Text>
        </View>
        <View style={styles.percent}>
          <Text style={{ color: 'rgb(255,106,110)' }}>
            <Text style={{ fontSize: pxToDp(60) }}>4.5</Text><Text style={{ fontSize: pxToDp(40) }}>%</Text>
          </Text>
          <Image style={styles.ficon} source={require('../images/qihuibao-package.png')} />
        </View>
        <View style={{ marginLeft: pxToDp(68), marginBottom: pxToDp(20) }}>
          <Text style={{ fontSize: pxToDp(28), color: 'rgb(170,170,170)' }}>7日年化率高达</Text>
        </View>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f4f3f3',
  },
  icon: {
    width: pxToDp(48),
    height: pxToDp(48),
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: pxToDp(98),
    marginTop: pxToDp(40),
    backgroundColor:'#fff',
  },
  vicon: {
    width: pxToDp(42),
    height: pxToDp(42),
    marginLeft: pxToDp(42),
    marginRight: pxToDp(26),
  },
  rate: {
    fontSize: pxToDp(36),
    color: 'rgb(51,51,51)',
  },
  content: {
    justifyContent: 'flex-start',
    backgroundColor:'#fff',
    marginBottom:pxToDp(60),
  },
  financialWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderLeftColor: 'rgb(54,177,255)',
    borderLeftWidth: pxToDp(5),
    marginLeft: pxToDp(68),
    borderRadius: pxToDp(4),
  },
  financial: {
    fontSize: pxToDp(36),
    color: 'rgb(51,51,51)',
    marginLeft: pxToDp(10),
  },
  income: {
    color: 'rgb(54,177,255)',
    marginLeft: pxToDp(20),
  },
  ficon: {
    width: pxToDp(150),
    height: pxToDp(150),
  },
  percent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginLeft: pxToDp(78),
    marginRight: pxToDp(126),
  },
})

export default Home
