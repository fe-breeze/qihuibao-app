import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import pxToDp from '../utils/pxToDp'
import { NavigationActions } from '../utils'
import { Button } from '../components'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '稳健盈 NO-00002',
  }
  gotoProjectIntro = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'ProjectIntro' })
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.info}>
            <Text style={styles.infoText}>100元起投</Text>
          </View>
          <View style={styles.investWrap}>
            <View style={styles.invest}>
              <View style={styles.textWrap}>
                <View>
                  <Text>13%</Text>
                  <Text>年化率</Text>
                </View>
              </View>
              <View style={styles.textWrap}>
                <View>
                  <Text>13%</Text>
                  <Text>年化率</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lineBackground}>
            <View style={styles.line} />
            <View style={styles.lineInfoWrap}>
              <View style={styles.lineInfo}>
                <Text>60%</Text>
              </View>
              <View style={styles.arrow} />
            </View>
          </View>
          <View style={styles.cashWrap}>
            <Text style={styles.cash}>可售金额：40000元</Text>
            <Text style={styles.cash}>项目总金额：100000元</Text>
          </View>
        </View>
        <View style={styles.contentWrap}>
          <View style={styles.content}>
            <View style={styles.contentItem}>
              <Text>募集金额</Text>
              <Text>100000元</Text>
            </View>
            <View style={styles.contentItem}>
              <Text>募集金额</Text>
              <Text>100000元</Text>
            </View>
            <View style={styles.contentItem}>
              <Text>募集金额</Text>
              <Text>100000元</Text>
            </View>
            <View style={styles.contentItem}>
              <Text>募集金额</Text>
              <Text>100000元</Text>
            </View>
            <View style={styles.contentItem}>
              <Text>募集金额</Text>
              <Text>100000元</Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.contentItem}
              onPress={this.gotoProjectIntro}
            >
              <Text>项目介绍</Text>
              <Text>100000元</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buy}>
            <Button title="立即购买" color="#fff" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: pxToDp(26),
    backgroundColor: '#36b1ff',
  },
  info: {
    height: pxToDp(30),
    width: pxToDp(120),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.3)',
  },
  infoText: {
    fontSize: pxToDp(20),
    color: '#fff',
  },
  investWrap: {
    alignItems: 'center',
  },
  invest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: pxToDp(400),
  },
  lineBackground: {
    backgroundColor: 'rgba(255,255,255,.3)',
    height: pxToDp(6),
    borderRadius: pxToDp(6),
    position: 'relative',
  },
  line: {
    backgroundColor: '#fff',
    height: pxToDp(6),
    borderRadius: pxToDp(6),
    position: 'absolute',
  },
  lineInfo: {
    height: pxToDp(40),
    width: pxToDp(60),
    backgroundColor: '#fff',
  },
  lineInfoWrap: {
    position: 'absolute',
  },
  arrow: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: pxToDp(15),
    borderBottomColor: '#fff',
  },
  cashWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToDp(30),
  },
  cash: {
    color: '#fff',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: pxToDp(26),
  },
  buy: {
    marginRight: pxToDp(26),
    marginLeft: pxToDp(26),
    marginBottom: pxToDp(26),
  },
  contentItem: {
    paddingRight: pxToDp(26),
    marginTop: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxToDp(88),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#dcdcdc',
    borderBottomColor: '#dcdcdc',
  },
})

export default Detail
