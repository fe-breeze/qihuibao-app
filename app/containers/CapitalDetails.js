import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '资金明细',
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outTabWrap}>
          <View style={[styles.outTab, styles.bank]}>
            <View style={styles.tabItemWrap}>
              <Text style={styles.bankText}>全部类型</Text>
              <View style={styles.lineWrap}>
                <View style={styles.line} />
              </View>
            </View>
          </View>
          <View style={[styles.outTab, styles.balance]}>
            <View style={styles.tabItemWrap}>
              <Text style={styles.balanceText}>3天</Text>
              <View style={styles.lineWrap}>
                <View style={styles.line} />
              </View>
            </View>
          </View>
        </View>
        {true ? (
          <View style={styles.contentWrap}>
            <TouchableOpacity
              style={styles.contentItem}
              activeOpacity={1}
              onPress={this.gotoDetail}
            >
              <View>
                <Text style={styles.outInTitle}>2018年3月</Text>
                <View style={styles.outIn}>
                  <Text style={styles.outInDetail}>支出&yen;50.00</Text>
                  <Text style={styles.outInDetail}>收入&yen;50.00</Text>
                </View>
              </View>
              <Image
                style={[styles.icon]}
                source={require('../images/calendar.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentItem}>
              <View>
                <Text style={styles.outInTitle}>2018年3月</Text>
                <View style={styles.outIn}>
                  <Text style={styles.outInDetail}>支出&yen;50.00</Text>
                  <Text style={styles.outInDetail}>收入&yen;50.00</Text>
                </View>
              </View>
              <Image
                style={[styles.icon]}
                source={require('../images/calendar.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.contentWrap}>
            <TouchableOpacity style={styles.contentItem}>
              <View>
                <Text style={styles.outInTitle}>2018年3月</Text>
                <View style={styles.outIn}>
                  <Text style={styles.outInDetail}>支出&yen;50.00</Text>
                  <Text style={styles.outInDetail}>收入&yen;50.00</Text>
                </View>
              </View>
              <Image
                style={[styles.icon]}
                source={require('../images/calendar.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentItem}>
              <View>
                <Text style={styles.outInTitle}>2018年3月</Text>
                <View style={styles.outIn}>
                  <Text style={styles.outInDetail}>支出&yen;50.00</Text>
                  <Text style={styles.outInDetail}>收入&yen;50.00</Text>
                </View>
              </View>
              <Image
                style={[styles.icon]}
                source={require('../images/calendar.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  valErr: {
    color: 'rgb(255,106,110)',
    textAlign: 'right',
    fontSize: pxToDp(24),
  },
  outItem: {
    flexDirection: 'row',
  },
  outBalance: {
    justifyContent: 'center',
  },
  inputItem: {
    width: pxToDp(380),
  },
  wan: {
    marginTop: pxToDp(50),
    paddingLeft: pxToDp(34),
    color: 'rgb(255,106,110)',
  },
  outInfoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: pxToDp(34),
    marginTop: pxToDp(80),
  },
  all: {
    fontSize: pxToDp(32),
    marginLeft: pxToDp(20),
    color: 'rgb(54,177,255)',
  },
  yen: {
    fontSize: pxToDp(68),
    marginRight: pxToDp(100),
    color: 'rgb(51,51,51)',
  },
  bankWrap: {
    height: pxToDp(120),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: pxToDp(26),
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
  },
  outBankTitle: {
    fontSize: pxToDp(32),
    color: 'rgb(153,153,153)',
  },
  cardInfo: {
    color: 'rgb(51,51,51)',
    fontSize: pxToDp(32),
  },
  bankImg: {
    height: pxToDp(66),
    width: pxToDp(220),
  },
  contentWrap: {
    marginTop: pxToDp(20),
    flex: 1,
    backgroundColor: '#fff',
    padding: pxToDp(26),
  },
  contentItem: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: pxToDp(120),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  outTabWrap: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: pxToDp(88),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  outTab: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabItemWrap: {
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
  bank: {
    paddingRight: pxToDp(50),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  balance: {
    paddingLeft: pxToDp(50),
  },
  bankText: {
    textAlign: 'right',
    fontSize: pxToDp(36),
    color: 'rgb(54,117,255)',
    width: '100%',
  },
  balanceText: {
    fontSize: pxToDp(32),
    color: 'rgb(170,170,170)',
  },
  lineWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'rgb(54,117,255)',
    width: pxToDp(60),
    height: pxToDp(6),
    borderRadius: pxToDp(6),
  },
})

export default Detail
