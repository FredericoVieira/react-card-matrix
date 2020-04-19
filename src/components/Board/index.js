import React, { useState } from "react";
import { Container, Row, Col } from 'react-grid-system';

import Card from "../Card/";

import "./styles.scss";

const Board = () => {
  const [matrixSize, setMatrixSize] = useState(3)

  return (
    <>
      <p className="title">React Card Matrix</p>
      <Container>
        {[...Array(matrixSize)].map(i =>
          <Row className="row">
            {[...Array(matrixSize)].map(i =>
              <Col sm={4}>
                <Card />
              </Col>
            )}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Board;
