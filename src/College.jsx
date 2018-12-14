import React from 'react'
import PropTypes from 'prop-types'

import { get } from 'lodash'

import YouVisitTour from './YouVisitTour'
import { Header } from 'semantic-ui-react'

import colleges from './college-data.json'

class College extends React.Component {
  static propTypes = {
    iped: PropTypes.string
  }

  render () {
    const { iped } = this.props
    return (
      <React.Fragment>
        <YouVisitTour iped={iped} />
        <Header as="h1">{get(colleges[iped], 'name')}</Header>
        <p>{get(colleges[iped], 'description')}</p>
      </React.Fragment>
    )
  }
}

export default College;
