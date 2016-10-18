import React from 'react'

import {Column, Row} from 'react-foundation'

import AboutMe from './components/AboutMe'

const styles={
  container: {
    margin: 15,
  },
  about: {
    border: '1px Solid black',
    margin: 'auto',
    maxHeight: 800,
    maxWidth: 1000,
    minHeight: 800,
    minWidth: 100,
  }
}

const Home = () => (
  <section style={styles.container}>

    <Row>
      <Column small={12} centeronSmall>
        <div style={styles.about}>
          <AboutMe />
        </div>

      </Column>
    </Row>
  </section>
)

export default Home
