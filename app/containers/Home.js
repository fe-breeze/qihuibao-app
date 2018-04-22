import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'

import pxToDp from '../utils/pxToDp'

import { NavigationActions, createAction } from '../utils'

@connect(({ account }) => ({ ...account }))
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
  constructor(props) {
    super(props)
    this.state = {
      regularRate: '',
      currentRate: '',
    }
  }
  componentWillMount() {
    this.props.dispatch(createAction('account/homeRate')()).then(() => {
      const { regularRate, currentRate } = this.props
      this.setState({
        regularRate,
        currentRate,
      })
    })
  }
  gotoCoinPurse = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'CoinPurse' }))
  }

  gotoInvest = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Invest' }))
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.wrapper}>
            <Swiper
              height={pxToDp(460)}
              autoplay
              dot={
                <View
                  style={{
                    backgroundColor: 'rgba(255,255,255,.4)',
                    width: pxToDp(18),
                    height: pxToDp(6),
                    borderRadius: pxToDp(4),
                    marginLeft: pxToDp(7),
                    marginRight: pxToDp(7),
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: pxToDp(18),
                    height: pxToDp(6),
                    borderRadius: pxToDp(4),
                    marginLeft: pxToDp(7),
                    marginRight: pxToDp(7),
                  }}
                />
              }
              paginationStyle={{
                bottom: pxToDp(23),
              }}
              loop
            >
              <View style={styles.slide}>
                <Image
                  style={styles.image}
                  source={require('../images/banner.png')}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.image}
                  source={require('../images/banner.png')}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.image}
                  source={require('../images/banner.png')}
                />
              </View>
            </Swiper>
            <View style={styles.notice}>
              <Image
                style={styles.vicon}
                source={require('../images/volume.png')}
              />
              <Text style={styles.rate}>
                {this.state.rate}企惠宝零钱包7日年化率提高20%!
              </Text>
            </View>
            <View style={styles.cardWrap}>
              <TouchableOpacity
                style={styles.content}
                activeOpacity={1}
                onPress={this.gotoInvest}
              >
                <View style={styles.financialWrap}>
                  <Text style={styles.financial}>定期理财</Text>
                  <Text style={styles.income}>收益稳健</Text>
                </View>
                <View style={styles.percent}>
                  <View>
                    <Text style={styles.info}>
                      <Text style={{ fontSize: pxToDp(60) }}>
                        {Number.parseFloat(this.state.regularRate)}
                      </Text>
                      <Text style={{ fontSize: pxToDp(40) }}>%</Text>
                      <Text style={{ fontSize: pxToDp(60) }}>
                        -{Number.parseFloat(
                          this.state.regularRate.split('-')[1]
                        )}
                      </Text>
                      <Text style={{ fontSize: pxToDp(40) }}>%</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: pxToDp(28),
                        color: 'rgb(170,170,170)',
                      }}
                    >
                      平均年化率高达
                    </Text>
                  </View>
                  <Image
                    style={styles.ficon}
                    source={require('../images/financing.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.content}
                onPress={this.gotoCoinPurse}
              >
                <View style={styles.financialWrap}>
                  <Text style={styles.financial}>企惠宝零钱包</Text>
                  <Text style={styles.income}>资金灵活</Text>
                </View>
                <View style={styles.percent}>
                  <View>
                    <Text style={styles.info}>
                      <Text style={{ fontSize: pxToDp(60) }}>
                        {Number.parseFloat(this.state.currentRate)}
                      </Text>
                      <Text style={{ fontSize: pxToDp(40) }}>%</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: pxToDp(28),
                        color: 'rgb(170,170,170)',
                      }}
                    >
                      7日年化率高达
                    </Text>
                  </View>
                  <Image
                    style={styles.ficon}
                    source={require('../images/qihuibao-package.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  }
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f3f3',
  },
  icon: {
    width: pxToDp(48),
    height: pxToDp(48),
  },
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    flex: 1,
  },
  notice: {
    flexDirection: 'row',
    alignItems: 'center',
    height: pxToDp(98),
    paddingLeft: pxToDp(26),
    backgroundColor: '#fff',
  },
  vicon: {
    width: pxToDp(42),
    height: pxToDp(42),
    marginRight: pxToDp(26),
  },
  rate: {
    fontSize: pxToDp(36),
    color: 'rgb(51,51,51)',
  },
  cardWrap: {
    padding: pxToDp(26),
  },
  content: {
    backgroundColor: '#fff',
    paddingLeft: pxToDp(26),
    paddingTop: pxToDp(26),
    marginBottom: pxToDp(26),
  },
  financialWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: 'rgb(54,177,255)',
    borderLeftWidth: pxToDp(6),
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
    paddingTop: pxToDp(26),
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(100),
    paddingBottom: pxToDp(80),
  },
  info: {
    paddingBottom: pxToDp(20),
    color: 'rgb(255,106,110)',
  },
})

export default Home
