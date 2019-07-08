import React,{ Component } from "react";

import GenreItem  from "./GenreItem";
import { bookService } from "../../service/BookService";

class GenreList extends Component {
    constructor(props){
        super(props);
        this.state = {
            genres: []
        }
    }
    componentDidMount() {
        bookService.getBooks().then(genres => {
          this.setState({ genres});
        });
      }
    render(){
        const {genres} = this.state;
        return(
            <div className="genre-container col-12">
          {genres.map(genre => (
            <GenreItem
            genre={genre}
            key={genre.id}
            handleGenreSelect={this.props.handleGenreSelect}/>
          ))}
        </div>
        );
    }
}

export {GenreList};