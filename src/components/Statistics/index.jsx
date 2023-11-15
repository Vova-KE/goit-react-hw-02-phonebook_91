import React, { Component } from 'react';
import style from './style.module.css';

class Statistics extends Component {
  render() {
    return (
      <div>
        <h2 className={style.title}>Statistics</h2>
        <p className={style.statItem}>Good: {this.state.good}</p>
        <p className={style.statItem}>Neutral: {this.state.neutral}</p>
        <p className={style.statItem}>Bad: {this.state.bad}</p>
        <p className={style.statItem}>Total: {this.countTotalFeedback()}</p>
        <p className={style.statItem}>
          Positive feedback:
          {this.roundPercentage() ? this.roundPercentage() : 0}%
        </p>
      </div>
    );
  }
}

export default Statistics;
