import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'

// import { NavigationActions } from '../utils'
import { Button } from '../components'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '转入',
  }
  constructor(props) {
    super(props)
    this.state = {
      yen: '',
    }
  }

  handleOut = () => { }

  render() {
    return (
      <View style={styles.container}>
        {true ? (
          <View style={styles.contentWrap}>
            <View style={styles.content}>
              <Text style={styles.outBankTitle}>转入金额(元)</Text>
              <View style={styles.outInfoWrap}>
                <Text style={styles.yen}>&yen;</Text>
                <TextInput
                  style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                  value={this.state.yen}
                  onChangeText={yen => this.setState({ yen })}
                  placeholder="本次最多可转入666.66元"
                />
              </View>
              <Text style={styles.wan}>超出可转金额上限</Text>
            </View>
            <Button text="确认转入" onPress={this.handleOut} />
          </View>
        ) : (
            <View style={styles.contentWrap}>
              <View style={styles.content}>
                <Text style={styles.outBankTitle}>转入金额(元)</Text>
                <View style={[styles.outInfoWrap, styles.outBalance]}>
                  <Text style={styles.yen}>&yen;</Text>
                  <TextInput
                    style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                    value={this.state.yen}
                    onChangeText={yen => this.setState({ yen })}
                    placeholder="本次最多可转入666.66元"
                  />
                  <Text style={styles.all}>全部</Text>
                </View>
              </View>
              <Button text="确认转入" onPress={this.handleOut} />
            </View>
          )}
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
              <View>
                <View style={styles.outItem}>
                  <Text>转入金额:</Text>
                  <TextInput
                    style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                    value={this.state.yen}
                    onChangeText={yen => this.setState({ yen })}
                    placeholder="本次最多可转入666.66元"
                  />
                </View>
                <View style={styles.outItem}>
                  <Text>验证码:</Text>
                  <TextInput
                    style={[styles.inputItem, { color: 'rgb(220, 220, 220)' }]}
                    value={this.state.yen}
                    onChangeText={yen => this.setState({ yen })}
                    placeholder="本次最多可转入666.66元"
                  />
                  <Text>获取验证码</Text>
                </View>
                <Text style={styles.valErr}>验证码输入错误，请重新输入</Text>
              </View>
              <Button text="确认" onPress={this.handleOut} />
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
  valErr: {
    color: 'rgb(255,106,110)',
    textAlign: 'right',
    fontSize: pxToDp(24),
  },
  outItem: {
    flexDirection: 'row',
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
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: pxToDp(26),
  },
  outTabWrap: {
    backgroundColor: '#fff',
    height: pxToDp(88),
    flexDirection: 'row',
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