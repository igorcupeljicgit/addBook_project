import React from "react";

import { GenreList } from "./GenerList";
import { StepNavigation } from "../StepNavigation";

import "../../Style/main.css";

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genreId: null,
      isSubActive: false
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
  }

  handleGenreSelect(id) {
    this.setState({ genreId: id });
  }

  handleNextClick() {
    const { genreId } = this.state;
    if (genreId) {
      this.props.history.push({
        pathname: "/subgenre",
        state: {
          genreId
        }
      });
    }
  }

  render() {
    return (
      <div className="container flex1">
        <GenreList handleGenreSelect={this.handleGenreSelect} />
        <StepNavigation
          nextStepTitle="NEXT >"
          handleBackClick={() => {}}
          handleNextClick={this.handleNextClick}
        />
      </div>
    );
  }
}
export default Genre;
