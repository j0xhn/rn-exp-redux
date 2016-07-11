import { createStore, applyMiddleware, compose  } from 'redux'
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  const store = devTools()(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
