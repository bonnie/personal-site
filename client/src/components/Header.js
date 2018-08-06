import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div data-test="component-header">
        <Navbar color="light" light expand="sm" className="bg-none">
          <NavbarBrand href="/">home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink activeClassName="active" tag={RRNavLink} to="/courses/">courses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="active" tag={RRNavLink} to="/apps/">apps</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="active" tag={RRNavLink} to="/diy/">diy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="active" tag={RRNavLink} to="/photos/">photos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}