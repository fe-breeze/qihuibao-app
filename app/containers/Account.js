import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    header: null,
    title: '账户',
    tabBarLabel: '账户',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/account-gray.png')}
      />
    ),
  }

  gotoMyInvest = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'MyInvest' }))
  }
  gotoInvestDetail = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'InvestDetail' })
    )
  }
  gotoWithdrawal = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Withdrawal' }))
  }
  gotoSetting = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Setting' }))
  }
  gotoAbout = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'About' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/account-bg.png')} />
        <View style={styles.wrapper}>
          <View style={styles.wrapDeatil}>
            <Image
              source={require('../images/my-invest.png')}
              style={styles.imgStyle}
            />
            <Text onPress={this.gotoMyInvest} style={styles.sunstance}>
              我的投资
            </Text>
          </View>
          <Image source={require('../images/enter.png')} style={styles.enter} />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.wrapDeatil}>
            <Image
              source={require('../images/invest-detail.png')}
              style={styles.imgStyle}
            />
            <Text onPress={this.gotoInvestDetail} style={styles.sunstance}>
              资金明细
            </Text>
          </View>
          <Image source={require('../images/enter.png')} style={styles.enter} />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.wrapDeatil}>
            <Image
              source={require('../images/cash.png')}
              style={styles.imgStyle}
            />
            <Text onPress={this.gotoWithdrawal} style={styles.sunstance}>
              提现
            </Text>
          </View>
          <Image source={require('../images/enter.png')} style={styles.enter} />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.wrapDeatil}>
            <Image
              source={require('../images/setting.png')}
              style={styles.imgStyle}
            />
            <Text onPress={this.gotoSetting} style={styles.sunstance}>
              设置
            </Text>
          </View>
          <Image source={require('../images/enter.png')} style={styles.enter} />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.wrapDeatil}>
            <Image
              source={require('../images/about.png')}
              style={styles.imgStyle}
            />
            <Text onPress={this.gotoAbout} style={styles.sunstance}>
              关于
            </Text>
          </View>
          <Image source={require('../images/enter.png')} style={styles.enter} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: pxToDp(48),
    height: pxToDp(48),
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: pxToDp(26),
    marginTop: pxToDp(23),
    marginBottom: pxToDp(23),
  },
  wrapDeatil: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imgStyle: {
    width: pxToDp(42),
    height: pxToDp(42),
    marginRight: pxToDp(26),
  },
  sunstance: {
    fontSize: pxToDp(34),
    color: 'rgb(51,51,51)',
  },
  enter: {
    width: pxToDp(24),
    height: pxToDp(24),
    marginRight: pxToDp(42),
  },
})

export default Account
