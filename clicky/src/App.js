import React, { Component} from 'react';
import artists from "./artists.json";
import Card from "./components/card";
import Wrapper from "./components/Wrapper";

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

    if(guesses.includes(id)){
      this.setState({ guesses: [], scores: 0, result: "Sorry, you have lost!" });
      return;
    }else{
      guesses.push(id);

      if(guesses.length === 12) {
        this.setState({score: 12, result: "Success! You won!", guesses:[]});
        console.log("winner!");
        return;
      }
      this.setState({artists, guesses, scores: guesses.length, result: " "});

      for (let a = artists.length - 1; a > 0; a--) {
        let i = Math.floor(Math.random() * (i + 1));
        [artists[a], artists[i]] = [artists[a], artists[i]];
      }
    }
  }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Clicky Game</h1>
            <p className="App-intro">
              Try not to click the same image twice!
            </p>
          </header>
          <Score total={this.state.scores}
          guesses={12}
          result={this.state.result} 
          />
          <Card 
          id={artists.id}
          key={artists.id}
          name={artists.name}
          image={artists.image}
          shuffleCard={this.shuffleCard}
          />
          
        </div>
      )
    }
  }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
