import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class CashResult extends Component {
  static navigationOptions = {
    title: '结果详情',
  }

  gotoWithdrawal = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Withdrawal' }))
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.wrapper}>
          <Image source={require('../images/apply-sub.png')} />
          <Text style={styles.apply}>提现申请已提交，等待银行处理 </Text>
        </View>
        <View style={styles.drawingWrap}>
          <Text style={styles.drawing}>招商银行 (9876) 200.00元 </Text>
        </View>
        <View style={styles.wrapper}>
          <Image source={require('../images/exAccount.png')} />
          <Text style={styles.accDate}>预计24小时内到账 </Text>
        </View>
        <View style={styles.back}>
          <Text style={styles.backCount}>3</Text>
          <Text style={styles.backDetails}>秒后自动返回</Text>
        </View>
        <View style={styles.confirm}>
          <Button title="确认" color="#fff" onPress={this.gotoWithdrawal} />
    </View> */}
        <View style={styles.content}>
          <Image source={require('../images/processing.png')} />
          <Text style={styles.processing}>系统正在处理,请稍后再次查看</Text>
          <Text style={styles.money}>666.00元</Text>
          <View style={styles.back}>
            <Text style={styles.backCount}>3</Text>
            <Text style={styles.backDetails}>秒后自动返回</Text>
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
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(200),
  },
  processing: {
    fontSize: pxToDp(36),
    color: 'rgb(102,102,102)',
  },
  money: {
    fontSize: pxToDp(32),
    color: 'rgb(54,177,255)',
    marginTop: pxToDp(20),
  },
  // wrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   marginLeft: pxToDp(88),
  //   marginTop: pxToDp(80),
  // },
  // apply: {
  //   fontSize: pxToDp(34),
  //   color: 'rgb(51,51,51)',
  //   marginLeft: pxToDp(20),
  // },
  // drawingWrap: {
  //   alignItems: 'flex-start',
  //   marginLeft: pxToDp(170),
  // },
  // drawing: {
  //   color: 'rgb(170,170,170)',
  //   fontSize: pxToDp(28),
  // },
  // accDate: {
  //   fontSize: pxToDp(34),
  //   color: 'rgb(51,51,51)',
  //   marginLeft: pxToDp(20),
  // },
  back: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(100),
    marginBottom: pxToDp(100),
  },
  backCount: {
    fontSize: pxToDp(24),
    color: 'rgb(54,177,255)',
  },
  backDetails: {
    fontSize: pxToDp(24),
    color: 'rgb(153,153,153)',
  },
  // confirm: {
  //   position: 'absolute',
  //   bottom: pxToDp(20),
  //   left: pxToDp(26),
  //   right: pxToDp(26),
  //   height: pxToDp(88),
  //   backgroundColor: 'rgb(54,177,255)',
  //   borderRadius: pxToDp(12),
  // },
})

export default CashResult
