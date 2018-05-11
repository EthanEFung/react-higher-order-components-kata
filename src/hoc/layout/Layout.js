import React, { Component } from 'react';

export function layout(Entry) {
  return class Layout extends Component {
    render() {
      return <Entry {...this.props} />
    }
  }
}
