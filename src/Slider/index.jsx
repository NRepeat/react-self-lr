import React, { Component } from "react";
import style from "./style.module.scss";

const imgData = [
  {
    id: 0,
    img: "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn2400",
    alt: "hubble",
  },
  {
    id: 1,
    img: "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn2400",
    alt: "hubble",
  },
  {
    id: 2,
    img: "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn2400",
    alt: "hubble",
  },
];

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: imgData,
      dedImg: null,
      counter: 0,
      showAnimation: false,
      delay: 1000,
    };
  }

  componentDidMount() {
    this.intervalImg();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  counterClickNext = () => {
    if (this.state.counter >= this.state.data.length - 1) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  };

  counterClickBack = () => {
    if (this.state.counter <= 0) {
      this.setState({
        counter: this.state.data.length - 1,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  showImgNext = () => {
    this.counterClickNext();
    const { data } = this.state;
    const { counter } = this.state;
    const img = data[counter];
    this.setState({
      dedImg: (
        <img
          className={`${style.imgWrapper} ${
            this.state.showAnimation ? style.showAnimation : ""
          }`}
          key={img.id}
          src={img.img}
          alt={img.alt}
          onAnimationEnd={this.handleAnimationEnd}
        />
      ),
    });
  };

  intervalImg = () => {
    const { delay } = this.state;
    this.slideShow = setInterval(this.showImgNext, delay);
  };

  stopSlideshow = () => {
    clearInterval(this.slideShow);
  };

  showImgBack = () => {
    this.counterClickBack();
    const { data } = this.state;
    const { counter } = this.state;
    const img = data[counter];
    this.setState({
      dedImg: (
        <img
          className={`${style.imgWrapper} ${
            this.state.showAnimation ? style.showAnimation : ""
          }`}
          key={img.id}
          src={img.img}
          alt={img.alt}
          onAnimationEnd={this.handleAnimationEnd}
        />
      ),
    });
  };

  handleAnimationEnd = () => {
    this.setState({ showAnimation: false });
  };

  handleClickNext = () => {
    this.setState({ showAnimation: true });
    this.showImgNext();
  };

  handleClickBack = () => {
    this.setState({ showAnimation: true });
    this.showImgBack();
  };

  handleDelayChange = (e) => {
    this.setState({ delay: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.stopSlideshow();
    this.intervalImg();
  };

  render() {
    const { dedImg, delay } = this.state;
    return (
      <div>
        {dedImg}
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="number"
              value={delay}
              onChange={this.handleDelayChange}
            />
            <button type="submit">Set Delay</button>
            
          </form>
          <button onClick={this.stopSlideshow} >Stop slide show</button>
          <button onClick={this.handleClickBack}>Назад</button>
          <button onClick={this.handleClickNext}>Вперед</button>
        </div>
      </div>
    );
  }
}
