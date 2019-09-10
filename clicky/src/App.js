import React, { Component } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/wrapper";
import artists from "./artists.json";
import "./App.css";

class App extends Component {
  state = {
    artists,
    guesses: [],
    scores: 0,
    highScore: 0,
    result: ""
  };
  // shuffle cards when clicked
  shuffleCard = id => {
    let guesses = this.state.guesses;

    if (guesses.includes(id)) {
      this.setState({
        guesses: [],
        scores: 0,
        result: "Sorry, you have lost!"
      });
      return;
    } else {
      guesses.push(id);

      if (guesses.length === 12) {
        this.setState({ score: 12, result: "Success! You won!", guesses: [] });
        console.log("winner!");
        return;
      }
      this.setState({ artists, guesses, scores: guesses.length, result: " " });


      // Shuffle artist cards
      for (let a = artists.length - 1; a > 0; a--) {
        let i = Math.floor(Math.random() * (i + 1));
        [artists[a], artists[i]] = [artists[a], artists[i]];
      }
    }
  };
  render() {
    return (
      <Wrapper>
        <Header score={this.state.scores} highScore={this.state.highScore}>
          Music Artists Click Game
        </Header>
        {this.state.artists.map(artists => (
          <Card
            id={artists.id}
            key={artists.id}
            name={artists.name}
            image={artists.image}
            shuffleCard={this.shuffleCard}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
