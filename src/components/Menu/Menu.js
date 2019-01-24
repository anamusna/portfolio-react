import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Menu.css'

export default class Menu extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeMenu = () => {
    if (this.props.width < 766) {
      this.toggle()
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" className="border-bottom">
          <NavbarBrand onClick={() => this.props.changeMenu(this.props.menuBar[0].endPoint)}>{this.props.nickname}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              {this.props.menuBar.map(menu => (
                <NavItem key={menu.endPoint} onClick={this.closeMenu}>
                  <NavLink onClick={() => this.props.changeMenu(menu.endPoint)} style={{ color: "tomato" }}>
                    <i className={menu.faIcon}></i> {menu.endPoint}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
