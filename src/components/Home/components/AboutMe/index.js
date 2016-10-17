import React from 'react'

import {Column, Row} from 'react-foundation'

const styles={
  aboutme: {
    maxWidth: 800,
    textAlign: 'center',

  }
}

const AboutMe = () => (
  <div style={styles.aboutme}>
    <Row>
      <Column small={12} centerOnSmall>
        <h1 >About Me</h1>
      </Column>
    </Row>
    <Row>
      <Column small={12}>
        <p className="text-center">My name is Hillary Snyder. I am a developer in the Chicago area who is interested in ReactJS, Women in Tech, Coffee, Running and Beer.</p>
      </Column>
    </Row>
  </div>
)

export default AboutMe
