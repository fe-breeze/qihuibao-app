import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '明细',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#36b1ff',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleOut = () => {}

  gotoPurseOut = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'PurseOut' }))
  }
  gotoPurseIn = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'PurseIn' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outTabWrap}>
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
        </View>

        <View style={styles.contentWrap}>
          <View style={styles.contentInfo}>
            <View>
              <Text style={styles.outInTitle}>2018年3月</Text>
              <Text style={styles.outIn}>支出&yen;50.00</Text>
            </View>
            <Text>+50.00</Text>
          </View>
          <View style={styles.contentInfo}>
            <View>
              <Text style={styles.outInTitle}>2018年3月</Text>
              <Text style={styles.outIn}>支出&yen;50.00</Text>
            </View>
            <Text>+50.00</Text>
          </View>
          <View style={styles.contentInfo}>
            <View>
              <Text style={styles.outInTitle}>2018年3月</Text>
              <Text style={styles.outIn}>支出&yen;50.00</Text>
            </View>
            <Text>+50.00</Text>
          </View>
        </View>
        <View style={styles.mask}>
          <View style={styles.maskCard}>
            <View style={styles.maskHeader}>
              <Text style={styles.maskTitle}>选择类型</Text>
              <Image
                style={[styles.close]}
                source={require('../images/close.png')}
              />
            </View>
            <View style={styles.maskContent}>
              <View style={styles.btnList}>
                <View style={styles.listWrap}>
                  <Button
                    title="全部"
                    onPress={this.gotoPurseOut}
                    style={styles.all}
                  />
                </View>
                <View style={styles.lastContent}>
                  <Button
                    title="转入"
                    onPress={this.gotoPurseIn}
                    style={styles.btnContent}
                  />
                  <Button
                    title="转出"
                    onPress={this.gotoPurseOut}
                    style={styles.btnContent}
                  />
                  <Button
                    title="收益"
                    onPress={this.gotoPurseIn}
                    style={styles.btnContent}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
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
  btnList: {
    marginTop: pxToDp(80),
    marginLeft: pxToDp(80),
  },
  listWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  all: {
    width: pxToDp(132),
    height: pxToDp(66),
    backgroundColor: 'rgb(54,177,255)',
    borderColor: 'rgb(54,177,255)',
    borderWidth: pxToDp(10),
  },
  lastContent: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: pxToDp(66),
  },
  btnContent: {
    width: pxToDp(132),
    height: pxToDp(66),
    marginRight: pxToDp(66),
  },
  maskContent: {
    height: pxToDp(429),
    margin: pxToDp(26),
    justifyContent: 'space-between',
  },
  maskTitle: {
    fontSize: pxToDp(36),
    color: 'rgb(51,51,51)',
  },
  maskHeader: {
    position: 'relative',
    height: pxToDp(88),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#dcdcdc',
  },
  close: {
    position: 'absolute',
    top: pxToDp(30),
    margin: 'auto',
    left: pxToDp(28),
    height: pxToDp(28),
    width: pxToDp(28),
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  maskCard: {
    backgroundColor: '#fff',
  },
  outInTitle: {
    color: 'rgb(54,177,255)',
    fontSize: pxToDp(28),
  },
  outInDetail: {
    fontSize: pxToDp(32),
    color: 'rgb(51,51,51)',
    marginRight: pxToDp(20),
  },
  outInfoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: pxToDp(34),
    marginTop: pxToDp(80),
  },
  yen: {
    fontSize: pxToDp(68),
    marginRight: pxToDp(100),
    color: 'rgb(51,51,51)',
  },
  contentInfo: {
    backgroundColor: '#fff',
    marginTop: pxToDp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
    height: pxToDp(126),
  },
  content: {
    marginTop: pxToDp(20),
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
    height: pxToDp(126),
    borderTopColor: '#dcdcdc',
    borderTopWidth: pxToDp(1),
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: pxToDp(1),
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  outIn: {
    flexDirection: 'row',
    marginTop: pxToDp(20),
  },
  outTabWrap: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: pxToDp(120),
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
    flexDirection: 'row',
  },
  outTab: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default Detail
