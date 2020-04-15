import React from 'react';
import PropTypes from 'prop-types';

import { getMaxDay, getDayOfWeek } from '../../../utils/date-helpers';
import { DAYS_SHORT } from '../../../constants/date-constants';
import WeekRow from './week-row';
import style from './style.scss';

class MonthTable extends React.Component {
  generateDays({month, year}) {
    const result = [];
    const numDays = getMaxDay(month, year);
    const dayOfTheWeek = getDayOfWeek(1, month, year);
    // if it's not Monday, add some 0s
    if (dayOfTheWeek !== 1) {
      for (let i = dayOfTheWeek; i > 1; i-- ) {
        result.push(0);
      }
    }
    for (let i = 1; i <= numDays; i++) {
      result.push(i);
    }
    return result;
  }

  render() {
    const { date, onChange, isActive } = this.props;
    const days = this.generateDays(date);
    return (
      <table className={style.table}>
        <thead>
          <tr>
            {
              DAYS_SHORT.map((e, i) =>
                <th key={`head-${i}-${e}`} className={style.headerCell}>{e}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            days.map((e, i) => (!(i % 7)
              ? (<WeekRow
                date={date}
                onChange={onChange}
                isActive={isActive}
                days={days.slice(i, i + 7)}
                key={`week-${e / 7}`}/>)
              : null))
          }
        </tbody>
      </table>
    );
  }
}

MonthTable.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MonthTable;
