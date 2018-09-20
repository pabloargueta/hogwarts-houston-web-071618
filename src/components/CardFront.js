import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {

    return (
      <div className="ui card">
        <div className="image">
          <img src={require('../hog-imgs/' + this.props.name.replace(/\s+/g, '_').toLowerCase() + '.jpg')} alt='' />
        </div>
        <div className="content">
          <h3 className="header">{this.props.name}</h3>
        </div>
      </div>
    )
  }
}