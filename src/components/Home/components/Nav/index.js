import React from 'react'

import {Column, Menu, MenuItem, Row} from 'react-foundation'

const styles={
  nav: {
    height: 200,
    fontSize: 30,
  }
}



const Nav = () => (
  <div style ={styles.nav}>
    <Menu>
      <MenuItem><a>Oness</a></MenuItem>
      <MenuItem><a>Two</a></MenuItem>
      <MenuItem><a>Three</a></MenuItem>
      <MenuItem><a>Four</a></MenuItem>
    </Menu>
  </div>
)

export default Nav
