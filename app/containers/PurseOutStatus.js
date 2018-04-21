import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

// import { NavigationActions } from '../utils'
// import { Button } from '../components'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '转出',
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

  render() {
    return (
      <View style={styles.wrap}>
        {false ? (
          <View style={styles.container}>
            <Image
              style={[styles.icon]}
              source={require('../images/turn-suc1.png')}
            />
            <Text>转出成功！</Text>
            <Text>666.00元</Text>
            <Text>成功转出666.00元至招商银行 储蓄卡（8015）</Text>
            <View style={styles.back}>
              <Text>3</Text>
              <Text>秒后自动返回</Text>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <Image
              style={[styles.icon]}
              source={require('../images/turn-fail1.png')}
            />
            <Text>转出失败！</Text>
            <Text>666.00元</Text>
            <View style={styles.back}>
              <Text>3</Text>
              <Text>秒后自动返回</Text>
            </View>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
  },
  back: {
    marginTop: pxToDp(80),
    flexDirection: 'row',
  },
  icon: {
    marginTop: pxToDp(200),
    width: pxToDp(240),
    height: pxToDp(240),
  },
})

export default Detail
