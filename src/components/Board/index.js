import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { connect } from "react-redux";

import "./styles.scss";

import Card from "../Card/";

const Board = ({ cards }) => {
  return (
    <>
      <p className="title">React Card Matrix</p>
      <Container>
        <Row className="row">
        {cards.map(card =>
          <Col key={card.id} sm={3} className="col">
            <Card id={card.id} isFlipped={card.isFlipped} />
          </Col>
        )}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps, null)(Board);
