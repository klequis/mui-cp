import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import withRoot from 'ui/withRoot'
import { red } from 'logger'

// User
import App from './App'

class AppContainer extends React.Component {

  render() {
    return (
      <App />
    )
  }
}

export default compose(
  withRoot,
)(AppContainer)
