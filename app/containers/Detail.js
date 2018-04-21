import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '投资详情',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#36b1ff',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.head}>
          <Text style={styles.headLine1}>稳健盈 NO-00005</Text>
          <Text style={styles.headLine2}>已结算</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>投资金额</Text>
          <Text style={styles.rightContent}>888元</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>年化率</Text>
          <Text style={styles.rightContent}>15%</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>投资日期</Text>
          <Text style={styles.rightContent}>2018-03-23</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>起息日期</Text>
          <Text style={styles.rightContent}>2018-03-24</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>还款日期</Text>
          <Text style={styles.rightContent}>2018-06-23</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>投资收益</Text>
          <Text style={styles.rightContent}>23元</Text>
    </View> */}

        <View style={styles.head}>
          <Text style={styles.headLine1}>稳健盈 NO-00001</Text>
          <Text style={styles.headLine2}>投资中</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>投资金额</Text>
          <Text style={styles.rightContent}>2000元</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>年化率</Text>
          <Text style={styles.rightContent}>15%</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>投资日期</Text>
          <Text style={styles.rightContent}>2018-03-23</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>起息日期</Text>
          <Text style={styles.rightContent}>2018-03-24</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>还款日期</Text>
          <Text style={styles.rightContent}>2018-06-23</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.leftContent}>投资收益</Text>
          <Text style={styles.rightContent}>600元</Text>
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
  head: {
    height: pxToDp(88),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToDp(20),
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
  },
  headLine1: {
    fontSize: pxToDp(36),
    color: 'rgb(51,51,51)',
  },
  headLine2: {
    fontSize: pxToDp(28),
    // color: 'rgb(170,170,170)',
    color: 'rgb(54,177,255)',
  },
  leftContent: {
    fontSize: pxToDp(34),
    color: 'rgb(51,51,51)',
  },
  rightContent: {
    fontSize: pxToDp(34),
    color: 'rgb(153,153,153)',
  },
})

export default Detail
