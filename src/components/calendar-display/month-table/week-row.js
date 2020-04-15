import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import DayCell from './day-cell';

class WeekRow extends PureComponent {
  render() {
    const { date, days, onChange, isActive } = this.props;
    return (
      <tr>
        { 
          days.map((e, i) => (
            <DayCell
              onChange={onChange}
              isActive={isActive}
              date={date}
              day={e}
              key={`day-${e}-${i}`}
            />
          ))
        }
      </tr>
    );
  }
}

WeekRow.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
  }).isRequired,
  days: PropTypes.arrayOf(PropTypes.number).isRequired,
  isActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default WeekRow;
