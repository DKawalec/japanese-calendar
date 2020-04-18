import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { YearSelector, MonthSelector } from './selectors/index';
import MonthTable from './month-table/index';
import style from './style.scss';

class CalendarDisplay extends PureComponent {
  constructor(props) {
    super(props);

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange({year, month, day}) {
    this.props.onDateChanged({year, month, day});
  }

  render() {
    const { date, isActive } = this.props;
    return (
      <div className={style.container}>
        <div className={style.selectorsContainer}>
          <MonthSelector
            date={date}
            isActive={isActive}
            onChange={this.onDateChange}
          />
          <YearSelector
            date={date}
            isActive={isActive}
            onChange={this.onDateChange}
          />
        </div>
        <MonthTable
          date={date}
          isActive={isActive}
          onChange={this.onDateChange}
        />
      </div>
    );
  } 
}

CalendarDisplay.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
  }).isRequired,
  onDateChanged: PropTypes.func,
  isActive: PropTypes.bool.isRequired
};

CalendarDisplay.defaultProps = {
  isActive: true
};

export default CalendarDisplay;
