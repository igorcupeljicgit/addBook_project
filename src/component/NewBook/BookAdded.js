import React from "react";
import { Link } from "react-router-dom";

import Correct  from "../../images/ok.jpg"

const BookAdded = () => {
  return (
    <>
    <div >
      
      <div className=" d-flex flex-column  justify-content-center col-6 offset-4">
           <img  style={{width: "300px",height:"300px"}} src={Correct} alt="correct"/>
      <h3 className="col-6">Book Added Succsesfully</h3>


      <Link to="/" className="next-button">
        <button type="button" className="btn btn-secondary btn-lg col-6">
          ADD ONE MORE BOOK
        </button>
      </Link> 

      </div>
    </div>
    </>
  );
};
export default BookAdded