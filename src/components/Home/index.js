import React from 'react'

import {Column, Row} from 'react-foundation'

import AboutMe from './components/AboutMe'

const styles={
  about: {
    margin: 'auto',
  }
}

const Home = () => (
  <section>

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
