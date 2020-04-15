import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { MONTH_NAMES } from '../../../constants/date-constants';
import { getNextMonth, getPreviousMonth } from '../../../utils/date-helpers';
import Selector from './selector';

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
    const { date: { month }, isActive } = this.props;
    return (
      <Selector
        value={MONTH_NAMES[month - 1]}
        isActive={isActive}
        onRightClick={this.increaseMonth}
        onLeftClick={this.decreaseMonth}
      />
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
