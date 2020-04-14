import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getMaxDay, getDayOfWeek } from '../../../utils/date-helpers';
import { DAYS_SHORT } from '../../../constants/date-constants';
import WeekRow from './week-row';
import style from './style.scss';

class MonthTable extends React.Component {
  generateDays(day, month, year) {
    const result = [];
    const numDays = getMaxDay(month, year);
    const dayOfTheWeek = getDayOfWeek(1, month, year);
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
    const { day, month, year } = this.props;
    const days = this.generateDays(day, month, year);
    return (
      <table className={style.table}>
        <thead>
          <tr>
            { DAYS_SHORT.map((e, i) => <th key={`head-${i}-${e}`} className={style.headerCell}>{e}</th>) }
          </tr>
        </thead>
        <tbody>
          { days.map((e, i) => !(i % 7) ? <WeekRow days={days.slice(i, i + 7)} key={`week-${e / 7}`}/> : null)}
        </tbody>
      </table>
    );
  }
}

MonthTable.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    year: state.date.year,
    month: state.date.month,
    day: state.date.day
  };
}

export default connect(mapStateToProps)(MonthTable);
