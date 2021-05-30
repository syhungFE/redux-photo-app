import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <NavLink
              exact
              className="header__link header__title"
              to="/"
              activeClassName="header__link--active"
            >
              Photo App 
            </NavLink>
          </Col>

          <Col xs="auto">
            {/* <NavLink
              exact
              className="header__link mr-3"
              to="/sign-in"
              activeClassName="header__link--active"
            >
              Sign In 
            </NavLink> */}
            <NavLink
              exact
              className="header__link mr-3"
              to="/photos/add"
              activeClassName="header__link--active"
            >
              Add New Photo
            </NavLink>
            {/* <NavLink
              exact
              className="header__link"
              to="/todos"
              activeClassName="header__link--active"
            >
              Add To Do
            </NavLink> */}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;