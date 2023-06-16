import React, { Component } from 'react'
import style from "./style.module.scss";
export default class Caption extends Component {
  render() {
    const {caption,name} = this.props
    return (<>  <p className={style.caprion}><p className={style.header}>{name}</p>{caption} </p></>
    
    )
  }
}
