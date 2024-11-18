import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={person.imgSrc}
              alt="Profile"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>Time since mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
