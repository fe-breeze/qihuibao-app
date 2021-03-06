import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'

import { NavigationActions, createAction } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect(({ account }) => ({ ...account }))
class CityList extends Component {
  static navigationOptions = {
    title: '选择城市',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0,
    },
    headerTintColor: '#000',
  }
  constructor(props) {
    super(props)
    this.state = {
      companyName: '',
      companyList: [],
    }
  }

  componentWillMount() {
    this.handleList = debounce(this.searchCompany, 1000)
    this.searchCompany()
  }

  gotoHome = payload => {
    this.props
      .dispatch(
        createAction('account/coSave')({
          companyId: payload.id,
          logoUrl: payload.logoUrl,
        })
      )
      .then(() => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Main' }))
      })
  }

  changeName = payload => {
    this.handleList(payload)
  }

  searchCompany = payload => {
    this.props
      .dispatch(
        createAction('account/coList')({
          companyName: payload || '',
        })
      )
      .then(() => {
        const { companyList } = this.props
        this.setState({
          companyList,
          companyName: payload || '',
        })
      })
  }

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
            value={this.state.companyName}
            onChangeText={companyName => this.changeName(companyName)}
            maxLength={32}
            placeholder="选择所在公司"
            placeholderTextColor="rgb(220, 220, 220)"
          />
        </View>
        <View style={styles.cityList}>
          {this.state.companyList.length &&
            this.state.companyList.map(item => (
              <TouchableOpacity
                style={styles.cityListItem}
                key={item.id}
                activeOpacity={1}
                onPress={() =>
                  this.gotoHome({
                    id: Number.parseInt(item.id),
                    logoUrl: item.logoUrl,
                  })
                }
              >
                <Text>{item.name}</Text>
                <Image
                  style={[styles.select]}
                  source={require('../images/checked.png')}
                />
              </TouchableOpacity>
            ))}
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

export default CityList
