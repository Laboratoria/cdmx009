import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Filter from './components/Filter';
import Content from './components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Header />
      <Filter />
      <Content />
    </Container>
  );
}

export default App;
