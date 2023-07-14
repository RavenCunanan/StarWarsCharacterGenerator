import './App.css';
import React from 'react';




class StarWars extends React.Component{

  constructor(){
    super()
    this.state={
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }

  getNewCharacter(){
    const randomNumber =Math.round(Math.random()*88)
    const url =`https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json` 
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          imageUrl: data.image,
          loadedCharacter: true,
        })
      })  
  }

  render(){

    

    return(
      <div>
        <h1>Random Star Wars Character Generator &nbsp;&nbsp;</h1>
        {
          this.state.loadedCharacter && // if chararacter is loaded
          <div>
            <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} m</p>
            <p> Homeworld: {this.state.homeworld}</p>
          </div>
        }
       
        <button type="button"
         onClick={() =>this.getNewCharacter()}
          className="btn">Randomize Character </button>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <small> By Raven Cunanan</small>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StarWars />
      </header>
    </div>
  );
}

export default App;
