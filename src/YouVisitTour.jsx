import React from 'react'
import PropTypes from 'prop-types'

import scriptjs from 'scriptjs'

const showMeIssue2 = false

class YouVisitTour extends React.Component {
  static propTypes = {
    iped: PropTypes.string
  }
  scan() {
    scriptjs('https://www.youvisit.com/tour/Embed/js2.js', () => {
      const yvObj = window.YVScript
      console.log('issue #1 : YVScript', yvObj);
      yvObj && yvObj.scanEmbeds()
    })
  }
  componentDidMount() {
    this.scan()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.iped !== this.props.iped) {
      this.scan()
    }
  }
  render() {
    if (showMeIssue2) {
      return <a href='http://www.youvisit.com' className='virtualtour_embed'
        title='Virtual Reality, Virtual Tour'
        data-remove-prompts='1'
        data-remove-registration='1'
        data-link-type='immersive'
        data-iped={this.props.iped}
        data-image-width='100%'
        data-image-height='100%'
        data-platform='scoir'>Virtual Tour</a>
    }
    return <div dangerouslySetInnerHTML={{
        __html: `<a href='http://www.youvisit.com' class='virtualtour_embed'
            title='Virtual Reality, Virtual Tour'
            data-remove-prompts='1'
            data-remove-registration='1'
            data-link-type='immersive'
            data-iped='${this.props.iped}'
            data-image-width='100%'
            data-image-height='100%'
            data-platform='scoir'>Virtual Tour</a>`
      }} />

  }
}

export default YouVisitTour
