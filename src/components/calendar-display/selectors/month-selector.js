import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setDate } from '../../../actions/dateActions';
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
    const {day, month, year, setDate} = this.props;
    setDate(getPreviousMonth(day, month, year));
  }
  increaseMonth() {
    const {day, month, year, setDate} = this.props;
    setDate(getNextMonth(day, month, year));
  }

  render() {
    return (
      <div className={style.selector}>
        <button onClick={this.decreaseMonth}>{ARROW_LEFT}</button>
        {MONTH_NAMES[this.props.month - 1]}
        <button onClick={this.increaseMonth}>{ARROW_RIGHT}</button>
      </div>
    );  
  } 
}

MonthSelector.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setDate: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    day: state.date.day,
    month: state.date.month,
    year: state.date.year
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setDate: (date) => dispatch(setDate(date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelector);
