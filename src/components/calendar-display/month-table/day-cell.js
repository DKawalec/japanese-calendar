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
    const { day, date } = this.props;
    
    // just placeholder to align cells with the right weekday
    if (day === 0) {
      return <td className={`${style.cell} ${style.empty}`}/>;
    }

    return (
      <td
        className={`${style.cell} ${day === date.day ? style.active : ''}`}
        onClick={this.onClick}
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
  onChange: PropTypes.func.isRequired
};

export default DayCell;
