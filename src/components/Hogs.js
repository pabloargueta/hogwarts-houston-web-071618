import React, { Component } from 'react';
import HogCard from './HogCard.js'

export default class Hogs extends Component {

  generateHogCards = () => {
    return this.props.hogs.map((hog, index) => {
      return (<HogCard key={index} {...hog} />)
    })
  }

  render() {
    return (
      <div id="hogs" className="ui grid container">{this.generateHogCards()}</div>

    )
  }


}