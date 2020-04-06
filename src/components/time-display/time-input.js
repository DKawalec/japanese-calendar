import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ARROW_UP, ARROW_DOWN } from '../../constants/unicode-codes';
import { formatTime, unformatTime } from '../../utils/time-helpers';
import style from './style.scss';

class TimeInput extends PureComponent {
  constructor(props) {
    super(props);

    this.increaseTime = this.increaseTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  increaseTime() {
    this.props.onChange(this.props.value + 1);
  }
  decreaseTime() {
    this.props.onChange(this.props.value - 1);
  }

  setTime(e) {
    this.props.onChange(unformatTime(e.target.value));
  }

  render() {
    return (
      <div className={style.inputWrapper}>
        <button
          className={style.button}
          onClick={this.increaseTime}
        >
          {ARROW_UP}
        </button>
        <input
          type="text"
          className={style.input}
          value={formatTime(this.props.value)}
          onChange={this.setTime}
        />
        <button
          className={style.button}
          onClick={this.decreaseTime}
        >
          {ARROW_DOWN}
        </button>
      </div>
    );
  } 
}

TimeInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TimeInput;
