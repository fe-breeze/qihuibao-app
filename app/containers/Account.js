import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

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

  gotoAbout = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'About' }))
  }
  gotoSetting = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Setting' }))
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

  render() {
    // const { login } = this.props
    return (
      <View style={styles.container}>
        <Text>134****3232</Text>
        <Text>账户金额</Text>
        <Text>13232.66</Text>
        <Text>在途资金（元）23.22</Text>
        <Button text="我的投资" onPress={this.gotoMyInvest} />
        <Button text="资金明细" onPress={this.gotoInvestDetail} />
        <Button text="提现" onPress={this.gotoWithdrawal} />
        <Button text="设置" onPress={this.gotoSetting} />
        <Button text="关于" onPress={this.gotoAbout} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: pxToDp(48),
    height: pxToDp(48),
  },
})

export default Account
