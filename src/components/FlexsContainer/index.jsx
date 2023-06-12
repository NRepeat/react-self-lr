import React, { Component } from 'react';

export default class FlexContainer extends Component {
  render() {
    const style = { color: 'blue', display: 'flex' };
    const { children } = this.props;
    return (
      <div style={style}>{children}</div>
    );
  }
}