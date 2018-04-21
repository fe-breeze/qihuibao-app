import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '我的投资',
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
              <Text style={styles.bankText}>投资中</Text>
              <View style={styles.lineWrap}>
                <View style={styles.line} />
              </View>
            </View>
          </View>
          <View style={[styles.outTab, styles.balance]}>
            <View style={styles.tabItemWrap}>
              <Text style={styles.balanceText}>已结算</Text>
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
              <View style={styles.itemWrap}>
                <View>
                  <View style={styles.itemPack}>
                    <Text style={styles.listName}>稳健盈</Text>
                    <Text style={styles.listNum}>NO-00001</Text>
                  </View>
                  <Text style={styles.listMoney}>1200.00元</Text>
                </View>
                <View style={styles.itemParcel}>
                  <Text style={styles.itemPercent}>15%</Text>
                  <Image
                    source={require('../images/enter.png')}
                    style={{ marginLeft: pxToDp(80) }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contentItem}
              activeOpacity={1}
              onPress={this.gotoDetail}
            >
              <View style={styles.itemWrap}>
                <View>
                  <View style={styles.itemPack}>
                    <Text style={styles.listName}>稳健盈</Text>
                    <Text style={styles.listNum}>NO-00002</Text>
                  </View>
                  <Text style={styles.listMoney}>6666.66元</Text>
                </View>
                <View style={styles.itemParcel}>
                  <Text style={styles.itemPercent}>13%</Text>
                  <Image
                    source={require('../images/enter.png')}
                    style={{ marginLeft: pxToDp(80) }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.contentWrap}>
            <TouchableOpacity
              style={styles.contentItem}
              activeOpacity={1}
              onPress={this.gotoDetail}
            >
              <View style={styles.itemWrap}>
                <View>
                  <View style={styles.itemPack}>
                    <Text style={styles.listName}>稳健盈</Text>
                    <Text style={styles.listNum}>NO-00001</Text>
                  </View>
                  <Text style={styles.listMoney}>1200.00元</Text>
                </View>
                <View style={styles.itemParcel}>
                  <Text style={styles.itemPercent}>15%</Text>
                  <Image
                    source={require('../images/enter.png')}
                    style={{ marginLeft: pxToDp(80) }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contentItem}
              activeOpacity={1}
              onPress={this.gotoDetail}
            >
              <View style={styles.itemWrap}>
                <View>
                  <View style={styles.itemPack}>
                    <Text style={styles.listName}>稳健盈</Text>
                    <Text style={styles.listNum}>NO-00002</Text>
                  </View>
                  <Text style={styles.listMoney}>6666.66元</Text>
                </View>
                <View style={styles.itemParcel}>
                  <Text style={styles.itemPercent}>13%</Text>
                  <Image
                    source={require('../images/enter.png')}
                    style={{ marginLeft: pxToDp(80) }}
                  />
                </View>
              </View>
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
  yen: {
    fontSize: pxToDp(68),
    marginRight: pxToDp(100),
    color: 'rgb(51,51,51)',
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
    height: pxToDp(128),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  itemWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxToDp(128),
    flex: 1,
  },
  itemPack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listName: {
    fontSize: pxToDp(36),
    color: 'rgb(102,102,102)',
    marginRight: pxToDp(20),
  },
  listNum: {
    fontSize: pxToDp(36),
    color: 'rgb(102,102,102)',
  },
  listMoney: {
    fontSize: pxToDp(28),
    color: 'rgb(102,102,102)',
    marginTop: pxToDp(20),
  },
  itemParcel: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemPercent: {
    fontSize: pxToDp(40),
    color: 'rgb( 255,106,110 )',
  },
  outTabWrap: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: pxToDp(128),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  outIn: {
    flexDirection: 'row',
    marginTop: pxToDp(20),
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
