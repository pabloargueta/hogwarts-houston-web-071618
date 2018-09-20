import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';
// import * as Image from '../hog-imgs/';

export default class HogCard extends Component {

  constructor() {
    super()

    this.state = {
      showDetails: false
    }
  }

  handleClick = () => {
    console.log('i was clicked')
    this.setState({
      showDetails: !this.state.showDetails
    })
  }


  render() {
    return (
      <div className="ui eight wide column" onClick={this.handleClick}>

        {this.state.showDetails ? (< CardBack {...this.props} />) : (< CardFront {...this.props} />)}


      </ div>
    )
  }

}