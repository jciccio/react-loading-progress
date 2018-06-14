import React, { Component } from "react";

import "./progress.css";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: Date.now(),
      currentItem: 0,
      currentTime: null,
      totalItems: 1,
      estimatedLeft: null,
      percentage: "",
      percentageNumber: 0,
      timeElapsed: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.current !== prevState.currentItem) {
      // check if item was updated
      var newState = {};
      if (nextProps.current === 1 || prevState.currentTime === null) {
        newState = {
          startTime: Date.now(),
          currentTime: Date.now(),
          currentItem: 1,
          totalItems: nextProps.total
        };
      } else if (nextProps.current > 1) {
        let difference = nextProps.current - prevState.currentItem;
        let delta = Math.abs(Date.now() - prevState.currentTime);
        let timeElapsed = prevState.timeElapsed + delta;
        let averageTimePerItem = timeElapsed / 1000 / nextProps.current;
        let percentageDec = (
          nextProps.current *
          100 /
          prevState.totalItems
        ).toFixed(1);
        let percentage = `${percentageDec}%`;
        delta = averageTimePerItem * (prevState.totalItems - nextProps.current);

        // calculate (and subtract) whole days
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;
        // calculate (and subtract) whole hours
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        // calculate (and subtract) whole minutes
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        // what's left is seconds
        let seconds = Math.floor(delta % 60); // in theory the modulus is not required
        let formattedDays = "";
        if (days > 0) formattedDays = ("0" + days).slice(-2) + ":";

        let formattedHours = ("0" + hours).slice(-2);
        let formattedMin = ("0" + minutes).slice(-2);
        let formattedSec = ("0" + seconds).slice(-2);
        var estimatedLeft = `${formattedDays}${formattedHours}:${formattedMin}:${formattedSec}`;
        newState = {
          currentTime: Date.now(),
          currentItem: nextProps.current,
          totalItems: nextProps.total,
          estimatedLeft: estimatedLeft,
          percentage: percentage,
          percentageNumber: percentageDec,
          timeElapsed: timeElapsed
        };
      }
      return newState; // saves new state
    }
    return null;
  }

  render() {
    if (this.props.active) {
      return (
        <div className="progressBar">
          <label>
            Processing your requests, please wait... {this.state.percentage}
          </label>
          <br />
          <label>
            {this.props.current} out of {this.props.total} processed
          </label>
          <br />
          <label>Time remaining: {this.state.estimatedLeft}</label>
          <br />
          <progress max="100" value={this.state.percentageNumber} />{" "}
          {this.state.percentage}
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderProgressBar() {
    if (this.props.showProgressBar) {
      return (
        <div>
          <progress max="100" value={this.state.percentageNumber} />
          <label>{this.state.percentage}</label>
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderTimeRemaining() {
    if (this.props.showTimeRemaining) {
      return <label>Time remaining: {this.state.estimatedLeft}</label>;
    } else {
      return <div />;
    }
  }

  renderProcessingRequest() {
    if (this.props.showProcessingRequest) {
      return (
        <label>
          Processing your requests, please wait... {this.state.percentage}
        </label>
      );
    } else {
      return <div />;
    }
  }

  renderCustomTitle() {
    if (this.props.showCustomTitle) {
      return <label>{this.state.title}</label>;
    } else {
      return <div />;
    }
  }

  renderSingleLine() {
    if (this.props.showSingleLine) {
      return (
        <div>
          <progress max="100" value={this.state.percentageNumber} />
          <label>
            {this.state.percentage} (Est. Time remaining:{" "}
            {this.state.estimatedLeft})
          </label>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Progress;
