import React from "react"

class Item extends React.Component{


    constructor(props){
      super(props)

      this.state={
        clicks:0,
        totalReamaining:100
      }
    }

    clickMe(){
      console.log("I was clicked",this.props.name)
      this.setState({
        clicks: this.state.clicks +1,
        totalReamaining: this.state.totalReamaining-1
      })
    }


    render(){
      return(
        <div>
        <button onClick={() => this.clickMe()}>Hello from {this.props.name} </button>
        <span>{this.state.clicks} is how many times was clicked </span>
        <span>{this.state.totalReamaining} is how many times is left </span>
        </div>
      )
    }
  }

  export default Item;