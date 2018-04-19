import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

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

  gotoInvestDetail = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'InvestDetail' })
    )
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  render() {
    // const { login } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <View style={styles.itemTitleWrap}>
                <View style={styles.circle} />
                <Text style={styles.itemTitle}>稳健盈 NO-00001</Text>
              </View>
              <View style={styles.itemCount}>
                <View style={styles.itemText}>
                  <Text style={styles.textTitle}>15</Text>
                  <Text style={styles.textInfo}>%</Text>
                </View>
                <View style={styles.itemText}>
                  <Text style={styles.textTitle}>6</Text>
                  <Text style={styles.textInfo}>个月</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.btn}
                  onPress={this.gotoInvestDetail}
                >
                  <Text style={styles.btnText}>投资</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.info}>年化率</Text>
                <Text style={styles.info}>投资期限</Text>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[styles.btn, styles.hidden]}
                >
                  <Text>投资</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <View style={styles.itemTitleWrap}>
                <View style={styles.circle} />
                <Text style={styles.itemTitle}>稳健盈 NO-00001</Text>
              </View>
              <View style={styles.itemCount}>
                <View style={styles.itemText}>
                  <Text style={styles.textTitle}>15</Text>
                  <Text style={styles.textInfo}>%</Text>
                </View>
                <View style={styles.itemText}>
                  <Text style={styles.textTitle}>6</Text>
                  <Text style={styles.textInfo}>个月</Text>
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.btn}>
                  <Text style={styles.btnText}>投资</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.info}>年化率</Text>
                <Text style={styles.info}>投资期限</Text>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[styles.btn, styles.hidden]}
                >
                  <Text>投资</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Button text="临时注销" onPress={this.gotoLogin} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingTop: pxToDp(26),
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
  },
  item: {
    // paddingBottom: pxToDp(50)
  },
  itemContent: {
    backgroundColor: '#fff',
    paddingTop: pxToDp(26),
    paddingLeft: pxToDp(26),
    marginBottom: pxToDp(20),
    borderRadius: pxToDp(4),
  },
  itemTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: pxToDp(32),
    color: 'rgb(51,51,51)',
  },
  itemCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: pxToDp(30),
  },
  itemText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textTitle: {
    color: 'rgb(255,106,110)',
    fontSize: pxToDp(50),
    marginBottom: pxToDp(-5),
  },
  textInfo: {
    color: 'rgb(255,106,110)',
    fontSize: pxToDp(30),
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToDp(20),
    height: pxToDp(80),
  },
  circle: {
    width: pxToDp(12),
    height: pxToDp(12),
    borderRadius: pxToDp(6),
    marginRight: pxToDp(12),
    backgroundColor: '#41b2fc',
  },
  info: {
    color: 'rgb(170,170,170)',
    fontSize: pxToDp(28),
  },
  btn: {
    width: pxToDp(140),
    height: pxToDp(66),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8b431',
    // opacity: .5,
    marginRight: pxToDp(50),
    borderRadius: pxToDp(33),
  },
  btnText: {
    color: '#fff',
  },
  hidden: {
    opacity: 0,
  },
})

export default Account
