import React from 'react'
import Drawer from 'react-native-drawer'
import { AppRegistry } from 'react-native'

import configureStore from './app/store/configureStore'
const store = configureStore()

import NavigationRootContainer from './app/containers/navRootContainer'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <Drawer
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      open={false} // set to true to open
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
    >
      <NavigationRootContainer />
    </Drawer>
  </Provider>
)
AppRegistry.registerComponent('StoryTime', () => App)
