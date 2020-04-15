import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { MONTH_NAMES } from '../../../constants/date-constants';
import { ARROW_RIGHT, ARROW_LEFT } from '../../../constants/unicode-codes';
import { getNextMonth, getPreviousMonth } from '../../../utils/date-helpers';

import style from './style.scss';

class MonthSelector extends PureComponent {
  constructor(props) {
    super(props);

    this.decreaseMonth = this.decreaseMonth.bind(this);
    this.increaseMonth = this.increaseMonth.bind(this);
  }

  decreaseMonth() {
    const { date: {day, month, year}, onChange} = this.props;
    onChange(getPreviousMonth(day, month, year));
  }
  increaseMonth() {
    const { date: {day, month, year}, onChange} = this.props;
    onChange(getNextMonth(day, month, year));
  }

  render() {
    return (
      <div className={style.selector}>
        <button onClick={this.decreaseMonth}>{ARROW_LEFT}</button>
        {MONTH_NAMES[this.props.date.month - 1]}
        <button onClick={this.increaseMonth}>{ARROW_RIGHT}</button>
      </div>
    );  
  } 
}

MonthSelector.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default MonthSelector;
