import { NavigationActions } from 'react-navigation'

let _navigator = undefined

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

export default {
  navigate,
  setTopLevelNavigator
}