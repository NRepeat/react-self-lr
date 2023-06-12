import React, { Component } from "react";

export default class SliderImage extends Component {
  render() {
    const { ...restProp } = this.props;
    const {alt} = restProp
    return <img alt={alt}{...restProp} />;
  }
}
