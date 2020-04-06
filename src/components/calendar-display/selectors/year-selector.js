import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setDate } from '../../../actions/dateActions';
import { ARROW_RIGHT, ARROW_LEFT } from '../../../constants/unicode-codes';
import { getNextYear, getPreviousYear } from '../../../utils/date-helpers';

import style from './style.scss';

class YearSelector extends PureComponent {
  constructor(props) {
    super(props);

    this.decreaseYear = this.decreaseYear.bind(this);
    this.increaseYear = this.increaseYear.bind(this);
  }

  decreaseYear() {
    const {day, month, year, setDate} = this.props;
    setDate(getPreviousYear(day, month, year));
  }
  increaseYear() {
    const {day, month, year, setDate} = this.props;
    setDate(getNextYear(day, month, year));
  }

  render() {
    return (
      <div className={style.selector}>
        <button onClick={this.decreaseYear}>{ARROW_LEFT}</button>
        {this.props.year}
        <button onClick={this.increaseYear}>{ARROW_RIGHT}</button>
      </div>
    );  
  } 
}

YearSelector.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(YearSelector);
