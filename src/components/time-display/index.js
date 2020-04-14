import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTime } from '../../actions/timeActions';
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
    this.props.setTime({
      hour: getSafeHour(newValue),
      minute: this.props.minute
    });
  }

  changeMinutes(newValue) {
    this.props.setTime({
      hour: this.props.hour,
      minute: getSafeMinute(newValue)
    });
  }

  render() {
    return (
      <div className={style.container}>
        <TimeInput value={this.props.hour} onChange={this.changeHours}/>
        <span className={style.divider}>:</span>
        <TimeInput value={this.props.minute} onChange={this.changeMinutes}/>
      </div>
    );
  } 
}

TimeDisplay.propTypes = {
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    hour: state.time.hour,
    minute: state.time.minute
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTime: (time) => dispatch(setTime(time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplay);
