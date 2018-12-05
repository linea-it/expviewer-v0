import React, { Component } from 'react';
import { Navbar, Alignment, Button} from '@blueprintjs/core'

class Header extends Component {
    state = {
        binSize: 2,
    }
  render() {
    return <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>LSST Survey Progress</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <span>Resolution factor:</span>
            <Navbar.Divider />
          <select value={this.props.binSize} onChange={this.props.changeBinSize}>
            {[2, 4, 8, 16, 32, 64].map(op => {
              return <option key={op} value={op}>{op}</option>;
            })}
          </select>
        </Navbar.Group>
      </Navbar>;
  }
}

export default Header;