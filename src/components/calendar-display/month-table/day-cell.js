import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

class DayCell extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { day, date: {month, year}, onChange } = this.props;
    onChange({day, month, year});
  }

  render() {
    const { day, date, isActive } = this.props;
    
    // just placeholder to align cells with the right weekday
    if (day === 0) {
      return <td className={`${style.cell} ${style.empty}`}/>;
    }

    return (
      <td
        className={`${style.cell} ${day === date.day ? style.active : ''} ${!isActive ? style.disabled : ''}`}
        onClick={isActive ? this.onClick : undefined}
      >
        { day }
      </td>
    );
  }
}

DayCell.propTypes = {
  day: PropTypes.number.isRequired,
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DayCell;
