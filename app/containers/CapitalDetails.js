import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { createAction } from '../utils'

@connect()
class CapitalDetails extends Component {
  static navigationOptions = {
    title: '资金明细',
  }

  goLogout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Go Logout" onPress={this.goLogout} />
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
