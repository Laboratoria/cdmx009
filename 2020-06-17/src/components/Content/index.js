import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import data from '../../lib/data.json';
import CharacterCard from '../CharacterCard';

const Content = () => {
  const cards = data.results.map((character) => {
    return (
      <CharacterCard key={character.id} character={character} />
    )
  });
  
  return (
    <Container fluid>
      <Row>
        {cards}
      </Row>
    </Container>
  )}
;

export default Content;