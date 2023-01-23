import React from "react";
import Cards from "./components/Cards";
import seriesData from "./components/SData";
import Heading from "./components/Heading";

{/* function SeriesCard(val){
  return(
    <Cards
      imgSrc = {val.imgSrc}
      ottPf = {val.ottPf}
      seriesName = {val.seriesName}
      imdb = {val.imdb}
      srcLink = {val.srcLink}
    />
  )
} */}

function App() {
  return (
    <>
    <Heading />
      {seriesData.map((val)=> {
        return(
          <Cards
            key = {val.id}
            imgSrc = {val.imgSrc}
            ottPf = {val.ottPf}
            seriesName = {val.seriesName}
            imdb = {val.imdb}
            srcLink = {val.srcLink}
          />
        );
      })
    }
    </>
  )
}

export default App;
