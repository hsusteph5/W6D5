import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.printTime = this.printTime.bind(this);
  }

  componentDidMount() {
    console.log(this.intervalId = setInterval(() => this.tick(), 1000));
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  printTime() {
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds();
    return `${hours}:${minutes}:${seconds} PDT`;
  }

  printDate() {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = this.state.time.getFullYear();
    const month = months[this.state.time.getMonth()];
    const day = this.state.time.getDate();
    const weekday = weekdays[this.state.time.getDay()];
    return `${weekday} ${month} ${day} ${year}`;
  }

  render() {
    return(
      <div>
        <h1>I am a clock</h1>
        <div id="clock-container">

          <div id='time'>
            <h2> Time: </h2>
            <h2> {this.printTime()}</h2>
          </div>

          <div id='date'>
            <h2> Date: </h2>
            <h2>{this.printDate()}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
