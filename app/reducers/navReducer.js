import { PUSH_ROUTE, POP_ROUTE } from '../constants/ActionTypes'
import { NavigationExperimental } from 'react-native'
const {
 StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'root',
  routes: [
    {
      key: 'home',
      title: 'Welcome Home'
    }
  ]
}

function navigationState (state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      console.log('state: ', state)
      console.log('action: ', action)
      debugger
      // keeps on same page
      if (state.routes[state.index].key === (action.route && action.route.key)) return state

      // one of these should work, hopefully the second
      // const arrayOfMatchesgs = state.routes.filter(function(route, index){if (route.key === state.routes[state.index].key) return index})
      const indexOfMatch = state.routes.map((e) => { return e.key; }).indexOf(action.route.key);

      // remove all other routes that happened after desired route
      if (indexOfMatch > -1) state.routes.length = indexOfMatch

      return NavigationStateUtils.push(state, action.route)

    case POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)

    default:
      return state
  }
}

// You can also manually create your reducer::
// export default (state = initialState, action) => {
//   const {
//     index,
//     routes
//   } = state
//   console.log('action: ', action)
//   switch (action.type) {
//     case PUSH_ROUTE:
//       return {
//         ...state,
//         routes: [
//           ...routes,
//           action.route
//         ],
//         index: index + 1
//       }
//     case POP_ROUTE:
//       return index > 0 ? {
//         ...state,
//         routes: routes.slice(0, routes.length - 1),
//         index: index - 1
//       } : state
//     default:
//       return state
//   }
// }

export default navigationState
