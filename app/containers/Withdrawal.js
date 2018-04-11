import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '提现',
  }

  gotoCashResult = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'CashResult' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Goto CashResult " onPress={this.gotoCashResult} />
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

export default Detail
