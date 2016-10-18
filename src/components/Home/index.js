import React from 'react'

import {Column, Row} from 'react-foundation'

import AboutMe from './components/AboutMe'

import './styles/font-awesome/css/font-awesome.min.css'
import 'foundation-sites/dist/foundation.min.css'


const styles={
  about: {
    margin: 'auto',
  }

}

const Home = () => (
  <div>
    <Row isExpanded>
      <Column small={12} >
        <div style={styles.about}>
          <AboutMe />
        </div>
      </Column>
    </Row>
  </div>
)

export default Home
