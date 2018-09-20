import React, { Component } from 'react';

export default class CardBack extends Component {

  render() {


    return (
      <div className="ui card">
        <div className="content">
          <h3 className="header">{this.props.name}</h3>
        </div>
        <div className="content">
          <h5 className="ui sub header">Specialty: {this.props.specialty}</h5>
          <p>{this.props.greased}</p>
          <p>Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} **</p>
          <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
        </div>
      </div>
    )
  }
}