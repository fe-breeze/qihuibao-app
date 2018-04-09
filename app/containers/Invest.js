import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { createAction, NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    title: '定期理财',
    tabBarLabel: '投资',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/invest-gray.png')}
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
        {login ? (
          <Button text="Logout" onPress={this.logout} />
        ) : (
          <Button text="Goto Login" onPress={this.gotoLogin} />
        )}
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
