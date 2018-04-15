import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'

// import { NavigationActions } from '../utils'
// import { Button } from '../components'

import pxToDp from '../utils/pxToDp'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '选择城市',
  }
  constructor(props) {
    super(props)
    this.state = {
      city: '',
    }
  }

  handleOut = () => {}

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.search}>
          <Image
            style={[styles.icon]}
            source={require('../images/search.png')}
          />
          <TextInput
            style={styles.input}
            value={this.state.city}
            onChangeText={city => this.setState({ city })}
            maxLength={32}
            placeholder="选择所在公司"
            placeholderTextColor="rgb(220, 220, 220)"
          />
        </View>
        <View style={styles.cityList}>
          <View style={styles.cityListItem}>
            <Text>阿尔法</Text>
            <Image
              style={[styles.select]}
              source={require('../images/checked.png')}
            />
          </View>
          <View style={styles.cityListItem}>
            <Text>阿尔法</Text>
            <Image
              style={[styles.select]}
              source={require('../images/checked.png')}
            />
          </View>
          <View style={styles.cityListItem}>
            <Text>阿尔法</Text>
            <Image
              style={[styles.select]}
              source={require('../images/checked.png')}
            />
          </View>
          <View style={styles.cityListItem}>
            <Text>阿尔法</Text>
            <Image
              style={[styles.select]}
              source={require('../images/checked.png')}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    padding: pxToDp(26),
  },
  select: {
    height: pxToDp(28),
    width: pxToDp(28),
  },
  cityList: {
    marginTop: pxToDp(60),
  },
  cityListItem: {
    height: pxToDp(88),
    paddingLeft: pxToDp(26),
    paddingRight: pxToDp(26),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#dcdcdc',
    borderBottomColor: '#dcdcdc',
    marginTop: pxToDp(-1),
    borderTopWidth: pxToDp(1),
    borderBottomWidth: pxToDp(1),
  },
  search: {
    backgroundColor: 'rgb(244,246,248)',
    height: pxToDp(70),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: pxToDp(32),
    width: pxToDp(32),
    marginRight: pxToDp(32),
    marginLeft: pxToDp(26),
  },
})

export default Detail
