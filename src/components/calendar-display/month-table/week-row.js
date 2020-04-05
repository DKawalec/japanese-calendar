import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import DayCell from './day-cell';

class WeekRow extends PureComponent {
  render() {
    return (
      <tr>
        { this.props.days.map((e, i) => <DayCell day={e} key={`day-${e}-${i}`}/>) }
      </tr>
    );
  }
}

WeekRow.propTypes = {
  days: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default WeekRow;
