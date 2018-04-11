import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
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
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image source={require('../images/apply-sub.png')} />
              <Text style={{ fontSize: pxToDp(34), color: 'rgb(51,51,51)' }}>
                提现申请已提交，等待银行处理
              </Text>
              <Text style={{ fontSize: pxToDp(28), color: 'rgb(170,170,170)' }}>
                招商银行 (9876) 200.00元{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: pxToDp(88),
              marginTop: pxToDp(80),
            }}
          >
            <Image source={require('../images/exAccount.png')} />
            <Text
              style={{
                fontSize: pxToDp(34),
                color: 'rgb(51,51,51)',
                marginLeft: pxToDp(20),
              }}
            >
              预计24小时内到账
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: pxToDp(100),
            }}
          >
            <Text style={{ fontSize: pxToDp(24), color: 'rgb(54,177,255)' }}>
              3
            </Text>
            <Text style={{ fontSize: pxToDp(24), color: 'rgb(153,153,153)' }}>
              秒后自动返回
            </Text>
          </View>
          <View style={styles.confirm}>
            <Button title="确认" color="#fff" onPress={this.gotoWithdrawal} />
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
  confirm: {
    height: pxToDp(88),
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
    backgroundColor: 'rgb(54,177,255)',
    borderRadius: pxToDp(12),
  },
})

export default CashResult
