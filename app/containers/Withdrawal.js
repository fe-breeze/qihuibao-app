import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '提现',
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     yen: '',
  //   }
  // }

  gotoCashResult = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'CashResult' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bankWrap}>
          <Image
            style={styles.bankImg}
            source={require('../images/bank.png')}
          />
          <Text style={styles.cardInfo}>尾号8181的储蓄卡</Text>
        </View>
        {/* <View style={styles.contentWrap}>
        <View style={styles.content}>
          <Text style={styles.outBankTitle}>提取金额(元)</Text>
          <View style={styles.outInfoWrap}>
            <Text style={styles.yen}>&yen;</Text>
            <TextInput
              style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
              value={this.state.yen}
              onChangeText={yen => this.setState({ yen })}
              placeholder="可提现余额1005.54元"
            />
            <Text style={styles.all}>全部</Text>
          </View>
          <Text style={styles.wan}>超出可转金额上限</Text>
        </View>
        <Button text="确认提现" onPress={this.gotoCashResult} />
    </View> */}

        <View style={styles.contentWrap}>
          <View style={styles.content}>
            <View style={{}}>
              <Image source={require('../images/close.png')} />
              <Text style={styles.outBankTitle}>确认提现</Text>
            </View>
            <View style={styles.outInfoWrap}>
              <Text style={styles.message}>短信验证码</Text>
              <TextInput
                style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                placeholder="请输入短信验证码"
              />
              <Text style={styles.all}>短信验证码</Text>
            </View>
            <Text style={styles.valErr}>验证码错误,请重新输入</Text>
          </View>
          <Button text="确认" onPress={this.gotoCashResult} />
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
  bankImg: {
    height: pxToDp(66),
    width: pxToDp(220),
  },
  cardInfo: {
    color: 'rgb(51,51,51)',
    fontSize: pxToDp(32),
  },
  contentWrap: {
    marginTop: pxToDp(20),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: pxToDp(26),
  },
  outBankTitle: {
    fontSize: pxToDp(32),
    color: 'rgb(153,153,153)',
  },
  outInfoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: pxToDp(34),
    marginTop: pxToDp(80),
  },
  message: {
    fontSize: pxToDp(34),
    color: 'rgb(51,51,51)',
  },
  yen: {
    fontSize: pxToDp(68),
    marginRight: pxToDp(100),
    color: 'rgb(51,51,51)',
  },
  inputItem: {
    width: pxToDp(380),
  },
  all: {
    fontSize: pxToDp(32),
    marginLeft: pxToDp(20),
    color: 'rgb(54,177,255)',
  },
  valErr: {
    color: 'rgb(255,106,110)',
    textAlign: 'right',
    fontSize: pxToDp(24),
    marginTop: pxToDp(20),
  },
  wan: {
    marginTop: pxToDp(50),
    paddingLeft: pxToDp(34),
    color: 'rgb(255,106,110)',
  },
  close: {
    position: 'absolute',
    top: pxToDp(30),
    margin: 'auto',
    left: pxToDp(28),
    height: pxToDp(28),
    width: pxToDp(28),
  },
})

export default Detail
