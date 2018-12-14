import React from 'react'

import { map } from 'lodash'

import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

import colleges from './college-data.json'


class Colleges extends React.Component {
  render () {
    return (
      <List>
        {map(colleges, (val, key) => (
          <List.Item
            key={key}
            as={Link}
            to={`/college/${key}`}>
            {val.name}
          </List.Item>
        ))}
      </List>
    )
  }
}

export default Colleges;
