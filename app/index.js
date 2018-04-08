import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import { NavigationActions, Storage } from './utils'
import Router, { routerMiddleware } from './router'

import appModel from './models/app'
import routerModel from './models/router'

console.ignoredYellowBox = [
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
]

const app = dva({
  initialState: {},
  models: [appModel, routerModel],
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

Storage.get('login').then(data => {
  if (!data) {
    Storage.get('username').then(elm => {
      if (!elm) {
        App().props.store.dispatch(
          NavigationActions.navigate({ routeName: 'ModifyAccount' })
        )
      } else {
        App().props.store.dispatch(
          NavigationActions.navigate({ routeName: 'Login' })
        )
      }
    })
  }
})

AppRegistry.registerComponent('DvaStarter', () => App)

export default App
