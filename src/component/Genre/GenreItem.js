import React from "react";

import "../../Style/main.css"

function GenreItem({genre, handleGenreSelect}) {
  const {id, name} = genre;
 
  return (
  <button onClick={()=>{handleGenreSelect(id)}} type="button" id={id} className="btndiv col-3" >{name}</button>
  )
}
export default GenreItem;
