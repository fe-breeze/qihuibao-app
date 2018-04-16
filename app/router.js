import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation'
import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Loading from './containers/Loading'
import Login from './containers/Login'
import ModifyAccount from './containers/ModifyAccount'
import Home from './containers/Home'
import Account from './containers/Account'
import Invest from './containers/Invest'
import Detail from './containers/Detail'
import ModifyPwd from './containers/ModifyPwd'
import VLogin from './containers/VLogin'
import About from './containers/About'
import Setting from './containers/Setting'
import MyInvest from './containers/MyInvest'
import CapitalDetails from './containers/CapitalDetails'
import Withdrawal from './containers/Withdrawal'
import ModifyPwdStatus from './containers/ModifyPwdStatus'
import ReLogin from './containers/ReLogin'
import CashResult from './containers/CashResult'
import CoinPurse from './containers/CoinPurse'
import PurseOut from './containers/PurseOut'
import PurseIn from './containers/PurseIn'
import PurseOutStatus from './containers/PurseOutStatus'
import PurseInStatus from './containers/PurseInStatus'
import CashDetail from './containers/CashDetail'
import CityList from './containers/CityList'
import InvestDetail from './containers/InvestDetail'
import ProjectIntro from './containers/ProjectIntro'

const HomeNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Invest: { screen: Invest },
    Account: { screen: Account },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false,
  }
)

const MainNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    CityList: { screen: CityList },
    Detail: { screen: Detail },
    ModifyPwd: { screen: ModifyPwd },
    MyInvest: { screen: MyInvest },
    CapitalDetails: { screen: CapitalDetails },
    Withdrawal: { screen: Withdrawal },
    ModifyPwdStatus: { screen: ModifyPwdStatus },
    CashResult: { screen: CashResult },
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0,
      },
    },
  }
)
const ContentNavigator = StackNavigator(
  {
    // HomeNavigator: { screen: HomeNavigator },
    ProjectIntro: { screen: ProjectIntro },
    InvestDetail: { screen: InvestDetail },
    About: { screen: About },
    Setting: { screen: Setting },
    CoinPurse: { screen: CoinPurse },
    PurseOut: { screen: PurseOut },
    PurseIn: { screen: PurseIn },
    PurseInStatus: { screen: PurseInStatus },
    PurseOutStatus: { screen: PurseOutStatus },
    CashDetail: { screen: CashDetail },
    // MyInvest: { screen: MyInvest },
    // CapitalDetails: { screen: CapitalDetails },
    // Withdrawal: { screen: Withdrawal },
    // ModifyPwdStatus: { screen: ModifyPwdStatus },
    ReLogin: { screen: ReLogin },
    // CashResult: { screen: CashResult },
    // CoinPurse: { screen: CoinPurse },
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#36b1ff',
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
    },
  }
)

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
    Content: { screen: ContentNavigator },
    VLogin: { screen: VLogin },
    ModifyAccount: { screen: ModifyAccount },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)
const addListener = createReduxBoundAddListener('root')

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentDidMount() {
    initializeListeners('root', this.props.router)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, app, router } = this.props
    if (app.loading) return <Loading />

    const navigation = addNavigationHelpers({
      dispatch,
      state: router,
      addListener,
    })
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

export default Router
