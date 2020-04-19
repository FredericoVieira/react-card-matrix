import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";

import "./styles.scss";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(true)

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className="card card-front" onClick={handleClick}>
        FRONT
      </div>

      <div className="card card-back" onClick={handleClick}>
        BACK
      </div>
    </ReactCardFlip> 
  );
};

export default Card;
