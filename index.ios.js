import React from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { AppRegistry } from 'react-native'

import configureStore from './app/store/configureStore'
const store = configureStore()

import NavigationRootContainer from './app/containers/navRootContainer'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <ScrollableTabView>
      <NavigationRootContainer tabLabel="1"/>
      <NavigationRootContainer tabLabel="2"/>
      <NavigationRootContainer tabLabel="3"/>
    </ScrollableTabView>
  </Provider>
)
AppRegistry.registerComponent('RNExperimentalRedux', () => App)
