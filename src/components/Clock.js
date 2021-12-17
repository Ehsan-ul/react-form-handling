import React, { Component } from 'react';
import Button from './Button';

class Clock extends Component {
  state = {
    date: new Date(),
    local: 'bn-BD',
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (local) => {
    this.setState({
      local,
    });
  };

  render() {
    const { date, local } = this.state;

    return (
      <div>
        <h1>
          <span>{date.toLocaleTimeString(local)}</span>
        </h1>

        {local === 'bn-BD' ? (
          <Button
            change={this.handleClick}
            local='en-US'
            show={false}
            enable
          ></Button>
        ) : (
          <Button change={this.handleClick} local='bn-BD' show enable={false} />
        )}
      </div>
    );
  }
}

export default Clock;
