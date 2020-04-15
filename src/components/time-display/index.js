import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getSafeHour, getSafeMinute } from '../../utils/time-helpers';
import TimeInput from './time-input';
import style from './style.scss';

class TimeDisplay extends PureComponent {
  constructor(props) {
    super(props);

    this.changeHours = this.changeHours.bind(this);
    this.changeMinutes = this.changeMinutes.bind(this);
  }

  changeHours(newValue) {
    const { time: { minute }, onTimeChanged } = this.props;
    onTimeChanged({
      hour: getSafeHour(newValue),
      minute: minute
    });
  }

  changeMinutes(newValue) {
    const { time: { hour }, onTimeChanged } = this.props;
    onTimeChanged({
      hour: hour,
      minute: getSafeMinute(newValue)
    });
  }

  render() {
    const { time: { hour, minute } } = this.props;
    return (
      <div className={style.container}>
        <TimeInput value={hour} onChange={this.changeHours}/>
        <span className={style.divider}>:</span>
        <TimeInput value={minute} onChange={this.changeMinutes}/>
      </div>
    );
  } 
}

TimeDisplay.propTypes = {
  time: PropTypes.shape({
    hour: PropTypes.number.isRequired,
    minute: PropTypes.number.isRequired
  }).isRequired,
  onTimeChanged: PropTypes.func.isRequired
};

export default TimeDisplay;
