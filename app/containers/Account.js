import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    header: null,
    title: '账户',
    tabBarLabel: '账户',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/person.png')}
      />
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        <Text>134****3232</Text>
        <Text>账户金额</Text>
        <Text>13232.66</Text>
        <Text>在途资金（元）23.22</Text>
        <Button text="我的投资" onPress={this.logout} />
        <Button text="资金明细" onPress={this.gotoLogin} />
        <Button text="提现" onPress={this.gotoLogin} />
        <Button text="设置" onPress={this.gotoLogin} />
        <Button text="关于" onPress={this.gotoLogin} />
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
    width: 32,
    height: 32,
  },
})

export default Account
