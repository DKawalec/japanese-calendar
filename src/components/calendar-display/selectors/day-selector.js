import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setDate } from '../../../actions/dateActions';
import { ARROW_RIGHT, ARROW_LEFT } from '../../../constants/unicode-codes';
import { getNextDay, getPreviousDay } from '../../../utils/date-helpers';

class DaySelector extends PureComponent {
  constructor(props) {
    super(props);

    this.decreaseDay = this.decreaseDay.bind(this);
    this.increaseDay = this.increaseDay.bind(this);
  }

  decreaseDay() {
    const {day, month, year, setDate} = this.props;
    setDate(getPreviousDay(day, month, year));
  }
  increaseDay() {
    const {day, month, year, setDate} = this.props;
    setDate(getNextDay(day, month, year));
  }

  render() {
    return (
      <div>
        <button onClick={this.decreaseDay}>{ARROW_LEFT}</button>
        {this.props.day}
        <button onClick={this.increaseDay}>{ARROW_RIGHT}</button>
      </div>
    );  
  } 
}

DaySelector.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setDate: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    day: state.date.day,
    month: state.date.month,
    year: state.date.year
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: (date) => dispatch(setDate(date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySelector);
