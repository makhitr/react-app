import React from "react";
import './card.css';

function Card() {
  return (


    <div className="card-wrapper">
      <img className="card-img" src="./Harry_Potter_and_the_Prisoner_of_Azkaban.jpg" />
      <div className="info-wrapper">
        <div className="card-name">
          <p>Harry Potter and the Prisoner of Azkaban</p></div>
        <div className="card-author">
          <p className="author"> J. K. Rowling</p></div>
        <div>rating</div>
        <div>price</div>
        <div className="card-price">
          <p className="price"> 180USD</p></div>
        {/* <div>age</div> */}
        <div>format</div>
      </div>
    </div>


  )
};

export default Card;