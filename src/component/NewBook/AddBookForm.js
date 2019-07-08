import React from "react";

import { StepNavigation } from "../StepNavigation";

import "../../Style/main.css";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      isbn: "",
      publisher: "",
      date: "",
      format: "",
      numberofpages: "",
      edition: "",
      editionlanguage: "",
      description: "",
      inputError: "",
      genreId:this.props.location.state.genreId
     

    };
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  validate = () => {
    const {
      title,
      author,
      isbn,
      publisher,
      date,
      format,
      numberofpages,
      edition,
      editionlanguage,
      description
    } = this.state;

    return (
      title &&
      author &&
      isbn &&
      publisher &&
      date &&
      format &&
      numberofpages &&
      edition &&
      editionlanguage &&
      description
    );
  };


  handleBackClick(){
    const {genreId}=this.state;
      this.props.history.push({
        pathname: "/subgenre",
        state: {
          genreId
        }

      });
    }

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.validate()) {
      console.log("New Book",this.state);
      this.setState({
        title: "",
        author: "",
        isbn: "",
        publisher: "",
        date: "",
        format: "",
        numberofpages: "",
        edition: "",
        editionlanguage: "",
        description: "",
        inputError: ""
      });
      this.props.history.push({
        pathname: "/bookadded",
      });
    } else {
      this.setState({inputError: "PLEASE FILL IN ALL FIELDS!"});
    }
  };

  render() {
    const {
      title,
      author,
      isbn,
      publisher,
      date,
      format,
      numberofpages,
      edition,
      editionlanguage,
      description,
      inputError
    } = this.state;
    return (
      <div className="container">
        <div>
          <div className="form-group">
            <label>Book Title</label>
            <input
              type="text"
              name="title"
              value={title}
              className="form-control"
              placeholder="Title"
              onChange={({ target }) => this.setState({ title: target.value })}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={author}
              className="form-control"
              placeholder="Author"
              onChange={({ target }) => this.setState({ author: target.value })}
            />
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <input
              type="text"
              name="isbn"
              value={isbn}
              className="form-control"
              onChange={({ target }) => this.setState({ isbn: target.value })}
              placeholder="ISBN"
            />
          </div>
          <div className="form-group">
            <label>Publisher</label>
            <select
              className="form-control"
              name="publisher"
              value={publisher}
              onChange={({ target }) =>
                this.setState({ publisher: target.value })
              }
            >
              <option>{""}</option>
              <option>X</option>
              <option>Y</option>
              <option>Z</option>
              <option>Disney</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date published</label>
            <input
              type="date"
              value={date}
              name="date"
              onChange={({ target }) => this.setState({ date: target.value })}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Number of Pages</label>
            <input
              type="number"
              name="numberofpages"
              value={numberofpages}
              className="form-control"
              placeholder="Number of Pages"
              onChange={({ target }) =>
                this.setState({ numberofpages: target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Format</label>
            <select
              className="form-control"
              name="format"
              value={format}
              onChange={({ target }) => this.setState({ format: target.value })}
            >
              <option>{""}</option>
              <option>A4</option>
              <option>A3</option>
              <option>Roman</option>
              <option>A5</option>
            </select>
          </div>
          <div className="form-group d-flex justify-content-start ">
            <label>Edition </label>
            <input
              type="text"
              name="edition"
              value={edition}
              onChange={({ target }) =>
                this.setState({ edition: target.value })
              }
              className="form-control col-5"
            />
            <label>Edition Language</label>
            <select
              className="form-control col-5"
              name="editionlanguage"
              value={editionlanguage}
              onChange={({ target }) =>
                this.setState({ editionlanguage: target.value })
              }
            >
              <option>{""}</option>
              <option>English</option>
              <option>Russian</option>
              <option>Serbian</option>
              <option>Bulgarian</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              onChange={({ target }) =>
                this.setState({ description: target.value })
              }
            />
          </div>
          <div className="allert">{inputError}</div>
        </div>
        <StepNavigation
          nextStepTitle="ADD"
          handleBackClick={this.handleBackClick}
          handleNextClick={this.handleSubmit}
        />
      </div>
    );
  }
}
export default AddBook;
