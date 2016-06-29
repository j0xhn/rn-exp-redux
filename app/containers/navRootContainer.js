import { connect } from 'react-redux'
import NavigationRoot from 'StoryTime/app/pages/NavRoot.js'
import { push, pop } from 'StoryTime/app/actions/navActions'
function mapStateToProps (state) {
  return {
    navigation: state.navReducer
  }
}

export default connect(
  mapStateToProps,
  {
    pushRoute: (route) => push(route),
    popRoute: () => pop()
  }
)(NavigationRoot)

// function mapDispatchToProps (dispatch) {
//   return {
//     pushRoute: (route) => dispatch(push(route)),
//     popRoute: () => dispatch(pop())
//   }
// }
