import React, { Component } from 'react';

export class Countdown extends Component {
  constructor(props) {
    super(props);
    this.counter = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      date: new Date(this.props.target).getTime()
    };
  }

  componentDidMount() {
    this.updateTime();
    this.counter = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  updateTime = () => {
    const SECOND = 1000,
        MINUTE = SECOND * 60,
        HOUR = MINUTE * 60,
        DAY = HOUR * 24;
    let now = new Date();
    let distance = this.state.date - now;

    let day = Math.floor(distance / (DAY)),
        hour = Math.floor((distance % (DAY)) / (HOUR)),
        minute = Math.floor((distance % (HOUR)) / (MINUTE)),
        second = Math.floor((distance % (MINUTE)) / SECOND);

    this.setState({
      day: day,
      hour: hour,
      minute: minute,
      second: second
    });
  }

  format = (num) => (num < 10 ? '0' : '') + num;

  render() {
    const { day, hour, minute, second } = this.state;

    return (
      <div className="countdown d-flex flex-row">
        <div className="t-container accent">
          <h1 className="val">{this.format(day)}</h1>
          <p className="label">days</p>
        </div>
        <div className="t-container">
          <h1 className="val">{this.format(hour)}</h1>
          <p className="label">hours</p>
        </div>

        <div className="t-container">
          <h1 className="val">{this.format(minute)}</h1>
          <p className="label">minutes</p>
        </div>
        <div className="t-container">
          <h1 className="val">{this.format(second)}</h1>
          <p className="label">seconds</p>
        </div>
      </div>
    );
  }
}
