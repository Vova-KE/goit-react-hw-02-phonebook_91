import React, { Component } from 'react';
import style from './style.module.css';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

class Feedback extends Component {
  //   state = {
  //     good: 10,
  //     neutral: 3,
  //     bad: 2,
  //   };

  //   handleClick = () => {
  //     console.log(this.state.good + this.state.neutral + this.state.bad);
  //   };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;
  roundPercentage = () => this.countPositiveFeedbackPercentage().toFixed(0);

  render() {
    return (
      <div className={style.wrapper}>
        <FeedbackOptions />
        <Statistics />
        {/* <h2 className={style.title}>Please leave feedback</h2>
        <div className={style.buttons}>
          <button className={style.button} onClick={this.handleClick}>
            Good
          </button>
          <button className={style.button} onClick={this.handleClick}>
            Neutral
          </button>
          <button className={style.button} onClick={this.handleClick}>
            Bad
          </button>
        </div> */}

        {/* <h2 className={style.title}>Statistics</h2>
        <p className={style.statItem}>Good: {this.state.good}</p>
        <p className={style.statItem}>Neutral: {this.state.neutral}</p>
        <p className={style.statItem}>Bad: {this.state.bad}</p>
        <p className={style.statItem}>Total: {this.countTotalFeedback()}</p>
        <p className={style.statItem}>
          Positive feedback:{' '}
          {this.roundPercentage() ? this.roundPercentage() : 0}%
        </p> */}
      </div>
    );
  }
}

export default Feedback;
