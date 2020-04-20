import React from "react";
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";
import { flipCard } from "../../actions/cards";

import "./styles.scss";
import { handleCardImage } from "../../utils";

const Card = ({ id, isFlipped, flipCardClicked }) => {
  const handleClick = (e) => {
    e.preventDefault();
    flipCardClicked(id)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} className="card-wrapper">
      <div className="card card-front" onClick={handleClick}>
        <img src={handleCardImage(id)} alt={`card-${id}`} className="card-image" />
      </div>

      <div className="card card-back" onClick={handleClick}>
        <img src={handleCardImage()} alt="card-back" className="card-image" />
      </div>
    </ReactCardFlip> 
  );
};

const mapDispatchToProps = dispatch => {
  return {
    flipCardClicked: id => dispatch(flipCard(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
