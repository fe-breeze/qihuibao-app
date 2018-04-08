import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'

// import { Button } from '../components'

// import { NavigationActions } from '../utils'
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

  // gotoDetail = () => {
  //   this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  // }
  // <Button text="Goto Detail" onPress={this.gotoDetail} />

  render() {
    return (
      <View style={styles.container}>
        <Swiper paginationStyle={{ bottom: 100 }} autoplay>
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
        <View style={styles.notice}>
          <Image source={require('../images/volume.png')} />
          <Text>企惠宝零钱包7日年化率提高20%!</Text>
        </View>
        <View>
          <Text>
            定期理财
            <Text style={{ color: 'rgb(54,177,255)' }}>收益稳健</Text>
          </Text>
        </View>
        <View style={styles.financial}>
          <Text style={{ color: 'rgb(255,106,110)' }}>8%-15%</Text>
          <Image source={require('../images/financing.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: pxToDp(32),
    height: pxToDp(32),
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
  },
  financial: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
})

export default Home
