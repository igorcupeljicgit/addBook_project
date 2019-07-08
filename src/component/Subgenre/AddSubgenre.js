import React from "react";

import { StepNavigation } from "../StepNavigation";

import "../../Style/main.css";

class AddSubgenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      isRequired: false,
      genreId: this.props.location.state.genreId,
      subgenreId: this.props.location.state.subgenreId
    };
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleBackClick() {
    this.props.history.push("/subgenre");
  }

  handleNextClick() {
    const { genreId, subgenreId } = this.state;
    this.props.history.push({
      pathname: "/information",
      state: {
        genreId,
        subgenreId
      }
    });
  }

  render() {
    const { name, description, isRequired } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row col-12">
            <input
              type="text"
              value={name}
              placeholder="Subgenre name"
              className="form-control col-12"
              onChange={({ target }) => this.setState({ name: target.value })}
            />
            <textarea
              value={description}
              className="form-control col-12"
              id="exampleFormControlTextarea1"
              placeholder="Type the description"
              onChange={({ target }) =>
                this.setState({ description: target.value })
              }
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              defaultChecked={isRequired}
              onChange={() => this.setState({ isRequired: !isRequired })}
            />
            <label>Description is required for this subgenre</label>
          </div>
        </div>
        <StepNavigation
          nextStepTitle="NEXT >"
          handleBackClick={this.handleBackClick}
          handleNextClick={this.handleNextClick}
        />
      </React.Fragment>
    );
  }
}
export default AddSubgenre;
