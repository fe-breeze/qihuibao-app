import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'

import pxToDp from '../utils/pxToDp'
import { NavigationActions } from '../utils'
import { Button } from '../components'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '稳健盈 NO-00002',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#36b1ff',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  }
  constructor(props) {
    super(props)
    this.state = {
      yen: '',
    }
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
})

export default Detail
