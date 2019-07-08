import React from "react";

const StepNavigation = ({
  nextStepTitle,
  handleBackClick,
  handleNextClick
}) => {
  return (
    
          <div className="container">
      <div className="col-12 d-flex flex-row justify-content-end ">
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={handleBackClick}
        >
         {`< BACK` }
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={handleNextClick}
        >
          {nextStepTitle}
        </button>
      </div>
    </div>


  );
};

export { StepNavigation };
