import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../Logo';

const Header = () => (
  <Row className="justify-content-md-center">
    <Col md={4} className="text-center">
      <Logo />
    </Col>
  </Row>
);

export default Header;