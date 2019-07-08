import React from "react";
import { withRouter } from "react-router";

import "../Style/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     locationUrl:"/"
    };
    this.selectionPage = this.selectionPage.bind(this);
    this.homePage = this.homePage.bind(this);
  }
  componentDidMount() {
    this.selectionPage()
    }

  selectionPage() {
    const {locationUrl}=this.state
    if (locationUrl === "/") {
      document.querySelector(".container").classList.remove("visible");
      document.querySelector(".circle-information").classList.remove("selectedstep")
      const circle = document.querySelector(".circle-genre");
      circle.classList.add("selectedstep");
      document.querySelector(".circle-subgenre").classList.remove("selectedstep")
    }
    if (locationUrl === "/subgenre") {
      document.querySelector(".circle-genre").classList.remove("selectedstep");
      const circle2 = document.querySelector(".circle-subgenre");
      document.querySelector(".circle-information").classList.remove("selectedstep")
      circle2.classList.add("selectedstep");
    }
    if (locationUrl === "/newsubgenre") {
      document
        .querySelector(".circle-subgenre")
        .classList.remove("selectedstep");
      const circle3 = document.querySelector(".circle-addsubgenre");

      circle3.classList.add("selectedstep");
    }

    if (locationUrl === "/information") {
      document
        .querySelector(".circle-addsubgenre")
        .classList.remove("selectedstep");
      const circle3 = document.querySelector(".circle-information");
      document.querySelector(".circle-subgenre").classList.remove("selectedstep")
      circle3.classList.add("selectedstep");
    }
    if (locationUrl === "/bookadded") {
      document
        .querySelector(".circle-information")
        .classList.remove("selectedstep");
      document.querySelector(".container").classList.add("visible");
    }
  }
  

  componentDidUpdate(prevProps) {
  if(prevProps.location.pathname !== this.props.location.pathname){
    this.setState({locationUrl:this.props.location.pathname})
  }   
   this.selectionPage();

  }

  homePage() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="container">
        <h1 onClick={this.homePage}>Add Book </h1>
        <div className="steps flex-container col-12">
          <div className="genre">
            <div className="circle-genre">1</div>
            <p>Genre</p>
          </div>

          <div className="subgenre">
            <div className="circle-subgenre">2</div>
            <p>Subgenre</p>
          </div>

          <div className="addnewsubgenre">
            <div className="circle-addsubgenre">3</div>
            <p>AddNewgenre</p>
          </div>
          <div className="information">
            <div className="circle-information">4</div>
            <p>Information</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
