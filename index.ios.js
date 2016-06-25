import React from 'react'
import { AppRegistry } from 'react-native'
import SideMenu from 'react-native-side-menu'

import configureStore from './app/store/configureStore'
const store = configureStore()

import NavigationRootContainer from './app/containers/navRootContainer'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <SideMenu>
      <NavigationRootContainer />
    </SideMenu>
  </Provider>
)
AppRegistry.registerComponent('RNExperimentalRedux', () => App)
