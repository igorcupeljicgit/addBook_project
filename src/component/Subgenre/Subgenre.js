import React from "react";

import { SubgenreList } from "./SubgenreList";
import { StepNavigation } from "../StepNavigation";
import { bookService } from "../../service/BookService";

import "../../Style/main.css";

class Subgenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: null,
      subgenreId: null,
      genreId: this.props.location.state.genreId
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSubgenreSelect = this.handleSubgenreSelect.bind(this);
  }

  handleSubgenreSelect(id) {
    this.setState({ subgenreId: id });
  }

  handleBackClick() {
    this.props.history.push("/");
  }

  handleNextClick() {
    const { subgenreId, genreId } = this.state;
    if (subgenreId === 0) {
      this.props.history.push({
        pathname: "/newsubgenre",
        state: {
          genreId,
          subgenreId
        }
      });
    }
    if (subgenreId > 0) {
      this.props.history.push({
        pathname: "/information",
        state: {
          genreId,
          subgenreId
        }
      });
    }
  }

  componentDidMount() {
    bookService.getBooks().then(genres => {
      const filteredGenre = genres.filter(
        element => element.id===parseInt( this.state.genreId)
      );
      this.setState({ genre: filteredGenre[0] });
    });
  }

  render() {
    const { genre } = this.state;
    return genre ? (
      <div className="container flex1">
        <div className="genre-container col-12">
          <SubgenreList
            genre={genre}
            handleSubgenreSelect={this.handleSubgenreSelect}
          />
        </div>
        <StepNavigation
          nextStepTitle="NEXT >"
          handleBackClick={this.handleBackClick}
          handleNextClick={this.handleNextClick}
        />
      </div>
    ) : (
      <p>Loaind..</p>
    );
  }
}

export default Subgenre;
