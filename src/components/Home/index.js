import React from 'react'

import {Column, Row} from 'react-foundation'

import AboutMe from './components/AboutMe'

const styles={

}

const Home = () => (
  <section>

    <Row>
      <Column small={12}>
        <AboutMe />
      </Column>
    </Row>
  </section>
)

export default Home
