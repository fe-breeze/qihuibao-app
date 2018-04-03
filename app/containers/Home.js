import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

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

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          paginationStyle={{ bottom: 250 }}
          autoplay
        >
          <View style={styles.slide1}>
            <Image source={require('../images/banner.png')} />
          </View>
          <View style={styles.slide2}>
            <Image source={require('../images/banner.png')} />
          </View>
          <View style={styles.slide3}>
            <Image source={require('../images/banner.png')} />
          </View>
        </Swiper>
        <Button text="Goto Detail" onPress={this.gotoDetail} />
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
  wrapper: {},
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
})

export default Home
