import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getNextYear, getPreviousYear } from '../../../utils/date-helpers';
import Selector from './selector';

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
    const { date: { year }, isActive } = this.props;
    return (
      <Selector
        value={year}
        isActive={isActive}
        onRightClick={this.increaseYear}
        onLeftClick={this.decreaseYear}
      />
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
