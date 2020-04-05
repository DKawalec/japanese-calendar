import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './style.scss';

import { YearSelector, MonthSelector, DaySelector} from './selectors/index';
import MonthTable from './month-table/index';

class CalendarDisplay extends PureComponent {
  render() {
    return (
      <div className={style.container}>
        <div className={style.selectorsContainer}>
          <MonthSelector/>
          <YearSelector/>
        </div>
        <MonthTable/>
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
