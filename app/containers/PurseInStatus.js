import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

// import { NavigationActions } from '../utils'
// import { Button } from '../components'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '转入',
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
              source={require('../images/turn-suc2.png')}
            />
            <Text>转入成功！</Text>
            <Text>666.00元</Text>
            <Text>成功转入666.00元企慧宝钱包</Text>
            <View style={styles.back}>
              <Text>3</Text>
              <Text>秒后自动返回</Text>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <Image
              style={[styles.icon]}
              source={require('../images/turn-fail2.png')}
            />
            <Text>转入失败！</Text>
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
