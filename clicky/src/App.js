import React, { Component } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/wrapper";
import artists from "./artists.json";
import "./App.css";

function randomizer(array) {
  for (let a = array.length - 1; a > 0; a--) {
    let i = Math.floor(Math.random() * (a + 1));
    [array[a], array[i]] = [array[i], array[a]];
  }
  return array;
}

class App extends Component {
  state = {
    artists,
    guesses: [],
    currScore: 0,
    highScore: 0,
    result: ""
  };

  clickHandler = id => {
    if (this.state.guesses.indexOf(id) === -1) {
      this.hIncrement();
      this.setState({ guesses: this.state.guesses.concat(id) });
    } else {
      this.handleReset();
    }
  };

  hIncrement = () => {
    const scorNew = this.state.currScore + 1;
    this.setState({
      currScore: scorNew,
      result: "Correcto Mundo"
    });
    if (scorNew >= this.state.highScore) {
      this.setState({ highScore: scorNew });
    } else if (scorNew === 12) {
      this.setState({ result: "Success! You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currScore: 0,
      highScore: this.state.highScore,
      result: "Sorry, you got it wrong!",
      guesses: []
    });

    this.handleShuffle();
  };

  handleShuffle = () => {
    let mixUp = randomizer(artists);
    this.setState({ artists: mixUp });
  };

  render() {
    return (
      <Wrapper>
        <Header
          currScore={this.state.currScore}
          highScore={this.state.highScore}
          result={this.state.result}
        >
          Music Artists Click Game
        </Header>
        {this.state.artists.map(artists => (
          <Card
            id={artists.id}
            key={artists.id}
            name={artists.name}
            image={artists.image}
            clickHandler={this.clickHandler}
            hIncrement={this.hIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
