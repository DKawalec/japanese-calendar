import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getMaxDay } from '../../../utils/date-helpers';
import WeekRow from './week-row';
import style from './style.scss';

class MonthTable extends React.Component {
  generateDays(month, year) {
    const result = [];
    const numDays = getMaxDay(month, year);
    for (let i = 1; i <= numDays; i++) {
      result.push(i);
    }
    return result;
  }

  render() {
    const { month, year } = this.props;
    const days = this.generateDays(month, year);
    return (
      <table className={style.table}>
        <tbody>
          { days.map((e, i) => (e % 7 === 1) ? <WeekRow days={days.slice(i, i + 7)} key={`week-${e / 7}`}/> : null)}
        </tbody>
      </table>
    );
  }
}

MonthTable.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    year: state.date.year,
    month: state.date.month
  };
}

export default connect(mapStateToProps)(MonthTable);
