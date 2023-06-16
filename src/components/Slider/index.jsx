import React, { Component } from "react";
import style from "./style.module.scss";
import SliderImage from "./image";
import imgData from "./imgData";
import classNames from "classnames";
import Caption from "./caption";

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
    this.showImgNext();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  intervalImg = () => {
    const { delay } = this.state;
    this.slideShow = setInterval(this.handleClickNext, delay);
  };

  stopSlideshow = () => {
    clearInterval(this.slideShow);
  };
  showImgNext = () => {
    this.counterClickNext();
    const { data, counter } = this.state;
    const img = data[counter];
    this.setState({
      dedImg: (
        <>
          {" "}
          <SliderImage
            className={classNames(style.showAnimation, style.img)}
            onAnimationEnd={this.handleAnimationEnd}
            key={img.id}
            src={img.img}
            alt={img.alt}
          />
          <Caption caption={img.caption} name={img.name} />
        </>
      ),
    });
  };
  showImgBack = () => {
    this.counterClickBack();

    const { data, counter } = this.state;
    const img = data[counter];
    this.setState({
      dedImg: (
        <section>
          {" "}
          <SliderImage
            className={classNames([style.showAnimation], style.img)}
            onAnimationEnd={this.handleAnimationEnd}
            key={img.id}
            src={img.img}
            alt={img.alt}
          />
          <Caption caption={img.caption} name={img.name} />
        </section>
      ),
    });
  };
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
      <>
        <div className={style.sliderWrapper}>
          <div className={style.imgWrapper}>
            {dedImg}
            <button
              className={`${style.btn} ${style.left}`}
              onClick={this.handleClickBack}
            >
              Назад
            </button>
            <button
              className={`${style.btn} ${style.right}`}
              onClick={this.handleClickNext}
            >
              Вперед
            </button>
            <form onSubmit={this.handleFormSubmit}>
              <input
                type="number"
                value={delay}
                onChange={this.handleDelayChange}
              />
              <button type="submit">Set Delay</button>
            </form>

            <button onClick={this.stopSlideshow}>Stop slide show</button>
          </div>
        </div>
      </>
    );
  }
}
