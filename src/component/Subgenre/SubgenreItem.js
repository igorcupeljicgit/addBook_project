import React from "react";

import "../../Style/main.css";

function SubgenreItem({subgenre, handleSubgenreSelect}) {
  const {id, name} = subgenre;
    return (
      <button
        type="button"
        className="btndiv col-3"
        onClick={()=>handleSubgenreSelect(id)}
      >
        {name}
      </button>
    );
}

export default SubgenreItem;
