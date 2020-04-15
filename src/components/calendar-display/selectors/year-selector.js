import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
    const { date: {day, month, year}, onChange} = this.props;
    onChange(getPreviousYear(day, month, year));
  }
  increaseYear() {
    const { date: {day, month, year}, onChange} = this.props;
    onChange(getNextYear(day, month, year));
  }

  render() {
    return (
      <div className={style.selector}>
        <button onClick={this.decreaseYear}>{ARROW_LEFT}</button>
        {this.props.date.year}
        <button onClick={this.increaseYear}>{ARROW_RIGHT}</button>
      </div>
    );  
  } 
}

YearSelector.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default YearSelector;
