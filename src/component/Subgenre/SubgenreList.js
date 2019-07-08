import React from "react";

import SubgenreItem  from "./SubgenreItem";

const SubgenreList = ({genre, handleSubgenreSelect})=> {
        const {subgenres} = genre;
        return(
            <div className="genre-container col-12">
          {subgenres.map(subgenre => (
            <SubgenreItem
            key={subgenre.id}
             subgenre={subgenre}
             handleSubgenreSelect={handleSubgenreSelect} />
          ))}
          <button onClick={()=>handleSubgenreSelect(0)} type="button" className="btndiv col-3" value="newsub">Add New</button>
        </div>
        );
}

export {SubgenreList};