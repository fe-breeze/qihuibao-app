import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { createAction, NavigationActions } from '../utils'

@connect()
class CapitalDetails extends Component {
  static navigationOptions = {
    title: '资金明细',
  }

  goLogout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Go Logout" onPress={this.goLogout} />
        <Button text="Go Detail(投资详情)" onPress={this.gotoDetail} />
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
})

export default CapitalDetails
