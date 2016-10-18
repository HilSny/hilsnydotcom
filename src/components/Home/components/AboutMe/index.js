import React from 'react'

import {Column, Row, Progress} from 'react-foundation'
import FontAwesome from 'react-fontawesome'

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
    padding: 20,
        textAlign: 'center',
  },

  icons: {
    margin: 'auto',
    maxWidth: 800,
    textAlign: 'center',
  },

  title: {
    fontSize: 60,
    paddingTop: 100,
    textAlign: 'center',
    marginTop: 0,
  },
}

const AboutMe = () => (
  <div style={styles.aboutme}>
    <Row>
      <Column small={12} centerOnSmall>
        <h1 style={styles.title}>Hillary Snyder</h1>
      </Column>
    </Row>
    <Row>
      <Column small={12}>
        <p style={styles.about}> A developer in the Chicago area who is interested in reactJS, women in tech, coffee, and running.</p>
      </Column>
    </Row>

    <div style={styles.icons}>
      <Row>
        <Column small={4}>
          <FontAwesome name="github" size="3x" />
        </Column>
        <Column small={4}>
          <FontAwesome name="twitter" size="3x"/>
        </Column>
        <Column small={4}>
          <FontAwesome name="linkedin" size="3x"/>
        </Column>
      </Row>
    </div>
  </div>
)

export default AboutMe
