import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}

// CardFront
//
// the prop should be used to apply a background image. This can be done inline via:
// style={{backgroundImage: `url(${prop})`}}
