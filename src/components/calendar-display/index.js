import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './style.scss';

import YearSelector from './year-selector/index';
import MonthSelector from './month-selector/index';
import DaySelector from './day-selector/index';

class CalendarDisplay extends PureComponent {
  render() {
    return (
      <div className={style.outline}>
        <YearSelector/>
        <MonthSelector/>
        <DaySelector/>
        I'm a calendar! {this.props.year}, {this.props.month}, {this.props.day}
      </div>
    );
  } 
}

CalendarDisplay.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  day: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    year: state.date.year,
    month: state.date.month,
    day: state.date.day,
  };
}

export default connect(mapStateToProps)(CalendarDisplay);
