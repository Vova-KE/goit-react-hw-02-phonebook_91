import React, { Component } from 'react';
import style from './style.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <h2 className={style.title}>Please leave feedback</h2>
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
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
