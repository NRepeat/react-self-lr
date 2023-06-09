import React, { Component } from "react";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.arr,
      isRead:false
    };
  }
  highRatedReviews = (review) => review.rating > 8;
  changeRead = ()=>{
    this.setState({
        isRead:true
    })
  }
  render() {
    const { comment,isRead } =this.state
    const filter = comment.filter(this.highRatedReviews);
    const read = <p>Is readed</p>
    return (
      <div><p>Всі відгуки</p>
        {comment.map((comme) => {
          return (
            <div key={comme.id}>
              <h3>{comme.rating}</h3>
              <p>{comme.text}</p>
              <button onClick={this.changeRaiting}>Change</button>
              {isRead && read}
            </div>
          );
        })}
        <div>
          <p>Високий рейтинг</p>
          {filter.map((r) => {
            return (
              <div key={r.id}>
                <h3>{r.rating}</h3>
                <p>{r.text}</p>
                <button onClick={this.changeRaiting}>Change</button>
                {isRead && read}
              </div>
            );
          })}
        </div>
        
      </div>
    );
  }
}
