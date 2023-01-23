import React from "react";
import SerName from "./SerName";
import Images from "./Images";

function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <Images imgSrc={props.imgSrc}/>
        <div className="card-info">
          <h3 className="ott-plateform">{props.ottPf}</h3>
          <SerName seriesName={props.seriesName}/>
          <h3 className="imdb-rating">{props.imdb}</h3>
          <a href={props.srcLink} target="_blank" rel="noreferrer">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
