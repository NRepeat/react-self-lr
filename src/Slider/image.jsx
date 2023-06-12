import React, { Component } from "react";
export default class SliderImage extends Component {
  render() {
    const { caption, alt, ...restProp } = this.props;
    return <><img alt={alt} {...restProp} /></>;
  }
}
