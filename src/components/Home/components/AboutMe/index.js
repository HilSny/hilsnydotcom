import React from 'react'

import {Column, Row} from 'react-foundation'
import PDF from 'react-pdf'

const styles={
  about: {
    fontSize: 20,
    margin: 'auto',
    maxWidth: 700,
    paddingBottom: 40,
  },
  aboutme: {
    backgroundColor: '#252F3B',
    color: 'white',
    fontFamily: 'Helvetica',
    height: 400,

  },

  title: {
    fontSize: 40,
    paddingTop: 100,
    textAlign: 'center',
    marginTop: 0,
  },
}

const AboutMe = () => (
  <div style={styles.aboutme}>
    <Row>
      <Column small={12} centerOnSmall>
        <h1 style={styles.title} >About Me</h1>
      </Column>
    </Row>
    <Row>
      <Column small={12}>
        <p style={styles.about} className="text-center">My name is Hillary Snyder. I am a developer in the Chicago area who is interested in ReactJS, Women in Tech, Coffee, Running and Beer.</p>
      </Column>
    </Row>
  </div>
)

export default AboutMe
